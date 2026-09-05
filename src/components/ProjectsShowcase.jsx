import React, { useState } from 'react';
import { projectsData, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';
import { Play, ExternalLink, Code2, Sparkles, Layers, ArrowUpRight, Cpu, Video } from 'lucide-react';

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects = selectedCategory === "All"
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Background radial glow */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 -right-48 w-96 h-96 bg-purple-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Engineered with Precision</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Featured <span className="text-gradient-cyan">Projects &amp; AI Systems</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          From multi-agent research swarms and mission-critical n8n automations to scalable full-stack SaaS. Click any project to watch the live video demo and explore its architecture.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8">
          {projectCategories.map((category) => {
            const count = category === "All"
              ? projectsData.length
              : projectsData.filter((p) => p.category === category).length;
            const isSelected = selectedCategory === category;

            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25 scale-105'
                    : 'glass-panel text-slate-400 hover:text-slate-200 border-white/5 hover:border-white/20'
                }`}
              >
                <span>{category}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${isSelected ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-500'}`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative glass-card rounded-3xl overflow-hidden border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Top Preview Banner with Video Play Overlay */}
            <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-gradient-to-br from-slate-900 to-[#070A14] flex items-center justify-center p-6">
              {/* Abstract decorative graphic */}
              <div className={`absolute inset-0 opacity-25 bg-gradient-to-tr ${project.previewColor} blur-2xl group-hover:opacity-40 transition-opacity`}></div>
              
              {/* Grid overlay */}
              <div className="absolute inset-0 cyber-grid opacity-40"></div>

              {/* Central Video Trigger Badge */}
              <button
                onClick={() => setActiveProject(project)}
                className="relative z-10 w-14 h-14 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 group-hover:border-cyan-400 flex items-center justify-center text-white group-hover:text-cyan-400 group-hover:scale-110 shadow-xl transition-all"
                aria-label={`Watch video demo of ${project.title}`}
              >
                <Play className="w-6 h-6 fill-current ml-0.5" />
                <span className="sr-only">Watch Video Demo</span>
              </button>

              {/* Status & Category Badges */}
              <div className="absolute top-3 left-3 z-10 flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-black/70 backdrop-blur-md text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
              </div>

              <div className="absolute top-3 right-3 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-medium bg-emerald-950/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                  {project.status}
                </span>
              </div>

              {/* Video Play hint at bottom of preview */}
              <div className="absolute bottom-2 left-3 right-3 z-10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Video className="w-3.5 h-3.5 text-cyan-400" />
                  Click to watch demo video
                </span>
                <span className="text-cyan-400 font-semibold">{project.badge}</span>
              </div>
            </div>

            {/* Project Content */}
            <div className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <button
                    onClick={() => setActiveProject(project)}
                    className="p-1 rounded-lg text-slate-400 group-hover:text-cyan-400 hover:bg-white/5 transition-colors"
                    title="View details"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-xs font-mono text-cyan-400/90 mb-3">
                  {project.tagline}
                </p>

                <p className="text-sm text-slate-300 line-clamp-3 mb-5 leading-relaxed">
                  {project.summary}
                </p>

                {/* Metrics Pill Row */}
                <div className="grid grid-cols-2 gap-2 mb-5">
                  {project.metrics.slice(0, 2).map((m, idx) => (
                    <div key={idx} className="bg-white/[0.03] p-2 rounded-xl border border-white/5">
                      <span className="text-xs font-mono font-bold text-white block">{m.value}</span>
                      <span className="text-[10px] text-slate-400">{m.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack Badges */}
              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/5 text-slate-300 border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-slate-500">
                      +{project.techStack.length - 4} more
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/10">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-semibold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-sm shadow-cyan-500/20"
                  >
                    <Play className="w-3.5 h-3.5 fill-black" />
                    <span>Watch Demo</span>
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                    title="Open Live App"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl glass-panel text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
                    title="View Source Code"
                  >
                    <Code2 className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Trigger */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
