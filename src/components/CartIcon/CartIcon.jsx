import React, { useContext } from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-icon.svg';
import { CartContext } from '../../providers/cart/CartProvider';

const CartIcon = () => {
  const { toggleHidden, cartItemsCount } = useContext(CartContext);

  return (
    <div className='cart-icon' onClick={toggleHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItemsCount}</span>
    </div>
  )
};

export default CartIcon;