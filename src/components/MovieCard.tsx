import { IMovie } from "../interface";
import MovieControl from "./MovieControl";

interface IProps {
  movie: IMovie;
  type: string;
}

const MovieCard = ({ movie, type }: IProps) => {
  return (
    <div className="movie-card">
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filler-poster"></div>
      )}
      <MovieControl movie={movie} type={type} />
    </div>
  );
};

export default MovieCard;
