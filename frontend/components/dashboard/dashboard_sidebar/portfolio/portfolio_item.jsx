import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import MiniChart from '../../../charts/mini_chart/mini_chart';

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
      loading: true,
    };

    this.fetchChart = this.fetchChart.bind(this);
    this.fetchPrice = this.fetchPrice.bind(this);
  }

  componentDidMount() {
    this.fetchChart(this.props.symbol);
    this.fetchPrice(this.props.symbol);
    this.setState({ loading: false });
  }

  fetchChart(symbol) {
    fetch(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1D`)
    .then(res => {
      // debugger
      return(
        res.json()
        )
      }
    )
    .then(
      (result) => {
        debugger
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

  render() {
    if (this.state.chart.data === null) {
      return <div>loading...</div>
    } else {
      return (
        <Link to={`/stocks/${this.props.symbol}`} className="portfolio-row">
          <div className="portfolio-item-left">
            <div className="stock-symbol">{this.props.symbol}</div>
            <div className="holdings">{this.props.holdings} Shares</div>
          </div>
          <MiniChart
            chart={this.state.chart.data}
          />
        <div className="stock-price">${this.state.price.data}</div>
        </Link>
      )
    }
  }
}

export default withRouter(PortfolioItem);
