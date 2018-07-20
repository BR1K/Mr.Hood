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
      this.setState({

      })
    }
    this.setState({
      searchInput: e.target.value
    }, () => {
      this.timeOut = setTimeout(() => this.props.fetchStocks(this.state.searchInput), 400)
    // }, () => {
    //   this.clearSearch()
    }
  );

  }

  // clearSearch() {
  //   this.setState({
  //     searchInput: ""
  //   });
  // }

  matches() {
    const matches = [];
    if (this.state.searchInput.length === 0) {
      return [];
    }

    this.props.stocks.forEach(stock => {
      let sub = stock.symbol.slice(0, this.state.searchInput.length);
      if (sub.toLowerCase() === this.state.searchInput.toLowerCase()) {
        matches.push(stock);
      }
    });

    if (matches.length === 0) {
      matches.push({symbol: 'No stock found with that symbol 😒'});
    }

    return matches;
  }

  render() {
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
