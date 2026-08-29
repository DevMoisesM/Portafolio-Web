import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FolderGit2, Github, ExternalLink, Code2 } from 'lucide-react';

export const Projects: React.FC = () => {
  const { projects } = portfolioData;

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    <section id="projects" className="py-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <FolderGit2 className="w-5 h-5" />
        </div>
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Proyectos Destacados
          </h2>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group flex flex-col bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800/80 rounded-2xl overflow-hidden hover:border-rose-500/50 dark:hover:border-rose-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-rose-500/5"
          >
            {/* Project Image Preview or Fallback Banner */}
            {project.image ? (
              <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800/80">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="relative aspect-video w-full flex items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-950 border-b border-zinc-200 dark:border-zinc-800/80 group-hover:bg-rose-500/5 transition-colors">
                <div className="p-4 rounded-2xl bg-white dark:bg-zinc-800/80 text-rose-500 border border-zinc-200 dark:border-zinc-700 shadow-sm group-hover:scale-110 group-hover:border-rose-500/50 transition-all">
                  <Code2 className="w-8 h-8" />
                </div>
              </div>
            )}

            {/* Content Body */}
            <div className="p-5 sm:p-6 flex flex-col flex-1">
              {/* Project Title */}
              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors mb-2">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links (GitHub & Live Demo) */}
              <div className="flex items-center gap-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/60 mt-auto">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Código</span>
                  </a>
                )}

                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white active:scale-95 transition-all shadow-sm shadow-rose-600/20"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Demo</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Separator */}
      <hr className="mt-12 border-zinc-200 dark:border-zinc-800/80" />
    </section>
  );
};
