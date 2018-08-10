import { connect } from 'react-redux';
import { logout }  from '../../actions/session_actions';
import { fetchStocks, fetchStock } from '../../actions/stock_actions';
import { fetchPortfolio, fetchPortfolioSnapshots } from '../../actions/portfolio_actions';
import { fetchPrice, fetchStats, fetchMarketNews, fetchTopStocks } from '../../actions/iex_actions';
import Dashboard    from './dashboard';

const mSP = (state) => ({
  // currentUser: state.session.currentUser,
  currentUser: state.entities.users[state.session.id],
  stocks: Object.keys(state.entities.stocks).map( id => state.entities.stocks[id]),
  portfolio: state.entities.portfolio,
  snapshots: Object.values(state.entities.portfolio.snapshots),
  marketNews: state.entities.iex.marketNews,
  topStocks: state.entities.iex.topStocks,
});

const mDP = dispatch => ({
  logout: () => dispatch(logout()),
  fetchStocks: (query) => dispatch(fetchStocks(query)),
  fetchStock: (id) => dispatch(fetchStock(id)),
  fetchPortfolio: (id) => dispatch(fetchPortfolio(id)),
  fetchPortfolioSnapshots: (id) => dispatch(fetchPortfolioSnapshots(id)),
  fetchPrice: (symbol) => dispatch(fetchPrice(symbol)),
  fetchStats: (symbol) => dispatch(fetchStats(symbol)),
  fetchMarketNews: (symbol) => dispatch(fetchMarketNews()),
  fetchTopStocks: () => dispatch(fetchTopStocks()),

});

export default connect(
  mSP,
  mDP
)(Dashboard);



// const mapStateToProps = ({ session, entities: { users } }) => {
//   return {
//     currentUser: users[session.id],
//     stocks: Object.keys(state.entities.stocks).map( id => state.entities.stocks[id]),
//   };
// };
