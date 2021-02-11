import React from 'react';
import { withRouter } from 'react-router-dom';

import './ChatRoomPage.css';

const ChatroomPage = ({ match, socket }) => {
  const channelName = match.params.channelName;
  console.log(channelName);
  console.log(socket);
  const [chats, setChats] = React.useState([]);
  const messageRef = React.useRef();
  const [uuid, setUuid] = React.useState('');

  const sendMessage = () => {
    if (socket) {
      socket.emit('channelChat', {
        channelName,
        text: messageRef.current.value,
      });

      messageRef.current.value = '';
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem('CC_Token');
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      setUuid(payload.uuid);
    }
    console.log('소켓소켓>>>>>>>>>', socket);
    if (socket) {
      socket.on('newText', (chatInfo) => {
        const newChatInfo = [...chats, chatInfo];
        setChats(newChatInfo);
      });
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
        {chats.map((chat, i) => (
          <div key={i} className="current">
            <span
              className={uuid === chat.uuid ? 'ownMessage' : 'otherMessage'}
            >
              {chat.username}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(ChatroomPage);
