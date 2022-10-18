import axios from 'axios'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
const language = 'en-US'
const region = 'SE'

//gör en get-req för det den fick in i endpoint
const get = async (endpoint) => {
	const res = await axios.get(endpoint)
	return res.data
}


const getPopularMovies = () => {
	return get(`/movie/popular?api_key=${API_KEY}&include_adult=false&language=${language}&region=${region}`)
}

const getLatestMovies = () => {
	return get(`/movie/now_playing?api_key=${API_KEY}&include_adult=false&region=${region}`)
}

const getTopRatedMovies = () => {
	return get(`/movie/top_rated?api_key=${API_KEY}&include_adult=false&language=${language}&region=${region}`)
}

const getMovie = (id) => {
	return get(`/movie/${id}?api_key=${API_KEY}&include_adult=false&language=${language}&region=${region}&append_to_response=credits`)
}

const getPerson = (id) => {
	return get(`/person/${id}?api_key=${API_KEY}&include_adult=false&language=${language}&region=${region}&append_to_response=movie_credits,image`)
}

const getGenre = ({ queryKey }) => {
	const [_key, page, type] = queryKey
	return get(`/discover/movie?api_key=${API_KEY}&include_adult=false&language=${language}&region=${region}&with_genres=${type}&page=${page}`)
}

const getGenres = () => {
	return get(`/genre/movie/list?api_key=${API_KEY}&include_adult=false&language=${language}&region=${region}`)
}


export default {
	getPopularMovies,
	getLatestMovies,
	getTopRatedMovies,
	getMovie,
	getPerson,
	getGenre,
	getGenres,
}