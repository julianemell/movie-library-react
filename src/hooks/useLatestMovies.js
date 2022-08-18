import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useLatestMovies = () => {
	return useQuery('latest-movies', MovieAPI.getLatestMovies)
}

export default useLatestMovies