import React from 'react';
import { connect } from 'react-redux';
import StockChart from './stock_chart';
import { fetchChart, fetchStats } from '../../../actions/iex_actions';

const mSP = (state, ownProps) => ({
  chart: state.entities.iex.chart,
  stats: state.entities.iex.stats,
  companyData: state.entities.iex.companyData,
});

const mDP = (dispatch) => ({
  fetchChart: (symbol, range) => dispatch(fetchChart(symbol, range)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol))
});


export default connect(mSP, mDP)(StockChart)
