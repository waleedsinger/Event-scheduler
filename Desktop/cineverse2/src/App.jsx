import  { useState } from 'react';
import Home from './pages/Home';
import Journal from './pages/Journal';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'journal':
        return <Journal />;
      default:
        return <Home />;
    }
  };

  const buttonStyle = {
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: '#4a5568', // gray-700
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    margin: '0 5px',
    transition: 'background-color 0.3s ease',
  };

  const activeButtonStyle = {
    backgroundColor: '#2b6cb0', // blue-600
  };

  const hoverButtonStyle = {
    backgroundColor: '#2d3748', // gray-800
  };

  return (
    <div>
      <nav className="p-4 bg-gray-800 flex justify-center">
        <button
          onClick={() => navigateTo('home')}
          style={{
            ...buttonStyle,
            ...(currentPage === 'home' ? activeButtonStyle : {}),
          }}
        >
          Home
        </button>
        <button
          onClick={() => navigateTo('journal')}
          style={{
            ...buttonStyle,
            ...(currentPage === 'journal' ? activeButtonStyle : {}),
          }}
        >
          Journal
        </button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
