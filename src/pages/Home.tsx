import React, { DetailedHTMLProps, FC, InputHTMLAttributes, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TMovie } from 'src/api/models';
import { fetchMovies } from '../store/actions/moviesActions';
import { AppState } from '../store/reducers/rootReducer';
import Thumb from '../components/Thumb';


export const Home: FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = useState<string>('');
  const refInput = useRef<any>(null);

  const { movies, loading, error } = useSelector((state: AppState) => state.movieReducer);
  useEffect(() => {}, []);

  useEffect(() => {
    if (error.length > 0) {
      setMessage(error);
    }
  }, [error]);

  const onKeyPress = (e: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
    setMessage('');
    if (e.key === 'Enter') {
      if (refInput.current.value.length === 0) {
        setMessage('Please type a movie name');
      } else {
        dispatch(fetchMovies(refInput.current.value));
      }
    }
  };

  const onItemClick = (id: string) => {
    history.push(`/detail/${id}`);
  };

  return (
    <div className='content'>
      <div className='searc-container'>
        <input ref={refInput} type='search' placeholder='Search movies...' onKeyPress={onKeyPress} />
      </div>
      {message.length > 0 && <div className='error'>{message}</div>}
      {!loading && movies.length > 0 && (
        <div className='list'>
          {movies.map((item: TMovie) => (
            <div onClick={() => onItemClick(item.imdbID)} className='item' key={item.imdbID}>
              <Thumb item={item} />
            </div>
          ))}
        </div>
      )}

      {movies.length === 0 && <div className='empty-state'></div>}
    </div>
  );
};

export default Home;
