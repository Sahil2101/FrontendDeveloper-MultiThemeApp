import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Palette, Code, Smartphone, Globe } from 'lucide-react';

const About = () => {
  const { theme } = useTheme();

  const getTitleStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'text-4xl font-bold text-gray-900 mb-6';
      case 'dark':
        return 'text-5xl font-bold text-white mb-8';
      case 'colorful':
        return 'text-5xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8';
      default:
        return '';
    }
  };

  const getTextStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'text-gray-700';
      case 'dark':
        return 'text-gray-300';
      case 'colorful':
        return 'text-purple-700';
      default:
        return '';
    }
  };

  const getCardStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'bg-white border border-gray-200 rounded-lg p-6 shadow-sm';
      case 'dark':
        return 'bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-lg';
      case 'colorful':
        return 'bg-gradient-to-br from-white to-pink-50 border-2 border-pink-200 rounded-2xl p-8 shadow-lg';
      default:
        return '';
    }
  };

  const getIconStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'text-blue-600';
      case 'dark':
        return 'text-amber-500';
      case 'colorful':
        return 'text-pink-500';
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

  const features = [
    {
      icon: Palette,
      title: 'Dynamic Theming',
      description: 'Switch between three completely different themes with unique layouts, colors, and typography.'
    },
    {
      icon: Code,
      title: 'Modern Architecture',
      description: 'Built with React, Context API, and modern development practices for maintainability.'
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Optimized for all devices with mobile-first approach and flexible layouts.'
    },
    {
      icon: Globe,
      title: 'API Integration',
      description: 'Real-time data fetching from external APIs with proper error handling and loading states.'
    }
  ];

  return (
    <div className={getFontFamily()}>
      <h1 className={getTitleStyles()}>About ThemeHub</h1>
      
      <div className={`${getTextStyles()} text-lg mb-12 max-w-4xl`}>
        <p className="mb-6">
          ThemeHub is a showcase of modern web development techniques, demonstrating how powerful 
          theming systems can transform user experiences. This application features three distinct 
          themes that don't just change colors, but completely reimagine the layout, typography, 
          and user interface patterns.
        </p>
        <p className="mb-6">
          Each theme represents a different design philosophy: minimalist clean design, 
          sophisticated dark mode with sidebar navigation, and playful colorful interface 
          with card-based layouts. The themes persist across page refreshes and provide 
          smooth transitions between different visual experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className={getCardStyles()}>
              <Icon className={`w-12 h-12 ${getIconStyles()} mb-4`} />
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
                {feature.title}
              </h3>
              <p className={getTextStyles()}>
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      <div className={getCardStyles()}>
        <h2 className={`text-2xl font-semibold mb-4 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
          Technical Implementation
        </h2>
        <div className={`${getTextStyles()} space-y-4`}>
          <p>
            This application leverages React Context API for global theme state management, 
            ensuring consistent theming across all components. The themes are persisted using 
            localStorage, maintaining user preferences between sessions.
          </p>
          <p>
            The responsive design is implemented using Tailwind CSS with custom utility classes 
            and breakpoints. Each theme has its own component layouts and styling systems, 
            demonstrating the flexibility of modern CSS approaches.
          </p>
          <p>
            React Router provides seamless navigation between pages while maintaining theme 
            consistency. The application also integrates with external APIs to demonstrate 
            real-world data fetching patterns with proper loading and error states.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;