import React from 'react';
import MoviesCard from '../../components/movies-card/movies-card';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
// import UserBlock from '../user-block/user-block';

interface MainPageProps {
	promoFilm: {
		title: string;
		genre: string;
		year: number;
	};
}

function MainPage({ promoFilm }: MainPageProps): JSX.Element {
	const { title, genre, year } = promoFilm;
	const movies = [
		{ imgScr: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', title: 'Fantastic Beasts: The Crimes of Grindelwald' },
		{ imgScr: 'img/bohemian-rhapsody.jpg', title: 'Bohemian Rhapsody' },
		{ imgScr: 'img/macbeth.jpg', title: 'Macbeth' },
		{ imgScr: 'img/aviator.jpg', title: 'Aviator' },
		{ imgScr: 'img/we-need-to-talk-about-kevin.jpg', title: 'We need to talk about Kevin' },
		{ imgScr: 'img/what-we-do-in-the-shadows.jpg', title: 'What We Do in the Shadows' },
		{ imgScr: 'img/revenant.jpg', title: 'Revenant' },
		{ imgScr: 'img/johnny-english.jpg', title: 'Johnny English' },
		{ imgScr: 'img/shutter-island.jpg', title: 'Shutter Island' },
		{ imgScr: 'img/pulp-fiction.jpg', title: 'Pulp Fiction' },
		{ imgScr: 'img/no-country-for-old-men.jpg', title: 'No Country for Old Men' },
		{ imgScr: 'img/snatch.jpg', title: 'Snatch' },
		{ imgScr: 'img/moonrise-kingdom.jpg', title: 'Moonrise Kingdom' },
		{ imgScr: 'img/seven-years-in-tibet.jpg', title: 'Seven Years in Tibet' },
		{ imgScr: 'img/midnight-special.jpg', title: 'Midnight Special' },
		{ imgScr: 'img/war-of-the-worlds.jpg', title: 'War of the Worlds' },
		{ imgScr: 'img/dardjeeling-limited.jpg', title: 'Dardjeeling Limited' },
		{ imgScr: 'img/orlando.jpg', title: 'Orlando' },
		{ imgScr: 'img/mindhunter.jpg', title: 'Mindhunter' },
		{ imgScr: 'img/midnight-special.jpg', title: 'Midnight Special' },
	];
	return (
		<React.Fragment>
			<div className="visually-hidden">
			</div>
			<section className="film-card">
				<div className="film-card__bg">
					<img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
				</div>

				<h1 className="visually-hidden">WTW</h1>
				<Header />
				<div className="film-card__wrap">
					<div className="film-card__info">
						<div className="film-card__poster">
							<img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
						</div>

						<div className="film-card__desc">
							<h2 className="film-card__title">{title}</h2>
							<p className="film-card__meta">
								<span className="film-card__genre">{genre}</span>
								<span className="film-card__year">{year}</span>
							</p>

							<div className="film-card__buttons">
								<button className="btn btn--play film-card__button" type="button">
									<svg viewBox="0 0 19 19" width="19" height="19">
										<use xlinkHref="#play-s"></use>
									</svg>
									<span>Play</span>
								</button>
								<button className="btn btn--list film-card__button" type="button">
									<svg viewBox="0 0 19 20" width="19" height="20">
										<use xlinkHref="#add"></use>
									</svg>
									<span>My list</span>
									<span className="film-card__count">9</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="page-content">
				<section className="catalog">
					<h2 className="catalog__title visually-hidden">Catalog</h2>

					<ul className="catalog__genres-list">
						<li className="catalog__genres-item catalog__genres-item--active">
							<a href="#" className="catalog__genres-link">All genres</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Comedies</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Crime</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Documentary</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Dramas</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Horror</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Kids & Family</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Romance</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Sci-Fi</a>
						</li>
						<li className="catalog__genres-item">
							<a href="#" className="catalog__genres-link">Thrillers</a>
						</li>
					</ul>

					<div className="catalog__films-list">
						{movies.map((movie) => (
							<MoviesCard key={movie.title} imgScr={movie.imgScr} title={movie.title} />
						))}
					</div>

					<div className="catalog__more">
						<button className="catalog__button" type="button">Show more</button>
					</div>
				</section>
				<Footer />
			</div>
		</React.Fragment>
	);
}

export default MainPage;
