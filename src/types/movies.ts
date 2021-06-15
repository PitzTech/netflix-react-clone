export interface Movie {
	name: string
	original_title: string
	poster_path: string
	overview: string
}

export interface MovieRequest {
	id?: string
	title: string
	url: string
	movies?: Movie[]
}
export interface MovieRequestsList {
	// Movie Recommendation
	originals: MovieRequest
	trending: MovieRequest
	topRated: MovieRequest
	// Movie Categories
	action: MovieRequest
	comedy: MovieRequest
	horror: MovieRequest
	romance: MovieRequest
	documentary: MovieRequest
}
