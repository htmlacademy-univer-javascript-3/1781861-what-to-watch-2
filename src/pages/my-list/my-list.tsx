import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import FilmsList from '../../components/film-list/film-list';
import { useAppSelector } from '../../hook/store';
import { getFilms } from '../../store/movies-process/movies-process.selectors';


export default function MyList(): JSX.Element {
  const films = useAppSelector(getFilms);
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">
					My list <span className="user-page__film-count">{films.length}</span>
        </h1>
        <UserBlock />
      </header>
      <section className='catalog'>
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList />
      </section>
      <Footer />
    </div>
  );
}
