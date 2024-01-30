import { useMovieContext } from "../context/GlobalContext";
import MovieCard from "./MovieCard";

const Watched = () => {
  const MovieContext = useMovieContext();
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watched</h1>
          <div className="count-pill">
            {MovieContext.watched.length}{" "}
            {MovieContext.watched.length === 1 ? " Movie" : " Movies"}
          </div>
        </div>
        {MovieContext.watched.length ? (
          <div className="movie-grid">
            {MovieContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies to show, please add.</h2>
        )}
      </div>
    </div>
  );
};

export default Watched;
