import React, { useState, createContext } from "react"

import { Movie } from "../types/movies"

interface MoviesContextData {
	movies: Movie[]
	setMovies: (value: Movie[]) => void
}

const DEFAULT_VALUES = {
	movies: [],
	setMovies: () => {}
}

//const MoviesContext = createContext<Movie[]>({} as Movie[])
const MoviesContext = createContext<MoviesContextData>(DEFAULT_VALUES)

export const MoviesContextProvider: React.FC = ({ children }) => {
	// prettier-ignore
	const [movies, setMovies] = useState<Movie[]>([])

	return (
		<MoviesContext.Provider value={{ movies, setMovies }}>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
