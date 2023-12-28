import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
// import { AppRoute } from '../../const';
// import HeadGuest from '../head-guest/head-guest';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
// import MoviePageDetails from '../movie-page-details/movie-page-details';
// import MoviePageList from '../movie-page-in-list/movie-page-in-list';
// import MoviePageReviews from '../movie-page-reviews/movie-page-reviews';
// import MoviesCard from '../movies-card/movies-card';
import MyList from '../../pages/my-list/my-list';
import Page404 from '../page-404/page-404';
import Player from '../player/player';
// import PlayerPause from '../player-pause/player-pause';
import Sign from '../../pages/sign-in/sign-in';
// import SignError from '../sign-in-error/sign-in-error';
// import SignMessage from '../sign-in-message/sign-in-message';
import PrivateRoute from '../private-route.tsx/private-route';

interface AppProps {
	promoFilm: {
		title: string;
		genre: string;
		year: number;
	};
}

function App({ promoFilm }: AppProps): JSX.Element {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/">
					<Route index element={<MainPage promoFilm={promoFilm} />} />
					<Route path="login" element={<Sign />} />
					<Route path="mylist" element={<PrivateRoute hasAccess={false}><MyList /></PrivateRoute>} />
					<Route path="films/:id/">
						<Route index element={<MoviePage />} />
						<Route path="review" element={<AddReview />} />
					</Route>
					<Route path="player/:id" element={<Player />} />
					<Route path='*' element={<Page404 />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
