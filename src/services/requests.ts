import { solveParams } from "../utils/requestSolver"
import { MovieRequest } from "../types/movies"

export const categoryList: MovieRequest[] = [
	/**
	 * Movie Recommendation
	 */
	{
		id: "originals",
		title: "Originais Netflix",
		url: solveParams("/discover/tv?with_network=213")
	},
	{
		id: "recommended",
		title: "Recomendados",
		url: solveParams("/trending/all/week")
	},
	{
		id: "trending",
		title: "Em Alta",
		url: solveParams("/movie/top_rated")
	},
	/**
	 * Movie Categories
	 */
	{
		id: "action",
		title: "Ação",
		url: solveParams("/discover/movie?with_genres=28")
	},
	{
		id: "comedy",
		title: "Comédia",
		url: solveParams("/discover/movie?with_genres=35")
	},
	{
		id: "horror",
		title: "Terror",
		url: solveParams("/discover/movie?with_genres=27")
	},
	{
		id: "romance",
		title: "Romance",
		url: solveParams("/discover/movie?with_genres=10749")
	},
	{
		id: "documentary",
		title: "Documentários",
		url: solveParams("/discover/movie?with_genres=99")
	}
]
