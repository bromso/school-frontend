import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../../views/Home';
import { About } from '../../views/About';
import { Recipe } from '../../views/Recipe';
import { Signin } from '../../views/Signin';
import { Settings } from '../../views/Settings';
import { Profile } from '../../views/Profile';
import { Notfound } from '../../views/Notfound';
import { UserContext } from '../../shared/global/provider/UserProvider'
import RoutingPath from '../../routes/RoutingPath'

export const Routing = (props) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const checkIfUserIsAuthenticatedInBrowser = () => {
		setAuthenticatedUser(localStorage.getItem("username"))
	}

	useEffect(() => {
		setAuthenticatedUser(localStorage.getItem("username"))
	}, [])

	return (
		<Router>
			{props.children}
			<Switch>
					<Route exact path={RoutingPath.Home} component={Home} />
					<Route exact path={RoutingPath.About} component={About} />
					<Route exact path={RoutingPath.Recipe} component={Recipe} />
					<Route exact path={RoutingPath.Signin} component={Signin} />
					<Route exact path={RoutingPath.Settings} component={Settings} />
					<Route exact path={RoutingPath.Profile} component={Profile} />
					<Route exact path={RoutingPath.Home} component={Home} />
					<Route component={Notfound} />
			</Switch>
		</Router>
	)
}
