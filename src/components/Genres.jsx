import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const Genres = ({ setPage }) => {
	const [genreClick, setGenreClick] = useState()
	const { 
		data: genreData, 
		error: genreError, 
		isError: genreIsError, 
		isLoading: genreIsLoading 
	} = useQuery('genres', MovieAPI.getGenres)
	console.log('genres', genreData)
	console.log('clicked genre', genreClick)

	return (
		<div className='d-flex justify-content-center w-100 flex-wrap'>
			{genreIsLoading && <LoadingSpinner />}

			{genreIsError && <WarningAlert message={genreError.message} />}

			{genreData && (
				<div className='d-flex justify-content-center w-100 flex-wrap my-3'>
					{genreData.genres.map((genre, i) => (
						<Button className='m-1 py-1 px-2' variant='warning' key={i} onClick={() => (setGenreClick(genre.id), setPage(1))}>{genre.name}</Button>
					))}
				</div>
			)}
		</div>
	)
}

export default Genres
