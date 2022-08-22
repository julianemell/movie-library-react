import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const language = 'en-US'
const region = 'US'

//gör en get-req för det den fick in i endpoint
const get = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response.data
}


const getPopularMovies = async () => {
	const res = await axios.get(`/movie/popular?api_key=${API_KEY}&include_adult=false&language=${language}`)
	return res.data
}

const getLatestMovies = async () => {
	const res = await axios.get(`/movie/now_playing?api_key=${API_KEY}&include_adult=false&region=${region}`)
	return res.data
}

const getTopRatedMovies = async () => {
	const res = await axios.get(`/movie/top_rated?api_key=${API_KEY}&include_adult=false&language=${language}`)
	return res.data
}

const getMovie = async (id) => {
	const res = await axios.get(`/movie/${id}?api_key=${API_KEY}&include_adult=false&append_to_response=credits`)
	return res.data
}

const getPerson = async (id) => {
	const res = await axios.get(`/person/${id}?api_key=${API_KEY}&append_to_response=movie_credits,image`)
	return res.data
}

const getGenre = async (page = 1) => {
	const res = await axios.get(`/discover/movie?api_key=${API_KEY}&with_genres=18&page=${page}`)
	return res.data
}


export default {
	getPopularMovies,
	getLatestMovies,
	getTopRatedMovies,
	getMovie,
	getPerson,
	getGenre,
}