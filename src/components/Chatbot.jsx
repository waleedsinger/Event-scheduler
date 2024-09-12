import React, { useState, useEffect } from 'react';
import ChatbotIcon from './ChatbotIcon'; // Import the ChatbotIcon component
import './Chatbot.css'; // Ensure your CSS is imported

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isSending, setIsSending] = useState(false); // To manage loading state
  const [isOpen, setIsOpen] = useState(false); // To manage the chatbot popup visibility
  const [initialMessageDisplayed, setInitialMessageDisplayed] = useState(false); // Track if the initial message is shown

  useEffect(() => {
    if (isOpen && !initialMessageDisplayed) {
      setMessages([{ sender: 'XCopilot', text: 'Ask XCopilot anything to help with your diary entry...' }]);
      setInitialMessageDisplayed(true);
    }
  }, [isOpen, initialMessageDisplayed]);

  const sendMessage = async () => {
    if (userInput.trim() === '' || isSending) return; // Avoid sending if input is empty or already sending

    setIsSending(true); // Disable sending while waiting for a response

    // Add the user's message to the chat
    setMessages([...messages, { sender: 'You', text: userInput }]);
    setUserInput(''); // Clear input field

    try {
      // Send the user's message to your backend API (which handles the OpenAI API)
      const response = await fetch('http://localhost:3000/api/chat', { // Full URL for backend
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();
      const chatbotReply = data.reply;

      // Add the chatbot's reply to the chat
      setMessages(prevMessages => [...prevMessages, { sender: 'XCopilot', text: chatbotReply }]);
    } catch (error) {
      console.error('Error sending message:', error);
      // Optionally add a message to the chat indicating there was an error
      setMessages(prevMessages => [...prevMessages, { sender: 'Error', text: 'Could not get a reply from the chatbot.' }]);
    } finally {
      setIsSending(false); // Re-enable sending after response or error
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault(); // Prevent newline
      sendMessage();
    }
  };

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setInitialMessageDisplayed(false); // Reset initial message when opening
    }
  };

  return (
    <div>
      <ChatbotIcon onClick={toggleChatbot} />
      <div className={`chatbot-popup ${isOpen ? 'open' : ''}`}>
        <div className="chatbot-header">
          <h3>Ask XCopilot</h3>
          <button className="close-btn" onClick={toggleChatbot}>×</button>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender === 'You' ? 'user-message' : 'bot-message'}`}>
              <strong>{msg.sender}:</strong> {msg.text}
            </div>
          ))}
        </div>
        <textarea
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown} // Add key down handler
          placeholder={!initialMessageDisplayed ? "Ask me anything to help with your diary entry..." : ""} // Show placeholder only initially
          disabled={isSending} // Disable input while sending
        />
        <button onClick={sendMessage} disabled={isSending}>
          {isSending ? 'Sending...' : 'Send'} {/* Display sending status */}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
