import { connect } from 'react-redux';
import { fetchStock, fetchStocks, resetStocks } from '../../../actions/stock_actions';
import Search from './search';

const mSP = (state) => {

  return {
  currentUser: state.session.currentUser,
  searchedStocks: Object.keys(state.ui.searchedStocks).map( id => state.ui.searchedStocks[id]),
  // searchStocks: Object.keys(state.entities.stocks)
  // searchStocks: Object.keys(state.entities.stocks).map( id => state.entities.stocks[id]),
}}

const mDP = (dispatch) => ({
  fetchStock: (symbol) => dispatch(fetchStock(symbol)),
  fetchStocks: (query) => dispatch(fetchStocks(query)),
  // fetchStocks: () => dispatch(fetchStocks()),
  resetStocks: () => dispatch(resetStocks()),

  // searchStocks: () => dispatch(searchStocks()),
})

export default connect(mSP, mDP)(Search)
