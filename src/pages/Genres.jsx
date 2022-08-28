import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'


const Genres = () => {
	const { data: genreButtonsData, error: genreError, isError: genreIsError, isLoading: genreIsLoading } = useQuery('genres', MovieAPI.getGenres)
	console.log('data', genreButtonsData)
	


	return (
		<Container>
			{genreIsLoading && <LoadingSpinner />}

			{genreIsError && <WarningAlert message={genreError.message} />}
			
			 {genreButtonsData && (
				<div className='d-flex justify-content-center flex-column align-items-center'>
					<div className='d-flex justify-content-center w-100 flex-wrap my-3'>
						{genreButtonsData.genres.map((genre, i) => (
							<Button className='m-1 py-1 px-2' variant='warning' key={i} as={Link} to={`/genres/${genre.id}`}>{genre.name}</Button>
						))}
					</div>
					<p>Choose a genre</p>
				</div>
			)}
		</Container>
	)
}

export default Genres
