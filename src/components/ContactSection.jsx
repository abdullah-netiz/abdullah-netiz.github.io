import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Mail, Code2, Copy, Check, Send, Sparkles, FileDown, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Agentic AI System',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const emailAddress = "abdullah.dev.ai@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate reliable async transmission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);

      // Trigger high-energy celebratory confetti!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#00f0ff', '#8a2be2', '#10b981', '#ffffff']
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: 'Agentic AI System',
        message: ''
      });
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Glow background */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none -z-10"></div>

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300 mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Let's Build Something Extraordinary</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Initiate <span className="text-gradient-cyan">Contact &amp; Collaboration</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Whether you are looking to deploy an autonomous AI agent, build scalable n8n workflows, or recruit for an engineering position, let's connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct channels & Quick Connect */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
            <h3 className="text-xl font-bold text-white tracking-tight">
              Get In Touch Directly
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              I am active across developer communities and typically respond to messages within 12 hours.
            </p>

            {/* Email Box with One-Click Copy */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 overflow-hidden">
                <div className="p-2 rounded-xl bg-cyan-500/20 text-cyan-400">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="overflow-hidden">
                  <span className="text-[10px] font-mono text-slate-400 block uppercase">Direct Email</span>
                  <span className="text-xs sm:text-sm font-mono text-white truncate block">{emailAddress}</span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl glass-panel text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                title="Copy Email to Clipboard"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Resume / CV Download Card */}
            <div className="p-4 rounded-2xl bg-gradient-to-r from-purple-950/40 to-cyan-950/40 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-300">
                  <FileDown className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-white block">Curriculum Vitae</span>
                  <span className="text-[10px] font-mono text-slate-400">PDF • Updated 2026</span>
                </div>
              </div>

              <a
                href="#download-cv"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Abdullah's Resume (PDF) downloaded successfully.");
                }}
                className="px-3 py-1.5 rounded-xl text-xs font-mono font-medium text-black bg-cyan-400 hover:bg-cyan-300 transition-colors"
              >
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div>
              <span className="text-xs font-mono text-slate-400 block mb-3 uppercase tracking-wider">
                Developer Profiles &amp; Socials
              </span>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { label: "GitHub", href: "https://github.com", icon: Code2 },
                  { label: "LinkedIn", href: "https://linkedin.com", icon: MessageSquare },
                  { label: "Twitter / X", href: "https://twitter.com", icon: Send },
                  { label: "Discord", href: "https://discord.com", icon: MessageSquare }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2 rounded-xl text-xs font-medium text-slate-300 glass-panel border border-white/10 hover:border-cyan-400/50 hover:text-cyan-400 transition-all flex items-center gap-2"
                    >
                      <Icon className="w-4 h-4" />
                      <span>{social.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative">
            <h3 className="text-xl font-bold text-white tracking-tight mb-2">
              Send a Transmission
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              Fill out the parameters below to dispatch a message directly to my inbox.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 text-center space-y-3 animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-white">Transmission Acknowledged!</h4>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Thank you for reaching out. Your message was processed and logged. I will review and reply promptly!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-4 py-2 rounded-xl text-xs font-medium text-black bg-emerald-400 hover:bg-emerald-300 transition-colors"
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Mercer"
                      className="w-full bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1.5">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Engagement Objective
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-[#080C16] border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl px-4 py-3 text-sm text-white"
                  >
                    <option value="Agentic AI System">Agentic AI System (Multi-Agent Swarm / LangGraph)</option>
                    <option value="n8n Automation Pipeline">Enterprise n8n Automation &amp; Webhook Hub</option>
                    <option value="Full-Stack SaaS Application">Full-Stack SaaS &amp; Web App Architecture</option>
                    <option value="Internship or Full-Time SWE Role">Internship or Full-Time SWE Opportunity</option>
                    <option value="General Consultation / Other">General Consultation / Technical Advisory</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">
                    Message Specification *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project vision, timeline, or position requirements..."
                    className="w-full bg-black/40 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded-xl p-4 text-sm text-white placeholder:text-slate-600 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm text-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 hover:opacity-95 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Encrypting &amp; Dispatching...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
