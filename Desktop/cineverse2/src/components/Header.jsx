// src/components/Header.jsx
import  { useState } from 'react';

// import PropTypes from 'prop-types';

const Header = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <header className={`p-4 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-800'} flex justify-between items-center`}>
      <div className="search-bar relative w-1/2">
        <input
          type="text"
          placeholder="Search Movies..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full px-5 py-2 rounded-lg bg-white text-black outline-none"
        />
      </div>
      <button
        onClick={handleToggleDarkMode}
        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
