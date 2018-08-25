import React from 'react';
import { connect } from 'react-redux';
import StockPage from './stock_page';
import { fetchPrice, fetchChart, fetchCompany, fetchStats,
         fetchTopStocks, fetchPeers, fetchNews } from '../../actions/iex_actions';
import { fetchStocks, fetchStock, fetchPeerStocks } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {

  return { currentUser: state.session.currentUser,
  stock: state.entities.stocks[ownProps.match.params.symbol.toUpperCase()],
  price: state.entities.iex.price,
  chart: state.entities.iex.chart,
  companyData: state.entities.iex.companyData,
  stats: state.entities.iex.stats,
  topStocks: state.entities.iex.topStocks,
  peers: state.entities.iex.peers,
  news: state.entities.iex.news,
  searchStocks: Object.keys(state.ui.searchedStocks).map( id => state.ui.searchedStocks[id]),
  // peerIds: this.props.peers.map( id => state.entities.stocks[id])
  peerStocks: state.entities.stockInfo.peerStocks,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchStock: (id) => dispatch(fetchStock(id)),
  fetchStocks: (query) => dispatch(fetchStocks(query)),
  fetchPrice: (symbol) => dispatch(fetchPrice(symbol)),
  fetchChart: (symbol, range) => dispatch(fetchChart(symbol, range)),
  fetchCompany: (symbol) => dispatch(fetchCompany(symbol)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol)),
  fetchTopStocks: () => dispatch(fetchTopStocks()),
  fetchPeers: (symbol) => dispatch(fetchPeers(symbol)),
  fetchNews: (symbol) => dispatch(fetchNews(symbol)),
  fetchPeerStocks: (peer) => dispatch(fetchPeerStocks(peer))
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
