import React from 'react';
import './CartDropdown.scss';
import { connect } from 'react-redux';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <section className='cart-dropdown'>
    <ul className='cart-items'>
      {
        cartItems.length
          ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
          : (<p className='empty-message'>Your cart is empty.</p>)
      }
    </ul>
    <CustomButton onClick={() => {
      history.push('/checkout')
      dispatch(toggleCartHidden())
    }}>Go to checkout</CustomButton>
  </section>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

export default withRouter(
  connect(mapStateToProps)
    (CartDropdown));
