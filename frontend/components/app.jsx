import React from 'react';
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';


import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SearchContainer from './navbar/search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer2 from './greeting/greeting_container2';
import Dashboard from './dashboard/dashboard_container';
import StockPageContainer from './stock_page/stock_page_container';

const App = () => (
  <div className="app">
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <ProtectedRoute exact path="/stocks/:symbol" component={StockPageContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/welcome" component={GreetingContainer2} />
    </Switch>
  </div>
);

export default App;

// <h1>Mr.Hood</h1>

// <AuthRoute exact path="/" component={GreetingContainer2} />
