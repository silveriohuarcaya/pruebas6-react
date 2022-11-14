// import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../store';
import logo from '../../img/fondo.jpg';

import './index.scss';

// const BASE_URL = `${process.env.REACT_APP_API_BASE_URL}`;

const Shooping = () => {
  const { state } = useAppContext();

  return (
    <div className="shooping-header">
      <div className="shooping">
        <div className="shooping__logo">
          <Link className="shooping__link" to="/product">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="shooping__container">
          <ul className="shooping-cart-items">
            <h1>SHOOPING</h1>
            {state.cart.map((item) => (
              <li className="clear">
                <p className="shooping-right">
                  ${Intl.NumberFormat('en-US', { minimumFractionDigits: 2 }).format(item.price * item.quantity)}
                </p>
                <p className="item-name">{item.name}</p>
                <p className="item-price">
                  ${item.price} x <b>{item.quantity}</b>{' '}
                </p>
              </li>
            ))}
            <span className="shooping-right-total">Total: $ {Intl.NumberFormat('en-US').format(state.total)}</span>
          </ul>

          <form className="Checkout__form">
            <div className="cardElement-button">
              <button type="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Shooping;
