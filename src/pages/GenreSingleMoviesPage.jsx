import { useParams, useSearchParams } from 'react-router-dom'
import useGenreMovies from '../hooks/useGenreMovies'
import Pagination from '../components/Pagination'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

import ListMovies from '../components/ListMovies'
import Genres from '../components/Genres'

const GenreSingleMoviesPage = () => {
	const { id } = useParams()

	const [searchParams, setSearchParams] = useSearchParams({type: '', page: 1})
	const genrePage = searchParams.get('page')

	const { data, isError, error, isLoading, isPreviousData } = useGenreMovies(genrePage, id)

	const { data: genreButtonsData, error: genreError, isError: genreIsError, isLoading: genreIsLoading } = useQuery('genres', MovieAPI.getGenres)

	return (
		<Container>
			<div>
				{genreIsLoading && <LoadingSpinner />}

				{genreIsError && <WarningAlert message={genreError.message} />}
				
				{genreButtonsData && <Genres data={genreButtonsData} id={id} />}
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
