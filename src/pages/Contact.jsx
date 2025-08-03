import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

const Contact = () => {
  const { theme } = useTheme();
  const [submitted, setSubmitted] = useState(false);

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

  const getInputStyles = () => {
    switch (theme) {
      case 'minimalist':
        return 'border-gray-300 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-900';
      case 'dark':
        return 'border-gray-600 focus:ring-amber-500 focus:border-amber-500 bg-gray-700 text-white placeholder-gray-400';
      case 'colorful':
        return 'border-pink-300 focus:ring-pink-500 focus:border-pink-500 bg-gradient-to-r from-white to-pink-50 text-purple-900 placeholder-purple-500';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'hello@themehub.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      details: '123 Design Street, Web City, WC 12345',
      description: 'Come visit our creative space'
    }
  ];

  return (
    <div className={getFontFamily()}>
      <h1 className={getTitleStyles()}>Get in Touch</h1>
      
      <div className={`${getTextStyles()} text-lg mb-12 max-w-3xl`}>
        <p>
          We'd love to hear from you! Whether you have questions about our theming system, 
          want to collaborate on a project, or just want to say hello, don't hesitate to reach out.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className={getCardStyles()}>
          <h2 className={`text-2xl font-semibold mb-6 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
            Send us a Message
          </h2>
          
          {submitted ? (
            <div className="text-center py-8">
              <Check className={`w-16 h-16 mx-auto mb-4 ${getIconStyles()}`} />
              <h3 className={`text-xl font-semibold mb-2 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
                Message Sent!
              </h3>
              <p className={getTextStyles()}>
                Thank you for your message. We'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${getInputStyles()}`}
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${getInputStyles()}`}
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  required
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 ${getInputStyles()}`}
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label className={`block text-sm font-medium mb-2 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors duration-200 resize-none ${getInputStyles()}`}
                  placeholder="Tell us more about your inquiry..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className={`w-full ${getButtonStyles()} py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105`}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className={getCardStyles()}>
                <div className="flex items-start space-x-4">
                  <Icon className={`w-8 h-8 ${getIconStyles()} mt-1`} />
                  <div>
                    <h3 className={`text-lg font-semibold mb-1 ${theme === 'minimalist' ? 'text-gray-900' : theme === 'dark' ? 'text-white' : 'text-purple-800'}`}>
                      {info.title}
                    </h3>
                    <p className={`font-medium mb-1 ${getTextStyles()}`}>
                      {info.details}
                    </p>
                    <p className={`text-sm ${getTextStyles()} opacity-75`}>
                      {info.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;