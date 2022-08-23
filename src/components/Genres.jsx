import Button from 'react-bootstrap/Button'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

const Genres = () => {
	const {data} = useQuery('genres', MovieAPI.getGenres)
	console.log('genres', data)

	return (
		<div>
			{data.genres.map((genre, i) => (
				<Button className='m-1 p-1' variant='warning' key={i}>{genre.name}</Button>
			))}
		</div>
	)
}

export default Genres
