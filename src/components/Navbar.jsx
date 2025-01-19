import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  // Navigation links array
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Timeline", to: "/timeline" },
    { name: "Chatbot", to: "/chatbot" },
    { name: "Virtual Tour", to: "/virtual-tour" },
    { name: "Model-3D", to: "/Model3D" },
    { name: "Legacy", to: "/legacy" },
  ];

  // Toggle dark mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "winter"); // Winter theme for light mode
    } else {
      document.documentElement.setAttribute("data-theme", "sunset"); // Sunset theme for dark mode
    }
  };

  return (
    <nav className="bg-base-100 dark:bg-base-200 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="text-2xl font-extrabold text-primary">
          Mughal Empire
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-lg text-base-content hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Dark Mode Toggle and Hamburger Menu */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center"
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m-9-9h1m16 0h1m-9 4a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m-9-9h1m16 0h1m-9 4a4 4 0 100-8 4 4 0 000 8z"
                />
              </svg>
            )}
          </button>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="block md:hidden w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-base-100 dark:bg-base-200 mt-2 shadow-md rounded-lg">
          <ul className="space-y-2 p-4">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)} // Close menu on link click
                  className="block text-lg text-base-content hover:text-blue-600"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
