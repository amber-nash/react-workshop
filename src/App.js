import React, { Component } from 'react';
import './App.css';
import Vacay from './components/Vacay.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div
            className="app-bar"
          >
            <nav><h1>Vacation Time</h1></nav>
          </div>
          <h2>Your Trips</h2>
          <ul>
            <Vacay
            country="Bora Bora"
            year="2018"
            />
            <Vacay
            country="Greece"
            year="2019"
            />
            <Vacay
            country="Belize"
            year="2019"
            />
          </ul>
        </div>
    );
  }
}

export default App;
