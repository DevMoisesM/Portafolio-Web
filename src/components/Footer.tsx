import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { ArrowUp, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const { personalInfo } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="pt-8 pb-16 border-t border-zinc-200 dark:border-zinc-800/80 text-zinc-500 dark:text-zinc-400 text-xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Author & Year */}
        <div className="text-center sm:text-left space-y-1">
          <p className="font-medium text-zinc-700 dark:text-zinc-300">
            © {new Date().getFullYear()} {personalInfo.name} · {personalInfo.title.split('&')[0].trim()}
          </p>
          <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
            Desarrollado con React, TypeScript y Tailwind CSS
          </p>
        </div>

        {/* Scroll to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-300 hover:text-rose-500 dark:hover:text-rose-400 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all ml-2"
            title="Volver arriba"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
