import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun, Zap } from "lucide-react";
import { useTheme } from "../../contexts/ThemeContext";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-xl border-b border-neutral-200/50 dark:border-neutral-800/50 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group">
            <div className="p-1.5 sm:p-2.5 bg-gradient-to-r from-primary-500 to-primary-600 rounded-lg sm:rounded-xl group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
              <Zap className="h-5 w-5 sm:h-7 sm:w-7 text-white" />
            </div>
            <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 bg-clip-text text-transparent">
              ASCQUABAY
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 relative group ${
                  isActive(item.href)
                    ? "text-primary-600 dark:text-primary-400"
                    : "text-neutral-700 dark:text-neutral-300"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-600 transition-all duration-200 group-hover:w-full ${
                    isActive(item.href) ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 hover:scale-105"
              aria-label="Toggle theme"
            >
              {theme === "light" ? (
                <Moon className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600 dark:text-neutral-400" />
              ) : (
                <Sun className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600 dark:text-neutral-400" />
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-all duration-200 hover:scale-105"
            >
              {isMenuOpen ? (
                <X className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600 dark:text-neutral-400" />
              ) : (
                <Menu className="h-4 w-4 sm:h-5 sm:w-5 text-neutral-600 dark:text-neutral-400" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 animate-slide-down border-t border-neutral-200 dark:border-neutral-800">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-all duration-200 hover:text-primary-600 dark:hover:text-primary-400 py-2 ${
                    isActive(item.href)
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-neutral-700 dark:text-neutral-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
