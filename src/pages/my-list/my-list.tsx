import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import { IFilmDetailsProps } from '../../types/film-type';
import FilmsList from '../../components/film-list/film-list';

type MyListProps = {
	films: IFilmDetailsProps[];
}

export default function MyList({ films }: MyListProps): JSX.Element {
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
        <FilmsList films={films} />
      </section>
      <Footer />
    </div>
  );
}
