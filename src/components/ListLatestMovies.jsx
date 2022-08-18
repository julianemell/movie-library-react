import ListGroup from 'react-bootstrap/ListGroup'

const ListLatestMovies = ({data}) => {
	return (
		<>
			{/* <ListGroup>
				{data.map((movie, i) => (
					<ListGroup.Item key={i}>
						<div>{movie.title}</div>
					</ListGroup.Item>
				))}
			</ListGroup> */}
			<p>{data.title}</p>
		</>
	)
}

export default ListLatestMovies
