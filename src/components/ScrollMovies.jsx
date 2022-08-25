import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const ScrollMovies = ({data}) => {
	const img_BASE_URL = 'https://image.tmdb.org/t/p/w500/'

	return (
		<>
			<div className="movie-scroll">
				<div className="movie-scroll__holder">
					{data.results.map((movie, i) => (
						<div key={i} className="movie-scroll__movie">
							<img src={`${img_BASE_URL}${movie.poster_path}`} className='movie-scroll__img'/>
							<p className='movie-scroll__title'>{movie.original_title}</p>
							<Button className='w-100' variant='btn btn-outline-warning' as={Link} to={`/movies/${movie.id}`}>Read more</Button>
						</div>
					))}
				</div>
			</div>
		</>
	)
}

export default ScrollMovies
