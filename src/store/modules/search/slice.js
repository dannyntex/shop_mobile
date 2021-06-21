import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    inputSearch: ''
}

const slice = createSlice({
    name: 'inputSearch',
    initialState,
    reducers: {
        getSearchString(state, action) {
            state.inputSearch = action.payload
        }
    }
})

export const inputSearchStringSlice = slice.reducer

export const { getSearchString } = slice.actions
