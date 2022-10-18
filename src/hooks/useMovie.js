import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useMovie = (id) => {
	return useQuery(['movie', id], MovieAPI.getMovie, { keepPreviousData: true })
}

export default useMovie