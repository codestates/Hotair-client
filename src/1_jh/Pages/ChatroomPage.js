import React from "react";
import { withRouter } from "react-router-dom";

const ChatroomPage = ({ match, socket }) => {
  const channelName = match.params.channelName;
  console.log(channelName)
  console.log(socket)
  const [chats, setChats] = React.useState([]);
  const messageRef = React.useRef();
  const [uuid, setUuid] = React.useState("");

  const sendMessage = () => {
    if (socket) {
      socket.emit("channelChat", {
        channelName,
        text: messageRef.current.value,
      });

      messageRef.current.value = "";
    }
  };

  React.useEffect(() => {
    const token = localStorage.getItem("CC_Token");
    if (token) {
      const payload = JSON.parse(atob(token.split(".")[1]));
      setUuid(payload.uuid);
    }
    if (socket) {
      socket.on("newText", (chatInfo) => {
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
        socket.emit("leaveChannel", {
          channelName,
        });
      }
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div className="chatroomPage">
      <div className="chatroomSection">
        <div className="cardHeader">Chatroom Name</div>
        <div className="chatroomContent">
          {chats.map((chat, i) => (
            <div key={i} className="message">
              <span
                className={
                  uuid === chat.uuid ? "ownMessage" : "otherMessage"
                }
              >
                {chat.username}:
              </span>{" "}
              {chat.text}
            </div>
          ))}
        </div>
        <div className="chatroomActions">
          <div>
            <input
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
  );
};

export default withRouter(ChatroomPage);
