import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { Routes } from '../../Routes/Routes'
import { Main } from '../Main/Main'

export const App = () => {
    return (
        <Main>
            <Routes />
        </Main>
    )
}
