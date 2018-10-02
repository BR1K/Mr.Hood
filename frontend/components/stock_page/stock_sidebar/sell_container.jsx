import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form';
import { createTrade, receiveErrors } from '../../../actions/trade_actions';
import { fetchPrice } from '../../../actions/iex_actions';

const mapStateToProps = (state, ownProps) => {
  

  return {
    trade: {
      stock_id: ownProps.stock.id,
      portfolio_id: state.session.id,
      price: ownProps.price,
      size: 0,
      trade_type: 'sell'
    },
    message: `${ state.entities.users[state.session.id].holdings[ownProps.stock.symbol] || 0 } Shares Available`,
    errors: state.errors.trade,
    user: state.session,
    stocks: state.entities.stocks,
  }
};

const mapDispatchToProps = (dispatch) => ({
  createTrade: (trade) => dispatch(createTrade(trade)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
