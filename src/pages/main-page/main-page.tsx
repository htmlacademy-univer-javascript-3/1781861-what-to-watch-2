import React, { useEffect } from 'react';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import FilmCard from '../../components/film-card/film-card';
import { useAppDispatch, useAppSelector } from '../../hook/store';
import { fetchFilmPromoAction } from '../../store/api-actions';
import { getPromoFilm } from '../../store/movies-process/movies-process.selectors';

export default function MainPage(): JSX.Element | null {
  const dispatch = useAppDispatch();
  const promoFilm = useAppSelector(getPromoFilm);

  useEffect(() => {
    dispatch(fetchFilmPromoAction());
  }, [dispatch]);

  if (!promoFilm) {
    return null;
  }

  return (
    <React.Fragment>
      <FilmCard film={promoFilm} />
      <div className="page-content">
        <Catalog />
        <Footer />
      </div>
    </React.Fragment>
  );
}
