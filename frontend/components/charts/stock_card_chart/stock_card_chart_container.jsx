import React from 'react';
import { connect } from 'react-redux';
import StockCardChart1 from './stock_card_chart1';

const mSP = (state, ownProps) => ({
  // stats: state.entities.iex2.stats,


});

const mDP = (dispatch) => ({
  fetchPeerStats: (symbol) => dispatch(fetchPeerStats(symbol))
});


export default connect(mSP, mDP)(StockCardChart1)
