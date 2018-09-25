import React from 'react';
import { connect } from 'react-redux';
import StockCard from './stock_card';
import { fetchPeerPrice, fetchPeerChart, fetchPeerCompany, fetchPeerStats } from '../../actions/iex_actions2';
import { fetchStocks, fetchStock, fetchPeerStocks } from '../../actions/stock_actions';

const mapStateToProps = (state, ownProps) => {

  return {
    stock: state.entities.stocks[ownProps.peer.symbol],
    price: state.entities.iex2.price,
    companyData: state.entities.iex2.companyData,
    stats: state.entities.iex2.stats,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchPeerPrice: (symbol) => dispatch(fetchPeerPrice(symbol)),
  fetchPeerCompany: (symbol) => dispatch(fetchPeerCompany(symbol)),
  fetchPeerStats: (symbol) => dispatch(fetchPeerStats(symbol)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StockCard);
