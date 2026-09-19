import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Terminal } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active section detection
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 backdrop-blur-md bg-darkBg/80 border-b border-darkBorder shadow-lg light:bg-white/80 light:border-slate-200'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group font-semibold text-lg sm:text-xl tracking-tight"
          >
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-accentViolet to-accentPink p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-darkBg rounded-[7px] flex items-center justify-center light:bg-white">
                <Terminal className="w-5 h-5 text-accentPurple" />
              </div>
            </div>
            <span className="bg-gradient-to-r from-slate-100 via-purple-200 to-slate-300 bg-clip-text text-transparent font-bold light:from-slate-900 light:to-slate-700">
              Karthik Mummana
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative ${
                    isActive
                      ? 'text-accentPurple font-semibold light:text-accentViolet'
                      : 'text-slate-300 hover:text-white light:text-slate-600 light:hover:text-slate-900'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-accentPurple to-accentPink rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Theme Toggle & Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme mode"
              className="p-2.5 rounded-xl border border-darkBorder bg-darkCard/80 text-slate-300 hover:text-accentPurple hover:border-accentPurple/40 transition-all duration-200 light:bg-slate-100 light:border-slate-300 light:text-slate-700 light:hover:text-accentViolet"
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-600" />
              )}
            </button>

            {/* Hamburger Button (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Open navigation menu"
              className="md:hidden p-2.5 rounded-xl border border-darkBorder bg-darkCard/80 text-slate-300 hover:text-white transition-all light:bg-slate-100 light:border-slate-300 light:text-slate-700"
            >
              {isOpen ? <X className="w-6 h-6 text-accentPink" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden border-b border-darkBorder bg-darkBg/95 backdrop-blur-xl light:bg-white/95 light:border-slate-200 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-slate-200 hover:text-white hover:bg-darkCard/80 transition-all light:text-slate-700 light:hover:bg-slate-100"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
