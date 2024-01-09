import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state.ts';
import { AxiosInstance } from 'axios';
import { IFilmDetailsProps, IFilmPromo, IFilmProps } from '../types/film-type.ts';
import { redirectToRoute } from './action.ts';
import { IAddUserReview, IReviewProps, IUserReview } from '../types/review-type.ts';
import { AppRoute } from '../enums/app-route.ts';
import { AuthData, UserData } from '../types/auth.ts';
import { FavoriteStatus } from '../enums/favorite-status.ts';

export const fetchFilmsAction = createAsyncThunk<IFilmProps[], undefined, {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
}>(
  '/films',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<IFilmProps[]>('/films');
    return data;
  },
);

export const fetchFilmByIdAction = createAsyncThunk<
    IFilmDetailsProps,
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      '/films/id',
      async (id: string, { extra: api }) => {
        const { data } = await api.get<IFilmDetailsProps>(`/films/${id}`);
        return data;
      },
    );

export const fetchSimilarFilmsAction = createAsyncThunk<
    IFilmProps[],
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      '/films/id/similar',
      async (id: string, { extra: api }) => {
        const { data } = await api.get<IFilmProps[]>(`/films/${id}/similar`);
        return data;
      },
    );

export const fetchFavoriteFilmsAction = createAsyncThunk<
    IFilmProps[],
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      '/favorite',
      async (_arg, { extra: api }) => {
        const { data } = await api.get<IFilmProps[]>('/favorite');
        return data;
      }
    );

export const fetchFilmPromoAction = createAsyncThunk<
    IFilmPromo,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      '/promo',
      async (_arg, { extra: api }) => {
        const { data } = await api.get<IFilmPromo>('/promo');
        return data;
      },
    );

export const fetchFilmReviewsAction = createAsyncThunk<
    IReviewProps[],
    string,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>('/comments/id', async (id, { extra: api }) => {
      const { data } = await api.get<IReviewProps[]>(`/comments/${id}`);
      return data;
    },
    );


export const checkAuthStatus = createAsyncThunk<
    UserData,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>(
  'user/login',
  async (_arg, { extra: api }) => {
    const { data } = await api.get<UserData>('/login');
    return data;
  },
);

export const loginAction = createAsyncThunk<
    UserData,
    AuthData,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>(
  '/login',
  async ({ email, password }, { dispatch, extra: api }) => {
    const { data } = await api.post<UserData>(
      '/login',
      {
        email,
        password,
      }
    );

    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  },
);

export const logoutAction = createAsyncThunk<
    void,
    undefined,
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }
>(
  '/logout',
  async (_arg, { extra: api }) => {
    await api.delete('/logout');
  },
);

export const addCommentAction = createAsyncThunk<void, IAddUserReview, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
}>(
  'addCommentAction',
  async ({ movieId, comment, rating }, { dispatch, extra: api }) => {
    await api.post<IUserReview>(`comments/${movieId}`, { comment, rating });
    dispatch(redirectToRoute(`${AppRoute.Films}/${movieId}`));
  },
);

export const changeFavoriteStatus = createAsyncThunk<
    void,
    { filmId: string; status: FavoriteStatus },
    {
        dispatch: AppDispatch;
        state: State;
        extra: AxiosInstance;
    }>(
      'favorite/status',
      async ({ filmId, status }, { extra: api }) => {
        await api.post(`/favorite/${filmId}/${status}`);
      },
    );
