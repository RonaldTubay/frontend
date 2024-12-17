import React from 'react';
import Navbar from '../components/Navbar';
import MovieSchedule from './MovieSchedule';

const Home: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <MovieSchedule />
    </div>
  );
};

export default Home;
