import usePerson from '../hooks/usePerson'
import { useParams } from 'react-router'

import Container from 'react-bootstrap/Container'
import LoadingSpinner from '../components/LoadingSpinner'
import WarningAlert from '../components/alerts/WarningAlert'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'

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
					<div>
						<h1>{person.name}</h1>
						<img src={`${img_BASE_URL}${person.profile_path}`} className="img-fluid" />
						<p>{person.biography}</p>
					</div>
				

					<div>
						<h1>Movies {person.name} is in:</h1>
						<ListGroup>
							{person.movie_credits.cast.map((movie, i) => (
								<ListGroup.Item key={i} className="d-flex justify-content-between">
									<div>{movie.title}</div>
									<Button variant="success" as={Link} to={`/movies/${movie.id}`}>Read more</Button>
								</ListGroup.Item>
							))}
						</ListGroup>
					</div>
				</>
			)}
		</Container>
	)
}

export default PersonSinglePage
