import { RECEIVE_PEER_PRICE2,
         RECEIVE_PEER_STATS2,
         RECEIVE_PEER_CHART2,
         RECEIVE_PEER_COMPANY_DATA2,
         RECEIVE_PEER_LOGO2, }    from '../actions/iex_actions3';
import { combineReducers } from 'redux';

const priceReducer = (state = {}, action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_PRICE2:
      return action.peerPrice2;
    default:
      return state;
  }
};

const statsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_STATS2:
      return action.peerStats2;
    default:
      return state;
  }
};

const chartReducer = (state = [], action) => {

  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_CHART2:
      return action.peerChart2;
    default:
      return state;
  }
};

const companyDataReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEER_COMPANY_DATA2:
      return action.peerCompanyData2;
    default:
      return state;
  }
};



const iexReducer3 = combineReducers({
  price: priceReducer,
  stats: statsReducer,
  chart: chartReducer,
  companyData: companyDataReducer,
});

export default iexReducer3;
