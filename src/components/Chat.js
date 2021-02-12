import React from 'react';

// eslint-disable-next-line react/prop-types
const Chat = function ({ name, text }) {
  return (
    <li className="item-chat">
      <span>{name}</span>
      <p>{text}</p>
    </li>
  );
};

export default Chat;
