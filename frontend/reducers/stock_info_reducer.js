import { RECEIVE_PEER_STOCKS } from '../actions/stock_actions';
import { combineReducers } from 'redux';

const peerStocksReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_STOCKS:
      return action.peerStocks;
    default:
      return state;
  }


};

const stockInfoReducer = combineReducers({
  peerStocks: peerStocksReducer,

});

export default stockInfoReducer;
