import swal from 'sweetalert';
import { useAppContext } from '../../store';
import getProducts from '../../services/Products';

const ProductItemAdmin = ({ product }) => {
  const { name, price, img, _id } = product;
  const { dispatch } = useAppContext();

  const deleteHandleClick = async () => {
    swal({
      title: 'Delete',
      text: 'Are you sure you want to remove this product?',
      icon: 'warning',
      buttons: ['Cancel', 'Ok'],
      // eslint-disable-next-line consistent-return
    }).then(async (res) => {
      if (res) {
        const options = {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ id: _id }),
        };
        const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/products/${product._id}`, options);

        const products = await getProducts();
        const action = {
          type: 'SET_PRODUCTS',
          payload: products,
        };
        dispatch(action);

        swal({
          title: 'Success',
          text: 'Product delete',
          icon: 'success',
          button: 'Ok',
        });

        return response.json();
      }
    });
  };

  const editHandleClick = () => {
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
      <button type="button" onClick={deleteHandleClick}>
        Delete
      </button>
      <button type="button" onClick={editHandleClick}>
        Edit
      </button>
    </div>
  );
};
export default ProductItemAdmin;
