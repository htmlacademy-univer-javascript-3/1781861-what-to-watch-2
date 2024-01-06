import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { IFilmDetailsProps } from '../../types/film-type';
import { AppRoute } from '../../enums/AppRoute';

type MoviePageProps = {
	films: IFilmDetailsProps[];
}

export default function MoviePageReviews({ films }: MoviePageProps): JSX.Element {
  const { id = '' } = useParams();
  const film = films.find((f) => f.id === Number(id));
  if (!film) {
    return <Navigate to={AppRoute.NotFound} />;
  }
  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        {/* <div className="film-card__hero">
					<div className="film-card__bg">
						<img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
					</div>
					<h1 className="visually-hidden">WTW</h1>
					<Header />
					<div className="film-card__wrap">
						<div className="film-card__desc">
							<h2 className="film-card__title">The Grand Budapest Hotel</h2>
							<p className="film-card__meta">
								<span className="film-card__genre">Drama</span>
								<span className="film-card__year">2014</span>
							</p>
						</div>
					</div>
				</div> */}
        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            {/* <FilmCardPoster src={film.backgroundImg} alt={film.alt} /> */}
            <div className="film-card__desc">
              {/* <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav> */}
              <div className="film-card__reviews film-card__row">
                <div className="film-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&quot;s funniest and most exquisitely designed films in years.</p>
                      <footer className="review__details">
                        <cite className="review__author">Kate Muir</cite>
                        <time className="review__date" dateTime="2016-12-24">December 24, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">8,9</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">Anderson&quot;s films are too precious for some, but for those of us willing to lose ourselves in them, they&quot;re a delight. &rdquo;The Grand Budapest Hotel&rdquo; is no different, except that he has added a hint of gravitas to the mix, improving the recipe.</p>

                      <footer className="review__details">
                        <cite className="review__author">Bill Goodykoontz</cite>
                        <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">8,0</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">I didn&quot;t find it amusing, and while I can appreciate the creativity, it&quot;s an hour and 40 minutes I wish I could take back.</p>
                      <footer className="review__details">
                        <cite className="review__author">Amanda Greever</cite>
                        <time className="review__date" dateTime="2015-11-18">November 18, 2015</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">8,0</div>
                  </div>
                </div>
                <div className="film-card__reviews-col">
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>
                      <footer className="review__details">
                        <cite className="review__author">Matthew Lickona</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">7,2</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>
                      <footer className="review__details">
                        <cite className="review__author">Paula Fleri-Soler</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">7,6</div>
                  </div>
                  <div className="review">
                    <blockquote className="review__quote">
                      <p className="review__text">It is certainly a magical and childlike way of storytelling, even if the content is a little more adult.</p>
                      <footer className="review__details">
                        <cite className="review__author">Paula Fleri-Soler</cite>
                        <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
                      </footer>
                    </blockquote>
                    <div className="review__rating">7,0</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmsList films={films} />
        </section>
        <Footer />
      </div> */}
    </React.Fragment>
  );
}
