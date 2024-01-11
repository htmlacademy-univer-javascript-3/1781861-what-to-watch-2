import React, { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import PageNotFound from '../page-not-found/page-not-found';
import { Spinner } from '../../components/spinner/spinner';
import FilmCard from '../../components/film-card/film-card';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { getIsPromoLoading, getPromoFilm } from '../../store/movies-process/movies-process.selectors';
import { fetchFavoriteFilmsAction, fetchFilmPromoAction } from '../../store/api-actions';
import { AuthStatus } from '../../enums/auth-status';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';

export default function MainPage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getPromoFilm);
  const isPromoLoading = useAppSelector(getIsPromoLoading);
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      dispatch(fetchFilmPromoAction());
      if (isAuth) {
        dispatch(fetchFavoriteFilmsAction());
      }
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch, isAuth]);

  if (isPromoLoading) {
    return <Spinner/>;
  }

  return promoFilm ? (
    <React.Fragment>
      <FilmCard film={promoFilm} />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </React.Fragment>
  ) : (
    <PageNotFound />
  );
}
