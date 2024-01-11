import {ThunkDispatch} from '@reduxjs/toolkit';
import {Action} from 'redux';
import {datatype, name, internet, commerce, lorem} from 'faker';
import { ALL_GENRES } from '../const/genres';
import {AuthStatus} from '../enums/auth-status';
import { createApi } from '../service/api';
import {State} from '../types/state';
import { Token } from '../service/token';
import {AuthData, UserData} from '../types/auth';
import { IReviewProps } from '../types/review-type';
import { IFilmPromo, IFilmDetailsProps, IFilmProps } from '../types/film-type';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;

export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);

export const createFakeUser = (): AuthData => ({
  email: internet.email(),
  password: internet.password()
} as AuthData);

export const createFakeToken = (): Token => datatype.uuid();

export const createUser = {
  id: datatype.number(),
  email: internet.email(),
  token: datatype.uuid(),
  name: name.firstName(),
  avatarUrl: internet.url(),
} as UserData;

export const createFilm = (): IFilmProps => ({
  id: datatype.uuid(),
  name: name.title(),
  previewImage: internet.url(),
  previewVideoLink: internet.url(),
  genre: name.gender(),
  alt: name.title(),
} as IFilmProps);

export const createCurrentFilm = (): IFilmDetailsProps => ({
  id: datatype.uuid(),
  name: name.title(),
  posterImage: internet.url(),
  backgroundImage: internet.url(),
  videoLink: internet.url(),
  genre: name.title(),
  alt: name.title(),
  released: datatype.number(),
  isFavorite: true,
  backgroundColor: commerce.color(),
  description: lorem.words(10),
  rating: datatype.number(),
  scoresCount: datatype.number(),
  director: name.firstName(),
  starring: [name.title()],
  runTime: datatype.number(),
} as IFilmDetailsProps);

export const createPromoFilm = (): IFilmPromo => ({
  id: datatype.uuid(),
  name: name.title(),
  posterImage: internet.url(),
  backgroundImage: internet.url(),
  videoLink: internet.url(),
  genre: name.title(),
  alt: name.title(),
  released: datatype.number(),
  isFavorite: true,
} as IFilmPromo);

export const createReview = (): IReviewProps => ({
  id: datatype.uuid(),
  date: String(datatype.datetime()),
  user: name.title(),
  comment: lorem.words(10),
  rating: datatype.number(),
} as IReviewProps);


export const createFakeStore = (initialState?: Partial<State>): State => ({
  USER: {authorizationStatus: AuthStatus.NoAuth, user: null, hasError: false},
  FILM: {
    currentFilm: null,
    isLoadingFilm: true,
    similarFilms: [],
    reviews: [],
  },
  FILMS: {
    films: [],
    activeGenre: ALL_GENRES,
    genreFilms: [],
    promoFilm: null,
    isLoadingList: true,
    favoriteFilms: [],
    isPromoLoading: false,
  },
  ...initialState ?? {},
});
