import React from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';

const CartDropdown = ({ cartItems }) => (
  <section className='cart-dropdown'>
    <ul className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </ul>
    <CustomButton>Go to checkout</CustomButton>
  </section>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
})

export default connect(
  mapStateToProps
)(CartDropdown);