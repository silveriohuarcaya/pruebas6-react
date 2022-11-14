import Badge from './Badge';
import Total from './Total';
import CartList from './CartList';
import CheckoutButtonMercadoPago from './CheckoutButtonMercadoPago';
import CheckoutButton from './CheckoutButton';
import ClearButton from './ClearButton';

const ShoppingCart = () => (
  <div className="shopping-cart">
    <div className="shopping-cart-header">
      <i className="fa fa-shopping-cart cart-icon" />
      <Badge />
      <Total />
    </div>

    <CartList />
    <div className="shopping-cart-footer">
      <CheckoutButtonMercadoPago />
      <CheckoutButton />
      <ClearButton />
    </div>
  </div>
);

export default ShoppingCart;
