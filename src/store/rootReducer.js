import { combineReducers } from '@reduxjs/toolkit'
import { productListSlice } from './modules/productList/slice'

const rootReducer = combineReducers({
    productListSlice
})

export default rootReducer
