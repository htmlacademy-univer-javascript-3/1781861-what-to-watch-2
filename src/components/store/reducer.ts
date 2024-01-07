import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { ALL_GENRES } from '../../const/genres';
import { FilmList as filmsList } from '../../mocks/films';
import { getMoviesGenre, setActiveGenre } from './action';
import { IFilmDetailsProps } from '../../types/film-type';

interface IState {
	films: IFilmDetailsProps[];
	genre: string;
	genreMovies: IFilmDetailsProps[];
}

const initState: IState = {
  films: filmsList,
  genre: ALL_GENRES,
  genreMovies: filmsList,
};

export const reducer = createReducer(initState, (builder) => {
  builder
    .addCase(setActiveGenre, (state, action: PayloadAction<{ genre: string }>) => {
      const { genre } = action.payload;
      state.genre = genre;
    })
    .addCase(getMoviesGenre, (state) => {
      state.genreMovies = state.genre === ALL_GENRES ? filmsList : filmsList.filter((film) => film.genre === state.genre);
    });
});
