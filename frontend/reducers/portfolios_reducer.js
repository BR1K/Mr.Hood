import merge from 'lodash/merge';
import { combineReducers } from 'redux';
import { RECEIVE_PORTFOLIO, RECEIVE_SNAPSHOTS } from '../actions/portfolio_actions';

const portfolioReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_PORTFOLIO:
      return merge({}, action.portfolio);
    default:
      return state;
  }
};

const portfolioSnapshotsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SNAPSHOTS:
      return action.snapshots;
    default:
      return state;
  }
};

export default combineReducers({
  portfolio: portfolioReducer,
  snapshots: portfolioSnapshotsReducer
});
