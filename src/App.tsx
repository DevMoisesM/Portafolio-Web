import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-900 dark:text-zinc-100 transition-colors duration-300 font-sans">
        {/* Main Clean Centered Container */}
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <Hero />
          <Experience />
          <Projects />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
