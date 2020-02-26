import { all, call } from "redux-saga/effects";
import { shopSagas } from "./shop/shop.sagas";
import { userSagas } from "./user/user.saga";
import { cartSagas } from "./cart/cart.sagas";
export default function* rootSaga() {
  /*
  all takes an array of sagas
  if you do this
  yield fetchCollectionStart(); <- this saga pauses or until it leaves
  yield fetchCollectionStart();
  yield fetchCollectionStart();
  */
  yield all([call(shopSagas), call(userSagas), call(cartSagas)]);
}
