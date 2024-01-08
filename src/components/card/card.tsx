import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { IFilmProps } from '../../types/film-type';
import { AppRoute } from '../../enums/AppRoute';
import VideoPlayer from '../videoplayer/videoplayer';


type CardProps = {
	film: IFilmProps;
	isActive?: boolean;
	isMuted?: boolean;
	onMouseEnter: (id: number) => void;
	onMouseLeave: () => void;
}

export default function Card({ film, isActive = false, isMuted = true, onMouseEnter, onMouseLeave }: CardProps): JSX.Element {
  const { name, previewImg, alt, id, previewVideoLink } = film;
  const handleMouseEnter = useCallback(() => {
    onMouseEnter(id);
  }, [id, onMouseEnter]);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave} data-active={isActive}>
      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer postImg={previewImg} link={previewVideoLink} isMuted={isMuted} />
        ) : (
          <img src={previewImg} alt={alt} />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}/${film.id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}
