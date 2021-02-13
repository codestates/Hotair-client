import React, { useState } from 'react';
import { Link, withRouter, useHistory } from 'react-router-dom';

import './ChatRoomPage.css';
import axios from 'axios';

const ChatroomPage = ({ channelName, socket, info, handleIsInfo }) => {
  const history = useHistory();

  const [chats, setChats] = React.useState([]);
  const messageRef = React.useRef();
  const [uuid, setUuid] = React.useState('');

  const logout = () => {
    const token = localStorage.getItem('CC_Token');
    if (!info.isUser) {
      axios.delete(`http://localhost:4000/users/guestLogout/${info.uuid}`, {
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

  const sendMessage = () => {
    console.log(socket);
    if (socket) {
      socket.emit('channelChat', {
        channelName,
        text: messageRef.current.value,
      });

      messageRef.current.value = '';
    }
  };

  let users = [];

  React.useEffect(() => {
    const token = localStorage.getItem('CC_Token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUuid(payload.uuid);
    }
    if (socket) {
      socket.on('newText', (chatInfo) => {
        const newChatInfo = [...chats, chatInfo];
        setChats(newChatInfo);
      });
    }
    for (let i = 0; i < chats.length; i++) {
      if (!users.indexOf(chats[i].username)) {
        users.push(chats[i].username);
      }
    }
    //eslint-disable-next-line
  }, [chats]);

  React.useEffect(() => {
    if (socket) {
      socket.emit('joinChannel', {
        channelName,
      });
    }

    return () => {
      //Component Unmount
      if (socket) {
        socket.emit('leaveChannel', {
          channelName,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div className="wrap-page">
      <div className="chatroomPage">
        <div className="chatroomSection">
          <div className="cardHeader">{channelName}</div>
          <div className="chatroomContent">
            {chats.map((chat, i) => (
              <div key={i} className="message">
                <span
                  className={uuid === chat.uuid ? 'ownMessage' : 'otherMessage'}
                >
                  {chat.username}:
                </span>
                {chat.text}
              </div>
            ))}
          </div>
          <div className="chatroomActions">
            <div>
              <input
                className="send-input"
                type="text"
                name="message"
                placeholder="Say something!"
                ref={messageRef}
              />
            </div>
            <div>
              <button className="join" onClick={sendMessage}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="currentUser">
        <h1 className="heading">Users</h1>
        {chats
          .map((chat) => chat.username)
          .filter((el, index) => {
            return chats.map((chat) => chat.username).indexOf(el) === index;
          })
          .map((user, i) => (
            <div key={i} className="current">
              <span className="ownMessage">{user}</span>
            </div>
          ))}
        {/* <div key={i} className="current">
              <span
                className={uuid === chat.uuid ? 'ownMessage' : 'otherMessage'}
              >
                {chat.username}
              </span>
            </div>; */}
        <button className="FromChat logout" onClick={logout}>
          logout
        </button>
        <button className="FromChat logout" onClick={handleIsInfo}>
          Myinfo
        </button>
      </div>
      <div className="textContainer">
        <div>
          <h1>
            Realtime Chat Application
            <span role="img" aria-label="emoji">
              💬
            </span>
          </h1>
          <h2>
            Created with React, Express, Node and Socket.IO
            <span role="img" aria-label="emoji">
              ❤️
            </span>
          </h2>
          <h2>
            Try it out right now!
            <span role="img" aria-label="emoji">
              ⬅️
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ChatroomPage);
