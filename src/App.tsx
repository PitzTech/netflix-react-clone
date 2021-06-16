import React from "react"

import { categoryList } from "./services/requests"

// Context

import { MoviesContextProvider } from "./context/movies"

// Components

import Header from "./components/Header"
import Banner from "./components/Banner"
import Row from "./components/Row"

// Visual

import GlobalStyle from "./styles/global"
import { MovieLists, Footer } from "./styles/home"

const App: React.FC = () => {
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

					<Footer>
						Feito com
						<span role="img" aria-label="coração">
							🧡
						</span>
						por Victor Laurentino do Nascimento (PitzTech) <br />
						<br />
						<p>Direitos de imagem Netflix</p>
						<br />
						<p>Dados pegos no website www.themoviedb.org</p>
						<br />
					</Footer>
				</div>
			</MoviesContextProvider>
			<GlobalStyle />
		</>
	)
}

export default App
