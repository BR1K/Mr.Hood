import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class Watchlist extends React.Component {

  constructor(props) {
    super(props);

    this.watchlistItems = this.watchlistItems.bind(this);
  }

  componentDidMount() {
    this.props.fetchWatchlist()
    .then(() => this.props.fetchStocks())
    .then(() => this.props.fetchWatchlist())
  }

  watchlistItems() {
    let symbols = Object.keys(this.props.watchlist);
    let watchlist = [];
    for (let i = 0; i < symbols.length; i++) {
      let symbol = symbols[i];
      watchlist.push (
        <Link to={`/stocks/${symbol}`} className="portfolio-row" key={i}>
          {symbol}
        </Link>
      )
    }

    return watchlist;
  }

  render() {

    return(

      <ul className="watchlist">
        <h3 className="portfolio-header">Watchlist</h3>
        <div className="portfolio-body">
          {this.watchlistItems()}
        </div>
      </ul>
    )
  }
}

export default withRouter(Watchlist);
