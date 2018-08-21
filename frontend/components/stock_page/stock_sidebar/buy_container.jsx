import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form';
import { createTrade, receiveErrors } from '../../../../actions/trade_actions';
import { fetchPrice } from '../../../../actions/iex_actions';
import { currencyFormatter } from '../../../../utils/helpers';

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
  message: `${currencyFormatter.format(state.session.currentUser.buying_power || 0)} Buying Power Available`
});

const mapDispatchToProps = (dispatch) => ({
  createTrade: (trade) => dispatch(createFill(trade)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
