import React from 'react';
import { ArrowUp, Cpu, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#04060C] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Branding & Status */}
        <div className="flex items-center gap-4 text-left">
          <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm text-white">Abdullah</span>
              <span className="text-[10px] font-mono text-cyan-400 px-1.5 py-0.5 rounded bg-cyan-950/60 border border-cyan-500/30">
                AI / SWE PORTFOLIO
              </span>
            </div>
            <p className="text-xs text-slate-500 font-mono mt-0.5">
              Software Engineering • Agentic AI • n8n Automations • SaaS
            </p>
          </div>
        </div>

        {/* Center: System Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-500/20 text-xs font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Core WebGL &amp; Edge Services: 100% Operational</span>
        </div>

        {/* Right: Back to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white border border-white/10 hover:border-cyan-400/40 transition-colors flex items-center gap-2 text-xs font-mono"
            aria-label="Return to top of page"
          >
            <span>Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
        <p>© {new Date().getFullYear()} Abdullah. Engineered for the Autonomous AI Era.</p>
        <p>Ultra-optimized 60FPS Three.js • In-Memory Caching • React 18</p>
      </div>
    </footer>
  );
}
