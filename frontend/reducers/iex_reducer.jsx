import { RECEIVE_PRICE,
         RECEIVE_STATS,
         RECEIVE_CHART,
         RECEIVE_COMPANY_DATA,
         RECEIVE_TOP_STOCKS,
         RECEIVE_LOGO,
         RECEIVE_PEERS,
         RECEIVE_NEWS }    from '../actions/iex_actions';
import { combineReducers } from 'redux';

const priceReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PRICE:
      return action.price;
    default:
      return state;
  }
};

const statsReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_STATS:
      return action.stats;
    default:
      return state;
  }
};

const chartReducer = (state=[], action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_CHART:
      return action.chart;
    default:
      return state;
  }
};

const companyDataReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_COMPANY_DATA:
      return action.companyData;
    default:
      return state;
  }
};

const topStocksReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_TOP_STOCKS:
      return action.topStocks;
    default:
      return state;
  }
};

// const logoReducer = (state={}, action) => {
//   Object.freeze(state);
//
//   switch(action.type) {
//     case RECEIVE_LOGO:
//       return action.logo;
//     default:
//       return state;
//   }
// };

const peersReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PEERS:
      return action.peers;
    default:
      return state;
  }
};

const newsReducer = (state={}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NEWS:
      return action.news;
    default:
      return state;
  }
};

const iexReducer = combineReducers({
  price: priceReducer,
  stats: statsReducer,
  chart: chartReducer,
  companyData: companyDataReducer,
  topStocks: topStocksReducer,
  peers: peersReducer,
  news: newsReducer,
});

export default iexReducer;
