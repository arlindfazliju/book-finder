import React, { useState, useContext } from "react";
import TmdbContext from "../../context/tmdb/tmdbContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const tmdbContext = useContext(TmdbContext);
  const alertContext = useContext(AlertContext);

  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.setAlert("Ju lutem shkruani nje titull filmi", "danger");
    } else {
      tmdbContext.searchMovies(text);
      setText("");
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          placeholder="Kerko Filmin..."
          value={text}
          onChange={onChange}
        />
        <input type="submit" value="Kerko" className="btn btn-dark btn-block" />
      </form>
      {tmdbContext.movies.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={tmdbContext.clearMovies}
        >
          Fshij rezultatet
        </button>
      )}
    </div>
  );
};

export default Search;
