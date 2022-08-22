import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const useGenreMovie = (page) => {
	return useQuery(['genre', page], () => MovieAPI.getGenre(page), {
		keepPreviousData: true //so the last data we fetched is available when the new data is being fetched
	})
}

export default useGenreMovie