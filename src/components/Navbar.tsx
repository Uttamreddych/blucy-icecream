import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, IceCream, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  const [prevPath, setPrevPath] = useState(location.pathname);
  if (prevPath !== location.pathname) {
    setPrevPath(location.pathname);
    setIsOpen(false);
  }

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Our Products', path: '/products' },
    { name: 'Café Menu', path: '/menu' },
    { name: 'Franchise', path: '/franchise' },
    { name: 'Investment', path: '/investment' },
    { name: 'Business Formats', path: '/business-formats' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Founder', path: '/founder' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
          : 'bg-white/90 backdrop-blur-sm py-4 border-b border-blucy-ice'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group focus:outline-none" aria-label="Blucy Ice Creamery Home">
            <img
              src="/images/brand/blucy_logo.png"
              alt="Blucy Ice Creamery Logo"
              className="h-12 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2" aria-label="Primary Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-blucy-blue font-semibold bg-blucy-ice'
                    : 'text-blucy-navy hover:text-blucy-blue hover:bg-blucy-ice/60'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Header Action Button (Desktop) */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:8686448825"
              className="hidden 2xl:flex items-center gap-1.5 text-xs font-semibold text-blucy-navy hover:text-blucy-blue px-3 py-2 rounded-full border border-blucy-blue/20 hover:border-blucy-blue transition-colors"
              title="Call Blucy Foods & Beverages"
            >
              <Phone className="w-3.5 h-3.5 text-blucy-pink" />
              <span>8686448825</span>
            </a>
            <Link
              to="/franchise"
              className="btn-pink text-sm py-2 px-5 shadow-brand-pink flex items-center gap-1.5 group"
            >
              <IceCream className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              <span>Become a Partner</span>
            </Link>
          </div>

          {/* Mobile / Tablet Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <Link
              to="/franchise"
              className="sm:hidden btn-pink text-xs py-1.5 px-3"
            >
              Partner
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-blucy-navy hover:bg-blucy-ice focus:outline-none focus:ring-2 focus:ring-blucy-blue transition-colors"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-blucy-pink" /> : <Menu className="w-6 h-6 text-blucy-blue" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="xl:hidden bg-white/98 backdrop-blur-xl border-b border-blucy-sky/30 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 mb-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between px-4 py-2.5 rounded-2xl text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-blucy-blue text-white font-semibold'
                      : 'text-blucy-navy hover:bg-blucy-ice'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive(link.path) ? 'text-white' : 'text-blucy-muted'}`} />
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-blucy-ice flex flex-col gap-2.5">
              <a
                href="tel:8686448825"
                className="flex items-center justify-center gap-2 py-2.5 text-sm font-semibold text-blucy-navy bg-blucy-ice rounded-full"
              >
                <Phone className="w-4 h-4 text-blucy-pink" />
                <span>Call Us: +91 8686448825</span>
              </a>
              <Link
                to="/franchise"
                className="btn-pink w-full text-center text-sm py-3 justify-center"
              >
                Become a Franchise Partner
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
