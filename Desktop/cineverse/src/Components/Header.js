import React, { useState } from 'react';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <header className="p-4 bg-gray-800 flex justify-between items-center">
      <div className="search-bar relative max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Search Movies..."
          className="w-full px-5 py-2 rounded-lg bg-white text-black outline-none"
        />
        <i className="fa-solid fa-filter text-black absolute top-3 right-3"></i>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200"
      >
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;
