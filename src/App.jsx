import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import './assets/scss/App.scss'
import MoviePage from './pages/MoviePage'
import MovieSinglePage from './pages/MovieSinglePage'

function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviePage />} />
				<Route path="/movies/:id" element={<MovieSinglePage />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
