import React from 'react'
import { Switch, Route } from 'react-router-dom'
import DetailsView from '../components/DetailsView'
import ListView from '../components/ListView'

import { NoFound } from '../components/NoFound'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ListView} />
            <Route path="/product/:id" component={DetailsView} />
            <Route path="*" component={NoFound} />
        </Switch>
    )
}
export default Routes
