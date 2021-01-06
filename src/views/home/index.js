import React, { useState } from 'react'
import Axios from 'axios'

export const Home = () => {

	const [data, setData] = useState()

	const fetchDataFromExternalAPI = () => {
		Axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
			.then((response) => setData(response.data))
			.catch((error) => console.log(error))
	}

	const displayData = () => {
		if(data) {
			return <div>
				<h3>name: {data.name}</h3>
				<h4>type: {data.types[0].type.name}</h4>
				<p>id: {data.id}</p>
				<p>weight: {data.weight}</p>
				<p>height: {data.height}</p>
			</div>
		}
	}

	return (
		<>
			<h1>Home view</h1>
			<button onClick={() => fetchDataFromExternalAPI()}>Make API call</button>
			{displayData()}
			<button onClick={() => console.log(data)}>Show state</button>
		</>
	)
}
