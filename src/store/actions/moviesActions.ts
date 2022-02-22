import * as Types from './actionTypes';
import { TMovie } from '../../api/models';

export interface IFetchMoviesAction {
  type: typeof Types.FETCH_MOVIES;
  keyword: string;
}

export const fetchMovies = (keyword: string): IFetchMoviesAction => ({
  type: Types.FETCH_MOVIES,
  keyword,
});

export interface IFetchMoviesSuccessAction {
  type: typeof Types.FETCH_MOVIES_SUCCESS;
  payload: TMovie[];
}

export interface IFetchMoviesFailureAction {
  type: typeof Types.FETCH_MOVIES_FAILURE;
  error: string;
}

export interface IFetchMovieBYIdAction {
  type: typeof Types.FETCH_MOVIE_BYID;
  id: string;
}

export const fetchMovieBYId = (id: string): IFetchMovieBYIdAction => ({
  type: Types.FETCH_MOVIE_BYID,
  id,
});

export interface IFetchMovieBYIdSuccessAction {
  type: typeof Types.FETCH_MOVIE_BYID_SUCCESS;
  payload: TMovie;
}

export interface IFetchMovieBYIdFailureAction {
  type: typeof Types.FETCH_MOVIE_BYID_FAILURE;
  error: string;
}

export type MoviesAction =
  | IFetchMoviesAction
  | IFetchMoviesSuccessAction
  | IFetchMoviesFailureAction
  | IFetchMovieBYIdAction
  | IFetchMovieBYIdSuccessAction
  | IFetchMovieBYIdFailureAction;
