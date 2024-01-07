import { useCallback, useState } from 'react';
import GenresList from '../genre-list/genre-list';
import FilmsList from '../film-list/film-list';
import { MOVIES_LIST_LENGTH } from '../../const/movies-list';
import { useAppSelector } from '../../hook/store';

export default function Catalog(): JSX.Element {
  const stateGenreFilms = useAppSelector((state) => state.genreMovies);
  const [listLength, setListLength] = useState(MOVIES_LIST_LENGTH);
  const isBtnVisible = stateGenreFilms.length >= listLength;
  const handleClick = useCallback(() => {
    setListLength((prev) => prev + MOVIES_LIST_LENGTH);
  }, []);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmsList length={listLength} />
      {isBtnVisible && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
        </div>
      )}
    </section>
  );
}
