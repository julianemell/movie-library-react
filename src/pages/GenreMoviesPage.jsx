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

const GenreMovies = () => {
	const [page, setPage] = useState(1)
	const [genreClick, setGenreClick] = useState()
	//const [searchParams, setSearchParams] = useSearchParams()

	const { data: genreData, error: genreError, isError: genreIsError, isLoading: genreIsLoading } = useQuery('genres', MovieAPI.getGenres)
	console.log('genres', genreData)
	console.log('clicked genre', genreClick)
	
	const { data, isError, error, isLoading, isPreviousData } = useGenreMovies(page, genreClick)
	//console.log('data', data)
	
	const nextPage = () => setPage(prev => prev + 1)
	const prevPage = () => setPage(prev => prev - 1)
	
	const img_BASE_URL = "https://image.tmdb.org/t/p/w500/"

	return (
		<Container>
			{genreIsLoading && <LoadingSpinner />}

			{genreIsError && <WarningAlert message={genreError.message} />}
			
			{genreData && (
				<div className='d-flex justify-content-center w-100 flex-wrap'>
					{genreData.genres.map((genre, i) => (
					<Button className='m-1 py-1 px-2' variant='warning' key={i} onClick={() => (setGenreClick(genre.id), setPage(1))}>{genre.name}</Button>
					))}
				</div>
			)}

			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{data && (
				<>
					<Row xs={1} s={2} md={3} l={5}>
						{data.results.map((movie, i) => (
							<Col key={i} className="mt-3">
								<Card className='bg-warning'>
									<Card.Img variant='top' src={`${img_BASE_URL}${movie.poster_path}`} className='img-fluid' />
									<Card.Body>
										<Card.Title>{movie.original_title}</Card.Title>
										<Card.Text>
											{/* {movie.overview} */}
										</Card.Text>
										<Button variant='success' as={Link} to={`/movies/${movie.id}`}>Read more</Button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
					
					<div className='d-flex justify-content-between mt-4 mb-4'>
						<Button variant='warning' onClick={prevPage} disabled={isPreviousData || page === 1}>previous</Button>
						{page}
						<Button variant='warning' onClick={nextPage} disabled={page === data.total_pages}>next</Button>
					</div>
				</>
			)}
		</Container>
	)
}

export default GenreMovies
