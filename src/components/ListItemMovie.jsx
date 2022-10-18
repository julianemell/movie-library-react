import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ListItemMovie = ({ movie }) => {
	const img_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

	return (
		<Card className='bg-warning mt-2 mb-2'>
			<Card.Img variant='top' src={`${img_BASE_URL}${movie.poster_path}`} className='img-fluid' />
			<Card.Body>
				<Card.Title id='movie-title'>{movie.original_title}</Card.Title>
				<Card.Text className='cut-text'>
					{movie.overview}
				</Card.Text>
				<Button variant='btn btn-outline-dark w-100' as={Link} to={`/movies/${movie.id}`}>Read more</Button>
			</Card.Body>
		</Card>
	)
}

export default ListItemMovie