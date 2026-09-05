import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WorkflowSimulator from './components/WorkflowSimulator';
import ProjectsShowcase from './components/ProjectsShowcase';
import AgentChat from './components/AgentChat';
import SkillsMatrix from './components/SkillsMatrix';
import Experience from './components/Experience';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05070E] text-slate-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Top Floating Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <WorkflowSimulator />
        <ProjectsShowcase />
        <AgentChat />
        <SkillsMatrix />
        <Experience />
        <ContactSection />
      </main>

      {/* System Footer */}
      <Footer />
    </div>
  );
}
