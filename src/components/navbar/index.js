import React from 'react'
import { useHistory } from 'react-router-dom'

export const Navbar = () => {
    const history = useHistory()
    return (
        <>
            <h1 onClick={()=>history.push('/home')}>Home</h1>
            <h1 onClick={()=>history.push('/about')}>About</h1>
            <h1 onClick={()=>history.push('/login')}>Login</h1>
        </>
    )
}
