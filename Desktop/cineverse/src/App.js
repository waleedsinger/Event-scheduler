import React from 'react';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Header />
      <div className="flex">
        <Sidebar />
        <MainContent />
      </div>
      <Footer />
    </div>
  );
};

export default App;
