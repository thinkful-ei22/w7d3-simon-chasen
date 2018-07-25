import React from 'react';
import messages from '../messages.json';

export default function GenerateMessage(props) {
  // const randomNumber = Math.floor(Math.random() * 20 + 1);
  let response;
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].id === props.value) {
      response = messages[i].response;
    }
  }
  return (
    <div>
      {response}
    </div>
  );
}
