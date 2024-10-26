// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = ({ darkMode, toggleDarkMode }) => {
  return (
    <header className={`p-4 flex justify-between items-center ${darkMode ? 'bg-purple-600 text-white' : 'bg-blue-600 text-white'}`}>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-3">
          <img src="./src/assets/logo.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
        </div>
        <h1 className="text-xl font-bold">Blog-App</h1>
      </div>
      <nav className="flex items-center space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <span>|</span>
        <Link to="/about" className="hover:underline">About</Link>
        <span>|</span>
        <Link to="/contact" className="hover:underline">Contact Us</Link>
        <span>|</span>
        <Link to="/github" className="hover:underline">GitHub API</Link>
        
        {/* Dark Mode Toggle Button */}
        <button onClick={toggleDarkMode} className="ml-4 flex items-center justify-center w-10 h-10 bg-white rounded-full shadow focus:outline-none">
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </nav>
    </header>
  );
};

export default Header;
