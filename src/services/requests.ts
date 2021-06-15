import { solveParams } from "../utils/requestSolver"
import { MovieRequest } from "../types/movies"

export const movieList: MovieRequest[] = [
	/**
	 * Movie Recommendation
	 */
	{
		title: "Originais Netflix",
		url: solveParams("/discover/tv?with_network=213")
	},
	{
		title: "Recomendados",
		url: solveParams("/trending/all/week")
	},
	{
		title: "Em Alta",
		url: solveParams("/movie/top_rated")
	},
	/**
	 * Movie Categories
	 */
	{
		title: "Ação",
		url: solveParams("/discover/movie?with_genres=28")
	},
	{
		title: "Comédia",
		url: solveParams("/discover/movie?with_genres=35")
	},
	{
		title: "Terror",
		url: solveParams("/discover/movie?with_genres=27")
	},
	{
		title: "Romance",
		url: solveParams("/discover/movie?with_genres=10749")
	},
	{
		title: "Documentários",
		url: solveParams("/discover/movie?with_genres=99")
	}
]

// export const movieList: MovieRequestsList = {
// 	/**
// 	 * Movie Recommendation
// 	 */
// 	originals: {
// 		title: "Originais Netflix",
// 		url: solveParams("/discover/tv?with_network=213")
// 	},
// 	trending: {
// 		title: "Recomendados",
// 		url: solveParams("/trending/all/week")
// 	},
// 	topRated: {
// 		title: "Em Alta",
// 		url: solveParams("/movie/top_rated")
// 	},
// 	/**
// 	 * Movie Categories
// 	 */
// 	action: {
// 		title: "Ação",
// 		url: solveParams("/discover/movie?with_genres=28")
// 	},
// 	comedy: {
// 		title: "Comédia",
// 		url: solveParams("/discover/movie?with_genres=35")
// 	},
// 	horror: {
// 		title: "Terror",
// 		url: solveParams("/discover/movie?with_genres=27")
// 	},
// 	romance: {
// 		title: "Romance",
// 		url: solveParams("/discover/movie?with_genres=10749")
// 	},
// 	documentary: {
// 		title: "Documentários",
// 		url: solveParams("/discover/movie?with_genres=99")
// 	}
// }
