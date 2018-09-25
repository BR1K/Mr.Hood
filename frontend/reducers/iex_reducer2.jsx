import { RECEIVE_PEER_PRICE,
         RECEIVE_PEER_STATS,
         RECEIVE_PEER_CHART,
         RECEIVE_PEER_COMPANY_DATA,
         RECEIVE_PEER_LOGO, }    from '../actions/iex_actions2';
import { combineReducers } from 'redux';

const priceReducer = (state = {}, action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_PRICE:
      return action.peerPrice;
    default:
      return state;
  }
};

const statsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_STATS:
      return action.peerStats;
    default:
      return state;
  }
};

const chartReducer = (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_CHART:
      return action.peerChart;
    default:
      return state;
  }
};

const companyDataReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_COMPANY_DATA:
      return action.peerCompanyData;
    default:
      return state;
  }
};



const iexReducer2 = combineReducers({
  price: priceReducer,
  stats: statsReducer,
  chart: chartReducer,
  companyData: companyDataReducer,
});

export default iexReducer2;
