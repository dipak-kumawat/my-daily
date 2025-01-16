import React from "react";

function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-8 font-sans">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-300 pb-6 mb-6">
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-blue-600">Your Brand</h2>
            <p className="text-gray-600 mt-2 italic">
              Bringing creativity to life with color and fun.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-yellow-500 hover:text-yellow-600 transition"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i> Facebook
            </a>
            <a
              href="#"
              className="text-green-500 hover:text-green-600 transition"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-600 transition"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
          <div>
            <h3 className="font-semibold text-xl text-blue-600 mb-2">About</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-500 transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-500 transition"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-blue-500 transition"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-green-500 mb-2">Support</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-400 transition"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-400 transition"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-green-400 transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-pink-500 mb-2">Products</h3>
            <ul>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-400 transition"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-400 transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-pink-400 transition"
                >
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-xl text-yellow-600 mb-2">Subscribe</h3>
            <form>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 mb-2 text-gray-900 border border-yellow-400 rounded"
              />
              <button
                type="submit"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded w-full"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center text-gray-600">
          <p className="text-sm">&copy; 2025 Your Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
