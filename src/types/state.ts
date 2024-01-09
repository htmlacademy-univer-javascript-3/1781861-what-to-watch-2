import { store } from '../store';
import { UserData } from './auth.ts';
import { AuthStatus } from '../enums/AuthStatus.ts';
import { ALL_GENRES } from '../const/genres.ts';
import { IReviewProps } from './review-type.ts';
import { IFilmProps, IFilmDetailsProps, IFilmPromo } from './film-type.ts';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcessState = {
	authorizationStatus: AuthStatus;
	user: UserData | null;
}

export type FilmsProcessState = {
	films: IFilmProps[];
	activeGenre: string | typeof ALL_GENRES;
	genreFilms: IFilmProps[];
	promoFilm: IFilmPromo | null;
	isLoadingList: boolean;
	favoriteFilms: IFilmProps[];
}

export type FilmProcessState = {
	currentFilm: IFilmDetailsProps | null;
	isLoadingFilm: boolean;
	similarFilms: IFilmProps[];
	reviews: IReviewProps[];
}
