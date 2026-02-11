import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import ContactModal from "./ContactModal"; // Make sure the path matches where you saved ContactModal

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for Modal

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
          >
            The Prateek Pixelss
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300 items-center">
            <Link
              to="/about-us"
              className="text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link to="/services" className="hover:text-white transition-colors">
              Services
            </Link>

            <Link
              to="/digital-invite-service"
              className="hover:text-white transition-colors"
            >
              Digital Invite
            </Link>

            {/* UPDATED: Book Now Button triggers Modal */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-white text-black rounded-full hover:bg-gray-200 transition-colors font-bold"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="md:hidden bg-black border-b border-gray-800 absolute w-full px-6 py-4 flex flex-col space-y-4">
                      <Link
              to="/about-us"
              className="text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Services
            </Link>

            <Link
              to="/digital-invite-service"
              className="text-gray-300 hover:text-white"
              onClick={toggleMenu}
            >
              Digital Invite
            </Link>

            {/* UPDATED: Mobile Contact Us Button */}
            <button
              className="text-left text-purple-400 font-semibold"
              onClick={() => {
                setIsModalOpen(true);
                toggleMenu(); // Close menu after clicking
              }}
            >
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Render the Contact Modal */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
