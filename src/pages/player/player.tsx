import { useEffect, useCallback, useRef, useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import { AppRoute } from '../../enums/app-route';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { fetchFilmByIdAction } from '../../store/api-actions';
import { getFilm, getIsLoadingFilm } from '../../store/movie-process/movie-process.selectors';
import { Spinner } from '../../components/spinner/spinner';
import PageNotFound from '../page-not-found/page-not-found';
import { calcRemainingTime } from '../../utilites/format-date-time';

export default function Player(): JSX.Element {
  const { id = '' } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isLoading = useAppSelector(getIsLoadingFilm);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [timeLeft, setTimeLeft] = useState<null | string>(null);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current === null) {
      return;
    }
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgress = () => {
    if (videoRef.current === null) {
      return;
    }
    const duration = videoRef.current.duration;
    const currentTime = videoRef.current.currentTime;
    const newProgress = (currentTime / duration) * 100;
    setProgress(newProgress);
    setTimeLeft(calcRemainingTime(duration, currentTime));
  };

  const handleFullSrceen = () => {
    if (videoRef.current === null) {
      return;
    }
    videoRef.current.requestFullscreen();
  };

  const handleSlider = (clientX: number) => {
    if (videoRef.current === null || sliderRef.current === null) {
      return;
    }
    const newProgress = clientX / sliderRef.current.clientWidth;
    setProgress(newProgress * 100);
    videoRef.current.currentTime = videoRef.current.duration * newProgress;
    handleProgress();
  };

  const handleExit = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      if (id && id !== film?.id) {
        dispatch(fetchFilmByIdAction(id));
      }
    }

    return () => {
      isMounted = false;
    };
  }, [id, dispatch, film?.id]);

  if (isLoading) {
    return <Spinner size="large"/>;
  }

  if (!film && !id) {
    return <Navigate to={AppRoute.NotFound} />;
  }
  return film ? (
    <div className="player">
      <video src={film.videoLink} className="player__video" poster={film.posterImage} ref={videoRef} autoPlay onTimeUpdate={handleProgress} />
      <Link to={`${AppRoute.Films}/${film.id}`} onClick={handleExit} type="button" className="player__exit" >Exit</Link>
      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time" ref={sliderRef} onClick={(e) => {
            handleSlider(e.clientX - 25);
          }}
          >
            <progress className="player__progress" value={progress} max="100" />
            <div className="player__toggler" style={{ left: `${progress}%` }}>
              Toggler
            </div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>
        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={togglePlay}>
            <svg viewBox="0 0 19 19" width={19} height={19}>
              <use xlinkHref={isPlaying ? '#pause' : '#play-s'}></use>
            </svg>
            <span>{isPlaying ? 'Pause' : 'Play'}</span>
          </button>
          <div className="player__name">{film.name}</div>
          <button type="button" className="player__full-screen" onClick={handleFullSrceen}>
            <svg viewBox="0 0 27 27" width={27} height={27}>
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <PageNotFound />
  );
}
