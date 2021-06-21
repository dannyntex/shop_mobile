import { call, put } from 'redux-saga/effects'
import { fecthProduct } from '../../../api'
import { getProductSuccess, getProductFailed } from './slice'

function* fetchProductSaga(action) {
    try {
        const detailsProduct = yield call(fecthProduct, action.payload)

        yield put(getProductSuccess(detailsProduct))
    } catch (err) {
        yield put(getProductFailed(err))
    }
}

export default fetchProductSaga
