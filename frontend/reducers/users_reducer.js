import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_TRADE } from '../actions/trade_actions';
import merge from 'lodash/merge';


const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let userId;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
      userId = action.currentUser.id;
      case RECEIVE_TRADE:
        let nextState = merge({}, state);
        
        let tradeAmount = action.trade.size * action.trade.price;
        let buyingPower = nextState[action.trade.portfolio_id].buying_power;
        let holdings = nextState[action.trade.portfolio_id].holdings;


        if (action.trade.trade_type === "buy") {

          buyingPower = parseFloat(buyingPower) - tradeAmount;
          holdings[action.trade.symbol] =
            (holdings[action.trade.symbol]||0) +
            action.trade.size;
        } else {

          buyingPower = parseFloat(buyingPower) + tradeAmount;
          holdings[action.trade.symbol] -= action.trade.size;
        }

        nextState[action.trade.portfolio_id].buying_power = buyingPower;
        nextState[action.trade.portfolio_id].holdings = holdings;
        // nextState.currentUser.num_trades++;
        return nextState;

    default:
      return state;
  }
};

export default usersReducer;
// 4545.2
// 210.6
// 262.4
// 38143
// 564
// 51.76
