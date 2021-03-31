import React, { Component } from 'react';
import {connect} from 'react-redux';
import SearchForm from './SearchForm';
import Spinner from '../layout/Spinner';
import MoviesList from './MoviesList';

export class Landing extends Component {
  render() {
    const {loading} = this.props;
    return (
      <div>
        <SearchForm />
        {loading ? <Spinner /> : <MoviesList />}
      </div>
    )
  }
}

const mapStateToProps=(state)=>({
  loading: state.movies.loading,
})

export default connect(mapStateToProps)(Landing)
