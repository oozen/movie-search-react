import * as Types from '../actions/actionTypes';
import { TMovie, initialMovie } from '../../api/models';
import * as actions from '../actions/moviesActions';

interface IState {
  movies: TMovie[];
  movie: TMovie;
  loading: boolean;
  error: string;
}

const initialState: IState = {
  movies: [],
  movie: initialMovie,
  loading: false,
  error: '',
};

export default function moviesReducer(state: IState = initialState, action: actions.MoviesAction): IState {
  switch (action.type) {
    case Types.FETCH_MOVIES:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        movies: action.payload,
      };
    case Types.FETCH_MOVIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case Types.FETCH_MOVIE_BYID:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case Types.FETCH_MOVIE_BYID_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        movie: action.payload,
      };
    case Types.FETCH_MOVIE_BYID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}
