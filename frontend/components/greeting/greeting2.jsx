import React    from 'react';
import { Link } from 'react-router-dom';


const Greeting2 = ({ currentUser, logout }) => {
  const greetingPage = () => (
    <div className="greeting-page-main">


      <nav className="greeting-page-navbar-box">
        <div className="greeting-page-navbar-left">
          <a className="navbar-logo">Logo</a>
        </div>
        <div className="greeting-page-navbar-right">
          <div className="greeting-page-navbar-login">
            <Link to="/login" className="mrhood-button">Log In</Link>
          </div>
          <div className="greeting-page-navbar-signup">
            <Link to="/signup" className="mrhood-button">Sign Up</Link>
          </div>
        </div>
      </nav>


      <div className="greeting-page-content">

        <div className="greeting-page-content-box-1">
          <div className="greeting-page-content-box-1-left">
            <div className="greeting-page-title">
              Investing.
            </div>
            <div className="greeting-page-title">
              Now for the rest of us.
            </div>
            <div className="greeting-page-body">
              Mr.Hood lets you learn to invest in the stock market for free.
            </div>
              <Link className="greeting-signup" to="/signup" >Sign Up</Link>
          </div>
          <div className="greeting-page-content-box-1-right">
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
