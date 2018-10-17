import React    from 'react';
import { Link } from 'react-router-dom';



const Greeting2 = ({ currentUser, logout, login }) => {
  const demoLogin = (user) => {
    login(user);
  }

  const greetingPage = () => (
    <div className="greeting-page">



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


      <div className="greeting-page-content">
        <div className="greeting-page-content-left">
          <div className="greeting-page-title">
            Investing.
          </div>
          <div className="greeting-page-title">
            Now for the rest of us.
          </div>
          <div className="greeting-page-body">
            Mr.Hood lets you learn to invest in the stock market for free.
          </div>
            <button className="session-submit" onClick={() =>
                demoLogin({
                email: 'rhood@mrhood.com',
                password: 'Hunter12',
                })
              }>Demo
            </button>
        </div>
        <div className="greeting-page-content-right">
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


// <nav className="navbar-container welcome">
//   <div className="navbar-left">
//     <Link to="/">
//       <img className="logo-image" src={window.logo} />
//     </Link>
//   </div>
//   <div className="navbar-right">
//     <div className="greeting-page-navbar-login">
//       <Link to="/login" className="navbar-link">Log In</Link>
//     </div>
//     <div className="greeting-page-navbar-signup">
//       <Link to="/signup" className="navbar-link">Sign Up</Link>
//
//     </div>
//   </div>
// </nav>
