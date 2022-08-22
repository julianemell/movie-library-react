import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useGenreMovie = (query, page) => {
	return useQuery(['genre', (query, page)], () => MovieAPI.getGenre(query, page))
}

export default useGenreMovie