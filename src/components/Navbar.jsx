import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClasses = ({ isActive }) =>
    `transition duration-300 ${
      isActive ? "text-yellow-400" : "text-white"
    } hover:text-yellow-400`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="bg-black/70 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-serif tracking-[0.3em] text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            LUXE
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase">
            <NavLink to="/" className={linkClasses}>Home</NavLink>
            <NavLink to="/collection" className={linkClasses}>Collection</NavLink>
            <NavLink to="/about" className={linkClasses}>About</NavLink>
            <NavLink to="/contact" className={linkClasses}>Contact</NavLink>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          >
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-6 py-6 bg-black/95 text-sm tracking-widest uppercase">
            <NavLink to="/" className={linkClasses} onClick={() => setIsOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/collection" className={linkClasses} onClick={() => setIsOpen(false)}>
              Collection
            </NavLink>
            <NavLink to="/about" className={linkClasses} onClick={() => setIsOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClasses} onClick={() => setIsOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
