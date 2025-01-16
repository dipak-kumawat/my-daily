import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Left Side: Logo & Dropdown Menu */}
        <div className="flex items-center space-x-6">
          <h1 className="text-2xl font-bold text-blue-600">Your Brand</h1>
          <div className="relative">
            <button
              className="text-gray-700 font-semibold px-4 py-2 rounded-md hover:bg-gray-100 focus:outline-none"
              onClick={toggleDropdown}
            >
              Dropdown Menu
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-md w-48">
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 1
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 2
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Option 3
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Right Side: Sign In and Sign Up Buttons */}
        <div className="flex space-x-4">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none">
            Sign In
          </button>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 focus:outline-none">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
