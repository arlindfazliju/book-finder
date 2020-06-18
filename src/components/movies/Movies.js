import React from "react";
import MovieItem from "./MovieItem";
import Spinner from "../layout/Spinner";
import PropTypes from "prop-types";

const Movies = ({ movies, loading }) => {
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

Movies.propTypes = {
  movies: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Movies;
