import Badge from './Badge';
import Total from './Total';
import CartList from './CartList';
import CheckoutMercadoPago from './CheckoutMercadoPago';
import CheckoutStripe from './CheckoutStripe';
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
      <CheckoutMercadoPago />
      <CheckoutStripe />
      <ClearButton />
    </div>
  </div>
);

export default ShoppingCart;
