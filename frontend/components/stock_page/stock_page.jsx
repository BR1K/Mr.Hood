import React    from 'react';
import { Link, withRouter } from 'react-router-dom';
import StockSidebar from './stock_sidebar/stock_sidebar';
import StockChart from '../charts/stock_chart/stock_chart_container';
import { MoonLoader } from 'halogenium';
import SearchBar from '../navbar/search/search_container';
import TradeForm from './stock_sidebar/trade_form';

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
      //
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
    //
  }

  componentWillReceiveProps(nextProps) {

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
        <div className="stock-page">
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
          <section className="stock-page-main">




            <div className="main-stock-section">
              <StockChart
                key={this.props.stock.id}
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
              <StockSidebar
                key={this.props.stock.id}
                stock={this.props.stock}
                price={this.props.price}
                />
            </div>
          </section>
        </div>
      )
    }

  }

}

// export default StockPage;
export default withRouter(StockPage);

// UNAVAILABLE:
// TLRY
