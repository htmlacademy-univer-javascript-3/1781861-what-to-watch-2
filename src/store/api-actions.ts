import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { IFilmProps, IFilmPromo, IFilmDetailsProps } from '../types/film-type';
import { IReviewProps } from '../types/review-type';
import { ALL_GENRES } from '../const/genres';

import { fetchFavoriteFilms, fetchFilmById, fetchFilmReviews, fetchFilms, fetchPromoFilm, fetchSimilarFilms, getMoviesGenre, setActiveGenre, setIsLoadingFilm, setIsLoadingFilms } from './action';

export const fetchFilmsAction = createAsyncThunk<void, undefined, { dispatch: AppDispatch; state: State; extra: AxiosInstance }>('/films',
  async (_arg, { dispatch, extra: api }) => {
    try {
      dispatch(setIsLoadingFilms(true));
      const { data } = await api.get<IFilmProps[]>('/films');
      dispatch(fetchFilms(data));
      dispatch(setActiveGenre({ genre: ALL_GENRES }));
      dispatch(getMoviesGenre());
    } catch (e) {
      console.log(e);
    } finally {
      dispatch(setIsLoadingFilms(false));
    }
  },
);

export const fetchFilmByIdAction = createAsyncThunk<
	void,
	string,
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}>(
	  '/films/id',
	  async (id: string, { dispatch, extra: api }) => {
	    try {
	      dispatch(setIsLoadingFilm(true));
	      const { data } = await api.get<IFilmDetailsProps>(`/films/${id}`);
	      dispatch(fetchFilmById(data));
	    } catch (e) {
	      console.log(e);
	    } finally {
	      dispatch(setIsLoadingFilm(false));
	    }
	  },
	);

export const fetchSimilarFilmsAction = createAsyncThunk<
	void,
	string,
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}>(
	  '/films/id/similar',
	  async (id: string, { dispatch, extra: api }) => {
	    try {
	      const { data } = await api.get<IFilmProps[]>(`/films/${id}/similar`);

	      dispatch(fetchSimilarFilms(data));
	    } catch (e) {
	      console.log(e);
	    }
	  },
	);

export const fetchFavoriteFilmsAction = createAsyncThunk<
	void,
	undefined,
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}>(
	  '/favorite',
	  async (_arg, { dispatch, extra: api }) => {
	    try {
	      const { data } = await api.get<IFilmProps[]>('/favorite');
	      dispatch(fetchFavoriteFilms(data));
	    } catch (e) {
	      console.error(e);
	    }
	  }
	);

export const fetchFilmPromoAction = createAsyncThunk<
	void,
	undefined,
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}>(
	  '/promo',
	  async (_arg, { dispatch, extra: api }) => {
	    const { data } = await api.get<IFilmPromo>('/promo');
	    dispatch(fetchPromoFilm(data));
	  },
	);

export const fetchFilmReviewsAction = createAsyncThunk<
	void,
	string,
	{
		dispatch: AppDispatch;
		state: State;
		extra: AxiosInstance;
	}>(
	  '/comments/id',
	  async (id, { dispatch, extra: api }) => {
	    try {
	      dispatch(setIsLoadingFilms(true));

	      const { data } = await api.get<IReviewProps[]>(`/comments/${id}`);

	      dispatch(fetchFilmReviews(data));
	    } catch (e) {
	      console.log(e);
	    } finally {
	      dispatch(setIsLoadingFilms(false));
	    }
	  },
	);
