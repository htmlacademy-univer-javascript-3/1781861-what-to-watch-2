import './film-card-poster.css';

type FilmCardPosterProps = {
	size?: string;
	src?: string;
	alt?: string;
};

function FilmCardPoster({ size = '', src = '', alt = '', }: FilmCardPosterProps): JSX.Element {
  const computedClass = `film-card__poster ${size ? `film-card__poster--${size}` : ''
  }`;
  return (
    <div className={computedClass}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default FilmCardPoster;
