import usePopularMovies from '../hooks/usePopularMovies'
import ListGroup from 'react-bootstrap/ListGroup'
import Container from 'react-bootstrap/Container'

const MoviePage = () => {
	const { data } = usePopularMovies()
	console.log('data', data.results)

	return (
		<Container>
			<h1 className="mt-4">Popular movies:</h1>
			<ListGroup>
				{data.results.map(movie => (
					<ListGroup.Item>
						<div>{movie.original_title}</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		</Container>
	)
}

export default MoviePage
