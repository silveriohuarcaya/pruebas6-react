import { useNavigate } from 'react-router-dom';

const CheckoutButton = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate('/payment');
  };
  return (
    <button type="button" className="button" onClick={handleClick}>
      Checkout
    </button>
  );
};
export default CheckoutButton;
