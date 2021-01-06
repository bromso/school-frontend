import React, { useContext } from 'react'
import { UserContext } from '../../../shared/global/provider/UserProvider'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import styled from 'styled-components'

const DropdownButton = styled.a`
	background: #f1f1f1;
	display: block;
	padding: 14px 16px;
	border: 2px solid palevioletred;
	border-radius: 3px;
	cursor: pointer;
`

const DropdownMenu = styled.div`
	display: none;
	position: absolute;
	min-width: 200px;
	z-index: 10;
	margin-left: 200px;
`

const Wrapper = styled.span`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
	padding: 0.25em 1em;
	&:hover ${DropdownMenu} {
    display: block;
  }
`

const Avatar = styled.img`
	width: 2vh;
	border-radius: 50%;
	align-self: center;
`

export const Profile = () => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const logout = () => {
		localStorage.removeItem('username')
		setAuthenticatedUser(false)
		history.push('/')
	}

	return (
		<>
			<Wrapper>
				<Avatar src={"https://www.thispersondoesnotexist.com/image"} alt="" />
				{authenticatedUser}
				<DropdownMenu>
					<DropdownButton onClick={() => history.push(RoutingPath.Settings)}>Settings</DropdownButton>
					<DropdownButton onClick={() => history.push(RoutingPath.Profile)}>Profile</DropdownButton>
					<DropdownButton onClick={() => logout()}>Logout</DropdownButton>
				</DropdownMenu>
			</Wrapper>
		</>
	)
}
