import { useState, useEffect } from 'react';
import Home from './pages/Home';
import Journal from './pages/Journal';
import Header from './components/Header';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem('isDarkMode') === 'true';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('isDarkMode', newMode);
      return newMode;
    });
  };

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

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen`}>
      <Header title="My Application" />
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
        <button
          onClick={handleToggleDarkMode}
          style={buttonStyle}
        >
          Toggle Dark Mode
        </button>
      </nav>
      <div className="p-4">
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
