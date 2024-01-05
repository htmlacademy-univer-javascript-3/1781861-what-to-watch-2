import React from 'react';
import Card from '../card/card';
import { FilmDetailsProps } from '../../types/film-type';

type FilmListProps = {
	films: FilmDetailsProps[];
	length?: number;
};

export default function FilmsList({ films, length = 4, }: FilmListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {films.splice(0, length + 1).map((film) => (
        <Card film={film} key={film.name} />
      ))}
    </div>
  );
}
