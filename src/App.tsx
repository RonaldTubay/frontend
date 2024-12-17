import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import MovieSchedule from './pages/MovieSchedule';
import PurchaseTicket from './pages/PurchaseTicket';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/schedule" element={<MovieSchedule />} />
        <Route path="/purchase/:movieId/:day" element={<PurchaseTicket />} />
      </Routes>
    </Router>
  );
};

export default App;
