import React, { useRef } from 'react';

const InputChat = function ({ channelName, socket }) {
  const inputRef = useRef();
  const sendChat = () => {
    if (socket) {
      socket.emit('channelChat', { channelName, text: inputRef.current.value });
    }
    inputRef.current.value = '';
  };
  return (
    <form>
      <label htmlFor="textInput" />
      <input id="textInput" ref={inputRef} type="text" />
      <button id="btn-temp" onClick={sendChat}>
        Send
      </button>
    </form>
  );
};

export default InputChat;
