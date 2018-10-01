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


  updatePrice() {

    const currentPrice = this.props.price;
    this.props.fetchPeerPrice(this.props.peer).then(
      newPrice => {
        if (currentPrice !== newPrice) {
          this.props.price = newPrice
        }
      }
    )
  }

  render() {
    if (this.state.loading) {
      return <div>loading...</div>
    } else {
      return (

        <Link to={`/stocks/${this.props.companyData.symbol}`} className="stock-card">
          <div className="stock-card-header">
            <div className="stock-card-name">{this.props.companyData.companyName}</div>
            <div className="stock-card-symbol">{this.props.companyData.symbol}</div>
          </div>
          <div className="stock-card-body">
            <StockCardChart1
              stock={this.props.peer}
              price={this.props.price}
              stats={this.props.stats}
              chart={this.props.chart}
            />
            <div className="stock-card-price">${this.props.price}</div>
          </div>
        </Link>
      )
    }
  }


}

export default withRouter(StockCard);
