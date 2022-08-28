import { Routes, Route } from 'react-router-dom'
import './assets/scss/App.scss'

import Navigation from './components/Navigation'
import NotFound from './pages/NotFound'
import MoviePage from './pages/MoviePage'
import MovieSinglePage from './pages/MovieSinglePage'
import PopularMoviesPage from './pages/PopularMoviesPage'
import LatestMoviesPage from './pages/LatestMoviesPage'
import TopRatedMoviesPage from './pages/TopRatedMoviesPage'
import PersonSinglePage from './pages/PersonSinglePage'
import GenreMoviesPage from './pages/GenreMoviesPage'
import GenreSingleMoviesPage from './pages/GenreSingleMoviesPage'
import Genres from './pages/Genres'

import { ReactQueryDevtools } from 'react-query/devtools'

function App() {
	return (
		<div id='App'>
			<Navigation />

			<Routes>
				<Route path='/' element={<MoviePage />} />
				<Route path='/movies' element={<MoviePage />} />
				<Route path='/movies-genre' element={<GenreMoviesPage />} />
				<Route path='/genres' element={<Genres />} />
				<Route path='/genres/:id' element={<GenreSingleMoviesPage />} />
				<Route path='/popular-movies' element={<PopularMoviesPage />} />
				<Route path='/latest-movies' element={<LatestMoviesPage />} />
				<Route path='/top-rated-movies' element={<TopRatedMoviesPage />} />
				<Route path='/movies/:id' element={<MovieSinglePage />} />
				<Route path='/person/:id' element={<PersonSinglePage />} />

				<Route path='*' element={<NotFound />} />
			</Routes>
			<ReactQueryDevtools />

		</div>
	)
}

export default App
