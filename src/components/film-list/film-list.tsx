import { useState } from 'react';
import Card from '../card/card';
import { IFilmDetailsProps } from '../../types/film-type';
import { FilmList as filmsList } from '../../mocks/films';

type FilmListProps = {
	films: IFilmDetailsProps[];
	length?: number;
	genre?: string;
};

export default function FilmsList({ films = filmsList, length = filmsList.length, genre }: FilmListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const handleCardHover = (id: number) => {
    setActiveFilm(id);
  };
  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  const filterItems = genre ? films.filter((film) => film.genre === genre) : films;

  return (
    <div className="catalog__films-list">
      {filterItems.slice(0, length).map((film) => (
        <Card
          film={film}
          key={film.name}
          isActive={film.id === activeFilm}
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardLeave}
        />
      ))}
    </div>
  );
}
