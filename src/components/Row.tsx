import React, { useState, useEffect } from "react"

import { MovieRequest } from "../types/movies"
import conn from "../services/connection"

function Row({ title, url }: MovieRequest): JSX.Element {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		conn.get(url).then(response => {
			setMovies(response.data.results)
		})
	}, [url])

	return (
		<div>
			<h1>{title}</h1>
			<div></div>
		</div>
	)
}

export default Row
