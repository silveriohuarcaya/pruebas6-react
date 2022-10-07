import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './CheckoutForm';
import './index.scss';

const stripePromise = loadStripe(
  'pk_test_51LpaEHBHyqEZw1B0AGwTFbdDRyL4ZpSceD4wUveSAi55sSwGBcVYecr1RQnpSMuloQtwcgiOtwpii7qzhivQJDSn00Q7Zrcsea',
);

const Payment = () => (
  <div className="Payment-header">
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
);

export default Payment;
