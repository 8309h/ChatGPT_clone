import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-semibold">Company Name</h3>
          <p className="text-gray-400">A brief description of the company</p>
        </div>
        <div className="flex mt-4 md:mt-0">
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-3">
            About
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-3">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-3">
            Blog
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-3">
            Contact
          </a>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
        <div className="flex justify-center">
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
            <FaFacebook />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
            <FaTwitter />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
            <FaInstagram />
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-300 mx-2">
            <FaLinkedin />
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
        <p>Designed and developed by Your Name</p>
      </div>
    </footer>
  );
};

export default Footer;
