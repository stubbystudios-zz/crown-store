import React from 'react';
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items }) => {
  return (
    <section className="collection-preview">
      <h1 className='title'>{title}</h1>
      <ul className='preview'>
        {items.filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </ul>
    </section>
  )
}

export default withRouter(CollectionPreview);