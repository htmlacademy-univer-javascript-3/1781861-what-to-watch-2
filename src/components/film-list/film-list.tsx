import React, { useState } from 'react';
import Card from '../card/card';
import { MOVIES_LIST_LENGTH } from '../../const/movies-list';
import { useAppSelector } from '../../hook/store';
import { Spinner } from '../spinner/spinner';
import { IFilmProps } from '../../types/film-type';
import { getFilmsByGenre, getIsLoadingList } from '../../store/movies-process/movies-process.selectors';

type FilmsListProps = {
  length?: number;
  films?: IFilmProps[];
};

function FilmsList({
  length = MOVIES_LIST_LENGTH,
  films,
}: FilmsListProps): React.JSX.Element {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const genreFilms = useAppSelector(getFilmsByGenre);
  const isLoading = useAppSelector(getIsLoadingList);
  const filteredItems = films || genreFilms;

  const handleCardHover = (id: number) => {
    setActiveFilm(id);
  };

  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {isLoading ? (
        <Spinner />
      ) : (filteredItems.slice(0, length).map((film) => (
        <Card
          film={film}
          key={film.name}
          isActive={film.id === activeFilm}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        />
      )))}
    </div>
  );
}

const FilmsListMemo = React.memo(FilmsList);

export default FilmsListMemo;
