import { createSlice } from '@reduxjs/toolkit'

const initialState = {

    productList: [],
    isLoading: false,

}

const slice = createSlice({
    name: 'dogList',
    initialState,
    reducers: {
        getProductList(state) {
            state.ProductList = []
            state.isLoading = true
        },
        getProductListSuccess(state, action) {
            state.ProductList = action.payload
            state.isLoading = false
        },
        getProductListFailed(state, action) {
            state.ProductList = []
            state.isLoading = false
        }
    }
})

export const productListSlice = slice.reducer

export const {
    getProductList,
    getProductListSuccess,
    getProductListFailed
} = slice.actions
