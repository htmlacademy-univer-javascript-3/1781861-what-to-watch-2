import { useState } from 'react';
import Card from '../card/card';
import { MOVIES_LIST_LENGTH } from '../../const/movies-list';
import { useAppSelector } from '../../hook/store';

type FilmListProps = {
	length: number;
	genre?: string;
};

export default function FilmsList({ length = MOVIES_LIST_LENGTH, genre }: FilmListProps): JSX.Element {
  const [activeFilm, setActiveFilm] = useState<number | null>(null);
  const films = useAppSelector((state) => state.films);
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
