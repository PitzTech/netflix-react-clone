import React, { useState, createContext } from "react"

import { MovieRequest } from "../types/movies"
import { categoryList } from "../services/requests"

interface MoviesContextData {
	movies: MovieRequest[]
	loadedBanner: boolean
	loadedHomeList: boolean
	setMovies: (value: MovieRequest[]) => void
	setLoadedBanner: (value: boolean) => void
	setLoadedHomeList: (value: boolean) => void
}

const DEFAULT_VALUES = {
	movies: categoryList,
	loadedBanner: false,
	loadedHomeList: false,
	setMovies: () => {},
	setLoadedBanner: () => {},
	setLoadedHomeList: () => {}
}

//const MoviesContext = createContext<Movie[]>({} as Movie[])
const MoviesContext = createContext<MoviesContextData>(DEFAULT_VALUES)

export const MoviesContextProvider: React.FC = ({ children }) => {
	// prettier-ignore
	const [movies, setMovies] = useState<MovieRequest[]>(DEFAULT_VALUES.movies)
	const [loadedBanner, setLoadedBanner] = useState(false)
	const [loadedHomeList, setLoadedHomeList] = useState(false)

	return (
		<MoviesContext.Provider
			value={{
				movies,
				setMovies,
				loadedBanner,
				setLoadedBanner,
				loadedHomeList,
				setLoadedHomeList
			}}
		>
			{children}
		</MoviesContext.Provider>
	)
}

export default MoviesContext
