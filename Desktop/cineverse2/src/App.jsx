// src/App.jsx
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
   
    }
  };

  return (
    <div>
      <nav>
        <button onClick={() => navigateTo('home')}>Home</button>
        <button onClick={() => navigateTo('journal')}>Journal</button>
      </nav>
      {renderPage()}
    </div>
  );
};

export default App;
