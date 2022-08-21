import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'

import Navigation from './components/Navigation'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'
import MoviePage from './pages/MoviePage'
import MovieSinglePage from './pages/MovieSinglePage'
import PopularMoviesPage from './pages/PopularMoviesPage'
import LatestMoviesPage from './pages/LatestMoviesPage'
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import PersonSinglePage from './pages/PersonSinglePage'


function App() {
	return (
		<div id="App">
			<Navigation />

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/movies" element={<MoviePage />} />
				<Route path="/popular-movies" element={<PopularMoviesPage />} />
				<Route path="/latest-movies" element={<LatestMoviesPage />} />
				<Route path="/top-rated-movies" element={<TopRatedMoviesPage />} />
				<Route path="/movies/:id" element={<MovieSinglePage />} />
				<Route path="/person/:id" element={<PersonSinglePage />} />

				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	)
}

export default App
