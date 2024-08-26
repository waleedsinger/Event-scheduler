// src/components/Header.jsx
import PropTypes from 'prop-types';

const Header = ({ onToggleDarkMode }) => {
  // component code here
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

Header.propTypes = {
  onToggleDarkMode: PropTypes.func.isRequired,
};

export default Header;
