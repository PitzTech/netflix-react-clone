import React, { useState, useEffect, useContext } from "react"

import { solveGenreUrl, solvePosterUrl } from "../../utils/requestSolver"
import { categoryList } from "../../services/requests"
import { Movie } from "../../types/movies"

// Connection

import conn from "../../services/connection"

// Visual

import { BannerContainer } from "./styles"

interface Props {
	categoryID: string
}

function Banner({ categoryID }: Props): JSX.Element {
	//const { movies, setMovies } = useContext(MoviesContext)
	const [bannerData, setBannerData] = useState<Movie>()

	const releaseDate = new Date(bannerData?.first_air_date || "")
	const descriptionLong = bannerData?.overview.slice(0, 200)
	const descriptionShort = descriptionLong?.slice(
		0,
		Math.min(descriptionLong?.length, descriptionLong?.lastIndexOf(" "))
	)
	const description = descriptionShort + "..."

	const genres: string[] = []

	Object.entries(bannerData?.genres || {}).map(item => {
		const itemArray = item[1]
		genres.push(itemArray.name)
	})

	useEffect(() => {
		const category = categoryList.find(category => category.id == categoryID)
		const categoryUrl = category?.url || "originals"

		conn.get(categoryUrl).then(response => {
			// Get Random Movie
			const movies = response.data.results
			const randomMovie = Math.floor(Math.random() * movies.length)

			const chosenMovie: Movie = movies[randomMovie]
			// Get Movie Genre

			const genreUrl = solveGenreUrl(chosenMovie.id, "tv")

			//console.log(movies[randomMovie])

			// Get Complete Data
			conn.get(genreUrl).then(response => {
				const completeData: Movie = response.data

				setBannerData(completeData)
				console.log(completeData)
			})
		})
	}, [categoryID])

	return (
		<BannerContainer
			imageUrl={solvePosterUrl(`original${bannerData?.backdrop_path}`, "")}
		>
			{bannerData && (
				<div className="verticalFade">
					<h1 className="name">{bannerData.original_name}</h1>
					<div className="info">
						<p className="points">{bannerData.vote_average} pontos</p>
						<p className="year">{releaseDate.getFullYear()}</p>
						{bannerData.number_of_seasons && (
							<p className="seasons">
								{bannerData.number_of_seasons} Temporada
								{bannerData.number_of_seasons != 1 ? "s" : ""}
							</p>
						)}
					</div>
					<div className="description">{description}</div>
					<div className="buttons">
						<a>► Assistir</a>
						<a>+ Minha Lista</a>
					</div>
					<div className="genres">
						<strong>Gêneros:</strong> {genres.join(", ")}
					</div>
				</div>
			)}
		</BannerContainer>
	)
}

export default Banner
