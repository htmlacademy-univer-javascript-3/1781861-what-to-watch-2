import React from 'react';
import { IFilmDetailsProps } from '../../types/film-type';

type OverviewProps = {
	film: IFilmDetailsProps;
};

function MovieOverview({ film }: OverviewProps): JSX.Element {
  return (
    <React.Fragment>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">Very good</span>
          {/*<span className="film-rating__level">{filmRating}</span>*/}
          <span className="film-rating__count">{film.scoreCount} ratings</span>
        </p>
      </div>
      <div className="film-card__text">
        <p>{film.description}</p>
        <p className="film-card__director">
          <strong>Director: {film.director}</strong>
        </p>
        <p className="film-card__starring">
          <strong>Starring:{film.starring.join(', ')}</strong>
        </p>
      </div>
    </React.Fragment>
  );
}

const OverviewMemo = React.memo(MovieOverview);

export default OverviewMemo;
