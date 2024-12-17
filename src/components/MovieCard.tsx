import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Movie } from '../types/movie';

interface MovieCardProps {
  movie: Movie; // Recibe una sola película
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const navigate = useNavigate();

  const handleDayClick = (movieId: number, day: string) => {
    navigate(`/purchase/${movieId}/${day}`);
  };

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
      <div className="p-4">
        <h2 className="text-2xl font-bold text-white">{movie.title}</h2>
        <p className="text-gray-300 mt-2">{movie.synopsis}</p>
        <p className="text-gray-400 mt-2"><strong>Género:</strong> {movie.genre}</p>
        <p className="text-gray-400"><strong>Duración:</strong> {movie.duration}</p>
        <div className="mt-4">
          {/* Itera sobre los días disponibles de esa película */}
          {movie.availableDays.map((day) => (
            <button
              key={day}
              onClick={() => handleDayClick(movie.id, day)}
              className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            >
              {day}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
