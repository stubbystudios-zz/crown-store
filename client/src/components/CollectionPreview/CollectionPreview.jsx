import React from 'react';
import './CollectionPreview.scss'
import CollectionItem from '../CollectionItem/CollectionItem';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match }) => {
  return (
    <section className="collection-preview">
      <h2
        className='title'
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >{title}</h2>
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