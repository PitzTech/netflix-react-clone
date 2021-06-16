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
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

function Row({ title, url }: MovieRequest): JSX.Element {
	const [movies, setMovies] = useState<Movie[]>([])
	const [scroll, setScroll] = useState(-650)

	const { setLoadedHomeList } = useContext(MoviesContext)

	const MOVIE_SIZE = 192
	const SCROLL_SPEED = Math.round(window.innerWidth / 3) //250
	//const { movies, setMovies } = useContext(MoviesContext)

	useEffect(() => {
		conn.get(url).then(response => {
			setMovies(response.data.results)
			setLoadedHomeList(true)
		})
	}, [url])

	function handleHorizontalMenu(side: "left" | "right"): void {
		const LIST_LENGTH = movies.length * MOVIE_SIZE
		const ADITIONAL_BORDER = MOVIE_SIZE * 0.5

		if (side == "left" && scroll < 0) {
			setScroll(Math.min(0, scroll + SCROLL_SPEED))
			return
		}
		if (side == "right" && scroll > window.innerWidth - LIST_LENGTH) {
			setScroll(
				Math.max(
					window.innerWidth - (LIST_LENGTH + ADITIONAL_BORDER),
					scroll - SCROLL_SPEED
				)
			)
		}
	}

	return (
		<MovieRow>
			<h2>{title}</h2>

			<div className="arrowLeft" onClick={() => handleHorizontalMenu("left")}>
				<FiChevronLeft />
			</div>
			<div className="arrowRight" onClick={() => handleHorizontalMenu("right")}>
				<FiChevronRight />
			</div>

			<div className="movieRow-Container">
				<div className="movieRow-List" style={{ marginLeft: scroll }}>
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
