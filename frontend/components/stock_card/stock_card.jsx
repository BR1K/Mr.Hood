import React    from 'react';
import { Link, withRouter } from 'react-router-dom';
import StockCardChart1 from '../charts/stock_card_chart/stock_card_chart_container1';

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
      // loading: true,
      refresh: null,
    };

    this.fetchChart = this.fetchChart.bind(this);
    this.fetchPrice = this.fetchPrice.bind(this);
    this.fetchCompany = this.fetchCompany.bind(this);
  }



  componentDidMount() {
    this.fetchChart(this.props.symbol);
    this.fetchPrice(this.props.symbol);
    this.fetchCompany(this.props.symbol);
    // this.props.fetchPeerPrice(this.props.peer)
    //   .then(() => this.props.fetchPeerStats(this.props.peer))
    //   .then(() => this.props.fetchPeerCompany(this.props.peer))
    //   .then(() => this.props.fetchPeerChart(this.props.peer, "1D"))
    //   .then(() => {
    //     const refresh = setInterval(this.updatePrice, 5000);
    //     this.setState({
    //       refresh: refresh,
    //       loading: false
    //     });
    //   }
    // )
  }

  // componentWillUnmount() {
  //   clearInterval(this.state.refresh);
  // }

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
    debugger
  }


  // updatePrice() {
  //
  //   const currentPrice = this.props.price;
  //   this.props.fetchPeerPrice(this.props.peer).then(
  //     newPrice => {
  //       if (currentPrice !== newPrice) {
  //         this.props.price = newPrice
  //       }
  //     }
  //   )
  // }

  render() {
    if (this.state.price.loading || this.state.chart.loading || this.state.company.loading) {
      return <div>loading...</div>
    } else {
      return (

        <Link to={`/stocks/${this.props.symbol}`} className="stock-card">
          <div className="stock-card-header">
            <div className="stock-card-name">{this.state.company.data.companyName}</div>
            <div className="stock-card-symbol">{this.props.symbol}</div>
          </div>
          <div className="stock-card-body">
            <StockCardChart1
              chart={this.state.chart.data}
            />
          <div className="stock-card-price">${this.state.price.data}</div>
          </div>
        </Link>
      )
    }
  }


}

export default withRouter(StockCard);
