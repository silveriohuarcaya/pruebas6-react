import { Link } from 'react-router-dom';

import logo from '../../img/fondo.jpg';
import ProductList from '../../components/Products/ProductList';
import ShoppingCart from '../../components/Products/ShoppingCart';

import './index.scss';

const Product = () => (
  <div className="container">
    <div className="product-list">
      <div className="product__left">
        <div className="product__logo">
          <Link className="login__link" to="/">
            <img className="img-logo" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="product__title">Products</div>
      </div>
      <div className="product-list__container">
        <ProductList />
      </div>
    </div>
    <div className="shopping-container">
      <ShoppingCart />
    </div>
  </div>
);

export default Product;
