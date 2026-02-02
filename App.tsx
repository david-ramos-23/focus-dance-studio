import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Schedule from './components/Schedule';
import Classes from './components/Classes';
import Instructors from './components/Instructors';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import ScrollToTop from './components/ScrollToTop';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    // Check local storage or system preference
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen font-sans selection:bg-deepGreen selection:text-white">
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <main>
        <Hero />
        <Schedule />
        <Classes />
        <Instructors />
        <Gallery />
        <Pricing />
        <Contact />
      </main>

      <ChatBot />
      <ScrollToTop />
    </div>
  );
};

export default App;