import { AxiosResponse } from 'axios';
import api from '../api';
import { TAxiosResponse } from './models';

export const getMovies = async (keyword: string): Promise<AxiosResponse<TAxiosResponse, any>> => await api.get<TAxiosResponse>(`?apikey=${process.env.API_KEY}&s=${keyword}`);
export const getMovieById = async (id: string): Promise<AxiosResponse<TAxiosResponse, any>> => await api.get<TAxiosResponse>(`?apikey=${process.env.API_KEY}&i=${id}`);

