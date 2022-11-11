import { useNavigate } from 'react-router-dom';

import swal from 'sweetalert';
import { useAppContext } from '../../store';
import { getProducts } from '../../services/Products';

const ProductItemAdmin = ({ product }) => {
  const navigate = useNavigate();
  const { name, price, img, _id } = product;
  const { dispatch } = useAppContext();

  const handleClickDelete = async () => {
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
          timer: '2000',
          button: 'Ok',
        });

        return response.json();
      }
    });
  };

  const handleClickEdit = () => {
    const Action = {
      type: 'DELETE_TO_CART',
      payload: [],
    };
    dispatch(Action);

    const action = {
      type: 'ADD_TO_CART',
      payload: product,
    };
    dispatch(action);

    navigate('/product-Admin/product-Edit');
  };

  return (
    <div className="productAdmin-card">
      <div className="productAdmin-img__Product">
        <img className="productAdmin-img" src={img} alt={`product ${name}`} />
      </div>
      <div className="productAdmin__item">
        <div className="productAdmin-item-name">
          <p>{name}</p>
        </div>
        <div className="productAdmin-item-price">
          <p>${price}</p>
        </div>
      </div>
      <div className="productAdmin__button">
        <button type="button" className="admin__button" onClick={handleClickDelete}>
          Delete
        </button>
        <button type="button" className="admin__button" onClick={handleClickEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};
export default ProductItemAdmin;
