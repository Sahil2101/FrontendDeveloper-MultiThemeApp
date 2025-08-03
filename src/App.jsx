import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Header from './components/Header';
import MinimalistLayout from './components/Layout/MinimalistLayout';
import DarkLayout from './components/Layout/DarkLayout';
import ColorfulLayout from './components/Layout/ColorfulLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const AppContent = () => {
  const { theme } = useTheme();

  const getLayout = (children) => {
    switch (theme) {
      case 'minimalist':
        return <MinimalistLayout>{children}</MinimalistLayout>;
      case 'dark':
        return <DarkLayout>{children}</DarkLayout>;
      case 'colorful':
        return <ColorfulLayout>{children}</ColorfulLayout>;
      default:
        return <MinimalistLayout>{children}</MinimalistLayout>;
    }
  };

  return (
    <Router>
      <Header />
      {getLayout(
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      )}
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;