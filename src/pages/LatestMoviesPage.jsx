import Container from 'react-bootstrap/Container'

import ListMovies from '../components/ListMovies'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import useLatestMovies from '../hooks/useLatestMovies'

const LatestMoviesPage = () => {
	const { 
		data,
		isError, 
		error, 
		isLoading
	} = useLatestMovies()

	return (
		<Container>
			<h1 className='my-4'>Latest movies</h1>
			{isLoading && <LoadingSpinner />}
			{isError && <WarningAlert message={error.message} />}
			{data && <ListMovies data={data}/>}
			
		</Container>
	)
}

export default LatestMoviesPage
