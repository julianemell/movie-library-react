import Button from 'react-bootstrap/Button'
import { useState } from 'react'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const Genres = () => {
	const [genreClick, setGenreClick] = useState()
	const { data, isError, error, isLoading, } = useQuery('genres', MovieAPI.getGenres)
	console.log('genres', data)
	console.log('clicked genre', genreClick)

	return (
		<div className='d-flex justify-content-center w-100 flex-wrap'>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{data && (
				<>
					{data.genres.map((genre, i) => (
					<Button className='m-1 py-1 px-2 btn-md' variant='warning' key={i} onClick={() => setGenreClick(genre.name)}>{genre.name}</Button>
					))}
				</>
			)}
		</div>
	)
}

export default Genres
