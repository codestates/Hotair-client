import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const DashboardPage = (props) => {
  const [chatrooms, setChatrooms] = React.useState([]);
  const channelRef = React.createRef();
  const getChatrooms = () => {
    axios
      .get('http://localhost:4000/channels', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('CC_Token'),
        },
      })
      .then((response) => {
        setChatrooms(response.data.channelList);
      })
      .catch((err) => {
        setTimeout(getChatrooms, 3000);
      });
  };
  const addChannel = () => {
    const channelName = channelRef.current.value;
    axios
      .post(
        'http://localhost:4000/channels/addChannel',
        { channelName },
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('CC_Token'),
          },
        },
      )
      .then((res) => {
        setChatrooms([...chatrooms], res.data.channel);
      });
  };

  React.useEffect(() => {
    getChatrooms();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="card">
      <div className="cardHeader">Chatrooms</div>
      <div className="cardBody">
        <div className="inputGroup">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input
            type="text"
            name="chatroomName"
            id="chatroomName"
            placeholder="ChatterBox Nepal"
            ref={channelRef}
          />
        </div>
      </div>
      <button onClick={addChannel}>Create Chatroom</button>
      <div className="chatrooms">
        {chatrooms.map((chatroom) => (
          <div key={chatroom.channelName} className="chatroom">
            <div>{chatroom.channelName}</div>
            <Link to={'/chatroom/' + chatroom.channelName}>
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
