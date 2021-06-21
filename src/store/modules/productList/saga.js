import { call, put } from 'redux-saga/effects'
import { fecthProductList } from '../../../api'
import { getProductListSuccess, getProductListFailed } from './slice'

function* fetchProductListSaga() {
    try {
        const product = yield call(fecthProductList)
        yield put(getProductListSuccess(product))
    } catch (err) {
        yield put(getProductListFailed(err))
    }
}

export default fetchProductListSaga
