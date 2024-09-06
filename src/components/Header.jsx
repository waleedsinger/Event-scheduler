import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Header({ onAddEntryClick, onLogoutClick }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    // Save the entries list for this user before logging out
    // You can use localStorage or any other method to store the data
    // Example using localStorage:
    // Replace with your actual entries list
    const entries = JSON.parse(localStorage.getItem('entries'));

    // Call the provided onLogoutClick function
    onLogoutClick();

    // Navigate to '/'
    navigate('/');
  };

  return (
    <header className="flex-wrap justify-center items-center mb-6">
      <h1 className="text-3xl font-extrabold text-white">My Diary</h1><br/>
      <button
        className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition-colors"
        onClick={onAddEntryClick}
      >
        Add Entry
      </button>
      <button
        className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition-colors ml-4"
        onClick={handleLogoutClick}
      >
        Logout
      </button>
    </header>
  );
}

Header.propTypes = {
  onAddEntryClick: PropTypes.func.isRequired,
  onLogoutClick: PropTypes.func.isRequired,
};

export default Header;
