import React from 'react';
import './CheckoutPage.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

const CheckoutPage = ({ cartItems, total }) => {
  return (
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
          cartItem.name
        )
      }
      <div className='total'>
        <p>Total: ${total}</p>
      </div>
    </section>
  )
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(
  mapStateToProps
)
  (CheckoutPage);