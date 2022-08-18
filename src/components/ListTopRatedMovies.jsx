import ListGroup from 'react-bootstrap/ListGroup'

const ListTopRatedMovies = ({data}) => {
	return (
		<>
			<ListGroup>
				{data.results.map((movie, i) => (
					<ListGroup.Item key={i}>
						<div>{movie.original_title}</div>
					</ListGroup.Item>
				))}
			</ListGroup>
		</>
	)
}

export default ListTopRatedMovies
