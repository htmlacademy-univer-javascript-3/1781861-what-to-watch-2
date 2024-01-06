import FilmCardButton from '../film-card-btn/film-card-btn';
import Header from '../header/header';
import FilmCardPoster from '../film-card-poster/film-card-poster';
import { IFilmDetailsProps } from '../../types/film-type';

type FilmCardProps = {
	film: IFilmDetailsProps;
};

export default function FilmCard({ film }: FilmCardProps): JSX.Element {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <Header />
      <div className="film-card__wrap">
        <div className="film-card__info">
          <FilmCardPoster src={film.backgroundImg} alt={film.alt} />
          <div className="film-card__desc">
            <h2 className="film-card__title">{film.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{film.genre}</span>
              <span className="film-card__year">{film.released}</span>
            </p>
            <FilmCardButton />
          </div>
        </div>
      </div>
    </section>
  );
}
