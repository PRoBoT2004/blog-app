// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';

const Header = () => {
  const [darkMode, setDarkMode] = useState(() => {
    // Check local storage for dark mode preference
    const storedPreference = localStorage.getItem('darkMode');
    return storedPreference ? JSON.parse(storedPreference) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Store dark mode preference in local storage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={`relative h-25 py-4 flex justify-between items-center ${darkMode ? 'bg-violet-600' : 'bg-blue-600'} text-white`}>
      {/* Left: Logo */}
      <div className="ml-4">
        <img src="/src/assets/logo.png" alt="Logo" className="h-8 w-auto rounded-full" />
      </div>

      {/* Center: Navigation Links */}
      <nav className="flex-1 flex justify-center space-x-8">
        <Link to="/" className="relative group">
          Home
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </Link>
        <Link to="/about" className="relative group">
          About
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </Link>
        <Link to="/contact" className="relative group">
          Contact
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </Link>
        <Link to="/github" className="relative group">
          GitHub
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
        </Link>
      </nav>

      {/* Right: Login and Dark Mode Toggle */}
      <div className="mr-4 flex items-center space-x-4">
        <button className="py-2 px-4 bg-amber-400 rounded">Login</button>
        <button onClick={toggleDarkMode} className="focus:outline-none">
          {darkMode ? <FaSun className="text-yellow-400" size={24} /> : <FaMoon className="text-gray-200" size={24} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
