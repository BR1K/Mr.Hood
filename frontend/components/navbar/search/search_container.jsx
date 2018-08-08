import { connect } from 'react-redux';
import { fetchStock, fetchStocks } from '../../../actions/stock_actions';
import Search from './search';

const mSP = (state) => ({
  currentUser: state.session.currentUser,
  // searchStocks: Object.keys(state.entities.stocks)
})

const mDP = (dispatch) => ({
  fetchStock: (symbol) => dispatch(fetchStock(symbol)),
  fetchStocks: (query) => dispatch(fetchStocks(query)),
})

export default connect(mSP, mDP)(Search)
