import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useTopRatedMovies = () => {
	return useQuery('top-rated-movies', MovieAPI.getTopRatedMovies)
}

export default useTopRatedMovies