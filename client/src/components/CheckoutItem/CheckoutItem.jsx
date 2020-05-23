import React from 'react';
import './CheckoutItem.scss';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

export const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

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
        <li className='remove-button' onClick={() => clearItem(cartItem)}>&#10005;</li>
      </ul>
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
