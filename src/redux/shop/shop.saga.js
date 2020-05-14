import { takeEvery } from 'redux-saga/effects';

import ShopActionTypes from './shop.types';

// "All generator functions must have yields in them." 
// – video 182, Redux Saga, 5:30 mark
export function* fetchCollectionsAsync() {
  yield console.log('I am firing!');
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}