import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../store/store'

const Adapter = ({ children }) => {
    console.log(children)
    return (
        <ReduxProvider store={store}>
            <BrowserRouter>{children}</BrowserRouter>
        </ReduxProvider>
    )
}
export default Adapter
