import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { CartContext } from '../../providers/cart/CartProvider';

const StripeCheckoutButton = () => {
  const { cartItemPrice } = useContext(CartContext);
  const priceForStripe = cartItemPrice * 100;
  const publishableKey = 'pk_test_iS3qdgpMj6gRW2StUFqrcqaj00wsBwvruH';

  const onToken = token => {
    alert("Payment successful!")
  }

  return (
    <StripeCheckout
      label='Pay now'
      name='Crown Clothing Ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${cartItemPrice}`}
      amount={priceForStripe}
      panelLabel='Pay now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;