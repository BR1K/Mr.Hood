import React    from 'react';
import { Link, withRouter } from 'react-router-dom';
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
    this.stockNews = this.stockNews.bind(this);
  }


  componentDidMount() {
    this.props.fetchStock(this.props.match.params.symbol)
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
    debugger
    if ( nextProps.stock && (nextProps.stock.symbol !== this.props.match.params.symbol.toUpperCase())) {
      this.setState({ loading: true },
        () => this.props.fetchStock(this.props.match.params.symbol)
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

// stocks={this.props.searchStocks}

  stockNews() {
    let news = [];
    for (let i = 0; i < this.props.news.length; i++) {
      let article = this.props.news[i];
      news.push(
        <li className="article-box">
          <div className="article-title"><a href={article.url}>{article.headline}</a></div>
          <div className="article-body">{article.summary}</div>
        </li>
      )
    }

    return news;
  }

  render() {
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
      // const stockNews = this.props.news.forEach(article, i => {
      //   return (
      //     <li>
      //       <div><Link to={article.url}>{article.headline}</Link></div>
      //       <div>{article.summary}</div>
      //     </li>
      //   );
      // });


      const peers = this.props.peers.map((peerSymbol, i) => {
        return (
          <li className="peer" key={i}>
            <Link to={`/stocks/${peerSymbol}`}>{peerSymbol}</Link>
          </li>
        );
      });

      return (

        <section className="stock-page-main">


          <nav className="greeting-page-navbar-box">
            <div className="greeting-page-navbar-left">
              <Link to="/">
                <img className="logo-image" src={window.logo} />
              </Link>
            </div>
            <div className="greeting-page-navbar-right">
              <SearchBar />
              <button className="header-button" onClick={this.props.logout}>Log Out</button>
            </div>
          </nav>


          <div className="main-stock-section">
            <StockChart
              stock={this.props.stock}
              price={this.props.price}
              stats={this.props.stats}
              />
            <div id="peers-title">
              Peers
            </div>
            <div className="peersBox">
                <ul>
                  {peers}
                </ul>
            </div>
            <div id="news-title">
              Latest News
            </div>
            <div className='news-box'>
              <ul>
                {this.stockNews()}
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

// export default StockPage;
export default withRouter(StockPage);


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
