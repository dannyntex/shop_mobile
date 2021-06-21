import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: {},
    isLoading: false
}

const slice = createSlice({
    name: 'dogList',
    initialState,
    reducers: {
        getProduct(state) {
            state.product = {}
            state.isLoading = true
        },
        getProductSuccess(state, action) {
            state.product = action.payload
            state.isLoading = false
        },
        getProductFailed(state, action) {
            state.product = {}
            state.isLoading = false
        }
    }
})

export const productSlice = slice.reducer

export const { getProduct, getProductSuccess, getProductFailed } = slice.actions
