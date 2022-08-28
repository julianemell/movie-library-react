import { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useGenreMovies from '../hooks/useGenreMovies'

import Genres from '../components/Genres'
import Pagination from '../components/Pagination'
import ListMovies from '../components/ListMovies'

const GenreMovies = () => {
	const {type} = useParams()
	const [page, setPage] = useState(1)
	const [genreClick, setGenreClick] = useState()
	const [genreName, setGenreName] = useState('Please choose a genre above to filter')
	const [searchParams, setSearchParams] = useSearchParams({})
	const genrePage = searchParams.get('page')
	const genreType = searchParams.get('type')



	const getSearchParams = (page, genreClick) => {
		setSearchParams({ page: page, type: genreClick })
		console.log('searchparams', searchParams)
	}

	const { data: genreData, error: genreError, isError: genreIsError, isLoading: genreIsLoading } = useQuery('genres', MovieAPI.getGenres)
	//console.log('genres', genreData)
	//console.log('clicked genre', genreClick)
	
	const { data, isError, error, isLoading, isPreviousData } = useGenreMovies(genrePage, genreType)
	//console.log('data', data)
	
	const nextPage = () => (setPage(prev => prev + 1), setSearchParams({ page: page + 1, type: genreType }), window.scrollTo(0,0))
	const prevPage = () => (setPage(prev => prev - 1), window.scrollTo(0,0))
	console.log(window.location.href)

	return (
		<Container>
			{genreIsLoading && <LoadingSpinner />}

			{genreIsError && <WarningAlert message={genreError.message} />}
			
			{genreData && (
				<Genres 
					data={genreData} 
					setGenreClick={setGenreClick} 
					setPage={setPage} 
					page={page}
					setGenreName={setGenreName} 
					genreName={genreName}
					getSearchParams={getSearchParams}
				/>
			)}

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{data && (
				<>
					<ListMovies data={data}/>

					<Pagination 
						page={page}
						totPages={data.total_pages}
						previousData={isPreviousData}
						previousPage={prevPage}
						nextPage={nextPage}
						getSearchParams={getSearchParams}
						genreClicked={genreClick}
					/>
				</>
			)}
		</Container>
	)
}

export default GenreMovies
