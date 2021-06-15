import React, { useState, useEffect, useContext } from "react"
import MoviesContext from "../../context/movies"

// Connection

import conn from "../../services/connection"
import { MovieRequest } from "../../types/movies"
import { solvePosterUrl } from "../../utils/requestSolver"

// Types

import { Movie } from "../../types/movies"

// Visual

import { MovieRow } from "./styles"

function Row({ title, url }: MovieRequest): JSX.Element {
	const [movies, setMovies] = useState<Movie[]>([])
	//const { movies, setMovies } = useContext(MoviesContext)

	useEffect(() => {
		conn.get(url).then(response => {
			setMovies(response.data.results)
			//console.log(response.data.results)
		})
	}, [url])

	return (
		<MovieRow>
			<h2>{title}</h2>
			<div className="movieRow-Container">
				<div className="movieRow-List">
					{!!movies.length &&
						movies.map((movie, key) => (
							<div key={key} className="item">
								<img
									src={solvePosterUrl(movie.poster_path, "w300")}
									alt={movie.name}
								/>
							</div>
						))}
				</div>
			</div>
		</MovieRow>
	)
}

export default Row
