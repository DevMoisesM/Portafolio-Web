import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  MapPin,
  Sun,
  Moon,
  ExternalLink,
  Sparkles
} from 'lucide-react';

export const Hero: React.FC = () => {
  const { personalInfo } = portfolioData;
  const { theme, toggleTheme } = useTheme();

  return (
    <section id="about" className="pt-12 sm:pt-16 pb-8">
      {/* Header Bar with Theme Toggle */}
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
          <span className="inline-block w-2 h-2 rounded-full bg-rose-500"></span>
          <span>{personalInfo.name.toLowerCase()}.dev</span>
        </div>

        <button
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className="p-2 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300 hover:border-rose-500/50 hover:text-rose-500 dark:hover:text-rose-400 transition-all shadow-sm"
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-zinc-700" />
          )}
        </button>
      </div>

      {/* Main Profile Info */}
      <div className="flex flex-col-reverse sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
        <div className="space-y-2 flex-1">
          {/* Availability Badge */}
          {personalInfo.availableForWork && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponible para trabajar
            </div>
          )}

          {/* Name */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {personalInfo.name}
          </h1>

          {/* Role / Title */}
          <p className="text-lg font-medium text-rose-600 dark:text-rose-400">
            {personalInfo.title}
          </p>

          {/* Location */}
          <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-zinc-400 dark:text-zinc-500" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Avatar */}
        <div className="relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border-2 border-zinc-200 dark:border-zinc-800 group-hover:border-rose-500 transition-colors shadow-md">
            <img
              src={personalInfo.avatarUrl}
              alt={personalInfo.name}
              className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </div>
      </div>

      {/* Bio / Description */}
      <div className="space-y-3 text-zinc-600 dark:text-zinc-300 text-sm sm:text-base leading-relaxed mb-8">
        {personalInfo.bio.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      {/* Action Buttons & Social Links */}
      <div className="flex flex-wrap items-center gap-3">
        {/* CV Download */}
        <a
          href={personalInfo.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all shadow-sm shadow-rose-600/20"
        >
          <FileText className="w-4 h-4" />
          <span>Curriculum Vitae</span>
        </a>

        {/* GitHub */}
        {personalInfo.socials.github && (
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
        )}

        {/* LinkedIn */}
        {personalInfo.socials.linkedin && (
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        )}

        {/* Email Contact */}
        {personalInfo.socials.email && (
          <a
            href={`mailto:${personalInfo.socials.email}`}
            aria-label="Enviar Correo"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Contacto</span>
          </a>
        )}
      </div>

      {/* Subtle separator */}
      <hr className="mt-12 border-zinc-200 dark:border-zinc-800/80" />
    </section>
  );
};
