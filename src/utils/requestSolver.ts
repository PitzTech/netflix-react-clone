import preferences, { auth } from "../context/preferences"

const prefs = `&api_key=${auth.API_KEY}&language=${preferences.language}`

export function solveParams(params: string): string {
	const newUrl = params + prefs

	return newUrl
}

export function solvePosterUrl(file_path: string, image_size: string): string {
	const base_url = "https://image.tmdb.org/t/p/"

	return `${base_url}${image_size}/${file_path}`
}

export function solveGenreUrl(movieID: number, type: string): string {
	if (movieID) {
		if (type == "movie") return `/movie/${movieID}?${prefs}`
		if (type == "tv") return `/tv/${movieID}?${prefs}`
	}
	return ""
}
