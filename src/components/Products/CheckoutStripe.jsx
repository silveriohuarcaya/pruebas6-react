import { useNavigate } from 'react-router-dom';

const CheckoutStripe = () => {
  const navigate = useNavigate();

  const handleClick = async () => {
    navigate('/payment');
  };
  return (
    <button type="button" className="button" onClick={handleClick}>
      Stripe
    </button>
  );
};
export default CheckoutStripe;
