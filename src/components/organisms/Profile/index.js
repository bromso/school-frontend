import React, { useContext } from 'react'
import { UserContext } from '../../../shared/global/provider/UserProvider'
import styled from 'styled-components'

const Button = styled.span`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
	padding: 0.25em 1em;
`

const Image = styled.img`
	width: 2vh;
	border-radius: 50%;
	align-self: center;
`

export const Profile = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	return (
		<>

			<Button>
				<Image src={"https://www.thispersondoesnotexist.com/image"} alt="" />
				{authenticatedUser}
			</Button>
		</>
	)
}
