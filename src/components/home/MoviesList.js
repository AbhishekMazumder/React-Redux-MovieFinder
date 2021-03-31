import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCard from './MovieCard'

export class MoviesList extends Component {
	render() {
		const { movies } = this.props;
		const renderList =
			movies.length > 0
				? movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
				: null;
		return (
			<div className="container">
				<div className="row">{renderList}</div>
			</div>
		);
    
	}
}

const mapStateToProps = state => ({
	movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesList);
