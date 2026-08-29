import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Cpu, Terminal, Layout, Server, Database, Wrench } from 'lucide-react';
import { SkillItem } from '../types/portfolio';

const categoryIcons: Record<string, React.ReactNode> = {
  'Lenguajes': <Terminal className="w-4 h-4 text-rose-500" />,
  'Frontend': <Layout className="w-4 h-4 text-rose-500" />,
  'Backend': <Server className="w-4 h-4 text-rose-500" />,
  'Bases de Datos': <Database className="w-4 h-4 text-rose-500" />,
  'DevOps & Herramientas': <Wrench className="w-4 h-4 text-rose-500" />,
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;

  if (!skills || skills.length === 0) {
    return null;
  }

  // Agrupar habilidades por categoría conservando el orden
  const categories = Array.from(new Set(skills.map((s) => s.category))) as SkillItem['category'][];

  return (
    <section id="skills" className="py-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <Cpu className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Habilidades Técnicas
        </h2>
      </div>

      {/* Categories Grid */}
      <div className="space-y-6">
        {categories.map((category) => {
          const categorySkills = skills.filter((s) => s.category === category);
          if (categorySkills.length === 0) return null;

          return (
            <div
              key={category}
              className="p-5 rounded-2xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800/80 shadow-sm"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-3.5">
                {categoryIcons[category] || <Cpu className="w-4 h-4 text-rose-500" />}
                <h3 className="text-sm font-semibold tracking-wide text-zinc-800 dark:text-zinc-200 uppercase">
                  {category}
                </h3>
              </div>

              {/* Skills Pills */}
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill) => (
                  <span
                    key={skill.name}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800 hover:border-rose-500/50 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-500/5 transition-all cursor-default"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Separator */}
      <hr className="mt-12 border-zinc-200 dark:border-zinc-800/80" />
    </section>
  );
};
