import React, { useEffect, useRef, useState } from 'react';
import { Play, CheckCircle2, AlertTriangle, RefreshCw, Cpu, Database, Send, ArrowRight, Zap, Code, ShieldCheck, Workflow } from 'lucide-react';

const workflows = [
  {
    id: "invoice-pipeline",
    title: "Autonomous Invoice Extraction & ERP Sync",
    badge: "n8n + GPT-4o Vision + ERP",
    description: "Ingests multi-page PDF invoices via webhook, classifies line items via Vision LLM, validates tax ID in PostgreSQL, and creates accounting vouchers.",
    nodes: [
      {
        id: "trigger",
        name: "Webhook Trigger",
        type: "Webhook / HTTP",
        icon: Zap,
        color: "emerald",
        detail: "POST /v1/invoices/ingest",
        sampleOutput: { event: "file_received", filename: "invoice_august_2026.pdf", size_kb: 420 }
      },
      {
        id: "ai_vision",
        name: "Multimodal AI Parser",
        type: "AI Node (Vision LLM)",
        icon: Cpu,
        color: "cyan",
        detail: "Structured JSON extraction with JSON Schema validation",
        sampleOutput: { vendor: "CloudGrid Inc.", total_usd: 12450.00, confidence: 0.994, line_items: 4 }
      },
      {
        id: "db_lookup",
        name: "PostgreSQL & RAG Check",
        type: "Database / Vector",
        icon: Database,
        color: "purple",
        detail: "SELECT * FROM vendors WHERE tax_id = $1",
        sampleOutput: { vendor_found: true, credit_limit_ok: true, risk_score: "low" }
      },
      {
        id: "output",
        name: "ERP Write & Slack Dispatch",
        type: "Action / Notification",
        icon: Send,
        color: "amber",
        detail: "Voucher #88219 Created -> Slack #finance-alerts",
        sampleOutput: { status: "success", voucher_id: "VCH-88219", duration_ms: 380 }
      }
    ]
  },
  {
    id: "support-agent",
    title: "Autonomous Support Triage & Ticket Resolver",
    badge: "n8n + LangGraph Agent",
    description: "Listens to incoming client emails, uses semantic classification to determine urgency, queries Pinecone knowledge base, and drafts context-rich replies.",
    nodes: [
      {
        id: "trigger",
        name: "IMAP / Zendesk Webhook",
        type: "Event Listener",
        icon: Zap,
        color: "emerald",
        detail: "Ticket #4091: 'Database read replica replica desync'",
        sampleOutput: { ticket_id: "TICK-4091", user_tier: "Enterprise", sentiment: "urgent" }
      },
      {
        id: "ai_vision",
        name: "Autonomous Agent Node",
        type: "LLM Decision Engine",
        icon: Cpu,
        color: "cyan",
        detail: "ReAct reasoning loop with tool routing",
        sampleOutput: { intent: "infrastructure_issue", required_tool: "query_cluster_health" }
      },
      {
        id: "db_lookup",
        name: "Cluster Telemetry Tool",
        type: "API Microservice",
        icon: Database,
        color: "purple",
        detail: "GET /metrics/cluster/replica-lag",
        sampleOutput: { lag_seconds: 142, auto_heal_triggered: true }
      },
      {
        id: "output",
        name: "Resolution & Client Reply",
        type: "Automated Dispatch",
        icon: Send,
        color: "amber",
        detail: "Email dispatched to client with live system health link",
        sampleOutput: { ticket_updated: true, status: "auto_resolved", time_saved_min: 25 }
      }
    ]
  }
];

export const WorkflowSimulator = () => {
  const [selectedWorkflowIndex, setSelectedWorkflowIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(-1);
  const [isRunning, setIsRunning] = useState(false);
  const [executionLogs, setExecutionLogs] = useState([]);
  const intervalRef = useRef(null);

  const currentWorkflow = workflows[selectedWorkflowIndex];

  const handleRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setActiveStep(0);
    setExecutionLogs([
      `[${new Date().toLocaleTimeString()}] Pipeline started: ${currentWorkflow.title}`,
      `[${new Date().toLocaleTimeString()}] Node 1: ${currentWorkflow.nodes[0].name} initialized`
    ]);

    let step = 0;
    intervalRef.current = setInterval(() => {
      step++;
      if (step < currentWorkflow.nodes.length) {
        setActiveStep(step);
        setExecutionLogs((prev) => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] Node ${step + 1} (${currentWorkflow.nodes[step].name}) executed in ${Math.floor(Math.random() * 80 + 40)}ms`
        ]);
      } else {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);
        setExecutionLogs((prev) => [
          ...prev,
          `[${new Date().toLocaleTimeString()}] Pipeline completed successfully. 0 errors, 100% data integrity verified.`
        ]);
      }
    }, 1100);
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setActiveStep(-1);
    setIsRunning(false);
    setExecutionLogs([]);
  };

  useEffect(() => () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  return (
    <section id="workflow-sim" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-xs font-mono text-emerald-300 mb-3">
          <Workflow className="w-3.5 h-3.5" />
          <span>Interactive n8n &amp; Agentic Simulator</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Visualizing <span className="text-gradient-emerald">Autonomous Workflows</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          I design resilient, self-healing n8n automation pipelines and multi-agent loops that turn messy inputs into clean, deterministic business outcomes. Run the live simulation below.
        </p>

        {/* Workflow tabs */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {workflows.map((wf, idx) => (
            <button
              key={wf.id}
              onClick={() => {
                setSelectedWorkflowIndex(idx);
                handleReset();
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                selectedWorkflowIndex === idx
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-lg shadow-emerald-500/10'
                  : 'glass-panel text-slate-400 hover:text-slate-200 border-white/5'
              }`}
            >
              {wf.title}
            </button>
          ))}
        </div>
      </div>

      {/* Main Interactive Canvas Box */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden shadow-2xl">
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold text-white">{currentWorkflow.title}</span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono bg-emerald-950/60 text-emerald-400 border border-emerald-500/40">
                {currentWorkflow.badge}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              {currentWorkflow.description}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleRun}
              disabled={isRunning}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-black transition-all ${
                isRunning
                  ? 'bg-slate-600 text-slate-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-emerald-400 to-cyan-400 hover:opacity-95 shadow-lg shadow-emerald-500/25 active:scale-95'
              }`}
            >
              {isRunning ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-black" />
                  <span>Processing Nodes...</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4 fill-black text-black" />
                  <span>Trigger Workflow Run</span>
                </>
              )}
            </button>

            <button
              onClick={handleReset}
              className="p-2.5 rounded-xl glass-panel text-slate-400 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
              title="Reset Simulation"
            >
              <RefreshCw className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* n8n Node Graph Flow */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          {currentWorkflow.nodes.map((node, index) => {
            const Icon = node.icon;
            const isCompleted = activeStep > index || (!isRunning && activeStep === currentWorkflow.nodes.length - 1);
            const isCurrent = activeStep === index;

            return (
              <div
                key={node.id}
                className={`relative rounded-2xl p-5 transition-all duration-300 ${
                  isCurrent
                    ? 'bg-cyan-950/40 border-2 border-cyan-400 shadow-glow-cyan scale-[1.02]'
                    : isCompleted
                    ? 'bg-emerald-950/30 border border-emerald-500/40'
                    : 'bg-[#0A0E1A] border border-white/5 opacity-80'
                }`}
              >
                {/* Node Top Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2.5 rounded-xl ${
                    isCurrent ? 'bg-cyan-500/20 text-cyan-400' : isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-white/5 text-slate-400'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/5 text-slate-400">
                    Step {index + 1}
                  </span>
                </div>

                {/* Node Title & Type */}
                <h3 className="font-semibold text-white text-sm mb-1">{node.name}</h3>
                <p className="text-[11px] font-mono text-cyan-400 mb-3">{node.type}</p>

                {/* Node Configuration / Description */}
                <div className="text-xs text-slate-400 bg-black/40 p-2.5 rounded-lg border border-white/5 font-mono mb-3">
                  {node.detail}
                </div>

                {/* Output payload preview when reached */}
                {(isCompleted || isCurrent) && (
                  <div className="mt-2 pt-2 border-t border-white/10 animate-in fade-in duration-300">
                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider block mb-1">
                      JSON Output:
                    </span>
                    <pre className="text-[10px] font-mono text-emerald-300 bg-black/60 p-2 rounded overflow-x-auto max-h-24">
                      {JSON.stringify(node.sampleOutput, null, 2)}
                    </pre>
                  </div>
                )}

                {/* Status Indicator at bottom */}
                <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono">
                  {isCurrent && (
                    <span className="flex items-center gap-1.5 text-cyan-400">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      Executing node...
                    </span>
                  )}
                  {isCompleted && (
                    <span className="flex items-center gap-1 text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Success (200 OK)
                    </span>
                  )}
                  {!isCurrent && !isCompleted && (
                    <span className="text-slate-500">Idle / Standby</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Execution Logs Drawer */}
        <div className="mt-8 bg-[#04060B] rounded-2xl border border-white/10 p-4 font-mono text-xs">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-slate-400 text-[11px]">
            <span className="flex items-center gap-2">
              <Code className="w-3.5 h-3.5 text-cyan-400" />
              Real-Time n8n Event Bus Stream
            </span>
            <span className="text-emerald-400">
              {isRunning ? "Status: STREAMING" : activeStep >= 0 ? "Status: COMPLETED" : "Status: IDLE"}
            </span>
          </div>

          <div className="space-y-1.5 max-h-32 overflow-y-auto pr-2">
            {executionLogs.length === 0 ? (
              <p className="text-slate-500 italic">Click "Trigger Workflow Run" to stream node execution logs &amp; output payloads...</p>
            ) : (
              executionLogs.map((log, i) => (
                <div key={i} className="text-slate-300 flex items-start gap-2">
                  <span className="text-cyan-400 select-none">&gt;</span>
                  <span>{log}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSimulator;
