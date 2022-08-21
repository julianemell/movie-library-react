import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const ListTopRatedMovies = ({data}) => {
	const img_BASE_URL = "https://image.tmdb.org/t/p/w500/"
	console.log('ListTopRatedMovies', data.results)

	return (
		<Row xs={1} md={4} l={5}>
			{data.results.map((movie, i) => (
				<Col key={i} className="">
					<Card className="bg-warning">
						<Card.Img variant="top" src={`${img_BASE_URL}${movie.poster_path}`} className="img-fluid" />
						<Card.Body>
							<Card.Title>{movie.original_title}</Card.Title>
							<Card.Text>
								<p>{movie.overview}</p>
							</Card.Text>
							<Button variant="success" as={Link} to={`/movies/${movie.id}`}>Read more</Button>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	)
}

export default ListTopRatedMovies
