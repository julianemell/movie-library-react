import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ScrollMovies = ({data}) => {
	const img_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

	return (
		<>
			<div className="scroll-container">
				<div className="movie-holder">
					{data.results.map((movie, i) => (
						<div key={i} id="movies-scroll">
							<img src={`${img_BASE_URL}${movie.poster_path}`} id='movie-img'/>
							<p id='movie-title-p'>{movie.original_title}</p>
							<Button className='w-100' variant='btn btn-outline-warning' as={Link} to={`/movies/${movie.id}`}>Read more</Button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default ScrollMovies
