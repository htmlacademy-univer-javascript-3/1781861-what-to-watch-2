import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import Page404 from '../../pages/page-404/page-404';
import Player from '../../pages/player/player';
import Sign from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route.tsx/private-route';
import { AppRoute } from '../../enums/AppRoute';
import { useAppSelector } from '../../hook/store';


export default function App(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<Sign />} />
          <Route path={AppRoute.MyList} element={<PrivateRoute ><MyList films={films} /></PrivateRoute>} />
          <Route path={AppRoute.Films}>
            <Route index element={<MoviePage />} />
            <Route path=':id' element={<MoviePage />} />
            <Route path={`:id${AppRoute.Review}`} element={<PrivateRoute ><AddReview /></PrivateRoute>} />
          </Route>
          <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
