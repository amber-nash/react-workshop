import React, { Component } from 'react';
import './App.css';
import Vacay from './components/Vacay.js';
import Add from './components/Add.js';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        vacays: [
        { country: "Bora Bora", year: "2018"},
        { country: "Greece", year: "2019"},
        { country: "Belize", year: "2019"}
      ],
    };
  }

  onAddVacay = (vacay) => {
    this.setState({
      vacays: this.state.vacays.concat([vacay]),
    });
  }
  render() {
    return (
      <div className="App">
          <div
            className="app-bar"
          >
            <nav><h1>Vacation Time</h1></nav>
          </div>
          <h2>Your Trips</h2>
          <Add
            onAdd={this.onAddVacay}
           />
          <ul>
          {
            this.state.vacays.map(vacay =>
              <Vacay
                key={vacay.country}
                country={vacay.country}
                year={vacay.year}
              />
             )
            }
          </ul>
        </div>
    );
  }
}

export default App;
