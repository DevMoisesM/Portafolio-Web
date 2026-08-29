import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { Briefcase, ExternalLink, Calendar, MapPin } from 'lucide-react';

export const Experience: React.FC = () => {
  const { experiences } = portfolioData;

  // Si no hay experiencias registradas, la sección no se renderiza
  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <Briefcase className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Experiencia
        </h2>
      </div>

      {/* Vertical Timeline */}
      <div className="relative pl-6 sm:pl-8 space-y-10 border-l border-zinc-200 dark:border-zinc-800">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* Timeline bullet dot */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border-2 border-rose-500 group-hover:scale-125 transition-transform shadow-sm shadow-rose-500/30"></div>

            {/* Header: Role & Period */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                {exp.role}
              </h3>
              <div className="flex items-center gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900/90 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 w-fit">
                <Calendar className="w-3 h-3 text-rose-500" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Company & Location */}
            <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              {exp.companyUrl ? (
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-medium text-rose-600 dark:text-rose-400 hover:underline"
                >
                  <span>{exp.company}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span className="font-medium text-zinc-800 dark:text-zinc-200">{exp.company}</span>
              )}
              <span>•</span>
              <div className="flex items-center gap-1 text-xs text-zinc-500">
                <MapPin className="w-3 h-3" />
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description Points */}
            <ul className="space-y-1.5 text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
              {exp.description.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-rose-500 font-bold select-none">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Technologies Badges */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/80 dark:border-zinc-800/80 group-hover:border-zinc-300 dark:group-hover:border-zinc-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Separator */}
      <hr className="mt-12 border-zinc-200 dark:border-zinc-800/80" />
    </section>
  );
};
