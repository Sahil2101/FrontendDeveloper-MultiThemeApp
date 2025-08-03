import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProductCard = ({ product }) => {
  const { theme } = useTheme();

  const getCardStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200';
      case 'dark':
        return 'bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200';
      case 'colorful':
        return 'bg-gradient-to-br from-white to-pink-50 border-2 border-pink-200 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300';
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
        return 'text-purple-900';
      default:
        return '';
    }
  };

  const getButtonStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
      case 'dark':
        return 'bg-amber-600 hover:bg-amber-700 text-white';
      case 'colorful':
        return 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white';
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
    <div className={`${getCardStyles()} p-6 ${getFontFamily()}`}>
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-cover rounded-lg mb-4"
        loading="lazy"
      />
      <h3 className={`${getTextStyles()} text-lg font-semibold mb-2 line-clamp-2`}>
        {product.title}
      </h3>
      <p className={`${getTextStyles()} opacity-75 text-sm mb-4 line-clamp-3`}>
        {product.description}
      </p>
      <div className="flex items-center justify-between mb-4">
        <span className={`${getTextStyles()} text-2xl font-bold`}>
          ${product.price}
        </span>
        <div className="flex items-center space-x-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className={`${getTextStyles()} opacity-75 text-sm`}>
            {product.rating.rate} ({product.rating.count})
          </span>
        </div>
      </div>
      <button className={`w-full ${getButtonStyles()} py-2 px-4 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200`}>
        <ShoppingCart className="w-4 h-4" />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;