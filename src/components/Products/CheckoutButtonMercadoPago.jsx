import { useAppContext } from '../../store';
import Preference from '../Preference';

const CheckoutButton = () => {
  const { state } = useAppContext();
  const products = state.cart;

  const handleClick = async () => {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(products.map((product) => product._id)),
    };

    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/preferences/orders`, options);
    const data = await response.json();
    Preference(data);
  };
  return (
    <button type="button" className="button" onClick={handleClick}>
      Checkout
    </button>
  );
};
export default CheckoutButton;
