import React, { useState } from "react";
import Logo from "/src/assets/logo.jpg";

const NavFoot = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const navLinks = [
    { name: "Home", href: "/" },
    {
      name: "Courses",
      href: "/courses",
      submenu: [
        { name: "Teaching Diploma", href: "/courses/teaching-diploma" },
        { name: "Teaching Certificate", href: "/courses/teaching-certificate" },
        { name: "ECCE Certificate", href: "/courses/ecce-certificate" },
        {
          name: "Personality & Communication",
          href: "/courses/personality-communication",
        },
        { name: "Modern Teaching", href: "/courses/modern-teaching" },
      ],
    },
    { name: "About Us", href: "/about" },
    { name: "Placements", href: "#" },
    { name: "Blogs", href: "#" },
    { name: "Contact Us", href: "/contact" },
  ];

  // Inline SVG for Hamburger Icon
  const HamburgerIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );

  // Inline SVG for Close Icon (X mark)
  const CloseIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );

  return (
    <div className="relative font-family">
      {/*Top Header */}

      {/*Navbar Link */}
      <nav className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center">
          {" "}
          {/* Removed justify-between */}
          {/* Logo/Brand Name - Now aligned to the left by default flex behavior */}
          <div className="text-xl font-bold text-gray-800">
            <img src={Logo} alt="" className="w-full h-32 object-cover" />
          </div>
          {/* Desktop Navigation Links - Now centered */}
          <div className="hidden md:flex flex-grow justify-center space-x-8 ml-auto">
            
            {/* Added flex-grow and justify-center */}
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 py-2 flex items-center"
                >
                  {link.name}
                  {link.submenu && (
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </a>
                {/* Show submenu only if link has submenu */}
                {link.submenu && (
                  <div
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-64 
                  bg-white border border-gray-200 rounded-lg shadow-xl invisible 
                  group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-300 
                  z-[9999]"
                  >
                    <div className="py-2">
                      {link.submenu.map((sublink) => (
                        <a
                          key={sublink.name}
                          href={sublink.href}
                          className="block py-3 px-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                        >
                          {sublink.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Mobile Menu Button (Hamburger Icon) - Pushed to the right on mobile */}
          <div className="md:hidden ml-auto">
            {" "}
            {/* Added ml-auto to push it to the right */}
            <button
              onClick={() => setIsMenuOpen(true)} // Open menu from right
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
              aria-label="Open menu"
            >
              <HamburgerIcon size={24} /> {/* Using inline SVG */}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)} // Close menu when clicking outside
          ></div>
        )}

        {/* Mobile Menu (Slides in from right) */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"} md:hidden`}
        >
          <div className="p-4 flex justify-end">
            {/* Close Button (X Icon) */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500 rounded-md p-2"
              aria-label="Close menu"
            >
              <CloseIcon size={24} /> {/* Using inline SVG */}
            </button>
          </div>
          <nav className="flex flex-col p-4">
            {navLinks.map((link, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-center">
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block py-2 px-4 text-gray-800 font-medium hover:bg-gray-100 rounded-md"
                  >
                    {link.name}
                    
                  </a>
                  {/* If submenu exists, show dropdown toggle */}
                  {link.submenu && (
                    <button
                      onClick={() =>
                        setSubmenuOpen((prev) => ({
                          ...prev,
                          [link.name]: !prev[link.name],
                        }))
                      }
                      className="text-gray-600 text-sm px-2"
                    >
                     {link.submenu && (
                    <svg
                      className="ml-1 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    )}
                    </button>
                  )}
                </div>

                {/* Submenu */}
                {link.submenu && submenuOpen[link.name] && (
                  <div className="ml-4 mt-2">
                    {link.submenu.map((sublink, i) => (
                      <a
                        key={i}
                        href={sublink.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-1 px-4 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {sublink.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </nav>
    </div>
  );
};

export default NavFoot;
