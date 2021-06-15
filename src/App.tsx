import React from "react"

import { categoryList } from "./services/requests"

// Components

import Banner from "./components/Banner"
import Row from "./components/Row"

import GlobalStyle from "./styles/global"

const App: React.FC = () => {
	return (
		<>
			<div className="page">
				<Banner
				//categoryUrl={categoryList.filter(category => category.id == "originals")}
				/>

				<section className="movieLists">
					{categoryList.map((movie, key) => (
						<Row key={key} title={movie.title} url={movie.url} />
					))}
				</section>
			</div>
			<GlobalStyle />
		</>
	)
}

export default App
