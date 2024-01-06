import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import { IFilmDetailsProps } from '../../types/film-type';
import { AppRoute } from '../../enums/AppRoute';
import VideoPlayer from '../videoplayer/videoplayer';


type CardProps = {
	film: IFilmDetailsProps;
	isActive?: boolean;
	isMuted?: boolean;
	onMouseEnter: (id: number) => void;
	onMouseLeave: () => void;
}

export default function Card({ film, isActive = false, isMuted = true, onMouseEnter, onMouseLeave }: CardProps): JSX.Element {
  const { name, postImg, alt, id, videoLink, backgroundImg } = film;
  const handleMouseEnter = useCallback(() => {
    onMouseEnter(id);
  }, [id, onMouseEnter]);

  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={handleMouseEnter} onMouseLeave={onMouseLeave} data-active={isActive}>
      <div className="small-film-card__image">
        {isActive ? (
          <VideoPlayer posterImg={backgroundImg} link={videoLink} isMuted={isMuted} />
        ) : (
          <img src={postImg} alt={alt} />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`${AppRoute.Films}/${film.id}`} className="small-film-card__link">{name}</Link>
      </h3>
    </article>
  );
}
