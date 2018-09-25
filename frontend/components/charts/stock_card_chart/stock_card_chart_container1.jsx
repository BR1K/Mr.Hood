import React from 'react';
import { connect } from 'react-redux';
import StockCardChart1 from './stock_card_chart1';
import { fetchPeerChart, fetchPeerStats } from '../../../actions/iex_actions2';

const mSP = (state, ownProps) => ({
  // chart: state.entities.iex2.chart,
  stats: state.entities.iex2.stats,


});

const mDP = (dispatch) => ({
  // fetchPeerChart: (symbol, range) => dispatch(fetchPeerChart(symbol, range)),
  fetchPeerStats: (symbol) => dispatch(fetchPeerStats(symbol))
});


export default connect(mSP, mDP)(StockCardChart1)
