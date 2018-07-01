import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppConnect from './AppConnect';
import FormConnect from './FormConnect';
import NotFound from './NotFound';

import store from '../store';
import { Provider } from 'react-redux';

const Router = () => {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={AppConnect}/>
                        <Route path="/form" component={FormConnect}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
} 

export default Router;