import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Navbar from './navbar/navbar';
//import Home from './home'; change this to our file configuration

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<p> Kid On Stage Skeletor Site </p>
				{/* <Route path="/" component={ Home }/> */}
			</div>
		);
	}
}

export default App;
