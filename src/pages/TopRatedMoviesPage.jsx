import Container from 'react-bootstrap/Container'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import ListTopRatedMovies from '../components/ListTopRatedMovies'

const TopRatedMoviesPage = () => {
	const { data: topRatedMovies, isError: isErrorTopRated, error: errorTopRated, isLoading: isLoadingTopRated } = useTopRatedMovies()
	
	return (
		<Container>
			{isLoadingTopRated && <LoadingSpinner />}
			{isErrorTopRated && <WarningAlert message={errorTopRated.message} />}
			{topRatedMovies && <ListTopRatedMovies data={topRatedMovies}/>}
		</Container>
	)
}

export default TopRatedMoviesPage
