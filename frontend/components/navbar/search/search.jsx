import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({
      searchInput: e.target.value
    }, () => {
      this.timeOut = setTimeout(() => this.props.fetchStocks(this.state.searchInput), 400)
      }
    );

  }



  componentWillUnmount() {
    this.setState({ searchInput: ""})
  }


  render() {
    if (this.state.searchInput === "") {
      return (
        <div>
          <input
            onChange={this.handleInput}
            value={this.state.searchInput}
            placeholder='Search by stock symbol'
            className="search-bar">
          </input>
          <ul>
          </ul>
        </div>
      )
    }

    const results = this.props.stocks.map((result, i) => {
      return (
        <li key={i}>
          <Link to={`/stocks/${result.id}`}>{result.symbol}</Link>
        </li>
      );
    });


    return(
      <div>
        <input
          onChange={this.handleInput}
          value={this.state.searchInput}
          placeholder='Search by stock symbol'
          className="search-bar">
        </input>

        <ul>
          {results}
        </ul>
      </div>
    );



  }

}

export default Search
