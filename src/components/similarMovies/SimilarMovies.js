import React from "react";
import PropTypes from "prop-types";
import SimilarMovieItem from "./SimilarMovieItem";

const SimilarMovies = ({ similarMovies }) => {
  return similarMovies.map((similarMovie) => (
    <SimilarMovieItem similarMovie={similarMovie} key={similarMovie.id} />
  ));
};

SimilarMovies.propTypes = {
  similarMovies: PropTypes.array.isRequired,
};

export default SimilarMovies;
