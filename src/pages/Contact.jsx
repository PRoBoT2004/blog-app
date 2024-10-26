import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa'; // Importing a paper plane icon for the submit button

const Contact = ({ isDarkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log('Form submitted:', formData);
    
    // Set success message
    setSuccessMessage('Your message has been sent successfully!');

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });

    // Clear success message after a delay
    setTimeout(() => {
      setSuccessMessage('');
    }, 5000); // Message will disappear after 5 seconds
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className={`text-3xl font-bold mb-6 text-center ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
        Contact Us
      </h1>
      <p className={`text-center mb-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        We’d love to hear from you! Please fill out the form below to get in touch.
      </p>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit}
          className={`w-full max-w-lg shadow-md rounded-lg p-8 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}
        >
          <div className="mb-6">
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'text-gray-700 border-gray-300'}`}
            />
          </div>

          <div className="mb-6">
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'text-gray-700 border-gray-300'}`}
            />
          </div>

          <div className="mb-6">
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'text-gray-700 border-gray-300'}`}
            />
          </div>

          <div className="mb-6">
            <label className={`block ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm font-bold mb-2`} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${isDarkMode ? 'bg-gray-700 text-gray-200 border-gray-600' : 'text-gray-700 border-gray-300'}`}
              rows="4"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Success Message in Light Green Box */}
      {successMessage && (
        <div className="mt-4 text-center bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Success!</strong>
          <span className="block sm:inline">{` ${successMessage}`}</span>
        </div>
      )}
    </div>
  );
};

export default Contact;
