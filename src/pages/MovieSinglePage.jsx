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
							<h1>{movie.title}</h1>
							<p><em>{movie.tagline}</em></p>
							<p>{movie.overview}</p>
							<ul>
								<li>{movie.vote_average}</li>
								<li>Budget: ${movie.budget}</li>
								<li>Genres: {movie.genres.map(genre => (<em> {genre.name},</em>))}</li>
								<li>Language: {movie.original_language}</li>
								<li>Release date: {movie.release_date}</li>
							</ul>
						</div>
						<img src={`${img_BASE_URL}${movie.backdrop_path}`} className='img-fluid' />
					</div>
					
					<h2>Cast</h2>
					{/* <BasicTable columns={columns} data={movie} /> */}

					<ListGroup>
						{movie.credits.cast.map((person, i) => (
							<ListGroup.Item key={i} className='d-flex justify-content-between'>
								<div><em>{person.character}</em> - {person.name}</div>
								<Button variant='success' as={Link} to={`/person/${person.id}`}>Read more</Button>
							</ListGroup.Item>
						))}
					</ListGroup>
				</>
			)}
		</Container>
	)
}

export default MovieSinglePage
