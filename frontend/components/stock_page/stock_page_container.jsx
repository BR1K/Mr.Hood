import React from 'react';
import { connect } from 'react-redux';
import StockPage from './stock_page';
import { fetchPrice, fetchChart, fetchCompany, fetchStats,
         fetchTopStocks, fetchPeers, fetchNews } from '../../actions/iex_actions';
import { fetchStocks, fetchStock, fetchPeerStocks, watchStock, unwatchStock, fetchWatchlist } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    stock: state.entities.stocks[ownProps.match.params.symbol.toUpperCase()] || {},
    price: state.entities.iex.price,
    chart: state.entities.iex.chart,
    companyData: state.entities.iex.companyData,
    stats: state.entities.iex.stats,
    watchlist: state.entities.watchlist,
    topStocks: state.entities.iex.topStocks,
    peers: state.entities.iex.peers,
    news: state.entities.iex.news,
    searchStocks: Object.keys(state.ui.searchedStocks).map( id => state.ui.searchedStocks[id]),
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStock: (symbol) => dispatch(fetchStock(symbol)),
  fetchStocks: () => dispatch(fetchStocks()),
  fetchPrice: (symbol) => dispatch(fetchPrice(symbol)),
  fetchChart: (symbol, range) => dispatch(fetchChart(symbol, range)),
  fetchCompany: (symbol) => dispatch(fetchCompany(symbol)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol)),
  fetchTopStocks: () => dispatch(fetchTopStocks()),
  fetchPeers: (symbol) => dispatch(fetchPeers(symbol)),
  fetchNews: (symbol) => dispatch(fetchNews(symbol)),
  fetchPeerStocks: (peer) => dispatch(fetchPeerStocks(peer)),
  watchStock: (id) => dispatch(watchStock(id)),
  unwatchStock: (id) => dispatch(unwatchStock(id)),
  fetchWatchlist: () => dispatch(fetchWatchlist()),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
