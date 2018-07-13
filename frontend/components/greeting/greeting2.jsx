import React    from 'react';
import { Link } from 'react-router-dom';


const Greeting2 = ({ currentUser, logout }) => {
  const greetingPage = () => (
    <div className="greeting-page-main">


      <nav className="greeting-page-navbar-box">
        <div className="greeting-page-navbar-left">
          <a className="navbar-logo"></a>
        </div>
        <ul className="greeting-page-navbar-right">
          <li>
            <a>Careers</a>
          </li>
          <li>
            <a>Help</a>
          </li>
          <li>
            <Link to="/login">Log In</Link>
          </li>
          <li>
            <a>Sign Up</a>
          </li>
        </ul>
      </nav>


      <div className="greeting-page-content">

        <div className="greeting-page-content-box-1">
          <div className="greeting-page-content-box-1-left">
            <h1>Investing.</h1>
            <h4>Now for the rest of us.</h4>
            <Link to="/signup">Sign Up</Link>
          </div>
          <div className="greeting-page-content-box-1-right">
            <img className="greeting-page-content-box-1-image"></img>
          </div>
        </div>

      </div>



    </div>
  );

  return greetingPage();
};


export default Greeting2;



// const personalGreeting = () => (
//   <hgroup className="header-group">
//     <h2 className="header-name">Hi, {currentUser.first_name}!</h2>
//     <button className="header-button" onClick={logout}>Log Out</button>
//   </hgroup>
// );
