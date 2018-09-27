import React from 'react';
import { connect } from 'react-redux';

import Watchlist from './watchlist';
import { fetchStocks, fetchWatchlist } from '../../../../actions/stock_actions';
// import { fetchPrice } from '../../../../actions/iex_actions';

const mSP = state => ({
  currentUser: state.entities.users[state.session.id],
  watchlist: state.entities.watchlist,
  // stocks: Object.values(state.entities.stocks),
  // price: state.entities.iex.price
});

const mDP = dispatch => ({
  fetchWatchlist: id => dispatch(fetchWatchlist()),
  fetchStocks: () => dispatch(fetchStocks()),
  // fetchPrice: (symbol) => dispatch(fetchPrice(symbol)),
});

export default connect(mSP, mDP)(Watchlist);
