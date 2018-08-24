import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradeForm from './trade_form';
import { createTrade, receiveErrors } from '../../../actions/trade_actions';
import { fetchPrice } from '../../../actions/iex_actions';
import { currencyFormatter } from '../../../util/formatter';

const mapStateToProps = (state, ownProps) => {
  return {
    trade: {
      stock_id: ownProps.stock.id,
      portfolio_id: state.session.id,
      price: ownProps.price,
      size: 0,
      trade_type: 'buy'
    },
    errors: state.errors.trade,
    user: state.session,
    stocks: state.entities.stocks,
    message: `${currencyFormatter.format(state.session.buying_power || 0)} Buying Power Available`

  }
};

const mapDispatchToProps = (dispatch) => ({
  createTrade: (trade) => dispatch(createTrade(trade)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(TradeForm);
