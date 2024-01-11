import { useEffect } from 'react';
import './add-review.css';
import { Link, Navigate, useParams } from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import { AppRoute } from '../../enums/app-route';
import AddReviewForm from '../../components/add-review-form/add-review-form';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { fetchFilmByIdAction } from '../../store/api-actions';
import { Spinner } from '../../components/spinner/spinner';
import PageNotFound from '../page-not-found/page-not-found';
import { getFilm, getIsLoadingFilm } from '../../store/movie-process/movie-process.selectors';

export default function AddReview(): JSX.Element {
  const { id = '' } = useParams();
  const dispatch = useAppDispatch();
  const film = useAppSelector(getFilm);
  const isLoading = useAppSelector(getIsLoadingFilm);

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (id) {
        dispatch(fetchFilmByIdAction(id));
      }
    }
    return () => {
      isMounted = false;
    };
  }, [id, dispatch]);

  if (isLoading && !film) {
    return <Spinner />;
  }
  if (!film) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return film ? (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name} />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <Logo />
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Films}/${film.id}`} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.Films}/${film.id}${AppRoute.Review}`} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
          <UserBlock />
        </header>
        <FilmCardPoster size={'small'} src={film.posterImage} alt={film.name} />
      </div>
      <AddReviewForm filmId={film.id} />
    </section>
  ) : (
    <PageNotFound />
  );
}
