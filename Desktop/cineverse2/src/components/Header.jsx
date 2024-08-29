import PropTypes from 'prop-types';

const Header = ({ title, searchTerm, onSearchChange }) => {
  return (
    <header className="p-4 bg-gray-800 flex justify-between items-center">
      <h1 className="text-white text-xl">{title}</h1>
      <div className="search-bar relative w-1/2">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full px-5 py-2 rounded-lg bg-white text-black outline-none"
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

export default Header;
