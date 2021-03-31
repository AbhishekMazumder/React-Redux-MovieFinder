import React, { Component } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/home/Landing';

import store from './store';
import { Provider } from 'react-redux';
import { HashRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './components/home/MovieDetails';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Router>
						<Navbar />
						<Route exact path="/" component={Landing} />
						<Route path="/movie/:id" component={MovieDetails}></Route>
						<Footer />
					</Router>
				</div>
			</Provider>
		);
	}
}

export default App;
