import './add-review.css';
import { Link, Navigate, useParams } from 'react-router-dom';
import UserBlock from '../../components/user-block/user-block';
import Logo from '../../components/logo/logo';
import FilmCardPoster from '../../components/film-card-poster/film-card-poster';
import { IFilmDetailsProps } from '../../types/film-type';
import { AppRoute } from '../../enums/AppRoute';
import AddReviewForm from '../../components/add-review-form/add-review-form';

type AddReviewProps = {
	films: IFilmDetailsProps[];
};

export default function AddReview({ films }: AddReviewProps): JSX.Element {
  const { id = '' } = useParams();
  const film = films.find((f) => f.id === Number(id));

  if (!film) {
    return <Navigate to={AppRoute.NotFound} />;
  }

  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
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
        <FilmCardPoster size={'small'} src={film.backgroundImg} alt={film.alt} />
      </div>
      <AddReviewForm onSubmit={() => console.log('Yep')} />
    </section>
  );
}
