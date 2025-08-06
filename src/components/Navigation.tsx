// src/components/Navigation.tsx
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import React from 'react';

interface NavigationProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const location = useLocation();

  const currentPath = location.pathname;

  const navItems = [
    { label: 'Home', to: '/' },
    { label: 'Volunteer', to: '/volunteer' },
    { label: 'About Us', to: '/about' },
  ];

  return (
    <nav className='bg-white shadow-lg fixed w-full top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo */}
          <Link
            to='/'
            className='flex items-center focus:outline-none'>
            <Heart className='h-8 w-8 text-blue-600 mr-2' />
            <span className='text-xl font-bold text-gray-800'>HopeForward</span>
          </Link>

          {/* Desktop Nav */}
          <div className='hidden md:flex space-x-8'>
            {navItems.map(({ label, to }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  currentPath === to
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <div className='md:hidden'>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='text-gray-700 hover:text-blue-600'>
              {isMenuOpen ? (
                <X className='h-6 w-6' />
              ) : (
                <Menu className='h-6 w-6' />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden bg-white border-t'>
            <div className='px-2 pt-2 pb-3 space-y-1'>
              {navItems.map(({ label, to }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setIsMenuOpen(false)}
                  className='block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600'>
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
