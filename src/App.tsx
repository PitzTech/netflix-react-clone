import React from "react"

import { movieList } from "./services/requests"

import Row from "./components/Row"

const App: React.FC = () => {
	return (
		<div className="page">
			<section className="moviesLists">
				{movieList.map((item, key) => (
					<div key={key}>{item.title}</div>
				)}
			</section>
		</div>
	)
}

export default App
