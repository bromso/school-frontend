import React, { useState, useContext } from 'react'
import { UserContext } from '../../shared/global/provider/UserProvider'

export const Signin = () => {
	const [username, setUsername] = useState()
	const [password, setPassword] = useState()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const login = () => {
		setAuthenticatedUser(username)
	}

	return (
		<>
			<h1>Login view</h1>
			<span>Username: </span>
			<input onChange={(event) => setUsername(event.target.value)}></input><br />

			<span>Password: </span>
			<input onChange={(event) => setPassword(event.target.value)} type="password"></input><br />

			<button onClick={()=>login()}>Sign in</button>
		</>
	)
}
