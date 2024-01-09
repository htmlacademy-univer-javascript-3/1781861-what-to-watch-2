import { combineReducers } from '@reduxjs/toolkit';
import { userProcessSlice } from './user-process/user-process.slice.ts';
import { NameSpace } from '../const/name-spaces.ts';
import { filmProcessSlice } from './movie-process/movie-process.slice.ts';
import { filmsProcessSlice } from './movies-process/movies-process.slice.ts';

export const rootReducer = combineReducers({
  [NameSpace.Film]: filmProcessSlice.reducer,
  [NameSpace.Films]: filmsProcessSlice.reducer,
  [NameSpace.User]: userProcessSlice.reducer,
});
