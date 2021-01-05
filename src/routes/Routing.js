import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import { About } from '../views/About';
import { Signin } from '../views/Signin';
import { Notfound } from '../views/Notfound';

export const Routing = (props) => {
    return (
        <Router>
            {props.children}
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/signin' component={Signin} />
								<Route exact path="/" component={Home} />
                <Route component={Notfound} />
            </Switch>
        </Router>
    )
}
