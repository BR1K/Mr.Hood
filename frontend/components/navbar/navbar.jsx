import React          from 'react';
import SearchBar      from './search/search_container';
import { Link }       from 'react-router-dom';
import { logout }     from '../../actions/session_actions';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    let root = document.documentElement;
    let background = getComputedStyle(root).getPropertyValue("--background-color");
    if (background === '#1b1b1d') {
      root.style.setProperty('--background-color', 'white');
      root.style.setProperty('--color', 'black');
      root.style.setProperty('--shadow', '0 0 30px rgba(0,0,0,0.1)');
      root.style.setProperty('--border', '1px solid #eee');
      root.style.setProperty('--row-hover', '#eee');
      root.style.setProperty('--trade-input', '#eee');
      root.style.setProperty('--trade-input-hover', '1px solid #171718');
    } else {
      root.style.setProperty('--background-color', '#1b1b1d');
      root.style.setProperty('--color', 'white');
      root.style.setProperty('--shadow', '0 0 4px 1px rgba(0,0,0,.01), 0 3px 24px rgba(0,0,0,0.6)');
      root.style.setProperty('--border', '1px solid #0e0d0d');
      root.style.setProperty('--row-hover', '#161617');
      root.style.setProperty('--trade-input', '#171718');
      root.style.setProperty('--trade-input-hover', '1px solid #8c8c87');
    }
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
            <h3 className="navbar-link" onClick={this.toggleTheme}>Change Theme</h3>
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
            <h3 className="navbar-link" onClick={this.toggleTheme}>Change Theme</h3>
            <Link to="/login" className="navbar-link">Log In</Link>
            <Link to="/signup" className="navbar-link">Sign Up</Link>
          </div>
        </nav>
      )
    )
  }
};

export default Navbar;
