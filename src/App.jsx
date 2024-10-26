import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GithubApi from './pages/GithubApi';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // Dark mode state

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}> {/* Apply dark mode globally */}
      <div className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <Router>
          <Header darkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
            <Route path="/about" element={<About isDarkMode={isDarkMode} />} />
            <Route path="/contact" element={<Contact isDarkMode={isDarkMode} />} />
            <Route path="/github" element={<GithubApi isDarkMode={isDarkMode} />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
};

export default App;
