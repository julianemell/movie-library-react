import Container from 'react-bootstrap/Container'
import ListMovies from '../components/ListMovies'
import useLatestMovies from '../hooks/useLatestMovies'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const LatestMoviesPage = () => {
	const { data: latestMovies, isError: isErrorLatest, error: errorLatest, isLoading: isLoadingLatest } = useLatestMovies()
	console.log('latestMovies', latestMovies)

	return (
		<Container>
			{isLoadingLatest && <LoadingSpinner />}
			{isErrorLatest && <WarningAlert message={errorLatest.message} />}
			{latestMovies && <ListMovies data={latestMovies}/>}
			
		</Container>
	)
}

export default LatestMoviesPage
