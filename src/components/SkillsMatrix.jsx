import React, { useState } from 'react';
import { skillCategories, techBadges } from '../data/skills';
import { Bot, Workflow, Layers, Cpu, Sparkles, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Bot: Bot,
  Workflow: Workflow,
  Layers: Layers,
  Cpu: Cpu
};

export default function SkillsMatrix() {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedCategories = activeCategory === "all"
    ? skillCategories
    : skillCategories.filter((cat) => cat.id === activeCategory);

  const getBorderColor = (color) => {
    switch (color) {
      case "cyan": return "border-cyan-500/30 hover:border-cyan-400/60 shadow-glow-cyan";
      case "emerald": return "border-emerald-500/30 hover:border-emerald-400/60 shadow-glow-emerald";
      case "violet": return "border-purple-500/30 hover:border-purple-400/60 shadow-glow-violet";
      case "amber": return "border-amber-500/30 hover:border-amber-400/60 shadow-glow-amber";
      default: return "border-white/10";
    }
  };

  const getProgressColor = (color) => {
    switch (color) {
      case "cyan": return "bg-gradient-to-r from-cyan-500 to-blue-500";
      case "emerald": return "bg-gradient-to-r from-emerald-400 to-teal-500";
      case "violet": return "bg-gradient-to-r from-purple-500 to-pink-500";
      case "amber": return "bg-gradient-to-r from-amber-400 to-orange-500";
      default: return "bg-cyan-500";
    }
  };

  return (
    <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
          <Cpu className="w-3.5 h-3.5" />
          <span>Technical Architecture &amp; Expertise</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Skills &amp; <span className="text-gradient-neon">Engineering Matrix</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Bridging cutting-edge LLM agent cognition, production n8n automation, and resilient software engineering practices.
        </p>

        {/* Quick Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-8">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === "all"
                ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20'
                : 'glass-panel text-slate-400 hover:text-white border-white/5'
            }`}
          >
            All Competencies
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeCategory === cat.id
                  ? 'bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20'
                  : 'glass-panel text-slate-400 hover:text-white border-white/5'
              }`}
            >
              {cat.title.split(" & ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {displayedCategories.map((cat) => {
          const Icon = iconMap[cat.icon] || Cpu;

          return (
            <div
              key={cat.id}
              className={`glass-panel rounded-3xl p-6 sm:p-8 border transition-all duration-300 ${getBorderColor(cat.color)}`}
            >
              {/* Category Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-white shrink-0">
                  <Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills List with Progress */}
              <div className="space-y-4">
                {cat.skills.map((skill, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-medium text-slate-200">{skill.name}</span>
                      <span className="font-mono text-[11px] text-cyan-400">{skill.tag}</span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-[1px]">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${getProgressColor(cat.color)}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Scrolling Tech Badges Ribbon */}
      <div className="mt-16 pt-10 border-t border-white/10">
        <div className="text-center mb-6">
          <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
            Frameworks, Tools &amp; Infrastructure
          </span>
        </div>

        <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
          {techBadges.map((badge, i) => (
            <div
              key={i}
              className="px-4 py-2 rounded-xl text-xs font-mono text-slate-300 bg-white/[0.03] border border-white/10 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors flex items-center gap-2 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
