import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    // <nav className="bg-gray-900 py-4 px-8 flex items-center justify-between">
    // <div className="text-white text-xl font-bold">
    //   <img
    //     src="https://ik.imagekit.io/skumsf3sa/favicon.ico?updatedAt=1720985850538"
    //     alt="Logo"
    //     width={40}
    //     height={40}
    //     className="h-8 w-8 mr-2"
    //   />
    // </div>
    //   <div className="flex items-center space-x-6">
    //     <a href="./" className="text-white hover:text-gray-300">
    //       Home
    //     </a>
    //     <a href="#" className="text-white hover:text-gray-300">
    //       About
    //     </a>
    //     <a href="#" className="text-white hover:text-gray-300">
    //       Contact
    //     </a>
    //   </div>
    // </nav>
    <div className="navbar bg-gray-900 py-4 px-8 flex items-center justify-between ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 r z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Home</a></li>
        <li><a>About us </a></li>
      </ul>
    </div>
    <a className="btn  text-xl">Js by Satyam</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a> About us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  );
};

export default Navbar;
