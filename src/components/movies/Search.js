import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchMovies: PropTypes.func.isRequired,
    clearMovies: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Ju lutem shkruani nje titull filmi", "danger");
    } else {
      this.props.searchMovies(this.state.text);
      this.setState({ text: "" });
    }
  };

  onChange = (e) => {
    this.setState({ text: e.target.value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit} className="form">
          <input
            type="text"
            name="text"
            placeholder="Kerko Filmin..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Kerko"
            className="btn btn-dark btn-block"
          />
        </form>
        {this.props.showClear && (
          <button
            className="btn btn-light btn-block"
            onClick={this.props.clearMovies}
          >
            Fshij rezultatet
          </button>
        )}
      </div>
    );
  }
}

export default Search;
