import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import swal from 'sweetalert';
import { useAppContext } from '../../store';
import { sendEmail } from '../../services/auth';

import './index.scss';

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const CheckoutForm = () => {
  const { state, dispatch } = useAppContext();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        paymentMethod,
        amount: Intl.NumberFormat('en-US').format(state.total) * 100, // cents -> $100
      }),
    };
    const response = await fetch(`${BASE_URL}/api/payments`, options);
    const body = await response.json();

    if (body.status === 'succeeded') {
      await sendEmail(body);

      swal({
        title: 'Success',
        text: 'Invoice sent to your email',
        icon: 'success',
        button: 'Ok',
      });

      const action = {
        type: 'DELETE_TO_CART',
        payload: [],
      };
      dispatch(action);
    } else if (body.message) {
      swal({
        title: body.message,
        text: 'Go back to Login',
        icon: 'error',
        button: 'Ok',
      });
    } else {
      swal({
        title: body.code,
        text: body.code,
        icon: 'error',
        button: 'Ok',
      });
    }
    elements.getElement(CardElement).clear();
  };

  return (
    <div>
      <ul className="payment-cart-items">
        <h1>SHOOPING</h1>
        {state.cart.map((item) => (
          <li className="clear">
            <p className="payment-right">
              ${Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(item.price * item.quantity)}
            </p>
            <p className="item-name">{item.name}</p>
            <p className="item-price">
              ${item.price} x <b>{item.quantity}</b>{' '}
            </p>
          </li>
        ))}
        <span className="payment-right-total">Total: $ {Intl.NumberFormat('en-US').format(state.total)}</span>
      </ul>

      <form className="Checkout__form" onSubmit={handleSubmit}>
        <div className="cardElement">
          <CardElement />
        </div>
        <br />
        <div className="cardElement-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default CheckoutForm;
