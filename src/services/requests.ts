//import conn from "./connection"

import { solveParams } from "../utils/requestSolver"
import { MovieRequest } from "../types/movies"

export const categoryList: MovieRequest[] = [
	/**
	 * Movie Recommendation
	 */
	{
		id: "originals",
		title: "Originais Netflix",
		url: solveParams("/discover/tv?with_network=213"),
		movies: []
	},
	{
		id: "recommended",
		title: "Recomendados",
		url: solveParams("/trending/all/week?"),
		movies: []
	},
	{
		id: "trending",
		title: "Em Alta",
		url: solveParams("/movie/top_rated?"),
		movies: []
	},
	/**
	 * Movie Categories
	 */
	{
		id: "action",
		title: "Ação",
		url: solveParams("/discover/movie?with_genres=28"),
		movies: []
	},
	{
		id: "comedy",
		title: "Comédia",
		url: solveParams("/discover/movie?with_genres=35"),
		movies: []
	},
	{
		id: "horror",
		title: "Terror",
		url: solveParams("/discover/movie?with_genres=27"),
		movies: []
	},
	{
		id: "romance",
		title: "Romance",
		url: solveParams("/discover/movie?with_genres=10749"),
		movies: []
	},
	{
		id: "documentary",
		title: "Documentários",
		url: solveParams("/discover/movie?with_genres=99"),
		movies: []
	}
]
