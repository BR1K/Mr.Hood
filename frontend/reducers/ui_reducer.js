import { RESET_STOCKS, RECEIVE_STOCKS } from '../actions/stock_actions';
import { combineReducers } from 'redux';


const searchReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_STOCKS:
      return Object.assign(action.stocks);
    default:
      return state;
  }
};

const uiReducer = combineReducers({
  searchedStocks: searchReducer,

});

export default uiReducer;
