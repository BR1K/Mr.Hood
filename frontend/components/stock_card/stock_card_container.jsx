import React from 'react';
import { connect } from 'react-redux';
import StockCard from './stock_card';
import { fetchPrice, fetchChart, fetchCompany, fetchStats,
         fetchTopStocks, fetchPeers, fetchNews } from '../../actions/iex_actions';
import { fetchStocks, fetchStock, fetchPeerStocks } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    
  }
  debugger
}

const mapDispatchToProps = (dispatch) => ({

  fetchPrice: (symbol) => dispatch(fetchPrice(symbol)),
  fetchCompany: (symbol) => dispatch(fetchCompany(symbol)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
