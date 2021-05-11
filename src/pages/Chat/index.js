import React, { useEffect, useState } from 'react';
import './style.css';

const API_MESSAGES = [
  {
    channel_id: 1,
    text: 'message to channel 1',
  },
  {
    channel_id: 2,
    text: 'message to channel 2',
  },
  {
    channel_id: 3,
    text: 'message to channel 3',
  },
];

const Chat = ({ match }) => {
  const { id } = match.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(API_MESSAGES.filter((m) => m.channel_id === parseInt(id)));
  }, [id]);

  return (
    <div className="chat-container">
      <h1>Channel {id}</h1>
      <div className="chat-messages">
        {messages.map((m, index) => (
          <p key={index} className="message">
            {m.text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Chat;
