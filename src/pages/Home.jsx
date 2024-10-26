// src/pages/Home.jsx
import React from 'react';

const Home = ({ isDarkMode }) => {
  const blogs = [
    {
      id: 1,
      title: 'Understanding React Hooks',
      image: './src/assets/001.jpg',
      description: 'A deep dive into the world of React Hooks and how they can simplify your component logic.',
    },
    {
      id: 2,
      title: 'CSS Grid vs Flexbox',
      image: './src/assets/002.jpg',
      description: 'Comparing CSS Grid and Flexbox to see which one is the best fit for your layout needs.',
    },
    {
      id: 3,
      title: 'JavaScript ES6 Features',
      image: './src/assets/003.jpg',
      description: 'An overview of the most useful ES6 features that can improve your coding efficiency.',
    },
    {
      id: 4,
      title: 'Building Accessible Websites',
      image: './src/assets/004.jpg',
      description: 'Best practices for ensuring your websites are accessible to everyone, including those with disabilities.',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
        Latest Blogs
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className={`rounded-lg shadow-lg overflow-hidden transition duration-300 ease-in-out hover:shadow-xl ${
              isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-black'
            }`}
          >
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2">{blog.title}</h2>
              <p className="mb-0">{blog.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
