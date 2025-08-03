import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Palette, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import ThemeSelector from './ThemeSelector';

const Header = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getHeaderStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'bg-white border-b border-gray-200 shadow-sm';
      case 'dark':
        return 'bg-gray-900 border-b border-gray-700 shadow-lg';
      case 'colorful':
        return 'bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 shadow-lg';
      default:
        return '';
    }
  };

  const getTextStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'text-gray-900';
      case 'dark':
        return 'text-white';
      case 'colorful':
        return 'text-white';
      default:
        return '';
    }
  };

  const getLinkStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'text-gray-700 hover:text-blue-600 transition-colors';
      case 'dark':
        return 'text-gray-300 hover:text-amber-400 transition-colors';
      case 'colorful':
        return 'text-white hover:text-yellow-200 transition-colors';
      default:
        return '';
    }
  };

  const getFontFamily = () => {
    switch (theme) {
      case 'minimalist':
        return 'font-sans';
      case 'dark':
        return 'font-serif';
      case 'colorful':
        return 'font-pacifico';
      default:
        return '';
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 ${getHeaderStyles()}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className={`flex items-center space-x-2 ${getTextStyles()} ${getFontFamily()}`}>
            <Palette className="w-8 h-8" />
            <span className="text-xl font-bold">ThemeHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${getLinkStyles()} ${getFontFamily()}`}>
              Home
            </Link>
            <Link to="/about" className={`${getLinkStyles()} ${getFontFamily()}`}>
              About
            </Link>
            <Link to="/contact" className={`${getLinkStyles()} ${getFontFamily()}`}>
              Contact
            </Link>
            <ThemeSelector />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${getTextStyles()}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`${getLinkStyles()} ${getFontFamily()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`${getLinkStyles()} ${getFontFamily()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`${getLinkStyles()} ${getFontFamily()}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2">
                <ThemeSelector />
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;