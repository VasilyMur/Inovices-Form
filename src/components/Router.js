import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Form from './Form';
import NotFound from './NotFound';

import store from '../store';
import { Provider } from 'react-redux';

const Router = () => {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={App}/>
                        <Route path="/form" component={Form}/>
                        <Route component={NotFound}/>
                    </Switch>
                </BrowserRouter>
            </Provider>
        )
} 

export default Router;