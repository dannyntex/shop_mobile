import { takeLatest } from 'redux-saga/effects'
import fetchProductListSaga from './modules/productList/saga'

import { getProductList } from './modules/productList/slice'

function* sagas() {
    yield takeLatest(getProductList, fetchProductListSaga)
}
export default sagas
