import { ALL_GENRES } from '../../const/genres';
import GenreItem from '../genre-item/genre-item';
import { useAppSelector } from '../../hook/store';
import { getActiveGenre, getFilms } from '../../store/movies-process/movies-process.selectors';

export default function GenresList(): JSX.Element {
  const activeGenre = useAppSelector(getActiveGenre);
  const films = useAppSelector(getFilms);

  const genreList = [ALL_GENRES, ...new Set(films.map((film) => film.genre))];
  return (
    <ul className="catalog__genres-list">
      {genreList.map((genre) => (
        <GenreItem name={genre} isActive={genre === activeGenre} key={genre} />
      ))}
    </ul>
  );
}
