import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const CheckoutForm = () => {
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
        amount: 20_000, // cents -> $100
      }),
    };

    const response = await fetch(`${BASE_URL}/api/payments`, options);
    const body = await response.json();
    console.log('body(((())))]', body);
    // elements.getElement(CardElement).clear();
  };

  return (
    <form className="Checkout__form" onSubmit={handleSubmit}>
      <CardElement />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
export default CheckoutForm;
