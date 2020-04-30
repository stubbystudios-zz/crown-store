import React from 'react';
import './CollectionPage.scss';
import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

import CollectionItem from '../../components/CollectionItem/CollectionItem';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;
  return (
    <section className='collection-page'>
      <h2 className='title'>{title}</h2>
      <div className='items'>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(
  mapStateToProps
)(CollectionPage);