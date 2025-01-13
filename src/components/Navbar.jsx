import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Navigation links array
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Timeline", to: "/timeline" },
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
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-3xl font-extrabold text-primary">
            Mughal Empire
          </Link>
          <div className="hidden md:flex space-x-6">
            {/* Dynamically rendering navigation links */}
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
        </div>
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
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
