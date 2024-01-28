import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      {/* Left-hand side */}
      <div className="flex items-center">
        <div className="text-xl font-bold mr-4">Your Logo</div>
        <ul className="flex space-x-4">
          <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
          <li><Link to="/marketers" className="hover:text-gray-300">Marketers</Link></li>
          <li><Link to="/company" className="hover:text-gray-300">Company</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact Page</Link></li>
        </ul>
      </div>

      {/* Right-hand side */}
      <div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Login</button>
      </div>
    </nav>
  );
};

export default NavBar;
