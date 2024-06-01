import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mt-8 mb-4">Latest Articles</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img src="/src/assets/images/logo3.jpg" alt="Article 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Article 1</h2>
            <p className="text-gray-600 dark:text-gray-300">Description of article 1 goes here...</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img src="/src/assets/images/logo2.jpg" alt="Article 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Article 1</h2>
            <p className="text-gray-600 dark:text-gray-300">Description of article 1 goes here...</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105">
          <img src="/src/assets/images/logo1.jpg" alt="Article 1" className="w-full h-40 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2 dark:text-white">Article 1</h2>
            <p className="text-gray-600 dark:text-gray-300">Description of article 1 goes here...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
