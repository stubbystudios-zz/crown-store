import ShopActionTypes from './shop.types';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_START,
});

// "All thunks are is an action creator that returns a function that gets the dispatch"
// action === javascript object

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage
});

export const fetchCollectionsStartAsync = () => {
  return dispatch => {

    // Create the collectionRef
    const collectionRef = firestore.collection('collections');

    // Dispatch the action 'fetchCollectionsStart' on line 4 above
    dispatch(fetchCollectionsStart());

    // 'fetchCollectionsStart' then switches our reducer state 'isFetching' on 'shop.reducer.js' to 'true'
    // 'fetchCollectionsStart' then begins the async request below
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      }).catch(error => dispatch(fetchCollectionsFailure(error.message)));
  };
};