import React from 'react'
import Axios from 'axios'

export const Home = () => {

	const fetchDataFromExternalAPI = () => {
		Axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}

	return (
		<>
			<h1>Home view</h1>
			<button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
		</>
	)
}
