import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useProducts } from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import { Loader2, AlertCircle, Sparkles } from 'lucide-react';

const Home = () => {
  const { theme } = useTheme();
  const { products, loading, error } = useProducts();

  const getTitleStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'text-4xl md:text-5xl font-bold text-gray-900 mb-4';
      case 'dark':
        return 'text-4xl md:text-6xl font-bold text-white mb-6';
      case 'colorful':
        return 'text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6';
      default:
        return '';
    }
  };

  const getSubtitleStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'text-lg text-gray-600 mb-8 max-w-2xl';
      case 'dark':
        return 'text-xl text-gray-300 mb-8 max-w-3xl leading-relaxed';
      case 'colorful':
        return 'text-lg text-purple-700 mb-8 max-w-2xl font-semibold';
      default:
        return '';
    }
  };

  const getButtonStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors duration-200';
      case 'dark':
        return 'bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-lg transition-colors duration-200 font-semibold';
      case 'colorful':
        return 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg';
      default:
        return '';
    }
  };

  const getGridStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6';
      case 'dark':
        return 'grid grid-cols-1 lg:grid-cols-2 gap-8';
      case 'colorful':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8';
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

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-[400px] ${getFontFamily()}`}>
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin mx-auto mb-4 text-blue-600" />
          <p className="text-lg">Loading amazing products...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center justify-center min-h-[400px] ${getFontFamily()}`}>
        <div className="text-center">
          <AlertCircle className="w-12 h-12 mx-auto mb-4 text-red-500" />
          <p className="text-lg text-red-600">Error: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={getFontFamily()}>
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className={getTitleStyles()}>
          Welcome to ThemeHub
          {theme === 'colorful' && <Sparkles className="inline-block w-8 h-8 ml-2 text-pink-500" />}
        </h1>
        <p className={getSubtitleStyles()}>
          Experience the power of dynamic theming with our beautiful, responsive design system. 
          Switch between themes and watch the entire interface transform seamlessly.
        </p>
        <button className={getButtonStyles()}>
          Explore Products
        </button>
      </section>

      {/* Products Section */}
      <section>
        <h2 className={`text-2xl md:text-3xl font-bold mb-8 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
          Featured Products
        </h2>
        <div className={getGridStyles()}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;