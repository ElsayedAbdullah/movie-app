export interface IMovie {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface IAction {
  type: string;
  payload: IMovie;
}

export interface IInitState {
  watchlist: IMovie[];
  watched: IMovie[];
  dispatch?: React.Dispatch<IAction>;
}
