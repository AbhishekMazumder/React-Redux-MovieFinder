import React, { Component } from 'react';
import {
	searchMovie,
	fetchMovies,
	setLoading,
} from '../../actions/searchAction';

import { connect } from 'react-redux';

class SearchForm extends Component {
	handleInput = e => {
		this.props.searchMovie(e.target.value);
	};

	handleSubmit = (e) => {
    e.preventDefault();
		this.props.fetchMovies(this.props.text);
		this.props.setLoading();
	};

	render() {
		return (
			<div className="jumbotron jumbotron-fluid py-5 mb-3 text-center">
				<div className="container">
					<h1 className="display-4 mb-3">
						<i className="fas fa-search"></i> Search For Movies & Shows...
					</h1>
					<form id="searchForm" onSubmit={this.handleSubmit}>
						<input
							type="text"
							className="form-control"
							placeholder="Enter the movie name. Ex: Rambo"
							onChange={this.handleInput}
						/>
						<button className="btn btn-primary mt-3">Submit</button>
					</form>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	text: state.movies.text,
});

export default connect(mapStateToProps, {
	searchMovie,
	fetchMovies,
	setLoading,
})(SearchForm);
