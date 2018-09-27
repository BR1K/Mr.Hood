import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class WatchlistItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      price: {
        data: null,
        error: null,
      },
      chart: {
        data: null,
        error: null,
      },
      loading: true,
    };

    this.fetchChart = this.fetchChart.bind(this);
    this.fetchPrice = this.fetchPrice.bind(this);
  }

  componentDidMount() {
    this.fetchPrice(this.props.symbol);
    this.setState({ loading: false });
  }
  fetchPrice(symbol) {
    fetch(`https://api.iextrading.com/1.0/stock/${symbol}/price`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          price: { data: result }
        });
      },
      (error) => {
        this.setState({
          chart: { error }
        });
      }
    )
  }

  render() {
    return(
      <Link to={`/stocks/${this.props.symbol}`} className="portfolio-row">
        <div>{this.props.symbol}</div>
        <div>{this.state.price.data}</div>
      </Link>
    )
  }
}

export default withRouter(WatchlistItem);
