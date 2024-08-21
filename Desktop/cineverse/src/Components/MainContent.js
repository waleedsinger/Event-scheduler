import React, { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

const MainContent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGUyYWIwZTFlNDgzN2VhMDEzNTVlZmY1ZGI2OTcyMyIsIm5iZiI6MTcyMzU0MzUxMy42MTAzNCwic3ViIjoiNjZiOWM2YjU3NDM3ZTEzNzhmMDVmYmRjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.ZLl645smBjgROXeIUYsHVCnstzt4IvjL4dU1spv17RU'
      },
    })
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl mb-8">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
