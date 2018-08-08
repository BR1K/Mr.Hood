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
    // if (this.state.searchInput.length === 0) {
    //   this.props.resetStocks();
    // }
  }



  componentWillUnmount() {
    this.setState({ searchInput: ""});
    // this.props.resetStocks();
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
        <div key={i}>
          <Link to={`/stocks/${result.symbol}`}>{result.symbol}</Link>
        </div>
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

        <section className="search-results">
          {results}
        </section>
      </div>
    );



  }

}

export default withRouter(Search);
