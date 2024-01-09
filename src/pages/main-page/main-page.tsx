import React, { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import FilmCard from '../../components/film-card/film-card';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { getPromoFilm } from '../../store/movies-process/movies-process.selectors';
import { fetchFavoriteFilmsAction, fetchFilmPromoAction } from '../../store/api-actions';
import { AuthStatus } from '../../enums/AuthStatus';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';

export default function MainPage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getPromoFilm);
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;

  useEffect(() => {
    dispatch(fetchFilmPromoAction());
    if (isAuth) {
      dispatch(fetchFavoriteFilmsAction());
    }
  }, [dispatch, isAuth]);

  if (!promoFilm) {
    return null;
  }

  return (
    <React.Fragment>
      <FilmCard film={promoFilm} />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </React.Fragment>
  );
}
