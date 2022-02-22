import { AxiosResponse } from 'axios';
import { call, put, all, takeEvery } from 'redux-saga/effects';
import * as API from '../../api/services';
import * as Types from '../actions/actionTypes';
import { TSearchParam, TMovieIdParam, TAxiosResponse } from '../../api/models';

function* fetchMoviesSaga({ keyword }: TSearchParam) {
  try {
    const { data }: AxiosResponse<TAxiosResponse> = yield call(API.getMovies, keyword);
    if (data.Response === 'True') {
      yield put({ type: Types.FETCH_MOVIES_SUCCESS, payload: data.Search });
    } else {
      yield put({ type: Types.FETCH_MOVIES_FAILURE, error: data.Error });
    }
  } catch (e: any) {
    yield put({ type: Types.FETCH_MOVIES_FAILURE, error: e.message });
  }
}

function* fetchMovieByIdSaga({ id }: TMovieIdParam) {
  try {
    const { data }: AxiosResponse<TAxiosResponse> = yield call(API.getMovieById, id);
    yield put({ type: Types.FETCH_MOVIE_BYID_SUCCESS, payload: data });
  } catch (e: any) {
    yield put({ type: Types.FETCH_MOVIE_BYID_FAILURE, error: e.message });
  }
}

export default function* rootSaga() {
  yield all([takeEvery(Types.FETCH_MOVIES, fetchMoviesSaga), takeEvery(Types.FETCH_MOVIE_BYID, fetchMovieByIdSaga)]);
}
