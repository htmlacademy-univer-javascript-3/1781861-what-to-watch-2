import { State } from '../../types/state.ts';
import { NameSpace } from '../../const/name-spaces.ts';
import { IFilmProps, IFilmPromo } from '../../types/film-type.ts';

export const getFilms = (state: State): IFilmProps[] => state[NameSpace.Films].films;
export const getFilmsByGenre = (state: State): IFilmProps[] => state[NameSpace.Films].genreFilms;
export const getIsLoadingList = (state: State): boolean => state[NameSpace.Films].isLoadingList;
export const getActiveGenre = (state: State): string => state[NameSpace.Films].activeGenre;
export const getPromoFilm = (state: State): IFilmPromo | null => state[NameSpace.Films].promoFilm;
