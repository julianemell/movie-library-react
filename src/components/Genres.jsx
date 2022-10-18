import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'

const Genres = ({ data, id }) => {

	const chosenGenre = data.genres.find(genre => Number(id) === genre.id)
	
	return (
		<div className='d-flex justify-content-center flex-column align-items-center'>
			<div className='d-flex justify-content-center w-100 flex-wrap my-3'>
				{data.genres.map((genre, i) => (
					<Button className='m-1 py-1 px-2' variant='warning' key={i} as={Link} to={`/genres/${genre.id}`}>{genre.name}</Button>
				))}
			</div>
			<p>Showing <em>{chosenGenre.name} </em> movies</p>
		</div>
	)
}

export default Genres
