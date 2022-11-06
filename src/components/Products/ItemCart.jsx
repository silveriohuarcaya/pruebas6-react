import { useAppContext } from '../../store';

const ItemCart = (props) => {
  const { item } = props;
  const { name, price, quantity, img } = item;
  const { dispatch } = useAppContext();

  const handleClickIncrement = () => {
    const action = {
      type: 'ADD_TO_CART',
      payload: item,
    };
    dispatch(action);
  };

  const handleClickDecrement = () => {
    const action = {
      type: 'DELETE_ONE_TO_CART',
      payload: item,
    };
    dispatch(action);
  };

  const handleClickDelete = () => {
    const action = {
      type: 'DELETE_ALL_TO_CART',
      payload: item,
    };
    dispatch(action);
  };

  return (
    <li className="itemCart">
      <div className="div-delete-img">
        <div className="div-delete">
          <button className="cart-button" type="button" onClick={handleClickDelete}>
            x
          </button>
        </div>
        <div className="div-img">
          <img src={img} alt={`product ${name}`} />
        </div>
        <div className="div-name">
          <span className="item-name">{name}</span>
        </div>
      </div>
      <div className="div-price-quantity">
        <div className="item-price">
          {/* Intl.NumberFormat('en-US').format(state.total) * 100, */}
          <span>$ {Intl.NumberFormat('en-US').format(price * quantity)}</span>
        </div>
        <div className="item-quantity">
          <span>
            Quantity:
            <b>{quantity}</b>
          </span>
          <button className="cart-button-quantity" type="button" onClick={handleClickIncrement}>
            +
          </button>
          <button className="cart-button-quantity" onClick={handleClickDecrement} type="button">
            -
          </button>
        </div>
      </div>
    </li>
  );
};

export default ItemCart;
