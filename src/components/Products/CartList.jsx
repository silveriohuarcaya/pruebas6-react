import { useAppContext } from '../../store';

import ItemCart from './ItemCart';

const CartList = () => {
  const { state } = useAppContext();

  return (
    <ul className="shopping-cart-items">
      {state.cart.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <ItemCart key={index} item={item} />
      ))}
    </ul>
  );
};

export default CartList;
