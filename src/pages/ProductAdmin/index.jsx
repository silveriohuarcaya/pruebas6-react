import { Link, useNavigate } from 'react-router-dom';

import logo from '../../img/fondo.jpg';
import ProductListAdmin from './ProductListAdmin';

import './index.scss';

const ProductAdmin = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/product-admin');
  };
  return (
    <div className="container">
      <div className="product-list">
        <div className="login__left">
          <Link className="login__link" to="/">
            <img className="img-logo" src={logo} alt="logo" />
          </Link>
          <div className="div-title">Products</div>
        </div>
        <div className="product-list__container">
          <ProductListAdmin />
        </div>
      </div>
      <div className="shopping-container">
        <button type="button" className="button" onClick={handleClick}>
          Add
        </button>
      </div>
    </div>
  );
};
export default ProductAdmin;
