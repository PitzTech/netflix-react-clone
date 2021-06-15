import preferences, { auth } from "../context/preferences"

export function solveParams(params: string): string {
	const newUrl = `${params}&api_key=${auth.API_KEY}&language=${preferences.language}`

	return newUrl
}

export function solvePosterUrl(file_path: string, image_size: number): string {
	const base_url = "https://image.tmdb.org/t/p/"

	return `${base_url}w${image_size}/${file_path}`
}
