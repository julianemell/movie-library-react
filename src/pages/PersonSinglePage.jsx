import usePerson from '../hooks/usePerson'
import { useParams } from 'react-router'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'

const PersonSinglePage = () => {
	const { id } = useParams()
	const { data: person, error, isError, isLoading } = usePerson(id)
	console.log('person', person)
	const img_BASE_URL = "https://image.tmdb.org/t/p/w500/"


	return (
		<Container>
			{isLoading && <LoadingSpinner />}

			{isError && <WarningAlert message={error.message} />}

			{person && (
				<>
					<h1>{person.name}</h1>
					<img src={`${img_BASE_URL}${person.profile_path}`} className="img-fluid" />
					<p>{person.biography}</p>
				</>
			)}
		</Container>
	)
}

export default PersonSinglePage
