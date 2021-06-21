import { takeLatest } from 'redux-saga/effects'

import fetchProductListSaga from './modules/productList/saga'
import fetchProductSaga from './modules/detailsView/saga'

import { getProduct } from './modules/detailsView/slice'
import { getProductList } from './modules/productList/slice'

function* sagas() {
    yield takeLatest(getProductList, fetchProductListSaga)
    yield takeLatest(getProduct, fetchProductSaga)
}
export default sagas
