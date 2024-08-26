import PropTypes from 'prop-types';

const Header = ({ title }) => {
  return (
    <header className="p-4 bg-gray-800 flex justify-center items-center">
      <h1 className="text-white text-xl">{title}</h1>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

