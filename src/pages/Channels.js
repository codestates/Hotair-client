import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import './Channels.css';

export default function Channels() {
  const [rooms, setRooms] = useState([]);
  const channelRef = React.createRef();

  const getChatrooms = () => {
    axios
      .get('http://localhost:4000/channels', {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('CC_Token'),
        },
      })
      .then((res) => {
        console.log('응답', res);
        setRooms(res.data.channelList);
      })
      .catch((err) => {
        // setTimeout(getChatrooms, 3000);
      });
  };

  const addChannel = () => {
    const channelName = channelRef.current.value;
    if (channelName.trim() === '') {
      return;
    }
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
        console.log(res.data.channel);
        setRooms([...rooms, res.data.channel]);
      });
  };

  useEffect(() => {
    getChatrooms();
  }, []);

  return (
    <div className="joinOuterContainer">
      <div className="chatrooms">
        <h1 className="heading channels">Channels</h1>
        {rooms.map((room) => (
          <div key={room.channelName} className="chatroom">
            <div>{room.channelName}</div>
            <Link to={'/main/' + room.channelName}>
              <div className="join">Join</div>
            </Link>
          </div>
        ))}
      </div>
      <div className="joinInnerContainer">
        <h1 className="heading">Create Room</h1>
        <div>
          <input
            placeholder="Create Your Chatting Room"
            className="joinInput mt-20"
            type="text"
            ref={channelRef}
          />
        </div>
        <button className="button mt-20" onClick={addChannel}>
          Create Chatroom
        </button>
      </div>
    </div>
  );
}
{
  /* <Link
onClick={(event) => (!rooms ? event.preventDefault() : null)}
to={`/main/:userid?&room=${rooms}`}
>
<button className="button mt-20" type="submit">
  Enter
</button>
</Link> */
}
