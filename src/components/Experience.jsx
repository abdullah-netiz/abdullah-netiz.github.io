import React from 'react';
import { experiencesData } from '../data/experiences';
import { GraduationCap, Trophy, Briefcase, Award, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Academic &amp; Professional Journey</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Software Engineering <span className="text-gradient-emerald">Journey</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Combining academic rigor in computer science with real-world agent deployments, hackathon victories, and client automation pipelines.
        </p>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-white/10 ml-4 sm:ml-8 space-y-10">
        {experiencesData.map((exp, index) => (
          <div key={index} className="relative pl-6 sm:pl-10 group">
            {/* Timeline glowing bullet */}
            <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#070A14] border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-glow-cyan"></div>

            {/* Timeline Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 group-hover:border-cyan-500/40 transition-all duration-300">
              {/* Header row */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    {exp.period}
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10">
                    {exp.badge}
                  </span>
                </div>

                <span className="text-xs font-mono text-slate-400">
                  {exp.organization}
                </span>
              </div>

              {/* Role Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {exp.role}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="space-y-2 mb-5">
                {exp.achievements.map((ach, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-400">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ach}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                {exp.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-0.5 rounded-lg text-[10px] font-mono bg-cyan-950/40 text-cyan-300 border border-cyan-500/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
