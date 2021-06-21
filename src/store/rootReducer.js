import { combineReducers } from '@reduxjs/toolkit'
import { productListSlice } from './modules/productList/slice'
import { inputSearchStringSlice } from './modules/search/slice'

const rootReducer = combineReducers({
    productListSlice,
    inputSearchStringSlice
})

export default rootReducer
