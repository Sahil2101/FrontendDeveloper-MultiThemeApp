import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export const ThemeProvider = ({ children }) => {
  const [theme, setThemeState] = useState('minimalist');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme');
    if (savedTheme && ['minimalist', 'dark', 'colorful'].includes(savedTheme)) {
      setThemeState(savedTheme);
    }
  }, []);

  const setTheme = (newTheme) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setThemeState(newTheme);
      localStorage.setItem('app-theme', newTheme);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 150);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${isTransitioning ? 'opacity-75' : 'opacity-100'} transition-opacity duration-300`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};