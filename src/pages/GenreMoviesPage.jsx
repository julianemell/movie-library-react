import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import MovieAPI from '../services/MovieAPI'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useGenreMovies from '../hooks/useGenreMovies'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Genres from '../components/Genres'
import Pagination from '../components/Pagination'
import ListMovies from '../components/ListMovies'

const GenreMovies = () => {
	const [page, setPage] = useState(1)
	const [genreClick, setGenreClick] = useState()
	const [genreName, setGenreName] = useState('Please choose a genre above to filter')
	//const [searchParams, setSearchParams] = useSearchParams()

	const { data: genreData, error: genreError, isError: genreIsError, isLoading: genreIsLoading } = useQuery('genres', MovieAPI.getGenres)
	console.log('genres', genreData)
	console.log('clicked genre', genreClick)
	
	const { data, isError, error, isLoading, isPreviousData } = useGenreMovies(page, genreClick)
	console.log('data', data)
	
	const nextPage = () => (setPage(prev => prev + 1), window.scrollTo(0,0))
	const prevPage = () => (setPage(prev => prev - 1), window.scrollTo(0,0))
	console.log(window.location.href)

	const img_BASE_URL = "https://image.tmdb.org/t/p/w500/"

	return (
		<Container>
			{genreIsLoading && <LoadingSpinner />}

			{genreIsError && <WarningAlert message={genreError.message} />}
			
			{genreData && (
				<div className='d-flex justify-content-center flex-column align-items-center'>
					<div className='d-flex justify-content-center w-100 flex-wrap my-3'>
						{genreData?.genres.map((genre, i) => (
							<Button className='m-1 py-1 px-2' variant='warning' key={i} onClick={() => (setGenreClick(genre.id), setPage(1), setGenreName(genre.name))}>{genre.name}</Button>
						))}
					</div>
					<p>{genreName}</p>
				</div>
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
					/>
					
				</>
			)}
		</Container>
	)
}

export default GenreMovies
