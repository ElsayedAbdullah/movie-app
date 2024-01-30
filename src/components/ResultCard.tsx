import { useMovieContext } from "../context/GlobalContext";
import { IMovie } from "../interface";
import * as actions from "../context/ActionsType";

interface IProps {
  movie: IMovie;
}

const ResultCard = ({ movie }: IProps) => {
  const MovieContext = useMovieContext();
  const storedMovie = MovieContext.watchlist.find(
    (m) => m.imdbID === movie.imdbID
  );
  const storedMovieWatched = MovieContext.watched.find(
    (m) => m.imdbID === movie.imdbID
  );

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img src={movie.Poster} alt={movie.Title} />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>
      <div className="info">
        <h3 className="title">{movie.Title}</h3>
        <p className="release-date">{movie.Year ? movie.Year : "-"}</p>
        <div className="controls">
          <button
            disabled={watchlistDisabled}
            onClick={() =>
              MovieContext.dispatch &&
              MovieContext.dispatch({
                type: actions.ADD_MOVIE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="btn"
          >
            Add to Watchlist
          </button>
          <button
            disabled={watchedDisabled}
            onClick={() =>
              MovieContext.dispatch &&
              MovieContext.dispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="btn"
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
