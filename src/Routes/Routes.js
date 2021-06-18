import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Main } from '../components/Main/Main'
import { NoFound } from '../components/NoFound'

export const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="*" component={NoFound} />
        </Switch>
    )
}
