import GenresList from '../genre-list/genre-list';
import { IFilmDetailsProps } from '../../types/film-type';
import FilmsList from '../film-list/film-list';

type CatalogProps = {
	films: IFilmDetailsProps[];
}

export default function Catalog({ films }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmsList films={films} />
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
