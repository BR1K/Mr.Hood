import { connect } from 'react-redux';
import { logout }  from '../../actions/session_actions';
import Navbar from './navbar';

const mSP = state => (
  { loggedIn: Boolean(state.session.id) }
);

const mDP = dispatch => ({
  logout: () => dispatch(logout()),
});

export default connect(
  mSP,
  mDP
)(Navbar);
