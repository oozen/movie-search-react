import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TMovie } from 'src/api/models';
import { fetchMovieBYId } from '../store/actions/moviesActions';
import { AppState } from '../store/reducers/rootReducer';

const logoImdb = require('../assets/images/logo-imdb.svg').default;
const logoRotten = require('../assets/images/logo-rotten-tomatoes.svg').default;
const heartGrey = require('../assets/images/icon-heart-grey.svg').default;

type TParam = { imdbID: string };

export const Detail: FC<TParam> = () => {
  const params: TParam = useParams();
  const dispatch = useDispatch();
  const [mov, setMov] = useState<TMovie>();
  const [message, setMessage] = useState<string>('');
  const { movie, loading, error } = useSelector((state: AppState) => state.movieReducer);
  useEffect(() => {
    if (params.imdbID && params.imdbID.length > 0) {
      dispatch(fetchMovieBYId(params.imdbID));
    }
  }, [params.imdbID]);

  useEffect(() => {
    if (movie) {
      setMov(movie);
    }
  }, [movie]);

  useEffect(() => {
    if (error.length > 0) {
      setMessage(error);
    }
  }, [error]);

  return (
    <div className='content'>
      {message.length > 0 && <div className='error'>{message}</div>}
      {!loading && mov && (
        <div className='detail-container'>
          <a href='/' className='back'></a>
          <div className='grid'>
            <div className='col'>
              <div className='runtime'>
                {mov.Runtime} &nbsp;&nbsp; {mov.Year}
              </div>
              <h2>{mov.Title}</h2>
              <div className='grid'>
                <div className='col movie-db'>
                  <img className='imdb' src={logoImdb} /> {mov.imdbRating} / 10
                </div>
                <div className='col movie-db'>
                  <img className='rotten' src={logoRotten} /> {mov.Metascore}
                </div>
                <div className='col movie-db'>
                  <img className='favorites' src={heartGrey} /> Add To Favorites
                </div>
              </div>
              <br/>
              <h3>Plot</h3>
              <p>{mov.Plot}</p>
              <div className='grid'>
                <div className='col'>
                  <h3>Cast</h3>
                  <p>{mov.Actors}</p>
                </div>
                <div className='col'>
                  <h3>Genre</h3>
                  <p>{mov.Genre}</p>
                </div>
                <div className='col'>
                  <h3>Director</h3>
                  <p>{mov.Director}</p>
                </div>
              </div>
            </div>
            <div className='col'>
              <img className='poster' src={mov.Poster} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Detail;
