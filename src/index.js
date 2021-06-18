import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/app'
import Adapter from './drivers'

import './styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <React.StrictMode>
        <Adapter>
            <App />
        </Adapter>
    </React.StrictMode>,
    rootElement
)
