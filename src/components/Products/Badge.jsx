/* eslint-disable no-return-assign */
import { useAppContext } from '../../store';

const Badge = () => {
  const { state } = useAppContext();
  let quantity = 0;
  state.cart.map((product) => (quantity += product.quantity));
  return <span className="badge">{quantity}</span>;
};

export default Badge;
