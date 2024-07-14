import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 py-4 px-8 flex items-center justify-between">
      <div className="text-white text-xl font-bold">Your Logo</div>
      <div className="flex items-center space-x-6">
        <a href="#" className="text-white hover:text-gray-300">
          Home
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          About
        </a>
        <a href="#" className="text-white hover:text-gray-300">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
