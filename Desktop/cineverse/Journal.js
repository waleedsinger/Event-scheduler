import React, { useEffect, useState } from 'react';

const Journal = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(savedFavorites);
  }, []);

  const saveNotes = (id, notes) => {
    const updatedFavorites = favorites.map(movie =>
      movie.id === id ? { ...movie, notes } : movie
    );
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    alert('Notes saved!');
  };

  return (
    <div className="container mx-auto mt-5">
      {favorites.length > 0 ? (
        favorites.map(movie => (
          <div key={movie.id} className="bg-gray-800 p-4 rounded mb-4">
            <h2>{movie.title}</h2>
            <textarea
              id={`notes-${movie.id}`}
              placeholder="Add your notes here..."
              className="text-black mt-2 p-2 w-full"
              defaultValue={movie.notes}
              onBlur={e => saveNotes(movie.id, e.target.value)}
            ></textarea>
          </div>
        ))
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Journal;
