import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() => import('./pages/CollectionsOverviewContainer/CollectionsOverviewContainer'));
const CollectionPageContainer = lazy(() => import('./pages/CollectionPageContainer/CollectionPageContainer'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className='shop-page container'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />

      </Suspense>
    </div>
  );
}


const mapDispatchToProps = dispatch => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);