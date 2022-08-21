import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const usePerson = (id) => {
	return useQuery(['person', id], () => MovieAPI.getPerson(id))
}

export default usePerson