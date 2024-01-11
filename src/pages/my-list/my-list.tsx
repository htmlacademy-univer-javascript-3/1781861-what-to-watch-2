import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import UserBlock from '../../components/user-block/user-block';
import FilmsList from '../../components/film-list/film-list';
import { useAppSelector } from '../../hook/store';
import { useEffect } from 'react';
import { fetchFavoriteFilmsAction } from '../../store/api-actions.ts';
import { useAppDispatch } from '../../hook/store';
import { State } from '../../types/state.ts';
import { NameSpace } from '../../enums/name-spaces.ts';
import { IFilmProps } from '../../types/film-type.ts';

export default function MyList(): JSX.Element {
  const dispatch = useAppDispatch();
  const getFavoriteFilms = (state: Pick<State, NameSpace.Films>): IFilmProps[] => state[NameSpace.Films].favoriteFilms;
  const favoriteFilms = useAppSelector(getFavoriteFilms);

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      dispatch(fetchFavoriteFilmsAction());
    }

    return () => {
      isMounted = false;
    };
  }, [dispatch]);

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
