import { Routes, Route } from 'react-router-dom';
import AddReview from '../../pages/add-review/add-review';
import MainPage from '../../pages/main-page/main-page';
import MoviePage from '../../pages/movie-page/movie-page';
import MyList from '../../pages/my-list/my-list';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route.tsx/private-route';
import { AppRoute } from '../../enums/app-route';
import { useAppSelector } from '../../hook/store';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import { HelmetProvider } from 'react-helmet-async';
import ScrollTop from '../scroll-top/scroll-top';


function App(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);

  return (
    <HelmetProvider >
      <ScrollTop />
      <Routes>
        <Route path={AppRoute.Main}>
          <Route index element={<MainPage />} />
          <Route path={AppRoute.Login} element={<SignIn />} />
          <Route path={AppRoute.MyList} element={<PrivateRoute authStatus={authStatus}><MyList /></PrivateRoute>} />
          <Route path={AppRoute.Films}>
            <Route path=":id" element={<MoviePage />} />
            <Route path={`:id${AppRoute.Review}`} element={
              <PrivateRoute authStatus={authStatus}>
                <AddReview />
              </PrivateRoute>
            }
            />
          </Route>

          <Route path={`${AppRoute.Player}/:id`} element={<Player />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
