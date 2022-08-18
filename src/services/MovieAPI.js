import axios from 'axios'

const API_KEY = '60e253cfe31e3fccc68ed6b0c23aba69'

axios.defaults.baseURL = 'https://api.themoviedb.org/3/'
//const language = 'en-US'

//gör en get-req för det den fick in i endpoint
const get = async (endpoint) => {
	const response = await axios.get(endpoint)
	return response.data
}


const getPopularMovies = async () => {
	const res = await axios.get(`/movie/popular?api_key=${API_KEY}&language=en-US`)
	return res.data
}

const getLatestMovies = async () => {
	const res = await axios.get(`/movie/latest?api_key=${API_KEY}&include_adult=false&language=en-US`)
	return res.data
}

const getTopRatedMovies = async () => {
	const res = await axios.get(`/movie/top_rated?api_key=${API_KEY}&include_adult=false&language=en-US`)
	return res.data
}

export default {
	getPopularMovies,
	getLatestMovies,
	getTopRatedMovies,
}