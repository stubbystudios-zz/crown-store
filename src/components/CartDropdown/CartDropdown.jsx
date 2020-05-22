import React, { useContext } from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';
import CartItem from '../CartItem/CartItem';
import { withRouter } from 'react-router-dom';
import { CartContext } from '../../providers/cart/CartProvider';

const CartDropdown = ({ history }) => {
  const { cartItems, toggleHidden } = useContext(CartContext);

  return (
    <section className='cart-dropdown'>
      <ul className='cart-items'>
        {
          cartItems.length
            ? (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
            : (<p className='empty-message'>Your cart is empty.</p>)
        }
      </ul>
      <CustomButton onClick={() => {
        history.push('/checkout');
        toggleHidden();
      }}>Go to checkout</CustomButton>
    </section>
  );
}

export default withRouter(CartDropdown);