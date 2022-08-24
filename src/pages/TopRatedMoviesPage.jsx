import Container from 'react-bootstrap/Container'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import ListMovies from '../components/ListMovies'

const TopRatedMoviesPage = () => {
	const { data: topRatedMovies, isError: isErrorTopRated, error: errorTopRated, isLoading: isLoadingTopRated } = useTopRatedMovies()
	
	return (
		<Container className='mb-4 mt-4'>
			{isLoadingTopRated && <LoadingSpinner />}
			{isErrorTopRated && <WarningAlert message={errorTopRated.message} />}
			{topRatedMovies && <ListMovies data={topRatedMovies}/>}
		</Container>
	)
}

export default TopRatedMoviesPage
