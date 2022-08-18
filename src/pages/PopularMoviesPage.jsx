import Container from 'react-bootstrap/Container'
import usePopularMovies from '../hooks/usePopularMovies'
import ListMovies from '../components/ListMovies'

import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const PopularMoviesPage = () => {
	const { data: popularMovies, isError: isErrorPopular, error: errorPopular, isLoading: isLoadingPopular } = usePopularMovies()

	return (
		<Container>
			{isLoadingPopular && <LoadingSpinner />}
			{isErrorPopular && <WarningAlert message={errorPopular.message} />}
			{popularMovies && <ListMovies data={popularMovies}/>}
		</Container>
	)
}

export default PopularMoviesPage
