import React from 'react';
import { portfolioData } from './data/portfolioData';
import { Terminal, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-[#09090b] text-zinc-800 dark:text-zinc-100 flex flex-col items-center justify-center p-6 transition-colors duration-300">
      <div className="max-w-xl w-full bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800/80 rounded-2xl p-8 shadow-2xl text-center relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-rose-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="inline-flex p-3 bg-rose-500/10 text-rose-500 rounded-xl mb-4 border border-rose-500/20 shadow-sm">
          <Flame className="w-8 h-8" />
        </div>
        
        <h1 className="text-3xl font-extrabold tracking-tight mb-2">
          {portfolioData.personalInfo.name}{' '}
          <span className="bg-gradient-to-r from-rose-500 to-red-600 bg-clip-text text-transparent">
            — {portfolioData.personalInfo.title}
          </span>
        </h1>
        
        <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6 leading-relaxed">
          {portfolioData.personalInfo.roleDescription}
        </p>

        <div className="flex flex-col gap-3 text-left bg-zinc-50 dark:bg-[#18181b]/70 p-4 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 mb-6">
          <div className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
            <span><strong>Acento:</strong> Carmesí Rubí (<code className="text-rose-500 font-mono">#e11d48 / rose-500</code>)</span>
          </div>
          <div className="flex items-center gap-2.5 text-xs text-zinc-700 dark:text-zinc-300">
            <CheckCircle2 className="w-4 h-4 text-rose-500 shrink-0" />
            <span><strong>Fondos:</strong> Zinc Carbón Mate (<code className="text-zinc-400 font-mono">#09090b & #121215</code>)</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs font-mono bg-rose-500/10 dark:bg-rose-950/30 text-rose-600 dark:text-rose-400 py-2.5 px-4 rounded-xl border border-rose-500/20">
          <Sparkles className="w-4 h-4 text-rose-500" />
          <span>Paleta Cyber Minimalist (Carmesí & Zinc) configurada</span>
        </div>
      </div>
    </div>
  );
};

export default App;
