import React from 'react';
import { connect } from 'react-redux';
import StockCard2 from './stock_card2';
import { fetchPeerPrice2, fetchPeerChart2, fetchPeerCompany2, fetchPeerStats2 } from '../../actions/iex_actions3';
import { fetchStocks, fetchStock, fetchPeerStocks } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    stock: state.entities.stocks[ownProps.peer.symbol],
    price: state.entities.iex3.price,
    companyData: state.entities.iex3.companyData,
    stats: state.entities.iex3.stats,
    chart: state.entities.iex3.chart,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPeerPrice2: (symbol) => dispatch(fetchPeerPrice2(symbol)),
  fetchPeerCompany2: (symbol) => dispatch(fetchPeerCompany2(symbol)),
  fetchPeerStats2: (symbol) => dispatch(fetchPeerStats2(symbol)),
  fetchPeerChart2: (symbol, range) => dispatch(fetchPeerChart2(symbol, range)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockCard2);
