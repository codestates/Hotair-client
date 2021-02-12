import React, { useState, useEffect } from 'react';
import '../App.css';
import Chats from '../components/Chats';
import Members from '../components/Members';
import ChatroomPage from './ChatRoomPage';

import { Link, useHistory, withRouter } from 'react-router-dom';
import axios from 'axios';
import ChatRoomPage from './ChatRoomPage';
import UserInfo from './UserInfo';

function Main({ socket, match }) {
  // const token = localStorage.getItem('CC_Token');
  const channelName = match.params.channelName;
  const history = useHistory();
  const [myInfo, setMyInfo] = useState({});
  const [isInfo, setIsInfo] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('CC_Token');
    const payload = JSON.parse(atob(token.split('.')[1]));

    axios
      .get(`http://localhost:4000/users/${payload.uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((data) => {
        setMyInfo(data.data);
      });
  }, []);

  const handleIsInfo = () => {
    setIsInfo(!isInfo);
  };

  const logout = () => {
    const token = localStorage.getItem('CC_Token');
    if (!myInfo.isUser) {
      axios.delete(`http://localhost:4000/users/guestLogout/${myInfo.uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('CC_Token');
    } else {
      localStorage.removeItem('CC_Token');
    }
    history.push('/login');
  };

  return (
    <>
      {isInfo ? (
        <UserInfo info={myInfo} handleIsInfo={handleIsInfo} />
      ) : (
        <>
          <ChatRoomPage
            handleIsInfo={handleIsInfo}
            info={myInfo}
            channelName={channelName}
            socket={socket}
          />
        </>
      )}
    </>
  );
}

export default withRouter(Main);