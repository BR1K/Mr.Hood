import React    from 'react';
import { Link } from 'react-router-dom';
// import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import StockChart from '../charts/stock_chart/stock_chart_container';
import { MoonLoader } from 'halogenium';

class StockPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refresh: null
    };

    this.updatePrice = this.updatePrice.bind(this);
  }


  componentDidMount() {
    this.props.fetchStock(this.props.match.params.stockId)
      .then(() => this.props.fetchPrice(this.props.stock.symbol))
      .then(() => this.props.fetchStats(this.props.stock.symbol))
      .then(() => this.props.fetchCompany(this.props.stock.symbol))
      .then(() => this.props.fetchPeers(this.props.stock.symbol))
      .then(() => this.props.fetchNews(this.props.stock.symbol))
      .then(() => this.props.fetchTopStocks())
      .then(
        () => {
          const refresh = setInterval(this.updatePrice, 5000);
          this.setState({
            refresh: refresh,
            loading: false
          });
        }
      )
  }

  updatePrice() {
    const currentPrice = this.props.stock.price;
    this.props.fetchPrice(this.props.stock.symbol).then(
      newPrice => {
        if (currentPrice !== newPrice) {
          this.props.stock.price = newPrice
        }
      }
    )
  }

  componentWillReceiveProps(nextProps) {
    if ( nextProps.stock && (nextProps.stock.id !== parseInt(this.props.match.params.stockId))) {
      this.setState({ loading: true },
        () => this.props.fetchStock(this.props.match.params.stockId)
        .then(() => this.props.fetchPrice(this.props.stock.symbol))
        .then(() => this.setState({loading: false})));
      }
    }

  componentWillUnmount() {
    clearInterval(this.state.refresh);
  }

  render() {
    return (
      this.state.loading ?
        <div>
          <MoonLoader
            className="loading-icon"
            color="#26A65B"
            size="20px"
            margin="5px"
          />
        </div>
      :
        <section className="stock-page-main">
          <div className="main-stock-section">
            <StockChart
              stock={this.props.stock}
              price={this.props.price}
              stats={this.props.stats}
            />
            <div>Peers</div>

          </div>
          <div className="side">

          </div>
        </section>
    )
  }

}




export default StockPage;

// don't use fetch in component (not it's job):
// fetchPrice() {
//   fetch(`https://api.iextrading.com/1.0/stock/aapl/price`)
//     .then(function(response) {
//       return response.json();
//   })
//     .then(function(myJson) {
//       console.log(myJson);
//   });
// }



// const stockDetail = ({ currentUser, logout }) => {
//
//   const showPage = () => {
//     return (
//       <div>
//         <div>
//           <h1>Stock Show Page</h1>
//           <button className="header-button" onClick={logout}>Log Out</button>
//         </div>
//         <div>
//           <StockDetailChart></StockDetailChart>
//         </div>
//       </div>
//     )
//   }
//
//   return showPage();
// }




//
//
//
