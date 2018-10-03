import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
    this.handleInput = this.handleInput.bind(this);
    this.clearState = this.clearState.bind(this);
  }

  handleInput(e) {
    // e.stopPropagation();
    if (this.timeOut) {
      clearTimeout(this.timeOut);
    }
    this.setState({
      searchInput: e.target.value
    }, () => {
      this.timeOut = setTimeout(() => this.props.fetchStocks(this.state.searchInput), 400)
      // this.timeOut = setTimeout(() => this.props.searchStocks(this.state.searchInput), 400)
      }
    );
    // if (this.state.searchInput.length === 0) {
    //   this.props.resetStocks();
    // }
  }

  clearState () {
    this.setState({ searchInput: '' })
  }



  componentWillUnmount() {
    this.setState({ searchInput: "" });
    // this.props.resetStocks();
  }

  render() {

    const results = this.props.searchedStocks.map((result, i) => {
      
      return (
        <Link to={`/stocks/${result.symbol}`}>
          <li
            key={i}
            onClick={this.clearState}>{result.symbol}
          </li>
        </Link>
      );
    });

    if (this.state.searchInput === "") {
      return (
        <div className="search-container">
          <input
            onChange={this.handleInput}
            value={this.state.searchInput}
            placeholder='Search by stock symbol'
            className="search-bar">
          </input>

        </div>
      )
    }


    return(
      <div className="search-container">
        <input
          onChange={this.handleInput}
          value={this.state.searchInput}
          placeholder='Search by stock symbol'
          className="search-bar">
        </input>

        <ul className="search-results">
          {results}
        </ul>
      </div>
    );



  }

}

export default withRouter(Search);
