// src/pages/Home.jsx
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import MovieGrid from '../components/MovieGrid';
import Footer from '../components/Footer';
const Home = () => {
  const [darkMode, setDarkMode] = React.useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  return (
    <div className={`flex ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar />
      <div className="flex-1">
        <Header onToggleDarkMode={handleToggleDarkMode} />
        <div className="container mx-auto p-8">
          <h2 className="text-3xl mb-8">Popular Movies</h2>
          <MovieGrid />
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
