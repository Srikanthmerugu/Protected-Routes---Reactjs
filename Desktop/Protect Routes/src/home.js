// src/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='text-center mt-5 pt-5'>
      <h2>Home</h2>
      <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
