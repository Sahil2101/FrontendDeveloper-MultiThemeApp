import React from 'react';

const MinimalistLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="pt-16">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MinimalistLayout;