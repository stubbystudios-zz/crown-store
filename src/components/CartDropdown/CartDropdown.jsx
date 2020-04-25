import React from 'react';
import './CartDropdown.scss';
import CustomButton from '../CustomButton/CustomButton';

const CartDropdown = () =>
  <section className='cart-dropdown'>
    <ul className='cart-items' />
    <CustomButton>Go to checkout</CustomButton>
  </section>

export default CartDropdown;