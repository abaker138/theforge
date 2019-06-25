import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav.js';
import Body from './Components/Body/Body.js';
import Reviews from './Components/Reviews/Reviews.js';

class App extends Component {
	constructor () {
		super ()
		this.state= {
			reviews: []
		}
	}
render () {
  return (
    <div className="App">
      <Nav />
      <Body />
      <Reviews />
    </div>
  );
}
}

export default App;
