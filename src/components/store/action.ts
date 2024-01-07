import { createAction, PayloadAction } from '@reduxjs/toolkit';

export interface SetActiveGenrePayload {
	genre: string;
}

export const setActiveGenre = createAction<SetActiveGenrePayload>('setActiveGenre');

export const getMoviesGenre = createAction('getMoviesGenre');

export type SetActiveGenreAction = PayloadAction<SetActiveGenrePayload>;

export type GetMoviesGenreAction = ReturnType<typeof getMoviesGenre>;
