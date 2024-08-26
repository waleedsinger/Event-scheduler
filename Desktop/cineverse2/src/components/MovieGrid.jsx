// src/components/MovieGrid.jsx
import  { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const MovieGrid = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGUyYWIwZTFlNDgzN2VhMDEzNTVlZmY1ZGI2OTcyMyIsIm5iZiI6MTcyMzU0MzUxMy42MTAzNCwic3ViIjoiNjZiOWM2YjU3NDM3ZTEzNzhmMDVmYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ZLl645smBjgROXeIUYsHVCnstzt4IvjL4dU1spv17RU',
        },
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      setMovies(data.results);
    } catch (error) {
      setError(error.message);
    }
  };

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (movies.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div id="movie-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieGrid;
