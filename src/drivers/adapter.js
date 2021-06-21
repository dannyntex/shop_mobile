import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../store/store'

const Adapter = ({ children }) => {
    return (
        <React.StrictMode>
            <ReduxProvider store={store}>
                <BrowserRouter>{children}</BrowserRouter>
            </ReduxProvider>
        </React.StrictMode>
    )
}
export default Adapter
