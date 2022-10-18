
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import ListItemMovie from './ListItemMovie'

const ListMovies = ({data}) => {

	return (
		<>
			<Row xs={2} s={2} md={3} l={5}>
				{data.results.map((movie, i) => (
					<Col key={i}>
						<ListItemMovie movie={movie}/>
					</Col>
				))}
			</Row>
		</>
	)
}

export default ListMovies
