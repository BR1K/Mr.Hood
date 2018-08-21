import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form';
import { createTrade, receiveErrors } from '../../../../actions/trade_actions';
import { fetchPrice } from '../../../../actions/iex_actions';

const mapStateToProps = (state, ownProps) => ({
  trade: {
    stock_id: ownProps.stock.id,
    portfolio_id: state.session.currentUser.id,
    price: ownProps.price,
    amount: 0,
    type: 'buy'
  },
  errors: state.errors.trade,
  user: state.session.currentUser,
  stocks: state.entities.stocks,
  message: `${state.session.currentUser.holdings[ownProps.asset.id]||0} Shares Available`
});

const mapDispatchToProps = (dispatch) => ({
  createTrade: (trade) => dispatch(createFill(trade)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
