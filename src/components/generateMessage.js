import React from 'react';
import messages from '../messages.json';

export default function GenerateMessage() {
  const randomNumber = Math.floor((Math.random() * 20) + 1);
  let response;
  for (let i = 0; i < messages.length; i++) {
    if (messages[i].id === randomNumber) {
      response = messages[i].response;
    }
  }
  return (
    <div>
      {response};
    </div>
  );
  // const randomNumber = Math.floor((Math.random() * 20) + 1);
  // for (let i = 0; i < messages.length; i++) {
  //   if (messages[i].id === randomNumber) {
  //     return messages[i].response;
  //   }
  // }
}