import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { home } from '../views/home';
import { about } from '../views/about';
import { Login } from '../views/login';

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path='/home' component={home} />
                <Route exact path='/about' component={about} />
                <Route exact path='/login' component={Login} />
                <Route component={home} />
            </Switch>
        </Router>
    )
}
