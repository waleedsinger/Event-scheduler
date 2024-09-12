import React from 'react';
import './ChatbotIcon.css'; // Styles for the icon

const ChatbotIcon = ({ onClick }) => {
  return (
    <div className="chatbot-icon" onClick={onClick}>
      <img src="/botIcon.png" alt="Chatbot" /> {/* Updated icon path */}
    </div>
  );
};

export default ChatbotIcon;
