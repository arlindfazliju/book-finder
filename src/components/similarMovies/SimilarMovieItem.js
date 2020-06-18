import React from "react";
import PropTypes from "prop-types";

const SimilarMovieItem = ({ similarMovie }) => {
  return (
    <div className="card text-center">
      <img
        src={`${image_path}${similarMovie.poster_path}`}
        alt=""
        style={{ width: "150px" }}
      />
      <h2>{similarMovie.title}</h2>
      <h3>{similarMovie.release_date}</h3>
      <div>
        <a
          href={`/movie/${similarMovie.id}`}
          className="btn btn-light btn-sm my-1"
        >
          Lexo rreth ketij filmi
        </a>
      </div>
    </div>
  );
};

const image_path = "https://image.tmdb.org/t/p/w500";

SimilarMovieItem.propTypes = {
  similarMovie: PropTypes.object.isRequired,
};

export default SimilarMovieItem;
