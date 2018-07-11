import { RECEIVE_CURRENT_USER,
				 LOGOUT_CURRENT_USER,
				 RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = {}, action) => {
	Object.freeze(state);
	const newState = merge({}, state);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			merge(newState, {id: action.currentUser.id});
			return newState;
		case LOGOUT_CURRENT_USER:
			newState.id = null;
			return newState;
		default:
			return state;
	}
};
