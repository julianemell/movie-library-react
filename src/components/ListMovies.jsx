import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const ListMovies = ({data}) => {
	return (
		<>
			<ListGroup>
				{data.results.map((movie, i) => (
					<ListGroup.Item action key={i} as={Link} to={`/movies/${movie.id}`}>
						<div>{movie.original_title}</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		</>
	)
}

export default ListMovies
