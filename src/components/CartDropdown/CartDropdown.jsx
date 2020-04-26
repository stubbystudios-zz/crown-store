import React from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history }) => (
  <section className='cart-dropdown'>
    <ul className='cart-items'>
      {
        cartItems.length
          ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
          : (<p className='empty-message'>Your cart is empty.</p>)
      }
    </ul>
    <CustomButton onClick={() => history.push('/checkout')}>Go to checkout</CustomButton>
  </section>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(
  connect(mapStateToProps)
    (CartDropdown));