import { RECEIVE_TRADE, RECEIVE_ERRORS } from '../actions/trade_actions';
import merge from 'lodash/merge';

const tradesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_TRADE:
      const newTrade = { [action.trade.id]: action.trade };
      return merge({}, state, newTrade);
    default:
      return state;
  }
};

export default tradesReducer;
