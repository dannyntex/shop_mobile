import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NoFound } from '../components/NoFound'
import ProductList from '../components/ProductList'

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="*" component={NoFound} />
        </Switch>
    )
}
export default Routes