import React, { useState, useEffect } from 'react';
import '../../../hotair/Hotair-client/src/App.css';
import Login from '../../../hotair/Hotair-client/src/pages/Login';
import Signup from '../../../hotair/Hotair-client/src/pages/Signup';
import UserInfo from '../../../hotair/Hotair-client/src/pages/UserInfo';
import Main from '../../../hotair/Hotair-client/src/pages/Main';
import ChatRoomPage from '../../../hotair/Hotair-client/src/pages/ChatRoomPage';
import io from 'socket.io-client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
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
      console.log('Created New Socket >>>>>', newSocket);
      newSocket.on('disconnect', () => {
        setSocket(null);
        // setTimeout(setupSocket, 3000);
        console.log('Socket Disconnected!');
      });

      newSocket.on('connect', () => {
        console.log('Socket Connected!', socket);
      });
      setSocket(newSocket);
    }
  };

  useEffect(() => {
    setupSocket();
  }, []);

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route
            path="/"
            render={() => <Login setupSocket={setupSocket} />}
            exact
          />
          <Route path="/signup" component={Signup} />
          <Route path="/userinfo" component={UserInfo} />
          {/* <Route path="/main/:userid" component={Main} /> */}
          <Route path="/main/:userid" render={() => <Main socket={socket} />} />
          <Route path="/main" component={Main} />
          {/* <Route path="/" render={() => <Redirect to="/users/login" />} /> */}
          <Route
            path="/chatroom/:channelName"
            render={() => <ChatRoomPage socket={socket} />}
          />
          <Route path="/chatroom" component={ChatRoomPage} />
        </Switch>
      </Router>
    </>
  );
};

const connectionOptions = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket'],
};

export default App;
