import React from 'react';
import './CartItem.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <li className='cart-item'>
      <figure>
        <img src={imageUrl} alt='item' />
        <figcaption>
          <p className='name'>{name}</p>
          <p className='price'>{quantity} x ${price}</p>
        </figcaption>
      </figure>
    </li>
  )
};

export default CartItem;