import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import Page404 from '../page-404/page-404';
import Player from '../player/player';
import Sign from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route.tsx/private-route';
import { FilmDetailsProps } from '../../types/film-type';
import { AppRoute } from '../../enums/AppRoute';

interface AppProps {
	films: FilmDetailsProps[];
}

export default function App({ films }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage films={films} />} />
          <Route path={AppRoute.Login} element={<Sign />} />
          <Route path={AppRoute.MyList} element={<PrivateRoute hasAccess={false}><MyList /></PrivateRoute>} />
          <Route path={AppRoute.Films}>
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MoviePage films={films} />} />
            <Route path={`:id${AppRoute.Review}`} element={<PrivateRoute hasAccess={false}><AddReview films={films} /></PrivateRoute>} />
          </Route>
          <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
