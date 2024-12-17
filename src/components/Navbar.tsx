import React from 'react';
import { useNavigate } from 'react-router-dom';
import { User } from 'lucide-react';

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-bold text-xl">CineFlex</span>
      </div>
      <button 
        onClick={handleLogin} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center"
      >
        <User className="mr-2" />
        Iniciar Sesión
      </button>
    </nav>
  );
};

export default Navbar;
