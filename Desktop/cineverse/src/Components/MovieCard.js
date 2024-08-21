import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card bg-gray-800 rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-64 object-cover"
      />
      <div className="p-4">
        <div className="movie-title text-lg font-bold">{movie.title}</div>
        <div className="movie-date text-gray-400 text-sm mt-2">
          {new Date(movie.release_date).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
