import React, { useContext } from 'react';
import './CheckoutPage.scss';

import CheckoutItem from '../../components/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../components/StripeCheckoutButton/StripeCheckoutButton';
import { CartContext } from '../../providers/cart/CartProvider';

const CheckoutPage = () => {
  const { cartItems, cartPriceTotal } = useContext(CartContext);

  return (
    console.log('CART TOTAL', cartPriceTotal),
    <section className='checkout-page'>
      <header className='checkout-header'>
        <ul>
          <li className='header-block'>
            <span>Product</span>
          </li>
          <li className='header-block'>
            <span>Description</span>
          </li>
          <li className='header-block'>
            <span>Quantity</span>
          </li>
          <li className='header-block'>
            <span>Price</span>
          </li>
          <li className='header-block'>
            <span>Remove</span>
          </li>
        </ul>
      </header>
      {
        cartItems.map(cartItem =>
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        )
      }
      <div className='total'>
        <p>Total: ${cartPriceTotal}</p>
      </div>
      <StripeCheckoutButton />
      <div className='cc-info'>
        <p>Use demo credit card:</p>
        <p>4242 4242 4242 4242 - 04/21 - 123</p>
      </div>
    </section>
  )
};

export default CheckoutPage;