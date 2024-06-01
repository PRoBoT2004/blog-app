import React from 'react';

const Contact = ({ darkMode }) => {
  return (
    <div className={`container mx-auto px-4 py-8 ${darkMode ? 'dark' : ''}`}>
      <div className={`max-w-lg mx-auto bg-slate-200 dark:bg-gray-800 shadow-md rounded p-8 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Contact Us</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className={`block text-sm font-medium text-gray-800 dark:text-white`}>Name</label>
            <input
              id="name"
              type="text"
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 bg-slate-100 text-gray-800 dark:text-white`}
              placeholder="Enter your name"
            />
          </div>
          <div>
            <label htmlFor="email" className={`block text-sm font-medium  text-gray-800 dark:text-white`}>Email</label>
            <input
              id="email"
              type="email"
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 bg-slate-100 text-gray-800 dark:text-white`}
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="message" className={`block text-sm font-medium  text-gray-800 dark:text-white`}>Message</label>
            <textarea
              id="message"
              className={`w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500 dark:bg-gray-700 bg-slate-100 text-gray-800 dark:text-white`}
              rows="4"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className={`w-full text-white py-2 px-4 rounded  transition duration-300 dark:bg-violet-500 dark:hover:bg-violet-600 bg-blue-500 hover:bg-blue-600`}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
