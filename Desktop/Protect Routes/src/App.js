// src/App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './login';
import Home from './home';
import ProtectedRoute from './protectedRoute';
import About from './about';
import LandiingPage from './LandiingPage';
// src/index.js or src/App.js
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  return ( 
    <Router>
      <Routes>
        <Route path='/' element={<LandiingPage />} />
        <Route
          path="/login"
          element={<ProtectedRoute element={<Login />} restricted={true} />}
        />
        <Route
          path="/home"
          element={<ProtectedRoute element={<Home />} />}
        />
        <Route
          path="/about"
          element={<ProtectedRoute element={<About />} />}
        />
        {/* Optional catch-all route */}
        <Route path="*" element={<Navigate to="/login"  />} />
      </Routes>
    </Router>
  );
};

export default App;
