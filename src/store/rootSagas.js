import { takeLatest } from 'redux-saga/effects'
import { fecthProductList } from '../api'
import { getProductList } from './modules/productList/slice'

function* sagas() {
    yield takeLatest(getProductList,fecthProductList)
}
export default sagas
