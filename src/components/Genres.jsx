import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
const Genres = ({ data, id,  }) => {

	const chosenGenre = data.genres.find(genre => Number(id) === genre.id)
	console.log('id', id)

	console.log('chosenGenre', chosenGenre.name)
	
	return (
		<div className='d-flex justify-content-center flex-column align-items-center'>
			<div className='d-flex justify-content-center w-100 flex-wrap my-3'>
				{data.genres.map((genre, i) => (
					<Button className='m-1 py-1 px-2' variant='warning' key={i} as={Link} to={`/genres/${genre.id}`}>{genre.name}</Button>
				))}
			</div>
			<p>You've searched for the genre <em>{chosenGenre.name}</em></p>
		</div>
	)
}

export default Genres
