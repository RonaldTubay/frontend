import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const FunctionDetail: React.FC = () => {
  const { movieId, funcTime } = useParams<{ movieId: string; funcTime: string }>();

  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <div className="container mx-auto p-4 text-white">
        <h1 className="text-3xl font-bold">Detalles de la Función</h1>
        <p className="mt-4">Película ID: {movieId}</p>
        <p className="mt-2">Hora de Función: {funcTime}</p>
        {/* Aquí puedes añadir más detalles o una interfaz de reserva */}
      </div>
    </div>
  );
};

export default FunctionDetail;
