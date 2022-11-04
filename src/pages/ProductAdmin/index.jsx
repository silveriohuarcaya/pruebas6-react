import { Link, useNavigate } from 'react-router-dom';

import logo from '../../img/fondo.jpg';
import ProductListAdmin from './ProductListAdmin';

import './index.scss';

const ProductAdmin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-Admin/product-Add');
  };
  return (
    <div className="productAdmin__container">
      <div className="productAdmin-list">
        <div className="productAdmin-login__left">
          <div className="productAdmin__logo">
            <Link className="productAdmin__link" to="/">
              <img className="img-logo" src={logo} alt="logo" />
            </Link>
          </div>
          <div className="product-title">Admin Products</div>
        </div>
        <div className="productAdmin-list__container">
          <ProductListAdmin />
        </div>
      </div>
      <div className="productAdmin-shopping-container">
        <button type="button" className="button__add" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};
export default ProductAdmin;
