import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { IFilmDetailsProps } from '../../types/film-type';
import MovieOverview from '../movie-overview/movie-overview';
import MovieDetails from '../movie-details/movie-details';
import MovieReviews from '../movie-reviews/movie-reviews';
import { IReviewProps } from '../../types/review-type';

const TABS = ['Overview', 'Details', 'Reviews'] as const;

type Tab = typeof TABS[number];

type tabsProps = {
  film: IFilmDetailsProps;
  reviews: IReviewProps[];
}

function Tabs({ film, reviews }: tabsProps): JSX.Element {
  const [activeTab, setActiveTab] = useState<Tab>(TABS[0]);

  const handleSetActiveTab = useCallback(
    (tab: Tab) => () => {
      setActiveTab(tab);
    }, []);

  useEffect(() => {
    setActiveTab(TABS[0]);
  }, [film.id]);

  const component = useMemo(() => {
    switch (activeTab) {
      case 'Overview':
        return <MovieOverview film={film} />;
      case 'Details':
        return <MovieDetails film={film} />;
      case 'Reviews':
        return <MovieReviews reviews={reviews} />;
      default:
        return null;
    }
  }, [activeTab, film, reviews]);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {TABS.map((tab) => (
            <li key={tab} className={`film-nav__item ${tab === activeTab ? 'film-nav__item--active' : ''}`}>
              <div className="film-nav__link" onClick={handleSetActiveTab(tab)}>
                {tab}
              </div>
            </li>
          ))}
        </ul>
      </nav>
      {component}
    </div>
  );
}

const TabsMemo = React.memo(Tabs);

export default TabsMemo;
