import React, { useContext } from "react";
import MovieItem from "./MovieItem";
import Spinner from "../layout/Spinner";
import TmdbContext from "../../context/tmdb/tmdbContext";

const Movies = () => {
  const tmdbContext = useContext(TmdbContext);

  const { loading, movies } = tmdbContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="grid-3">
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
};

export default Movies;
