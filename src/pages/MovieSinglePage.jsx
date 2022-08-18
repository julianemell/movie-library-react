import { useParams } from 'react-router'
import useMovie from '../hooks/useMovie'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const MovieSinglePage = () => {
	const { id } = useParams()
	const { data: movie, error, isError, isLoading } = useMovie(id)
	console.log('movie', movie)

	return (
		<Container>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{movie && movie.title}
		</Container>
	)
}

export default MovieSinglePage
