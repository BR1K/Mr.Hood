import React    from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, login }) => {
  const demoLogin = (user) => {
    login(user);
  }

  const greetingPage = () => (
    <div className="greeting-page">

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


export default Greeting;
