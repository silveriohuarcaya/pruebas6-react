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
      <div className="product-img__Product">
        <img className="img__Product" src={img} alt={`product ${name}`} />
      </div>
      <div className="product__item">
        <div className="product-item-name">
          <p>{name}</p>
        </div>
        <div className="product-item-price">
          <p>${price}</p>
        </div>
      </div>
      <div className="product__button">
        <button type="button" className="user__button" onClick={handleClick}>
          Add to cart
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
