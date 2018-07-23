import React    from 'react';
import { Link } from 'react-router-dom';
// import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import StockChart from '../charts/stock_chart/stock_chart_container';
import { MoonLoader } from 'halogenium';
import SearchBar from '../navbar/search/search_container';

class StockPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      refresh: null
    };

    this.updatePrice = this.updatePrice.bind(this);
    // this.peerId = this.peerId.bind(this);
  }


  componentDidMount() {
    this.props.fetchStock(this.props.match.params.stockId)
      .then(() => this.props.fetchPrice(this.props.stock.symbol))
      .then(() => this.props.fetchStats(this.props.stock.symbol))
      .then(() => this.props.fetchCompany(this.props.stock.symbol))
      .then(() => this.props.fetchPeers(this.props.stock.symbol))
      .then(() => this.props.fetchNews(this.props.stock.symbol))
      .then(() => this.props.fetchTopStocks())
      // .then(() => this.props.fetchStocks(this.props.stock.symbol))
      // .then(() => this.props.fetchPeerStocks(this.props.stock.symbol))
      .then(
        () => {
          const peerSymbols = this.props.fetchPeers(this.props.stock.symbol);
          for (let i = 0; i < peerSymbols.length; i++) {
            let peerSymbol = peerSymbols[i];
            const peerStocks = this.props.fetchStocks(peerSymbol)
            const peerStock = peerStocks[0];
            this.props.peerStocks[peerStock.id] = peerStock;
          }
        }
      )
      .then(
        () => {
          const refresh = setInterval(this.updatePrice, 5000);
          this.setState({
            refresh: refresh,
            loading: false
          });
        }
      )
      // debugger
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
    // debugger
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

  // peerId(peerSymbol) {
  //   return this.props.fetchStocks(peerSymbol).id
  // }


  render() {
    // const stockNews = this.props.news.map(article => {
    //   return <li>
    //             <div><Link to={article.url}>{article.headline}</Link></div>
    //             <div>{article.summary}</div>
    //          </li>
    // });
    if (this.state.loading) {
      return (
        <div className="loading-icon">
          <MoonLoader
            color="#26A65B"
            size="20px"
            margin="5px"
            />
        </div>
      )
    } else {

      // const peers = this.props.peers.map((peerSymbol, i) => {
      //   return (
      //     <li key={i}>
      //       <Link to={`/stocks/${this.peerId(peerSymbol)}`}>{peerSymbol}</Link>
      //     </li>
      //   );
      // });

      return (
        <section className="stock-page-main">
          <div>
            <SearchBar stocks={this.props.searchStocks}></SearchBar>
          </div>
          <div className="main-stock-section">
            <StockChart
              stock={this.props.stock}
              price={this.props.price}
              stats={this.props.stats}
              />
            <div className="peersBox">Peers
              <ul>
                <li>

                </li>
                <li>
                </li>
                <li>
                </li>
              </ul>
            </div>
            <div className='news-box'>
              <ul>
              </ul>
            </div>

          </div>
          <div className="side">

          </div>
        </section>
      )
    }

  }

}

export default StockPage;



// <li>
//   <Link to={`/stocks/44`}>{this.props.peers[0]}</Link>
// </li>
// <li>
//   <Link to={`/stocks/1023`}>{this.props.peers[1]}</Link>
// </li>
// <li>
//   <Link to={`/stocks/8873`}>{this.props.peers[2]}</Link>
// </li>
// <li>
//   <Link to={`/stocks/2293`}>{this.props.peers[3]}</Link>
// </li>

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
