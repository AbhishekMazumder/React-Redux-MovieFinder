import { SEARCH_MOVIE } from './types';
import { FETCH_MOVIES } from './types';
import { FETCH_MOVIE_DETAILS, LOADING } from './types';
import axios from 'axios';

import { APIKey } from '../APIkey';

export const searchMovie = text => dispatch => {
	dispatch({
		type: SEARCH_MOVIE,
		payload: text,
	});
};

export const fetchMovies = text => dispatch => {
	axios
		.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
		.then(response =>
			dispatch({
				type: FETCH_MOVIES,
				payload: response.data.Search,
			})
		)
		.catch(err => console.log(err));
};

// FETCHING SINGLE MOVIE DETAILS
export const fetchMovieDetails = id => dispatch => {
	axios
		.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
		.then(response =>
			dispatch({
				type: FETCH_MOVIE_DETAILS,
				payload: response.data,
			})
		)
		.catch(err => console.log(err));
};

export const setLoading = () => {
	return {
		type: LOADING,
	};
};
