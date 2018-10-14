import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MiniChart from '../../../charts/mini_chart/mini_chart';
import { currencyFormatter, numberFormatter } from '../../../../util/formatter';
import { BeatLoader } from 'halogenium';

class PortfolioItem extends React.Component {
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
      refresh: null,
    };

    this.fetchChart = this.fetchChart.bind(this);
    this.fetchPrice = this.fetchPrice.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
    this.marketSignal = this.marketSignal.bind(this);
  }

  myFunc(price, symbol) {
    let holdings = this.props.holdings;
    let value = holdings * price;

    this.props.portfolioValue(value, symbol);
  }

  componentDidMount() {
    this.fetchChart(this.props.symbol);
    this.fetchPrice(this.props.symbol);
    this.fetchQuote(this.props.symbol);
    const refresh = setInterval(this.updatePrice, 5000)
    this.setState({
      refresh: refresh,
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.refresh);
  }

  updatePrice() {
    this.fetchPrice(this.props.symbol)
  }

  // stockValue = () => {
  //   let holdings = this.props.holdings;
  //   let price = this.state.price.data;
  //   let value = holdings * price;
  //   this.props.portfolioValue()
  // };

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
          chart: { error }
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
          price: { error }
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
      this.myFunc(this.state.price.data, this.props.symbol);
      let color;
      if (this.marketSignal() === 'bearish') {
        color = '#f45531';
      } else {
        color = "#21ce99";
      }
      return (
        <Link to={`/stocks/${this.props.symbol}`} className="portfolio-row">
          <div className="portfolio-item-left">
            <div className="stock-symbol">{this.props.symbol}</div>
            <div className="holdings">{numberFormatter.format(this.props.holdings)} Shares</div>
          </div>
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

export default withRouter(PortfolioItem);
