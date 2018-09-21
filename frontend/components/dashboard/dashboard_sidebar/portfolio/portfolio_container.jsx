import React from 'react';
import { connect } from 'react-redux';

import Portfolio from './portfolio';
import { fetchPortfolio } from '../../../../actions/portfolio_actions';
import { fetchStocks } from '../../../../actions/stock_actions';
import { fetchPrice } from '../../../../actions/iex_actions';

const mSP = state => ({
  currentUser: state.entities.users[state.session.id],
  portfolio: state.entities.portfolio,
  stocks: Object.values(state.entities.stocks),
  price: state.entities.iex.price
});

const mDP = dispatch => ({
  fetchPortfolio: id => dispatch(fetchPortfolio(id)),
  fetchStocks: () => dispatch(fetchStocks()),
  fetchPrice: (symbol) => dispatch(fetchPrice(symbol)),
});

export default connect(mSP, mDP)(Portfolio);
