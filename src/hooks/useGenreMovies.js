import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useGenreMovies = (page, type) => {
	return useQuery(['genre', page, type], MovieAPI.getGenre)
}

export default useGenreMovies