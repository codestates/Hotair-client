import React from 'react';

import Chat from './Chat';
import InputChat from './InputChat';

export default function Chats() {
  const fakeData = [
    { id: 1, name: 'mari', text: 'keep calm and love soonduck.' },
    { id: 2, name: 'mari', text: 'hodoo is not food.' },
    { id: 3, name: 'mari', text: 'hodoo is not food.' },
    { id: 4, name: 'mari', text: 'hodoo is not food.' },
    { id: 5, name: 'mari', text: 'hodoo is not food.' },
    { id: 6, name: 'mari', text: 'hodoo is not food.' },
    { id: 7, name: 'mari', text: 'hodoo is not food.' },
    { id: 8, name: 'mari', text: 'hodoo is not food.' },
    { id: 9, name: 'mari', text: 'hodoo is not food.' },
    { id: 10, name: 'mari', text: 'hodoo is not food.' },
    { id: 11, name: 'mari', text: 'hodoo is not food.' },
  ];
  return (
    <div className="wrap-chat">
      <ul className="list-chat">
        {fakeData.map(({ id, name, text }) => (
          <Chat key={id} name={name} text={text} />
        ))}
      </ul>
      <InputChat />
    </div>
  );
}
