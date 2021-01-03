import React, { useState, createContext } from 'react'

export const globalValue = createContext()

export const Provider = (props) => {
    const [value, setValue] = useState()
    return (
        <globalValue.Provider value={[value, setValue]}>
            {props.children}
        </globalValue.Provider>
    )
}
