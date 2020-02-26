/*
effects are in saga

effect creates actions or listens to actions

*/
// this listens to actions

//! note all generator function must have yeild in them!

/*
point of yield
Saga mission is to run all these sagas
all concurently, for it not to block its execution

*/

import { takeLatest, call, put, all } from "redux-saga/effects";
import ShopActionTypes from "./shop.types";
import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";
export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    // think of yield as the .then
    // comes back as a promise form
    const snapshot = yield collectionRef.get();
    // the call method from redux-saga is the effect
    // that invokes the method
    // an effect that invokes functions
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    // SAGA doesnt call dispatch instead it uses put
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  // its going to pause whenever an action comes in
  //Take every takes a non blocking call
  yield takeLatest(
    ShopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionAsync
  );
  //first parameter is the action the second is another
  // generator function for every listener
}
export function* shopSagas() {
  yield all([call(fetchCollectionStart)]);
}
