import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeSelector = () => {
  const { theme, setTheme } = useTheme();

  const themes = [
    { value: 'minimalist', label: 'Theme 1 - Minimalist' },
    { value: 'dark', label: 'Theme 2 - Dark' },
    { value: 'colorful', label: 'Theme 3 - Colorful' },
  ];

  const getSelectStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'bg-white border-gray-300 text-gray-900 focus:ring-blue-500 focus:border-blue-500';
      case 'dark':
        return 'bg-gray-800 border-gray-600 text-white focus:ring-amber-500 focus:border-amber-500';
      case 'colorful':
        return 'bg-gradient-to-r from-pink-100 to-purple-100 border-pink-300 text-purple-900 focus:ring-pink-500 focus:border-pink-500';
      default:
        return '';
    }
  };

  return (
    <div className="relative">
      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className={`appearance-none rounded-lg px-4 py-2 pr-8 border focus:outline-none focus:ring-2 transition-all duration-200 ${getSelectStyles()}`}
      >
        {themes.map((themeOption) => (
          <option key={themeOption.value} value={themeOption.value}>
            {themeOption.label}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none" />
    </div>
  );
};

export default ThemeSelector;