import React from 'react';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserInfo from './pages/UserInfo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/users/login" component={Login} exact />
          <Route path="/users/signup" component={Signup} exact />
          <Route path="/users/userinfo" component={UserInfo} exact />
          <Route path="/" render={() => <Redirect to="/users/login" />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
