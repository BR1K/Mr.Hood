import React          from 'react';
import SearchBar      from './search/search_container';
import { Link }       from 'react-router-dom';
import { logout }     from '../../actions/session_actions';
import ThemeModal     from './theme_modal';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      this.props.loggedIn ? (
        <nav className="navbar-container">
          <div className="navbar-left">
            <Link to="/">
              <img className="logo-image" src={window.logo} />
            </Link>
          </div>
          <div className="navbar-middle">
            <SearchBar />
          </div>
          <div className="navbar-right">
            <ThemeModal />
            <Link to="/" id="navbar-home" className="navbar-link">Home</Link>
            <h3 id="navbar-logout" className="navbar-link" onClick={this.props.logout}>Log Out</h3>
          </div>
        </nav>
      ) : (
        <nav className="navbar-container">
          <div className="navbar-left">
            <Link to="/">
              <img className="logo-image" src={window.logo} />
            </Link>
          </div>
          <div className="navbar-middle">
          </div>
          <div className="navbar-right">
            <Link to="/login" className="navbar-link">Log In</Link>
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </div>
        </nav>
      )
    )
  }
};

export default Navbar;
