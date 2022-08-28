import { useParams, useSearchParams } from 'react-router-dom'
import useGenreMovies from '../hooks/useGenreMovies'
import { Link } from 'react-router-dom'
import Pagination from '../components/Pagination'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListMovies from '../components/ListMovies'

const GenreSingleMoviesPage = () => {
	const { id } = useParams()
	console.log('id', id)

	const img_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

	const [searchParams, setSearchParams] = useSearchParams({type: '', page: 1})
	const genrePage = searchParams.get('page')

	const { data, isError, error, isLoading, isPreviousData } = useGenreMovies(genrePage, id)
	console.log('data', data)

	const { data: genreButtonsData, error: genreError, isError: genreIsError, isLoading: genreIsLoading } = useQuery('genres', MovieAPI.getGenres)
	console.log('data genres', genreButtonsData)

	
	const chosenGenre = genreButtonsData.genres.find(genre => Number(id) === genre.id)
	console.log('id', id)

	console.log('chosenGenre', chosenGenre.name)

	return (
		<Container>
			<div>
				{genreIsLoading && <LoadingSpinner />}

				{genreIsError && <WarningAlert message={genreError.message} />}
				
				{genreButtonsData && (
					<div className='d-flex justify-content-center flex-column align-items-center'>
						<div className='d-flex justify-content-center w-100 flex-wrap my-3'>
							{genreButtonsData.genres.map((genre, i) => (
								<Button className='m-1 py-1 px-2' variant='warning' key={i} as={Link} to={`/genres/${genre.id}`}>{genre.name}</Button>
							))}
						</div>
						<p>You've searched for the genre <em>{chosenGenre.name}</em></p>
					</div>
				)}
			</div>

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{data && (
				<>
					<ListMovies data={data}/>

					<Pagination 
						page={genrePage}
						totPages={data.total_pages}
						previousData={isPreviousData}
						setSearchParams={setSearchParams}
					/>
				</>
			)}
			
		</Container>
	)
}

export default GenreSingleMoviesPage