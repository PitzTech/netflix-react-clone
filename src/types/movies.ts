export interface Movie {
	name: string
}

export interface MovieRequest {
	title: string
	url: string
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
