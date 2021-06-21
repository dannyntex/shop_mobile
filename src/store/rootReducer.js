import { combineReducers } from '@reduxjs/toolkit'
import { productSlice } from './modules/detailsView/slice'
import { productListSlice } from './modules/productList/slice'
import { inputSearchStringSlice } from './modules/search/slice'

const rootReducer = combineReducers({
    productListSlice,
    inputSearchStringSlice,
    productSlice
})

export default rootReducer
