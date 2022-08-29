import Container from 'react-bootstrap/Container'

import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import ListMovies from '../components/ListMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'

const TopRatedMoviesPage = () => {
	const { 
		data,
		isError, 
		error, 
		isLoading
	} = useTopRatedMovies()
	
	return (
		<Container className='my-4'>
			<h1>Top rated movies</h1>
			{isLoading && <LoadingSpinner />}
			{isError && <WarningAlert message={error.message} />}
			{data && <ListMovies data={data}/>}
		</Container>
	)
}

export default TopRatedMoviesPage
