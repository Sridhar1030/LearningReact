import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="sticky top-0 bg-green-400 text-xl">
      <div className="flex justify-start space-x-11 h-20">
        <div className="flex space-x-7">
          <button><Link to="/" className="ml-32">Home</Link></button>
          <button><Link to="/about">About Us</Link></button>
          <button><Link to="/insurance">Insurance</Link></button>
          <button><Link to="/news">News</Link></button>
          <button><Link to="/contact">Contact</Link></button>
          <button><Link to="/pets">Pets</Link></button>
          <button><Link to="/yoga">Yoga</Link></button>
          <button><Link to="/mental-health">Mental Health</Link></button>
          <button><Link to="/Diet">Diet</Link></button>
        </div>
        <div className="fixed flex justify-items-center items-center right-10 p-4 cursor-pointer">
          <input type="text" placeholder="Search" className="ml-3 w-32 text-base text-center rounded-xl" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
