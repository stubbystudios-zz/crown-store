import React from 'react';
import './CheckoutItem.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <section className='checkout-item'>
    <ul>
      <li className='image-container'>
        <img src={imageUrl} alt='item' />
      </li>
      <li className='name'>{name}</li>
      <li className='quantity'>{quantity}</li>
      <li className='price'>{price}</li>
      <li className='remove'>&#10005;</li>
    </ul>
  </section>
);

export default CheckoutItem;