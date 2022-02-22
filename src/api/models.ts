export type TMovie = {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: Rating[];
  Metascore: string;
  imdbRating: string;
};

type Rating = {
  Source: string;
  Value: string;
};

export type TSearchParam = { keyword: string; type: string };
export type TMovieIdParam = { id: string; type: string };

export type TAxiosResponse = {
  Search: TMovie[];
  Response: string;
  Error: string;
  totalResults: number;
}

export const initialMovie = {
  imdbID: '',
  Title: '',
  Year: '',
  Rated: '',
  Released: '',
  Runtime: '',
  Genre: '',
  Director: '',
  Writer: '',
  Actors: '',
  Plot: '',
  Language: '',
  Country: '',
  Awards: '',
  Poster: '',
  Ratings: [],
  Metascore: '',
  imdbRating: '',
};
