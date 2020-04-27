import React from 'react';
import './CollectionsOverview.scss';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from '../CollectionPreview/CollectionPreview';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

const CollectionsOverview = ({ collections }) => (
  <section className='collections-overview'>
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} {...otherCollectionProps} />
    ))}
  </section>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(
  mapStateToProps
)(CollectionsOverview);