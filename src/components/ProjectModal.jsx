import React, { useEffect, useState, useRef } from 'react';
import { X, Play, ExternalLink, Code2, CheckCircle2, Layers, Cpu, Video, Activity } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  const [activeTab, setActiveTab] = useState('video'); // 'video' | 'architecture'
  const [videoError, setVideoError] = useState(false);
  const canvasRef = useRef(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden'; // prevent scrolling behind modal
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  // Procedural canvas animation in case video is loading or fallback mode
  useEffect(() => {
    if (activeTab !== 'canvas' && !videoError) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let t = 0;

    const render = () => {
      t += 0.03;
      ctx.fillStyle = '#070A14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid background
      ctx.strokeStyle = 'rgba(215, 240, 0, 0.08)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 30) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 30) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Draw dynamic nodes & connections
      const nodes = [
        { x: 100, y: 120 + Math.sin(t) * 20, label: "TRIGGER" },
        { x: 260, y: 80 + Math.cos(t * 1.2) * 25, label: "AI AGENT" },
        { x: 420, y: 160 + Math.sin(t * 0.8) * 20, label: "VECTOR DB" },
        { x: 580, y: 110 + Math.cos(t) * 15, label: "DISPATCH" }
      ];

      // Draw lines
      ctx.strokeStyle = '#d7f000';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length; i++) {
        ctx.lineTo(nodes[i].x, nodes[i].y);
      }
      ctx.stroke();

      // Draw nodes
      nodes.forEach((node, i) => {
        ctx.fillStyle = i === 1 ? '#e36d43' : '#d7f000';
        ctx.beginPath();
        ctx.arc(node.x, node.y, 8, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.font = '11px monospace';
        ctx.fillText(node.label, node.x - 24, node.y - 14);
      });

      // Moving packet
      const packetIndex = (t % 3);
      const startNode = nodes[Math.floor(packetIndex)];
      const endNode = nodes[Math.min(nodes.length - 1, Math.floor(packetIndex) + 1)];
      const progress = packetIndex - Math.floor(packetIndex);
      const px = startNode.x + (endNode.x - startNode.x) * progress;
      const py = startNode.y + (endNode.y - startNode.y) * progress;

      ctx.fillStyle = '#8fa63a';
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI * 2);
      ctx.fill();

      animationId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationId);
  }, [activeTab, videoError]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#070B16] rounded-3xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full glass-panel text-slate-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-cyan-950/70 text-cyan-300 border border-cyan-500/40">
              {project.category}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/70 text-emerald-400 border border-emerald-500/40">
              {project.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-purple-950/70 text-purple-300 border border-purple-500/40">
              {project.badge}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {project.title}
          </h3>
          <p className="text-sm sm:text-base text-cyan-400 font-medium mt-1">
            {project.tagline}
          </p>
        </div>

        {/* Video & Interactive Demo Screen */}
        <div className="px-6 sm:px-8 pt-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-xs font-mono">
              <button
                onClick={() => setActiveTab('video')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'video'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                Live Demo Video
              </button>
              <button
                onClick={() => setActiveTab('canvas')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors ${
                  activeTab === 'canvas'
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                <Activity className="w-3.5 h-3.5" />
                Live Dynamic Topology
              </button>
            </div>

            <span className="text-[11px] font-mono text-emerald-400 hidden sm:inline">
              ● Verified 60fps Pipeline
            </span>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black aspect-video max-h-[380px] flex items-center justify-center">
            {activeTab === 'video' && !videoError ? (
              <video
                src={project.demoVideo}
                controls
                autoPlay
                loop
                muted
                playsInline
                onError={() => setVideoError(true)}
                className="w-full h-full object-cover"
              />
            ) : (
              <canvas
                ref={canvasRef}
                width={700}
                height={380}
                className="w-full h-full object-contain bg-[#070A14]"
              />
            )}
          </div>
        </div>

        {/* Project Description & Metrics */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Summary */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Overview &amp; Problem Solved
            </h4>
            <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Key Metrics Grid */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">
              Performance &amp; Production Metrics
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((metric, i) => (
                <div key={i} className="glass-panel p-3.5 rounded-xl border border-white/5">
                  <span className="text-xl font-mono font-bold text-cyan-400 block">
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-400">{metric.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-purple-400" />
              Technical Architecture Highlights
            </h4>
            <div className="space-y-2">
              {project.architecture.map((arch, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{arch}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-400" />
              Technologies &amp; Libraries
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 text-slate-200 border border-white/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Action Buttons */}
          <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-md shadow-cyan-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Open Live Demo</span>
              </a>

              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm text-slate-200 glass-panel border border-white/10 hover:border-white/30 hover:text-white transition-colors"
              >
                <Code2 className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
            >
              Close Viewer [ESC]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
