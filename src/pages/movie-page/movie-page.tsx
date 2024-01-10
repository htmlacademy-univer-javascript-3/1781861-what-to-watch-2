import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import FilmsList from '../../components/film-list/film-list';
import { AppRoute } from '../../enums/app-route';
import Tabs from '../../components/tabs/tabs';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { fetchFilmByIdAction, fetchFilmReviewsAction, fetchSimilarFilmsAction } from '../../store/api-actions';
import { Spinner } from '../../components/spinner/spinner';
import { AuthStatus } from '../../enums/auth-status';
import { getFilm, getIsLoadingFilm, getReviews } from '../../store/movie-process/movie-process.selectors';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import FilmCardButton from '../../components/film-card-btn/film-card-btn';
import { getFavoriteFilms } from '../../store/movies-process/movies-process.selectors';

export default function MoviePage(): JSX.Element {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const reviews = useAppSelector(getReviews);
  const isLoading = useAppSelector(getIsLoadingFilm);
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavorite = favoriteFilms?.find(
    (favorite) => String(favorite.id) === String(film?.id)
  );

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (id && id !== film?.id) {
        dispatch(fetchFilmByIdAction(id));
        dispatch(fetchSimilarFilmsAction(id));
        dispatch(fetchFilmReviewsAction(id));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch, film?.id]);

  if (isLoading && !film) {
    return <Spinner />;
  }

  if (!film) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>
          <h1 className="visually-hidden">WTW</h1>
          <Header />
          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>
              <FilmCardButton isAuth={isAuth} id={film.id} isFavorite={Boolean(isFavorite)} isReviewButtonVisible />
            </div>
          </div>
        </div>
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <FilmCardPoster src={film.posterImage} alt={film.name} />
            <Tabs film={film} reviews={reviews} />
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList length={4} />
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
}
