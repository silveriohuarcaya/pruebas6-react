import { useAppContext } from '../../store';

const ProductItem = ({ product }) => {
  const { name, price, img } = product;
  const { dispatch } = useAppContext();

  const handleClick = () => {
    const action = {
      type: 'ADD_TO_CART',
      payload: product,
    };
    dispatch(action);
  };

  return (
    <div className="product-card">
      <img className="img__Product" src={img} alt={`product ${name}`} width="70" height="70" />
      <p className="item-name">{name}</p>
      <p className="item-price">${price}</p>
      <button type="button" onClick={handleClick}>
        Add to cart
      </button>
    </div>
  );
};
export default ProductItem;
