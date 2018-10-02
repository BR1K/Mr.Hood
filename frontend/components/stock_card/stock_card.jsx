import React    from 'react';
import { Link, withRouter } from 'react-router-dom';
import StockCardChart1 from '../charts/stock_card_chart/stock_card_chart_container1';
import { currencyFormatter } from '../../util/formatter';

class StockCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      price: {
        data: null,
        error: null,
        loading: true,
      },
      chart: {
        data: null,
        error: null,
        loading: true,
      },
      company: {
        data: null,
        error: null,
        loading: true,
      },
      quote: {
        data: null,
        error: null,
        loading: true,
      },
      refresh: null,
    };

    this.fetchChart = this.fetchChart.bind(this);
    this.fetchPrice = this.fetchPrice.bind(this);
    this.fetchCompany = this.fetchCompany.bind(this);
    this.fetchQuote = this.fetchQuote.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }



  componentDidMount() {
    this.fetchChart(this.props.symbol);
    this.fetchPrice(this.props.symbol);
    this.fetchCompany(this.props.symbol);
    this.fetchQuote(this.props.symbol);
    const refresh = setInterval(this.updatePrice, 5000)
    this.setState({
      refresh: refresh,
    })
  }

  componentWillUnmount() {
    clearInterval(this.state.refresh);
  }

  fetchChart(symbol) {
    fetch(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1D`)
    .then(res => {
      return(
        res.json()
        )
      }
    )
    .then(
      (result) => {
        this.setState({
          chart: { data: result, loading: false }
        });
      },
      (error) => {
        this.setState({
          chart: { error },
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
          price: { data: result, loading: false }
        });
      },
      (error) => {
        this.setState({
          price: { error }
        });
      }
    )
  }

  fetchCompany(symbol) {
    fetch(`https://api.iextrading.com/1.0/stock/${symbol}/company`)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          company: { data: result, loading: false }
        });
      },
      (error) => {
        this.setState({
          company: { error }
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
          quote: { data: result, loading: false }
        });
      },
      (error) => {
        this.setState({
          quote: { error }
        });
      }
    )
  }


  updatePrice() {
    this.fetchPrice(this.props.symbol)
  }

  render() {
    let kolor;

    if (this.state.price.loading || this.state.chart.loading || this.state.company.loading || this.state.quote.loading) {
      return <div>loading...</div>
    } else {

      let quote = this.state.quote.data;
      if (quote.open > quote.latestPrice) {
        kolor = '#f45531';
      } else {
        kolor = "#21ce99";
      }
      let priceColor = {color: kolor}

      return (

        <Link to={`/stocks/${this.props.symbol}`} className="stock-card">
          <div className="stock-card-header">
            <div className="stock-card-name">{this.state.company.data.companyName}</div>
            <div className="stock-card-symbol">{this.props.symbol}</div>
          </div>
          <div className="stock-card-body">
            <StockCardChart1
              chart={this.state.chart.data}
              kolor={kolor}
            />
          <div style={priceColor} className="stock-card-price">{currencyFormatter.format(this.state.price.data)}</div>
          </div>
        </Link>
      )
    }
  }


}

export default withRouter(StockCard);
