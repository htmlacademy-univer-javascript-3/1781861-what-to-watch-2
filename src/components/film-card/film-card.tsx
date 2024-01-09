import React from 'react';
import FilmCardButton from '../film-card-btn/film-card-btn';
import Header from '../header/header';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import { IFilmPromo } from '../../types/film-type';
import { useAppSelector } from '../../hook/store';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import { AuthStatus } from '../../enums/auth-status';
import { getFavoriteFilms } from '../../store/movies-process/movies-process.selectors';

type FilmCardProps = {
  film: IFilmPromo;
};

function FilmCard({ film }: FilmCardProps): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const isFavorite = favoriteFilms?.find(
    (favorite) => String(favorite.id) === String(film.id)
  );

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={film.backgroundImage} alt={film.name} />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <FilmCardPoster src={film.backgroundImage} alt={film.name} />
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>
            <FilmCardButton id={film.id} isFavorite={Boolean(isFavorite)} isAuth={isAuth} />
          </div>
        </div>
      </div>
    </section>
  );
}

const MovieCardMemo = React.memo(FilmCard);

export default MovieCardMemo;
