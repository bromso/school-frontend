import React, { useContext } from 'react'
import { globalValue } from '../../shared/Provider'
import { useHistory } from 'react-router-dom'

export const Login = () => {
	const history = useHistory()
	const [value, setValue] = useContext(globalValue)
	const login = () => {
			localStorage.setItem('userName', value)
			history.push('/home')
	}
	return (
		<>
			<h1>Login view {value}</h1>
			<form>
					<input onChange={(event)=>setValue(event.target.value)}></input>
					<button onClick={()=>login()}>Sign in</button>
			</form>
		</>
	)
}
