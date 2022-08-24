import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ListMovies = ({data}) => {
	const img_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

	return (
		<>
			<Row xs={2} s={2} md={3} l={5}>
				{data.results.map((movie, i) => (
					<Col key={i}>
						<Card className='bg-warning mt-2 mb-2'>
							<Card.Img variant='top' src={`${img_BASE_URL}${movie.poster_path}`} className='img-fluid' />
							<Card.Body>
								<Card.Title id='movie-title'>{movie.original_title}</Card.Title>
								<Card.Text className='cut-text'>
									{movie.overview}
								</Card.Text>
								<Button variant='success' as={Link} to={`/movies/${movie.id}`}>Read more</Button>
							</Card.Body>
						</Card>
					</Col>
				))}
			</Row>
		</>
	)
}

export default ListMovies
