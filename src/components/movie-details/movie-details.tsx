import React, { ReactNode, FC, memo} from 'react';
import { IFilmDetailsProps } from '../../types/film-type';

interface FilmDetailsItemProps {
  name: string;
  children: ReactNode;
}

const FilmDetailsItemComponent: FC<FilmDetailsItemProps> = ({
  name,
  children,
}) => (
  <p className="film-card__details-item">
    <strong className="film-card__details-name">{name}</strong>
    <span className="film-card__details-value">{children}</span>
  </p>
);

const FilmDetailsItem = memo(FilmDetailsItemComponent);

type DetailsProps = {
	film: IFilmDetailsProps;
};

function MovieDetails({ film }: DetailsProps): JSX.Element {
  const { genre, runTime, director, released, starring } = film;

  const hours = Math.floor(runTime / 60);
  const minutes = runTime % 60;

  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <FilmDetailsItem name="Director">{director}</FilmDetailsItem>
        <FilmDetailsItem name="Starring">
          {starring?.map(
            (star, index) =>
              starring && (
                <React.Fragment key={star}>
                  {star} {index < starring.length - 1 && <br />}
                </React.Fragment>
              )
          )}
        </FilmDetailsItem>
      </div>
      <div className="film-card__text-col">
        <FilmDetailsItem name="Run Time">{`${hours}h ${minutes}m`}</FilmDetailsItem>
        <FilmDetailsItem name="Genre">{genre}</FilmDetailsItem>
        <FilmDetailsItem name="Released">{released}</FilmDetailsItem>
      </div>
    </div>
  );
}

const DetailsMemo = React.memo(MovieDetails);

export default DetailsMemo;
