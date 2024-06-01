// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import GitHub from './pages/GitHub';
// import LatestPosts from './components/LatestPosts'; // Import LatestPosts component

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Render Header component */}
        <Header />

        {/* Render LatestPosts component */}
        {/* <LatestPosts /> */}

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/github" element={<GitHub />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
