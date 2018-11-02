import React from 'react';
import { connect } from 'react-redux';
import StockCard from './stock_card';
import { fetchStocks, fetchStock, fetchPeerStocks } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    stock: state.entities.stocks[ownProps.peer.symbol],
    price: state.entities.iex2.price,
    companyData: state.entities.iex2.companyData,
    stats: state.entities.iex2.stats,
    chart: state.entities.iex2.chart,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPeerPrice: (symbol) => dispatch(fetchPeerPrice(symbol)),
  fetchPeerCompany: (symbol) => dispatch(fetchPeerCompany(symbol)),
  fetchPeerStats: (symbol) => dispatch(fetchPeerStats(symbol)),
  fetchPeerChart: (symbol, range) => dispatch(fetchPeerChart(symbol, range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
