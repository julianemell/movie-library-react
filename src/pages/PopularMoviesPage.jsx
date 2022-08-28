import Container from 'react-bootstrap/Container'

import ListMovies from '../components/ListMovies'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import usePopularMovies from '../hooks/usePopularMovies'

const PopularMoviesPage = () => {
	const { 
		data,
		isError, 
		error, 
		isLoading 
	} = usePopularMovies()

	return (
		<Container>
			{isLoading && <LoadingSpinner />}
			{isError && <WarningAlert message={error.message} />}
			{data && <ListMovies data={data}/>}
		</Container>
	)
}

export default PopularMoviesPage
