import React from 'react';
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem';

const CollectionPreview = ({ title, items }) => {
  return (
    <section className="collection-preview">
      <h1 className='title'>{title}</h1>
      <ul className='preview'>
        {items.filter((item, idx) => idx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </ul>
    </section>
  )
}

export default CollectionPreview;