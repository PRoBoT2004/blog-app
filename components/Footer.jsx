import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-300 dark:bg-violet-600 text-gray-700 dark:text-gray-300 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Left: Logo */}
        <div className="flex items-center space-x-4">
          <img src="/src/assets/logo.png" alt="Logo" className="h-10 w-auto rounded-full" />
          <span className="text-xl font-semibold">Blog App</span>
        </div>

        {/* Right: Links and Info */}
        <div className="flex flex-col sm:flex-row sm:space-x-8 text-center sm:text-left">
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-sm">Email: contact@blogapp.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">Support</h3>
            <Link to="/help" className="text-sm hover:underline">Help Center</Link>
          </div>
          <div className="mb-4 sm:mb-0">
            <h3 className="font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4 justify-center sm:justify-start">
              <a href="https://twitter.com" className="social-button" title="Twitter">
                <FaTwitter className="text-lg hover:scale-[1.5] transition-transform duration-300" />
                <span className="text-xs block">Twitter</span>
              </a>
              <a href="https://facebook.com" className="social-button" title="Facebook">
                <FaFacebook className="text-lg hover:scale-[1.5] transition-transform duration-300" />
                <span className="text-xs block">Facebook</span>
              </a>
              <a href="https://instagram.com" className="social-button" title="Instagram">
                <FaInstagram className="text-lg hover:scale-[1.5] transition-transform duration-300" />
                <span className="text-xs block">Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
