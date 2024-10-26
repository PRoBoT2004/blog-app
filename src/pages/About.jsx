// src/pages/About.jsx
import React from 'react';

const About = ({ isDarkMode }) => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className={`text-4xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>
        About Us
      </h1>
      
      {/* Organization Section */}
      <section className="mb-12">
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Organization</h2>
        <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          We are a dedicated team of writers and creators passionate about sharing knowledge and insights on various topics through engaging blog posts. Our aim is to create a community where ideas can flourish and information can be freely exchanged.
        </p>
        <img
          src="./src/assets/005.jpg" // Replace with a relevant image
          alt="Our Organization"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </section>

      {/* Owner Section */}
      <section className="mb-12">
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Meet the Owner</h2>
        <div className="flex items-center">
          <img
            src="./src/assets/001.jpg" // Replace with owner's image
            alt="Owner"
            className="w-32 h-32 rounded-full mr-4 shadow-lg"
          />
          <div>
            <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-black'}`}>Krishna Mehta</h3>
            <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              John is a seasoned blogger with a passion for storytelling and sharing insights. With over 10 years of experience in the blogging world, he aims to inspire and educate others through his writing.
            </p>
          </div>
        </div>
      </section>

      {/* Company Goals Section */}
      <section>
        <h2 className={`text-2xl font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Our Goals</h2>
        <ul className={`list-disc list-inside ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <li>To provide high-quality content that informs and inspires our readers.</li>
          <li>To foster a community where creativity and ideas can thrive.</li>
          <li>To continuously improve and innovate in our blogging approach.</li>
          <li>To empower individuals with knowledge and insights in various fields.</li>
        </ul>
      </section>
    </div>
  );
};

export default About;
