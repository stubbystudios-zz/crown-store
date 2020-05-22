import React, { useContext } from 'react';
import './CollectionItem.scss';
import CustomButton from '../CustomButton/CustomButton';
import { CartContext } from '../../providers/cart/CartProvider';

const CollectionItem = ({ item }) => {
  const { name, price, imageUrl } = item;
  const { addItem } = useContext(CartContext);

  return (
    <section className='collection-item'>
      <figure
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <footer className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </footer>
      <CustomButton
        className='custom-button'
        onClick={() => addItem(item)}
        inverted>Add to cart</CustomButton>
    </section>
  )
};

export default CollectionItem;