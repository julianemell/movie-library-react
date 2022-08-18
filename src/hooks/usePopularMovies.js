import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const usePopularMovies = () => {
	return useQuery('popular-movies', MovieAPI.getPopularMovies)
}

export default usePopularMovies