import { useState } from 'react';
import Card from '../card/card';
import { IFilmDetailsProps } from '../../types/film-type';
import { FilmList as filmsList } from '../../mocks/films';

type FilmListProps = {
	films: IFilmDetailsProps[];
};

export default function FilmsList({ films = filmsList }: FilmListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const handleCardHover = (id: number) => {
    setActiveFilm(id);
  };
  const handleCardLeave = () => {
    setActiveFilm(null);
  };

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
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
