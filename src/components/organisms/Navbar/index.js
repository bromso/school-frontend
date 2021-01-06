import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../../shared/global/provider/UserProvider'
import { Profile } from '../../organisms/Profile'
import styled from 'styled-components'

const Background = styled.div`
	background: grey;
	height: 5vh
`

const Button = styled.span`
	cursor: pointer;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
	padding: 0.25em 1em;
	align-self: center;
`

export const Navbar = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const displayUserIfAuthenticated = () => {
		return(authenticatedUser)
			? <Profile />
			: <Button	onClick={()=>history.push('/signin')}>Sign in</Button>
	}

	return (
		<>
			<Background>
				<Button	onClick={()=>history.push('/home')}>
					Home
				</Button>
				<Button	onClick={()=>history.push('/about')}>
					About
				</Button>
				<Button	onClick={()=>history.push('/recipe')}>
					Recipe
				</Button>
				{displayUserIfAuthenticated()}
			</Background>
		</>
	)
}
