import { useCallback, useState } from 'react';
import GenresList from '../genre-list/genre-list';
import FilmsList from '../film-list/film-list';
import { useAppSelector } from '../../hook/store';
import { getFilmsByGenreLength } from '../../store/movies-process/movies-process.selectors';
import { MOVIES_LIST_LENGTH } from '../../const/movies-list';

export default function Catalog(): JSX.Element {
  const stateGenreFilmsLength = useAppSelector(getFilmsByGenreLength);
  const [listLength, setListLength] = useState(MOVIES_LIST_LENGTH);
  const isButtonVisible = stateGenreFilmsLength >= listLength;
  const handleClick = useCallback(() => {
    setListLength((prev) => prev + MOVIES_LIST_LENGTH);
  }, []);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList />
      <FilmsList length={listLength} />
      {isButtonVisible && (
        <div className="catalog__more">
          <button className="catalog__button" type="button" onClick={handleClick}>Show more</button>
        </div>
      )}
    </section>
  );
}
