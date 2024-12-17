import React from 'react';
import Navbar from '../components/Navbar';

const Register: React.FC = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg mt-10">
        <h2 className="text-2xl text-white mb-4">Registrarse</h2>
        <form className="flex flex-col">
          <label className="text-gray-300 mb-2">Nombre de Usuario</label>
          <input 
            type="text" 
            className="p-2 mb-4 rounded bg-gray-700 text-white" 
            placeholder="Ingrese su nombre de usuario"
          />
          <label className="text-gray-300 mb-2">Correo Electrónico</label>
          <input 
            type="email" 
            className="p-2 mb-4 rounded bg-gray-700 text-white" 
            placeholder="Ingrese su correo electrónico"
          />
          <label className="text-gray-300 mb-2">Contraseña</label>
          <input 
            type="password" 
            className="p-2 mb-4 rounded bg-gray-700 text-white" 
            placeholder="Ingrese su contraseña"
          />
          <label className="text-gray-300 mb-2">Verificar Contraseña</label>
          <input 
            type="password" 
            className="p-2 mb-4 rounded bg-gray-700 text-white" 
            placeholder="Confirme su contraseña"
          />
          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Registrarse
          </button>
        </form>
        <p className="text-gray-400 mt-4">
          ¿Ya tienes una cuenta?{' '}
          <a href="/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
