import React from 'react';
import { GENRES } from '../../const/genres';
import GenreItem from '../genre-item/genre-item';

export default function GenresList(): JSX.Element {
  return (
    <ul className="catalog__genres-list">
      {GENRES.map((genre) => (
        <GenreItem name={genre.name} isActive={genre.isActive} key={genre.id} />
      ))}
    </ul>
  );
}
