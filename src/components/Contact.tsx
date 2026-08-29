import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';
import { Mail, Copy, Check, Send, Github, Linkedin, FileText } from 'lucide-react';

export const Contact: React.FC = () => {
  const { personalInfo } = portfolioData;
  const [copied, setCopied] = useState(false);

  const email = personalInfo.socials.email;
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`;

  const handleCopy = () => {
    if (!email) return;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <Mail className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Contáctame
        </h2>
      </div>

      {/* Action Buttons Bar */}
      <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800/80 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          {/* CV Button */}
          {personalInfo.resumeUrl && (
            <a
              href={personalInfo.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white bg-rose-600 hover:bg-rose-700 active:scale-95 transition-all shadow-sm shadow-rose-600/20"
            >
              <FileText className="w-4 h-4" />
              <span>Curriculum Vitae</span>
            </a>
          )}

          {/* GitHub Button */}
          {personalInfo.socials.github && (
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}

          {/* LinkedIn Button */}
          {personalInfo.socials.linkedin && (
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
            >
              <Linkedin className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}

          {/* Copy Email Button */}
          {email && (
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
              title="Copiar correo electrónico al portapapeles"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-500" />
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">¡Copiado!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-zinc-500" />
                  <span>Copiar email</span>
                </>
              )}
            </button>
          )}

          {/* Direct Gmail Web Link */}
          {email && (
            <a
              href={gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-medium text-zinc-700 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-rose-500/60 hover:text-rose-600 dark:hover:text-rose-400 active:scale-95 transition-all"
            >
              <Send className="w-4 h-4" />
              <span>Enviar correo</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};
