import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Movies from "./components/movies/Movies";
import Movie from "./components/movies/Movie";
import Search from "./components/movies/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    movies: [],
    movie: {},
    similarMovies: [],
    loading: false,
    alert: null,
  };

  // Top Movies
  // async componentDidMount() {
  //   const apikey = "api_key=45da259fded58b912541575fd67e0cd4";
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.themoviedb.org/3/movie/top_rated?${apikey}&language=en-US&page=1`
  //   );
  //   this.setState({ movies: res.data.results, loading: false });
  // }

  // Search Movies
  searchMovies = async (text) => {
    const apikey = "api_key=45da259fded58b912541575fd67e0cd4";
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?${apikey}&query=${text}&page=1&include_adult=true`
    );
    this.setState({ movies: res.data.results, loading: false });
  };

  // Get single movie
  getMovie = async (movie_id) => {
    const apikey = "api_key=45da259fded58b912541575fd67e0cd4";
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?${apikey}`
    );
    this.setState({ movie: res.data, loading: false });
  };

  // Ger similar movies
  getSimilarMovies = async (movie_id) => {
    const apikey = "api_key=45da259fded58b912541575fd67e0cd4";
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/similar?${apikey}&page=1`
    );
    this.setState({ similarMovies: res.data.results, loading: false });
  };

  // Clear Movies from state
  clearMovies = () => this.setState({ movies: [], loading: false });

  // set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    const { movies, loading, alert, movie, similarMovies } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchMovies={this.searchMovies}
                      clearMovies={this.clearMovies}
                      showClear={movies.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Movies loading={loading} movies={movies} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/movie/:id"
                render={(props) => (
                  <Movie
                    {...props}
                    getMovie={this.getMovie}
                    getSimilarMovies={this.getSimilarMovies}
                    movie={movie}
                    similarMovies={similarMovies}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
