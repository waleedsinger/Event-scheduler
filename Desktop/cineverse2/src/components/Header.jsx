// src/components/Header.jsx
import React from 'react';

const Header = ({ onToggleDarkMode }) => {
  return (
    <header className="p-4 bg-gray-800 flex justify-between items-center">
      <div className="search-bar relative">
        <input
          type="text"
          placeholder="Search Movies..."
          className="w-full px-5 py-2 rounded-lg bg-white text-black outline-none"
        />
      </div>
      <button
        onClick={onToggleDarkMode}
        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
