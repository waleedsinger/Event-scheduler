// src/pages/Journal.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

const Journal = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="container mx-auto mt-5">
        <h1 className="text-3xl mb-8">Movie Journal</h1>
        <div id="favoriteMovies">
          {/* Movie notes will go here */}
        </div>
      </div>
    </div>
  );
};

export default Journal;
