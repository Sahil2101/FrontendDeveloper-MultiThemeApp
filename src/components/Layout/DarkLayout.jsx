import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Mail, Palette } from 'lucide-react';

const DarkLayout = ({ children }) => {
  const location = useLocation();

  const sidebarItems = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/about', label: 'About', icon: Info },
    { path: '/contact', label: 'Contact', icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-gray-900 font-serif text-white">
      <div className="pt-16 flex">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 bg-gray-800 min-h-screen border-r border-gray-700">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <Palette className="w-8 h-8 text-amber-500" />
              <h2 className="text-xl font-bold text-amber-500">Navigation</h2>
            </div>
            <nav className="space-y-4">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                      isActive
                        ? 'bg-amber-600 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-amber-400'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 px-6 lg:px-12 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DarkLayout;