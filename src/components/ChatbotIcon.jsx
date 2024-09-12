import React from 'react';
import './ChatbotIcon.css'; // Ensure the path is correct

const ChatbotIcon = ({ onClick }) => {
  return (
    <div className="chatbot-icon" onClick={onClick}>
      <img src="/botIcon.png" alt="Chatbot" /> {/* Ensure the path to the icon is correct */}
    </div>
  );
};

export default ChatbotIcon;
