import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MovieCard extends Component {
	render() {
		const { movie } = this.props;
		return (
			<div className="col-10 mx-auto col-sm-6 col-md-4 col-lg-3 mb-5">
				<div className="card card-body bg-dark text-center h-100">
					<img className="w-100 mb-2" src={movie.Poster} alt={movie.Title} />
					<h5 className="text-light card-title">
						{movie.Title} - {movie.Year}
					</h5>
					<Link to={"/movie/" + movie.imdbID} className="btn btn-primary">
						Movie Details <i className="fas fa-chevron-right"></i>
					</Link>
				</div>
			</div>
		);
	}
}

export default MovieCard;
