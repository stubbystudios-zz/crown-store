import React from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';

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

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default connect(
  mapStateToProps
)(CartDropdown);