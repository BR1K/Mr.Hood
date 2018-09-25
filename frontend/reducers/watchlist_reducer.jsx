import { RECEIVE_WATCH, RECEIVE_WATCHLIST } from '../actions/stock_actions';
import merge from 'lodash/merge';

const watchlistReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_WATCH:
      const newStock = { [action.watch.symbol]: action.watch };
      const newState = merge({}, state, newStock);
      return newState;
    case RECEIVE_WATCHLIST:
      return action.watchlist
    default:
      return state;
  }
};

export default watchlistReducer;
