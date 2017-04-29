import React, { Component } from 'react';
import './Vacay.css';

class Vacay extends Component {
  static propTypes = {
    country: React.PropTypes.string.isRequired,
    year: React.PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);

    this.state = {
      favorited: false,
    };
  }
onClickFavorite = () => {
  this.setState({
    favorited: !this.state.favorited,
  });
}
render() {
  const favoriteClass = this.state.favorited ? 'enabled' : '';

  return (
    <li
      className="vacay"
    >
      <div>
        <span className={`favorite ${favoriteClass}`}
        onClick={this.onClickFavorite}/>
        {this.props.country}  - Travel year: {this.props.year}
      </div>
    </li>
  );
 }
}

export default Vacay;
