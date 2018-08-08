import { connect } from 'react-redux';
import { fetchStock, fetchStocks, resetStocks } from '../../../actions/stock_actions';
import Search from './search';

const mSP = (state) => ({
  currentUser: state.session.currentUser,
  // searchStocks: Object.keys(state.entities.stocks)
  // searchStocks: Object.keys(state.entities.stocks).map( id => state.entities.stocks[id]),
})

const mDP = (dispatch) => ({
  fetchStock: (symbol) => dispatch(fetchStock(symbol)),
  fetchStocks: (query) => dispatch(fetchStocks(query)),
  resetStocks: () => dispatch(resetStocks()),
})

export default connect(mSP, mDP)(Search)
