import usePopularMovies from '../hooks/usePopularMovies'
import useLatestMovies from '../hooks/useLatestMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import ListMovies from '../components/ListMovies'
import ScrollMovies from '../components/ScrollMovies'


const MoviePage = () => {
	const { data: popularMovies, isError: isErrorPopular, error: errorPopular, isLoading: isLoadingPopular } = usePopularMovies()
	//console.log('popularMovies', popularMovies)

	const { data: latestMovies, isError: isErrorLatest, error: errorLatest, isLoading: isLoadingLatest } = useLatestMovies()
	//console.log('latestMovies', latestMovies)

	const { data: topRatedMovies, isError: isErrorTopRated, error: errorTopRated, isLoading: isLoadingTopRated } = useTopRatedMovies()
	//console.log('topRatedMovies', topRatedMovies)

	return (
		<Container className='my-4 p-0'>
			<div>
				<h1 className='mt-4'>Popular movies</h1>
				{isLoadingPopular && <LoadingSpinner />}
				{isErrorPopular && <WarningAlert message={errorPopular.message} />}
				{popularMovies && <ScrollMovies data={popularMovies}/>}
				<Button className='btn btn-warning w-100' action as={Link} to={'/popular-movies'}>See all the popular movies</Button>
			</div>

			<div>
				<h1 className='mt-4'>Latest movies</h1>
				{isLoadingLatest && <LoadingSpinner />}
				{isErrorLatest && <WarningAlert message={errorLatest.message} />}
				{latestMovies && <ScrollMovies data={latestMovies}/>}
				<Button className='btn btn-warning w-100' action as={Link} to={'/latest-movies'}>See all the latest movies</Button>
			</div>

			<div>
				<h1 className='mt-4'>Top rated movies</h1>
				{isLoadingTopRated && <LoadingSpinner />}
				{isErrorTopRated && <WarningAlert message={errorTopRated.message} />}
				{topRatedMovies && <ScrollMovies data={topRatedMovies}/>}
				<Button className='btn btn-warning w-100' action as={Link} to={'/top-rated-movies'}>See all the top-rated movies</Button>
			</div>
		</Container>
	)
}

export default MoviePage
