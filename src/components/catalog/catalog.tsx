import Card from '../card/card';
import GenresList from '../genre-list/genre-list';
import { FilmDetailsProps } from '../../types/film-type';

type CatalogProps = {
	films: FilmDetailsProps[];
}

export default function Catalog({ films }: CatalogProps): JSX.Element {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <div className="catalog__films-list">
        {films.map((film) => (
          <Card key={film.name} film={film} />
        ))}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button">Show more</button>
      </div>
    </section>
  );
}
