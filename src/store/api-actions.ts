import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.ts';
import { AxiosInstance } from 'axios';
import { IFilmDetailsProps, IFilmPromo, IFilmProps } from '../types/film-type.ts';
import { redirectToRoute } from './action.ts';
import { IAddUserReview, IReviewProps, IUserReview } from '../types/review-type.ts';
import { AppRoute } from '../enums/app-route.ts';
import { AuthData, UserData } from '../types/auth.ts';
import { FavoriteStatus } from '../enums/favorite-status.ts';

export const loginAction = createAsyncThunk<UserData, AuthData,{dispatch: AppDispatch; state: State; extra: AxiosInstance}>
('USER/login',
  async ({email, password}, { dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(
      AppRoute.Login,
      {email, password}
    );
    dispatch(redirectToRoute(AppRoute.Main));
    return data;
  },
);

export const logoutAction = createAsyncThunk<void, undefined,{bdispatch: AppDispatch; state: State; extra: AxiosInstance}>
('USER/logout',
  async (_arg, { extra: api}) => {
    await api.delete(AppRoute.Logout);
  },
);

export const checkAuthStatusAction = createAsyncThunk<UserData, undefined,{dispatch: AppDispatch; state: State; extra: AxiosInstance}>
('USER/checkAuth',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<UserData>(AppRoute.Login);
    return data;
  },
);

export const fetchFilmsAction = createAsyncThunk<IFilmProps[], undefined, {dispatch: AppDispatch; state: State; extra: AxiosInstance}>
('FILMS/getFilms',
  async (_arg, {extra: api}) => {
    const { data } = await api.get<IFilmProps[]>(AppRoute.Films);
    return data;
  },
);

export const fetchFilmByIdAction = createAsyncThunk<IFilmDetailsProps, string, { dispatch: AppDispatch; state: State; extra: AxiosInstance}>
('FILMS/getFilmById',
  async (id: string, { extra: api}) => {
    const { data } = await api.get<IFilmDetailsProps>(`${AppRoute.Films}/${id}`);
    return data;
  },
);

export const fetchSimilarFilmsAction = createAsyncThunk<IFilmProps[], string, { dispatch: AppDispatch; state: State; extra: AxiosInstance}>
('FILMS/fetchSimilarFilms',
  async (id: string, { extra: api}) => {
    const { data } = await api.get<IFilmProps[]>(`${AppRoute.Films}/${id}/similar`);
    return data;
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<IFilmProps[], undefined, {dispatch: AppDispatch;state: State;extra: AxiosInstance}>
('FILMS/fetchFavoriteFilms',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<IFilmProps[]>('/favorite');
    return data;
  }
);

export const fetchFilmPromoAction = createAsyncThunk<IFilmPromo, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance}>
('FILMS/fetchPromoFilm',
  async (_arg, { extra: api}) => {
    const { data } = await api.get<IFilmPromo>('/promo');
    return data;
  },
);

export const fetchFilmReviewsAction = createAsyncThunk<IReviewProps[], string,{dispatch: AppDispatch;state: State; extra: AxiosInstance}>
('FILM/getReviews',
  async (id, {extra: api}) => {
    const { data } = await api.get<IReviewProps[]>(`/comments/${id}`);
    return data;
  },
);

export const addCommentAction = createAsyncThunk<void, IAddUserReview, {dispatch: AppDispatch;state: State;extra: AxiosInstance}>
('FILM/addComment',
  async ({filmId, comment, rating}, {extra: api}) => {
    await api.post<IUserReview>(`comments/${filmId}`, {comment, rating});
  },
);

export const changeFavoriteStatusAction = createAsyncThunk<void, {filmId: string; status: FavoriteStatus},{ dispatch: AppDispatch; state: State; extra: AxiosInstance}>
('FILM/changeFavoriteStatus',
  async ({filmId, status}, { extra: api}) => {
    await api.post(`/favorite/${filmId}/${status}`);
  },
);
