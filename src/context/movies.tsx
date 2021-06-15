import React, { useState, createContext } from "react"

import { Movie, MovieRequest } from "../types/movies"
import { categoryList } from "../services/requests"

interface MoviesContextData {
	movies: MovieRequest[]
	setMovies: (value: MovieRequest[]) => void
}

const DEFAULT_VALUES = {
	movies: categoryList,
	setMovies: () => {}
}

//const MoviesContext = createContext<Movie[]>({} as Movie[])
const MoviesContext = createContext<MoviesContextData>(DEFAULT_VALUES)

export const MoviesContextProvider: React.FC = ({ children }) => {
	// prettier-ignore
	const [movies, setMovies] = useState<MovieRequest[]>(DEFAULT_VALUES.movies)

	return (
		<MoviesContext.Provider value={{ movies, setMovies }}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
