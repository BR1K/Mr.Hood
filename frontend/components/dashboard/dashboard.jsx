import React    from 'react';
import { Link, withRouter } from 'react-router-dom';
import DashboardSidebar from './dashboard_sidebar/dashboard_sidebar';
import DashboardChart from '../charts/dashboard_chart/dashboard_chart';
import SearchBar from '../navbar/search/search_container';
import StockCard from '../stock_card/stock_card';
import { SyncLoader } from 'halogenium';


class Dashboard extends React.Component {

  constructor(props) {
    super(props);
    let obj = {};
    let symbols = Object.keys(this.props.currentUser.holdings);
    for (let i = 0; i < symbols.length; i++) {
      let symbol = symbols[i];
      obj[symbol] = 1;
    }


    this.state = {
      portfolioValues: obj,
      loading: true,
    };
    this.marketNews = this.marketNews.bind(this);
    this.topStocks = this.topStocks.bind(this);
    this.portfolioValue = this.portfolioValue.bind(this);
  }


  componentDidMount() {
    this.props.fetchPortfolio(this.props.currentUser.id)
    // .then(() => this.props.fetchStocks())
    .then(() => this.props.fetchWatchlist())
    .then(() => this.props.fetchMarketNews())
    .then(() => this.props.fetchPortfolioSnapshots(this.props.currentUser.id))
    .then(() => this.props.fetchTopStocks())
    .then(() => this.setState({loading: false}))

  }


  marketNews() {
    let marketNews = [];
    for (let i = 0; i < this.props.marketNews.articles.length; i++) {
      let article = this.props.marketNews.articles[i];
      if (article.urlToImage !== null && article.description !== null) {
        marketNews.push(
          <a href={article.url} className="article-container" key={i}>
            <div>
              <img src={article.urlToImage} width={196} height={134} className="article-image"></img>
            </div>
            <div className="article-text">
              <div className="article-source">{article.source.name}</div>
              <div className="article-text-bottom">
                <div className="article-title">{article.title}</div>
                <div className="article-body">{article.description.slice(0, 200)}...</div>
              </div>
            </div>
          </a>
        )
      }
    }

    return marketNews;
  }

  topStocks() {
    let topStocks = [];
    for (var i = 0; i < this.props.topStocks.length; i++) {
      let topStock = this.props.topStocks[i];

      topStocks.push(
        <StockCard
          key={i}
          symbol={topStock.symbol}
        />
      )
    }

    return topStocks;
  }

  portfolioValue(val, symbol) {
    let oldState = Object.assign({}, this.state);
    oldState.portfolioValues[symbol] = val;
    this.setState({oldState});
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="loading-icon">
          <SyncLoader
            size="20px"
            color="#21ce99"
          />
        </div>
      )
    } else {
      let buyingPower = this.props.currentUser.buying_power;
      let stockValues = Object.values(this.state.portfolioValues);
      let sum = 0;
      for (let i = 0; i < stockValues.length; i++) {
        sum += stockValues[i];
      }
      let portfolioValue = sum + buyingPower;
      return (
        <div className="dashboard-page">


          <nav className="navbar-container">
            <div className="navbar-left">
              <Link to="/">
                <img className="logo-image" src={window.logo} />
              </Link>
            </div>
            <div className="navbar-middle">
              <SearchBar />
            </div>
            <div className="navbar-right">
              <Link to="/" id="navbar-home" className="navbar-link">Home</Link>
              <h3 id="navbar-logout" className="navbar-link" onClick={this.props.logout}>Log Out</h3>
            </div>
          </nav>


          <section className="main-container">
            <div className="main-stock-section">
              <DashboardChart
                data={this.props.snapshots}
                portfolio={this.props.portfolio}
                currentUser={this.props.currentUser}
                livePortfolioValue={portfolioValue}
              />
              <div className="top-stocks">
                <div id="top-stocks-title">Top Movers</div>
                <ul className="top-stocks-container">
                  {this.topStocks()}
                </ul>
              </div>

              <div id="market-news-title">Recent News</div>
              <div className='news-container'>
                <ul>
                  {this.marketNews()}
                </ul>
              </div>
            </div>
            <div className="side">
              <DashboardSidebar
                stocks={this.props.stocks}
                holdings={this.props.portfolio.portfolio.holdings}
                watchlist={this.props.watchlist}
                portfolioValue={this.portfolioValue}
              />
            </div>
          </section>


        </div>
      );
    }
  };

};



export default Dashboard
