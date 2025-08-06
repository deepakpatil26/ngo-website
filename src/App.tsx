// src/App.tsx
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import VolunteerForm from './components/VolunteerForm';
import AboutUs from './components/AboutUs';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-white'>
      <Navigation
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <Routes>
        <Route
          path='/'
          element={<HomePage />}
        />
        <Route
          path='/volunteer'
          element={<VolunteerForm />}
        />
        <Route
          path='/about'
          element={<AboutUs />}
        />
      </Routes>
    </div>
  );
};

export default App;
