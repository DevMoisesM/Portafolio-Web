import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, ExternalLink } from 'lucide-react';

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  const hasEducation = education && education.length > 0;
  const hasCertifications = certifications && certifications.length > 0;

  if (!hasEducation && !hasCertifications) {
    return null;
  }

  return (
    <section id="education" className="py-10">
      {/* Section Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2 rounded-xl bg-rose-500/10 text-rose-500 border border-rose-500/20">
          <GraduationCap className="w-5 h-5" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
          Educación & Certificaciones
        </h2>
      </div>

      <div className="space-y-8">
        {/* Higher Education */}
        {hasEducation && (
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.id}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800/80 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                    {item.degree}
                  </h3>
                  <div className="flex items-center gap-1 text-xs font-mono text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-900 px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 w-fit">
                    <Calendar className="w-3 h-3 text-rose-500" />
                    <span>{item.period}</span>
                  </div>
                </div>

                <p className="text-sm font-medium text-rose-600 dark:text-rose-400 mb-2">
                  {item.institution}
                </p>

                {item.description && (
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Certifications */}
        {hasCertifications && (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-4 h-4 text-rose-500" />
              <h3 className="text-sm font-semibold tracking-wide text-zinc-700 dark:text-zinc-300 uppercase">
                Certificaciones Destacadas
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 rounded-xl bg-white dark:bg-[#121215] border border-zinc-200 dark:border-zinc-800/80 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">
                      {cert.issuer} • {cert.date}
                    </p>
                  </div>

                  {cert.credentialUrl && cert.credentialUrl !== '#' && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-rose-600 dark:text-rose-400 hover:underline mt-3 pt-2 border-t border-zinc-100 dark:border-zinc-800/60"
                    >
                      <span>Ver credencial</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Separator */}
      <hr className="mt-12 border-zinc-200 dark:border-zinc-800/80" />
    </section>
  );
};
