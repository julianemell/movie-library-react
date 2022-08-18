import usePopularMovies from '../hooks/usePopularMovies'
import useLatestMovies from '../hooks/useLatestMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import ListMovies from '../components/ListMovies'
import ListLatestMovies from '../components/ListLatestMovies'
import ListTopRatedMovies from '../components/ListTopRatedMovies'


const MoviePage = () => {
	const { data: popularMovies, isError: isErrorPopular, error: errorPopular, isLoading: isLoadingPopular } = usePopularMovies()
	console.log('popularMovies', popularMovies)

	const { data: latestMovies, isError: isErrorLatest, error: errorLatest, isLoading: isLoadingLatest } = useLatestMovies()
	console.log('latestMovies', latestMovies)

	const { data: topRatedMovies, isError: isErrorTopRated, error: errorTopRated, isLoading: isLoadingTopRated } = useTopRatedMovies()
	console.log('topRatedMovies', topRatedMovies)

	return (
		<Container>
			<h1 className="mt-4">Popular movies:</h1>
			{isLoadingPopular && <LoadingSpinner />}

			{isErrorPopular && <WarningAlert message={errorPopular.message} />}

			{popularMovies && <ListMovies data={popularMovies}/>}
			
			<h1 className="mt-4">Latest movies:</h1>
			{isLoadingLatest && <LoadingSpinner />}

			{isErrorLatest && <WarningAlert message={errorLatest.message} />}

			{latestMovies && <ListLatestMovies data={latestMovies}/>}

			<h1 className="mt-4">Top rated movies:</h1>
			{isLoadingTopRated && <LoadingSpinner />}

			{isErrorTopRated && <WarningAlert message={errorTopRated.message} />}

			{topRatedMovies && <ListTopRatedMovies data={topRatedMovies}/>}

		</Container>
	)
}

export default MoviePage
