import { combineReducers } from 'redux';
import { RECEIVE_NEWS2, RECEIVE_MARKET_NEWS } from '../actions/news_api_actions';


const marketNewsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_MARKET_NEWS:
      return action.marketNews;
    default:
      return state;
  }
}

const newsAPIReducer = combineReducers({
  // news: newsReducer2,
  marketNews: marketNewsReducer,
});

export default newsAPIReducer;
