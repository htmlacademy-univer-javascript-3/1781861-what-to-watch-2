import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import FilmsList from '../../components/film-list/film-list';
import { useAppSelector } from '../../hook/store';
import { AuthStatus } from '../../enums/auth-status';
import { getAuthStatus } from '../../store/user-process/user-process.selectors';
import { AppRoute } from '../../enums/app-route';
import { getFavoriteFilms } from '../../store/movies-process/movies-process.selectors';


export default function MyList(): JSX.Element {
  const authStatus = useAppSelector(getAuthStatus);
  const isAuth = authStatus === AuthStatus.Auth;
  const navigate = useNavigate();
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  if (!isAuth) {
    navigate(AppRoute.Login);
  }

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
        <UserBlock />
      </header>
      <section className='catalog'>
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList films={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}
