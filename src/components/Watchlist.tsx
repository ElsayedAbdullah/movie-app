import { useMovieContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";

const Watchlist = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watch List</h1>
          <div className="count-pill">
            {MovieContext.watchlist.length}{" "}
            {MovieContext.watchlist.length === 1 ? " Movie" : " Movies"}
          </div>
        </div>
        {MovieContext.watchlist.length ? (
          <div className="movie-grid">
            {MovieContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies to show, please add.</h2>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
