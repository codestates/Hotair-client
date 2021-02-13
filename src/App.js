import React, { useState, useEffect } from 'react';
import Login from './pages/Login';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import io from 'socket.io-client';
import IndexPage from './pages/IndexPage';
import Main from './pages/Main';
import Signup from './pages/Signup';
import UserInfo from './pages/UserInfo';
import Channels from './pages/Channels';

function App() {
  const [socket, setSocket] = useState(null);

  const setupSocket = () => {
    const token = localStorage.getItem('CC_Token');
    if (token && !socket) {
      const newSocket = io('http://localhost:4000', {
        withCredentials: true,
        query: {
          token: token,
        },
      });
      newSocket.on('disconnect', () => {
        setSocket(null);
        setTimeout(setupSocket, 3000);
        console.log('disconnected');
      });
      newSocket.on('connect', () => {
        console.log('connected');
      });
      setSocket(newSocket);
    }
  };
  useEffect(() => {
    setupSocket();
  }, []);

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={IndexPage} exact />
          <Route
            path="/login"
            render={() => <Login setupSocket={setupSocket} />}
            exact
          />
          <Route path="/signup" component={Signup} />
          <Route path="/channels" component={Channels} />
          <Route
            path="/main/:channelName"
            render={() => <Main socket={socket} />}
            exact
          />

          <Route path="/userinfo" component={UserInfo} exact />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
