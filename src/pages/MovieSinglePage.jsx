import { useMemo } from 'react'
import { useParams } from 'react-router'
import useMovie from '../hooks/useMovie'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import BasicTable from '../components/BasicTable'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const MovieSinglePage = () => {
	const { id } = useParams()
	const { data: movie, error, isError, isLoading } = useMovie(id)
	console.log('movie', movie)
	const img_BASE_URL = 'https://image.tmdb.org/t/p/w500/'


/* 	const columns = useMemo(() => {
		return [
			{
				Header: 'Character',
				accessor: 'credits.media.name',
			},
			{
				Header: 'Name',
				accessor: '', 
			},
		]
	}, []) */

	return (
		<Container>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{movie && (
				<>
					<div className='info'>
						<div className='info__container'>
							<h1 className='mb-0'>{movie.title}</h1>
							<p className='text-warning'><em>{movie.tagline}</em></p>
							<p>{movie.overview}</p>
							<ul>
								<li>{movie.vote_average}</li>
								<li>{movie.runtime} mins</li>
								<li>Budget: ${movie.budget}</li>
								<li>Genres: {movie.genres.map((genre, i) => (<em key={i}> {genre.name},</em>))}</li>
								<li>Language: {movie.original_language}</li>
								<li>Release date: {movie.release_date}</li>
							</ul>
						</div>
						<img src={`${img_BASE_URL}${movie.poster_path}`} className='info__img' alt='movie poster' />
					</div>
					
					<div className='my-4'>
						<h2>Cast</h2>
						<Row xs={2} s={2} md={2} l={2}>
							{movie.credits.cast.map((person, i) => (
								<Col key={i}>
									<div className='d-flex justify-content-between mx-4'>
										<em>{person.character}</em>
										-
										<Link className='actor-link text-warning' to={`/person/${person.id}`}>{person.name}</Link>
									</div>					
								</Col>
							))}
						</Row>
					</div>
				</>
			)}
		</Container>
	)
}

export default MovieSinglePage
