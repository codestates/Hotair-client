import React from 'react';

export default function Chat({ name, text }) {
  return (
    <li className="item-chat">
      <span>{name}</span>
      <p>{text}</p>
    </li>
  );
}
