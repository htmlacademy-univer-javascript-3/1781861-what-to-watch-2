import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { IFilmProps } from '../../types/film-type';
import { AppRoute } from '../../enums/app-route';
import VideoPlayer from '../videoplayer/videoplayer';


type CardProps = {
	film: IFilmProps;
	isActive?: boolean;
	isMuted?: boolean;
	onMouseEnter: (id: string) => void;
	onMouseLeave: () => void;
}

function Card({ film, isActive = false, isMuted = true, onMouseEnter, onMouseLeave }: CardProps): React.JSX.Element {
  const { name, previewImage, alt, id, previewVideoLink } = film;

  const handleMouseEnter = useCallback(() => {
    onMouseEnter(id);
  }, [id, onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    onMouseLeave();
  }, [onMouseLeave]);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} data-active={isActive}>
      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer posterImage={previewImage} link={previewVideoLink} isMuted={isMuted} />
        ) : (
          <img src={previewImage} alt={alt} />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}/${id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}

const CardMemo = React.memo(Card);

export default CardMemo;
