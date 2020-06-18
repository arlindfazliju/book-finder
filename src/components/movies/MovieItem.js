import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MovieItem = ({ movie: { id, title, poster_path, release_date } }) => {
  return (
    <div className="card text-center">
      <img
        src={`${image_path}${poster_path}`}
        alt=""
        style={{ width: "150px" }}
      />
      <h2>{title}</h2>
      <h3>{release_date}</h3>
      <div>
        <Link to={`/movie/${id}`} className="btn btn-light btn-sm my-1">
          Lexo rreth ketij filmi
        </Link>
      </div>
    </div>
  );
};

const image_path = "https://image.tmdb.org/t/p/w500";

MovieItem.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieItem;
