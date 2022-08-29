import { Link, NavLink } from 'react-router-dom'

import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = () => {
	return (
		<Navbar id='nav' bg='warning' variant='dark' expand='md'>
			<Container>
				<Navbar.Brand as={Link} to='/'>The Movie Database</Navbar.Brand>

				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse id='basic-navbar-nav'>
					<Nav className='ms-auto'>
						<NavDropdown title='Movies' id='navbarScrollingDropdown'>
							<NavDropdown.Item id='nav-drop' as={NavLink} to='/popular-movies'>Popular movies</NavDropdown.Item>
							<NavDropdown.Item id='nav-drop' as={NavLink} to='/latest-movies'>Latest movies</NavDropdown.Item>
							<NavDropdown.Item id='nav-drop' as={NavLink} to='/top-rated-movies'>Top rated movies</NavDropdown.Item>
						</NavDropdown>						
						<Nav.Link id='nav-link' as={NavLink} end to='/genres'>Movies by genre</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
