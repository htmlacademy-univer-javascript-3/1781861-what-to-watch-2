import { State } from '../../types/state.ts';
import { IFilmDetailsProps } from '../../types/film-type.ts';
import { IReviewProps } from '../../types/review-type.ts';
import { NameSpace } from '../../enums/name-spaces.ts';

export const getFilm = (state: State): IFilmDetailsProps | null => state[NameSpace.Film].currentFilm;
export const getIsLoadingFilm = (state: State): boolean => state[NameSpace.Film].isLoadingFilm;
export const getReviews = (state: State): IReviewProps[] => state[NameSpace.Film].reviews;
