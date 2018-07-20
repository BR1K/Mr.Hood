import React from 'react';
import { connect } from 'react-redux';
import StockPage from './stock_page';
import { fetchPrice, fetchChart, fetchCompany, fetchStats,
         fetchTopStocks, fetchPeers, fetchNews } from '../../actions/iex_actions';
import { fetchStocks, fetchStock } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  stock: state.entities.stocks[ownProps.match.params.stockId],
  price: state.entities.iex.price,
  chart: state.entities.iex.chart,
  companyData: state.entities.iex.companyData,
  stats: state.entities.iex.stats,
  topStocks: state.entities.iex.topStocks,
  peers: state.entities.iex.peers,
  news: state.entities.iex.news,
});

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
});

export default connect(mapStateToProps, mapDispatchToProps)(StockPage);
