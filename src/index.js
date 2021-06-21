import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import Adapter from './drivers'

import './styles.css'

const rootElement = document.getElementById('root')
ReactDOM.render(
    <Adapter>
        <App />
    </Adapter>,
    rootElement
)
