import Button from 'react-bootstrap/Button'

const Genres = ({ data, setGenreClick, setPage, setGenreName, genreName }) => {

	return (
		<div className='d-flex justify-content-center flex-column align-items-center'>
			<div className='d-flex justify-content-center w-100 flex-wrap my-3'>
				{data.genres.map((genre, i) => (
					<Button className='m-1 py-1 px-2' variant='warning' key={i} onClick={() => (setGenreClick(genre.id), setPage(1), setGenreName(genre.name))}>{genre.name}</Button>
				))}
			</div>
			<p>{genreName}</p>
		</div>
	)
}

export default Genres
