import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MiniChart from '../../../charts/mini_chart/mini_chart';
import { currencyFormatter } from '../../../../util/formatter';
import { BeatLoader } from 'halogenium';

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
      quote: {
        data: null,
        error: null,
      },
      loading: true,
    };

    this.fetchChart = this.fetchChart.bind(this);
    this.fetchPrice = this.fetchPrice.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
    this.marketSignal = this.marketSignal.bind(this);
  }

  componentDidMount() {
    this.fetchChart(this.props.symbol);
    this.fetchPrice(this.props.symbol);
    this.fetchQuote(this.props.symbol);
    this.setState({ loading: false });
  }

  fetchChart(symbol) {
    fetch(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1D`)
    .then(res => {
      //
      return(
        res.json()
        )
      }
    )
    .then(
      (result) => {

        this.setState({
          chart: { data: result }
        });
      },
      (error) => {
        this.setState({
          price: { error }
        });
      }
    )
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

  fetchQuote(symbol) {
    fetch(`https://api.iextrading.com/1.0/stock/${symbol}/quote`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          quote: { data: result }
        });
      },
      (error) => {
        this.setState({
          quote: { error }
        });
      }
    )
  }

  marketSignal() {
    let quote = this.state.quote.data;
    if (quote.open > quote.latestPrice) {
      return 'bearish';
    } else {
      return 'bullish';
    }
  }

  render() {

    if (this.state.chart.data === null || this.state.quote.data === null) {
      return (
        <div className="portfolio-row">
          <div className="loading-icon-portfolio-row">
            <BeatLoader
              size="10px"
              color="#21ce99"
              />
          </div>
        </div>
      )
    } else {

      let color;
      if (this.marketSignal() === 'bearish') {
        color = '#f45531';
      } else {
        color = "#21ce99";
      }

      return (
        <Link to={`/stocks/${this.props.symbol}`} className="portfolio-row">
          <div className="stock-symbol">{this.props.symbol}</div>
          <MiniChart
            chart={this.state.chart.data}
            color={color}
          />
          <div className="stock-price">{currencyFormatter.format(this.state.price.data)}</div>
        </Link>
      )
    }
  }
}

export default withRouter(WatchlistItem);
