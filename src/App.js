import React from 'react';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import UserInfo from './pages/UserInfo';
import Main from './pages/Main';

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
          <Route path="/" component={Login} exact />
          <Route path="/signup" component={Signup} />
          <Route path="/userinfo" component={UserInfo} />
          <Route path="/main/:userid" component={Main} />
          <Route path="/main" component={Main} />
          {/* <Route path="/" render={() => <Redirect to="/users/login" />} /> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
