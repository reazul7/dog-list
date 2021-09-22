import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-bg bg-black pt-4 sm:mt-10" >
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Getting Started Area */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-black font-bold  font-medium mb-6">
            Getting Started
          </div>

          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Installation
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Optimizing for Production
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Browser Support
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            IntelliSense
          </Link>
        </div>

        {/* Core Concepts Area */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-black font-bold  font-medium mb-6">
            Core Concepts
          </div>

          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Utility-First
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Responsive Design
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Adding Base Styles
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Adding New Utilities
          </Link>
        </div>

        {/* Customization Area */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-black font-bold  font-medium mb-6">
            Customization
          </div>

          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Configuration
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Theme Configuration
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Configuring Variants
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Plugins
          </Link>
        </div>

        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-black font-bold  font-medium mb-6">
            Community
          </div>

          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            GitHub
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Discord
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            Twitter
          </Link>
          <Link
            to="/"
            className="my-3 block text-black hover:text-gray-100 text-sm font-medium duration-700"
          >
            YouTube
          </Link>
        </div>
      </div>

      <div className="pt-2">
        <div
          className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 font-bold  text-sm 
            flex-col md:flex-row max-w-6xl"
        >
          <div className="mt-2 text-center">&copy; Copyright {(new Date()).getFullYear()} year. All Rights Reserved by <a className="font-bold text-white pointer" href="https://www.linkedin.com/in/reazul7/">Reazul Islam Bhuiyan</a> </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 text-xl text-gray-200 flex mx-auto">
            <a href="/" target="_blank" className="w-6 mx-1"><FaFacebook /></a>
            <a href="/" target="_blank" className="w-6 mx-1"><FaTwitter /></a>
            <a href="/" target="_blank" className="w-6 mx-1"><FaYoutube /></a>
            <a href="https://www.linkedin.com/in/reazul7/" target="_blank" className="w-6 mx-1"><FaLinkedin/></a>
            <a href="/" target="_blank" className="w-6 mx-1"><FaInstagram/></a>
          </div >
        </div>
      </div>
    </footer>
  );
};

export default Footer;
