import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpPage from './session_form/signup_form_container';
import LogInPage from './session_form/login_form_container';
import SearchContainer from './navbar/search/search_container';
import GreetingPage from './greeting/greeting_container';
import Dashboard from './dashboard/dashboard_container';
import StockPage from './stock_page/stock_page_container';

const App = () => (
  <div className="app">
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <ProtectedRoute exact path="/stocks/:symbol" component={StockPage} />
      <AuthRoute exact path="/login" component={LogInPage} />
      <AuthRoute exact path="/signup" component={SignUpPage} />
      <AuthRoute exact path="/welcome" component={GreetingPage} />
    </Switch>
  </div>
);

export default App;

// <h1>Mr.Hood</h1>

// <AuthRoute exact path="/" component={GreetingContainer2} />
