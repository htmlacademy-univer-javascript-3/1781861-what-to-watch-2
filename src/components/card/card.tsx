import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { FilmDetailsProps } from '../../types/film-type';
import { AppRoute } from '../../enums/AppRoute';


type CardProps = {
	film: FilmDetailsProps;
}

export default function Card({ film }: CardProps): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={film.postImg} alt={film.alt} />
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}/${film.id}`} className="small-film-card__link">{film.name}</Link>
      </h3>
    </article>
  );
}
