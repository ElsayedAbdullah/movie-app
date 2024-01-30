import axios from "axios";
import { useEffect, useState } from "react";
import ResultCard from "./ResultCard";
import { IMovie } from "../interface";

const Add = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState<IMovie[]>([]);

  const getMovies = async () => {
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${search}&apikey=${
          import.meta.env.VITE_MOVIE_API_KEY
        }`
      );
      const data = response.data;
      if (data.Search) {
        setMovies(data.Search);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getMovies();
  }, [search]);

  return (
    <div className="container">
      <div className="add-content">
        <h1 className="heading">Add movies by Search Movie Name</h1>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="search a movie"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <ul className="results">
          {movies.length ? (
            <>
              {movies.map((movie) => (
                <ResultCard key={movie.imdbID} movie={movie} />
              ))}
            </>
          ) : null}
        </ul>
      </div>
    </div>
  );
};

export default Add;
