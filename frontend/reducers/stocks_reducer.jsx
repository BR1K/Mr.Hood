import { RECEIVE_STOCK, RECEIVE_STOCKS} from '../actions/stock_actions';
import merge from 'lodash/merge';

const stocksReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCK:
      const newStock = { [action.stock.symbol]: action.stock };
      const newState = merge({}, state, newStock);
      return newState;
    case RECEIVE_STOCKS:
      return Object.assign({}, state, action.stocks);
    default:
      return state;
  }
};

// const stocksReducer = (state = {}, action) => {
//   Object.freeze(state);
//   switch(action.type) {
//     case RECEIVE_STOCK:
//       return merge({}, state, { [action.stock.symbol]: action.stock });
//     case RECEIVE_STOCKS:
//       return action.stocks;
//     default:
//       return state;
//   }
// };

export default stocksReducer;
