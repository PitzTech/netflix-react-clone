import React from "react"

import { movieList } from "./services/requests"

import Row from "./components/Row"

const App: React.FC = () => {
	return (
		<div className="page">
			<section className="moviesLists">
				{movieList.map((movie, key) => (
					<Row key={key} title={movie.title} url={movie.url} />
				))}
			</section>
		</div>
	)
}

export default App
