import React from 'react';
import Footer from '../../components/footer/footer';
import Catalog from '../../components/catalog/catalog';
import FilmCard from '../../components/film-card/film-card';
import { IFilmDetailsProps } from '../../types/film-type';

interface IMainPageProps {
	films: IFilmDetailsProps[];
}

export default function MainPage({ films }: IMainPageProps): JSX.Element {
  return (
    <React.Fragment>
      <FilmCard film={films[0]} />
      <div className="page-content">
        <Catalog films={films} />
        <Footer />
      </div>
    </React.Fragment>
  );
}
