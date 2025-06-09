import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  User2, // More modern profile icon
  Code, 
  Mail, 
  Moon, 
  Sun,
  Menu,
  X,
  Sparkles // For extra flair
} from 'lucide-react'; // Using Lucide for better icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Dark mode setup
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'about', icon: User2, label: 'About' },
    { id: 'projects', icon: Code, label: 'Projects' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const iconSize = 20;
  const activeClass = "text-blue-500 dark:text-blue-400";
  const inactiveClass = "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200";

  return (
    <nav className="fixed top-0 w-full bg-white/90 dark:bg-slate-900/90 backdrop-blur-md z-50 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-md mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Modern profile icon with shine effect */}
          <motion.button
            onClick={() => scrollToSection('home')}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="p-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 shadow-lg group"
            aria-label="Home"
          >
            <div className="relative">
              <User2 
                size={iconSize} 
                className="text-white" 
                strokeWidth={1.8}
              />
              <Sparkles 
                size={12} 
                className="absolute -top-1 -right-1 text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity"
                strokeWidth={2.5}
                fill="currentColor"
              />
            </div>
          </motion.button>

          {/* Desktop Navigation - Icon Only */}
          <motion.div 
            className="hidden md:flex items-center space-x-6"
            initial="hidden"
            animate="visible"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-all ${activeSection === item.id ? activeClass : inactiveClass}`}
                aria-label={item.label}
              >
                <item.icon 
                  size={iconSize} 
                  strokeWidth={activeSection === item.id ? 2 : 1.6}
                  className={activeSection === item.id ? "scale-110" : "scale-100"}
                />
              </motion.button>
            ))}

            {/* Dark mode toggle with rotation effect */}
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileHover={{ rotate: isDarkMode ? 15 : -15 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${inactiveClass}`}
              aria-label={isDarkMode ? 'Light mode' : 'Dark mode'}
            >
              {isDarkMode ? (
                <Sun size={iconSize} strokeWidth={1.6} />
              ) : (
                <Moon size={iconSize} strokeWidth={1.6} />
              )}
            </motion.button>
          </motion.div>

          {/* Mobile menu toggle */}
          <div className="flex items-center md:hidden space-x-4">
            <motion.button
              onClick={() => setIsDarkMode(!isDarkMode)}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${inactiveClass}`}
            >
              {isDarkMode ? (
                <Sun size={iconSize} strokeWidth={1.6} />
              ) : (
                <Moon size={iconSize} strokeWidth={1.6} />
              )}
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 rounded-full ${inactiveClass}`}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X size={iconSize} strokeWidth={1.6} />
              ) : (
                <Menu size={iconSize} strokeWidth={1.6} />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-slate-800/95 border-t border-gray-100 dark:border-slate-700 overflow-hidden"
          >
            <div className="px-4 py-2 grid grid-cols-4 gap-2">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex flex-col items-center p-3 rounded-lg transition-all ${
                    activeSection === item.id
                      ? 'bg-blue-50 dark:bg-slate-700'
                      : 'hover:bg-gray-100 dark:hover:bg-slate-700'
                  }`}
                  aria-label={item.label}
                >
                  <item.icon
                    size={iconSize}
                    className={`mb-1 transition-transform ${activeSection === item.id ? activeClass + ' scale-110' : inactiveClass + ' scale-100'}`}
                    strokeWidth={activeSection === item.id ? 2 : 1.6}
                  />
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;