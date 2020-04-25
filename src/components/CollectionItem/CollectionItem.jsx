import React from 'react';
import './CollectionItem.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
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
    </section>
  )
};

export default CollectionItem;