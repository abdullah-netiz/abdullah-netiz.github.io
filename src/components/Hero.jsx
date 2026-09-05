import React from 'react';
import Scene3D from './Scene3D';
import { Bot, Workflow, Sparkles, ArrowRight, Code2, Terminal, ShieldCheck, Zap } from 'lucide-react';

export default function Hero() {
  const quickStats = [
    { value: "25+", label: "n8n AI Workflows Deployed", color: "text-emerald-400" },
    { value: "98.7%", label: "Multi-Agent Accuracy", color: "text-cyan-400" },
    { value: "300K+", label: "Monthly Actions Automated", color: "text-purple-400" },
    { value: "<150ms", label: "Optimized Edge Latency", color: "text-pink-400" }
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden cyber-grid">
      {/* 3D WebGL Canvas Layer */}
      <Scene3D />

      {/* Ambient background glow orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pointer-events-none">
        {/* Top Tagline Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-6 shadow-lg shadow-cyan-500/10 pointer-events-auto">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-slate-300">Software Engineering Student</span>
          <span className="text-white/20">|</span>
          <span className="text-cyan-400 font-semibold">Agentic AI & Full-Stack Architect</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 pointer-events-auto">
          Architecting <span className="text-gradient-cyan">Autonomous Agents</span> &amp;{" "}
          <span className="text-gradient-neon">Intelligent SaaS</span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed mb-10 pointer-events-auto">
          Specializing in <span className="text-cyan-300 font-medium">Web Development with AI</span>,{" "}
          <span className="text-emerald-300 font-medium">Enterprise n8n Automations</span>, and{" "}
          <span className="text-purple-300 font-medium">Multi-Agent Systems</span>. Building fast, scalable, and self-orchestrating software for the autonomous era.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14 pointer-events-auto">
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-cyan-300 to-emerald-400 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4 text-black" />
            <span>Explore Projects &amp; Video Demos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#workflow-sim"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-slate-200 glass-panel border border-white/10 hover:border-emerald-500/50 hover:text-emerald-400 hover:bg-emerald-950/20 transition-all transform hover:-translate-y-0.5"
          >
            <Workflow className="w-4 h-4 text-emerald-400" />
            <span>Interactive n8n Visualizer</span>
          </a>

          <a
            href="#ai-twin"
            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm text-slate-300 glass-panel border border-white/10 hover:border-purple-500/50 hover:text-purple-300 hover:bg-purple-950/20 transition-all transform hover:-translate-y-0.5"
          >
            <Bot className="w-4 h-4 text-purple-400" />
            <span>Test My AI Twin</span>
          </a>
        </div>

        {/* Live Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto pointer-events-auto">
          {quickStats.map((stat, i) => (
            <div
              key={i}
              className="glass-panel p-4 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-300 group text-left"
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-2xl sm:text-3xl font-extrabold font-mono ${stat.color} group-hover:scale-105 transition-transform`}>
                  {stat.value}
                </span>
                <div className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors"></div>
              </div>
              <p className="text-xs text-slate-400 font-medium leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* 3D Interactive Tip */}
        <div className="mt-8 inline-flex items-center gap-2 text-[11px] font-mono text-slate-500 pointer-events-auto">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>Interactive 3D Space: Drag cursor across background to navigate neural synapse lattice</span>
        </div>
      </div>
    </section>
  );
}
