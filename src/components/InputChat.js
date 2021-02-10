import React from 'react';

export default function InputChat() {
  return (
    <form>
      <label htmlFor="textInput" />
      <input id="textInput" type="text" />
      <button>Send</button>
    </form>
  );
}
