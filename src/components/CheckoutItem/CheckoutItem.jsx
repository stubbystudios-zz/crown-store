import React, { useContext } from 'react';
import './CheckoutItem.scss';
import { CartContext } from '../../providers/cart/CartProvider';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItem, removeItem, clearItemFromCart } = useContext(CartContext);

  return (
    <section className='checkout-item'>
      <ul>
        <li className='image-container'>
          <img src={imageUrl} alt='item' />
        </li>
        <li className='name'>{name}</li>
        <li className='quantity'>
          <i onClick={() => removeItem(cartItem)} className='arrow'>&#10094;</i>
          <span className='value'>{quantity}</span>
          <i onClick={() => addItem(cartItem)} className='arrow'>&#10095;</i>
        </li>
        <li className='price'>{price}</li>
        <li className='remove-button' onClick={() => clearItemFromCart(cartItem)}>&#10005;</li>
      </ul>
    </section>
  )
};

export default CheckoutItem;