import { connect } from 'react-redux';
import { fetchStock, fetchStocks } from '../../../actions/stock_actions';
import Search from './search';

const mSP = (state) => ({
  currentUser: state.session.currentUser
})

const mDP = (dispatch) => ({
  fetchStock: (id) => dispatch(fetchStock(id)),
  fetchStocks: (query) => dispatch(fetchStocks(query))
})

export default connect(mSP, mDP)(Search)
