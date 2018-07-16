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
// import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import GreetingContainer2 from './greeting/greeting_container2';
import Dashboard from './dashboard/dashboard_container';
import StockDetailContainer from './stock_detail/stock_detail_container';

const App = () => (
  <div className="app">
    <Switch>
      <ProtectedRoute exact path="/" component={Dashboard} />
      <ProtectedRoute exact path="stocks/:stockId" component={StockDetailContainer} />
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute exact path="/welcome" component={GreetingContainer2} />
    </Switch>
  </div>
);

export default App;

// <h1>Mr.Hood</h1>

// <AuthRoute exact path="/" component={GreetingContainer2} />
