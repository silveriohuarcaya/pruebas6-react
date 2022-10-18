import ProductList from '../../components/Products/ProductList';
import ShoppingCart from '../../components/Products/ShoppingCart';

import './index.scss';

const Product = () => (
  <div className="container">
    <br />
    <h1>Product List</h1>
    <div className="product-list__container">
      <ProductList />
    </div>
    <div className="shopping-container">
      <ShoppingCart />
    </div>
  </div>
);

export default Product;
