// src/components/MovieCard.jsx
import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card bg-gray-900 p-4 rounded">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <div className="movie-title mt-2">{movie.title}</div>
      <div className="movie-date">
        {new Date(movie.release_date).toLocaleDateString('en-GB', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </div>
    </div>
  );
};

export default MovieCard;
