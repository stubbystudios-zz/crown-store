import React from 'react';
import './CartIcon.scss';
import { ReactComponent as ShoppingIcon } from '../../images/shopping-icon.svg';

const CartIcon = () => {
  return (
    <i className='cart-icon'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>0</span>
    </i>
  )
};

export default CartIcon;