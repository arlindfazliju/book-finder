import React, { useReducer } from "react";
import axios from "axios";
import TmdbContext from "./tmdbContext";
import TmdbReducer from "./tmdbReducer";
import {
  SEARCH_MOVIES,
  SET_LOADING,
  CLEAR_MOVIES,
  GET_MOVIE,
  GET_SIMILAR_MOVIES,
} from "../types";

const TmdbState = (props) => {
  const initialState = {
    movies: [],
    movie: {},
    similarMovies: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(TmdbReducer, initialState);

  // Search Movies
  const searchMovies = async (text) => {
    const apikey = "api_key=45da259fded58b912541575fd67e0cd4";
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?${apikey}&query=${text}&page=1&include_adult=true`
    );
    dispatch({
      type: SEARCH_MOVIES,
      payload: res.data.results,
    });
  };

  // Get Single Movie
  const getMovie = async (movie_id) => {
    const apikey = "api_key=45da259fded58b912541575fd67e0cd4";
    setLoading(true);
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?${apikey}`
    );
    dispatch({
      type: GET_MOVIE,
      payload: res.data,
    });
  };

  // Get Similar Movies
  const getSimilarMovies = async (movie_id) => {
    const apikey = "api_key=45da259fded58b912541575fd67e0cd4";
    setLoading();
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?${apikey}&page=1`
    );
    dispatch({
      type: GET_SIMILAR_MOVIES,
      payload: res.data.results,
    });
  };

  // Clear Movies
  const clearMovies = () => dispatch({ type: CLEAR_MOVIES });

  // Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <TmdbContext.Provider
      value={{
        movies: state.movies,
        movie: state.movie,
        similarMovies: state.similarMovies,
        loading: state.loading,
        searchMovies,
        clearMovies,
        getMovie,
        getSimilarMovies,
      }}
    >
      {props.children}
    </TmdbContext.Provider>
  );
};

export default TmdbState;
