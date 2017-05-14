import React, { Component } from 'react';
import './Vacay.css';

class Add extends Component {
  static protoTypes = {
    onAdd: React.PropTypes.func.isRequired,
  }

  onChangeCountry = (e) => {
    this.setState({
      country: e.target.value,
    });
  }

  onChangeYear = (e) => {
    this.setState({
      year: e.target.value,
    });
  }

  onSubmit = (e) => {
    e.preventDefault();

    this.props.onAdd({ country: this.state.country, year: this.state.year});

    this.setState({
      country: "",
      year: "",
    });
  }

  constructor(props) {
    super(props);

    this.state = {
      country: "",
      year: ""
    };
  }

  render() {
    return (
      <form className="add" onSubmit={this.onSubmit}>
      <input
        type="text"
        placeholder="Country"
        value={this.state.country}
        onChange={this.onChangeCountry}
      />
      <input
        type="text"
        placeholder="Year"
        value={this.state.year}
        onChange={this.onChangeYear}
      />
      <input
        type="submit"
        value="submit"
      />
      </form>
      );
   }
}

export default Add;
