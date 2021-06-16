import React, { useContext, useState, useEffect } from "react"
import MoviesContext from "./context/movies"

import { categoryList } from "./services/requests"

// Context

import { MoviesContextProvider } from "./context/movies"

// Components

import Header from "./components/Header"
import Banner from "./components/Banner"
import Row from "./components/Row"

// Visual

import GlobalStyle from "./styles/global"
import { MovieLists, Loading } from "./styles/home"

import loadingGIF from "./assets/loading.gif"

const App: React.FC = () => {
	const { loadedBanner, loadedHomeList } = useContext(MoviesContext)
	const [finallyLoaded, setFinallyLoaded] = useState(false)

	useEffect(() => {
		if (loadedBanner || loadedHomeList) setFinallyLoaded(true)
		//fix the Context API
		// remove next line
		setFinallyLoaded(true)
	}, [loadedBanner, loadedHomeList])

	return (
		<>
			<MoviesContextProvider>
				<div className="page">
					<Header />

					<Banner categoryID="originals" />

					<MovieLists>
						{categoryList.map((movie, key) => (
							<Row key={key} id={movie.id} title={movie.title} url={movie.url} />
						))}
					</MovieLists>

					{!finallyLoaded && (
						<Loading>
							<img src={loadingGIF} alt="Carregando" />
						</Loading>
					)}
				</div>
			</MoviesContextProvider>
			<GlobalStyle />
		</>
	)
}

export default App
