import React, { FC } from 'react';
import { TMovie } from '../../api/models';

export interface Props {
  item: TMovie;
}

export const Thumb: FC<Props> = ({ item }) => {
  return (
    <>
      <img src={item.Poster} />
      <div className='info'>
        <p className='title'>
          {item.Title}
          <br />
          {item.Year}
        </p>
        <div className='like'></div>
      </div>
    </>
  );
};
export default Thumb;
