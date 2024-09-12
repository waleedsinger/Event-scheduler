// src/components/Header.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Header({ onAddEventClick, onLogoutClick }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Perform any necessary cleanup before logging out
    if (onLogoutClick) onLogoutClick(); // Check if onLogoutClick is defined

    // Navigate to the home or login page after logging out
    navigate('/login');
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md">
      <h1 className="text-2xl font-bold">Event Scheduler</h1>
      <div className="flex items-center">
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md mr-2 transition-colors"
          onClick={onAddEventClick}
        >
          Add Event
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
          onClick={handleLogoutClick}
        >
          Logout
        </button>
      </div>
    </header>
  );
}

Header.propTypes = {
  onAddEventClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func, // Make it optional
};

export default Header;
