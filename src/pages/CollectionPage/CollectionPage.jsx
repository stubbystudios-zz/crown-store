import React, { useContext } from 'react';
import './CollectionPage.scss';
import CollectionsContext from '../../contexts/collections/CollectionsContext';
import CollectionItem from '../../components/CollectionItem/CollectionItem';

const CollectionPage = ({ match }) => {
  const collections = useContext(CollectionsContext);
  const collection = collections[match.params.collectionId];
  const { title, items } = collection;

  return (
    <section className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item =>
          <CollectionItem key={item.id} item={item} />
        )}
      </div>
    </section>
  )
};

export default CollectionPage;