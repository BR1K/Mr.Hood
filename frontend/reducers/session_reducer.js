import { RECEIVE_CURRENT_USER,
				 LOGOUT_CURRENT_USER,
				 RECEIVE_ERRORS } from '../actions/session_actions';

export default (state = {}, action) => {
	Object.freeze(state);
	const newState = Object.assign({}, state);
	switch (action.type) {
		case RECEIVE_CURRENT_USER:
			Object.assign(newState, {id: action.currentUser.id});
			return newState;
		case LOGOUT_CURRENT_USER:
			newState.id = null;
			return newState;
		default:
			return state;
	}
};
