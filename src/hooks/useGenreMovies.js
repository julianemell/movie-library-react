import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useGenreMovies = (page, type) => {
	return useQuery(['genre', page, type], MovieAPI.getGenre, { keepPreviousData: true })
} //queryKey istället för en anonym funktion om anonym funktion - placera page o type i måsvingar

export default useGenreMovies