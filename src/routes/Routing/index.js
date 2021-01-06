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
					<Route exact path='/home' component={Home} />
					<Route exact path='/about' component={About} />
					<Route exact path='/recipe' component={Recipe} />
					<Route exact path='/signin' component={Signin} />
					<Route exact path='/settings' component={Settings} />
					<Route exact path='/profile' component={Profile} />
					<Route exact path="/" component={Home} />
					<Route component={Notfound} />
			</Switch>
		</Router>
	)
}
