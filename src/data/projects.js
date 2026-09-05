export const projectsData = [
  {
    id: "agentforge",
    title: "AgentForge",
    tagline: "Autonomous Multi-Agent Research & Workflow Orchestrator",
    category: "Agentic AI",
    badge: "Flagship Agent System",
    featured: true,
    status: "Live Production",
    summary: "A production-grade multi-agent autonomous framework where specialized LLM agents (Researcher, Critic, Synthesizer, Coder) collaborate via stateful directed acyclic graphs to execute complex enterprise research and document generation.",
    metrics: [
      { label: "Task Success Rate", value: "98.7%" },
      { label: "Synthesis Speedup", value: "14x" },
      { label: "Autonomous Steps", value: "50+ per run" }
    ],
    architecture: [
      "StateGraph architecture inspired by LangGraph with cyclic feedback loops",
      "Dynamic tool calling with strict schema validation & sandboxed execution",
      "Hierarchical memory model (Short-term context window + Pinecone Vector RAG)",
      "Server-Sent Events (SSE) streaming live agent thought chains & tool states to UI"
    ],
    techStack: ["Python", "FastAPI", "LangChain", "OpenAI / Claude API", "Next.js", "Pinecone", "TailwindCSS"],
    demoVideo: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34538-large.mp4",
    canvasDemoType: "multi-agent-graph",
    githubUrl: "https://github.com/example/agentforge",
    liveUrl: "https://agentforge-demo.vercel.app",
    previewColor: "from-cyan-500 to-blue-600"
  },
  {
    id: "flowsync-n8n",
    title: "FlowSync AI Pipeline",
    tagline: "Enterprise n8n Autonomous Workflow & Document Intelligence Hub",
    category: "AI Automation & n8n",
    badge: "n8n + AI Masterpiece",
    featured: true,
    status: "Enterprise Deployed",
    summary: "An end-to-end automated pipeline integrating self-hosted n8n instances with multimodal AI vision models to ingest, classify, extract, and reconcile invoices, contracts, and CRM records with automated Slack escalation.",
    metrics: [
      { label: "Monthly Documents", value: "120K+" },
      { label: "Manual Effort Cut", value: "92%" },
      { label: "Zero-Data-Loss Fallback", value: "100%" }
    ],
    architecture: [
      "Custom n8n workflow nodes communicating with microservice webhooks",
      "Two-tier classification: fast regex filtering followed by GPT-4o Vision extraction",
      "Automated confidence scoring triggering Human-in-the-Loop approval before ERP write",
      "Real-time retry queues & idempotency keys ensuring zero duplicate entries"
    ],
    techStack: ["n8n", "Docker", "PostgreSQL", "OpenAI Vision API", "Webhook Orchestration", "Python", "Slack API"],
    demoVideo: "https://assets.mixkit.co/videos/preview/mixkit-hands-holding-smartphone-with-green-screen-41716-large.mp4",
    canvasDemoType: "n8n-nodes",
    githubUrl: "https://github.com/example/flowsync-ai-pipeline",
    liveUrl: "https://flowsync.example.com",
    previewColor: "from-emerald-500 to-teal-700"
  },
  {
    id: "neuroscribe-saas",
    title: "NeuroScribe SaaS",
    tagline: "Context-Aware AI Code Generation & AST Refactoring Suite",
    category: "SaaS & Web",
    badge: "Full-Stack SaaS",
    featured: true,
    status: "Beta Testing",
    summary: "Developer SaaS platform that indexes entire GitHub repositories, parses Abstract Syntax Trees (AST), and provides context-aware unit test generation, security vulnerability detection, and automated PR refactors.",
    metrics: [
      { label: "AST Parsing Speed", value: "<150ms" },
      { label: "Weekly Active Devs", value: "1,400+" },
      { label: "Test Coverage Gain", value: "+38%" }
    ],
    architecture: [
      "Tree-Sitter AST parsing engine extracting symbol graphs and call hierarchies",
      "Hybrid retrieval: BM25 lexical search blended with Dense Vector Embeddings",
      "Stripe recurring billing with metered token usage tier architecture",
      "Edge middleware authentication with Supabase JWT & Row Level Security (RLS)"
    ],
    techStack: ["React 18", "TypeScript", "FastAPI", "Supabase", "ChromaDB", "Stripe API", "Docker"],
    demoVideo: "https://assets.mixkit.co/videos/preview/mixkit-circuit-board-microchip-processing-data-42777-large.mp4",
    canvasDemoType: "code-stream",
    githubUrl: "https://github.com/example/neuroscribe-saas",
    liveUrl: "https://neuroscribe.io",
    previewColor: "from-purple-500 to-indigo-600"
  },
  {
    id: "omnisupport-agent",
    title: "OmniSupport Autonomous Agent",
    tagline: "Multi-Channel Autonomous Support Agent with Real-time Tool Execution",
    category: "Agentic AI",
    badge: "Autonomous Tool Use",
    featured: false,
    status: "Production",
    summary: "Production customer operations AI agent capable of executing actions across Zendesk, Shopify, and PostgreSQL. Handles order cancellations, refunds, tracking lookups, and technical troubleshooting autonomously.",
    metrics: [
      { label: "Autonomous Resolution", value: "79.3%" },
      { label: "Avg Response Time", value: "1.2s" },
      { label: "CSAT Score", value: "4.8 / 5.0" }
    ],
    architecture: [
      "ReAct prompting pattern with dynamically injected function calling tools",
      "Deterministic safety rails guarding financial operations (refund ceilings)",
      "Multi-turn conversational memory with sentiment tracking and instant supervisor transfer",
      "Cross-platform webhook ingestion supporting WhatsApp, Zendesk, and Web widget"
    ],
    techStack: ["Node.js", "Express", "LangChain.js", "Redis (Cache & State)", "PostgreSQL", "Shopify API"],
    demoVideo: "https://assets.mixkit.co/videos/preview/mixkit-data-center-server-racks-with-flashing-lights-42861-large.mp4",
    canvasDemoType: "agent-chat",
    githubUrl: "https://github.com/example/omnisupport-agent",
    liveUrl: "https://omnisupport-demo.vercel.app",
    previewColor: "from-pink-500 to-rose-600"
  },
  {
    id: "datapulse-ai",
    title: "DataPulse AI",
    tagline: "Real-Time SaaS Metrics & Automated Root Cause Analysis",
    category: "SaaS & Web",
    badge: "Real-Time AI",
    featured: false,
    status: "Live Production",
    summary: "High-throughput telemetry dashboard tracking server vitals and user events. When anomalies or conversion drops occur, an integrated AI agent runs diagnostic heuristics and suggests fix PRs.",
    metrics: [
      { label: "Events Ingested / Sec", value: "25,000+" },
      { label: "Incident MTTR Cut", value: "65%" },
      { label: "Latency P99", value: "42ms" }
    ],
    architecture: [
      "High-performance ClickHouse analytical backend with Kafka event streaming",
      "Real-time WebSocket event broadcaster with backpressure handling",
      "Unsupervised isolation forest anomaly detection pipeline",
      "LLM diagnostic synthesizer producing incident postmortems in under 30 seconds"
    ],
    techStack: ["Next.js 14", "TailwindCSS", "Kafka", "ClickHouse", "Go / Golang", "OpenAI"],
    demoVideo: "https://assets.mixkit.co/videos/preview/mixkit-server-room-rack-corridor-42859-large.mp4",
    canvasDemoType: "telemetry-pulse",
    githubUrl: "https://github.com/example/datapulse-ai",
    liveUrl: "https://datapulse.tech",
    previewColor: "from-amber-500 to-orange-600"
  },
  {
    id: "automate-os",
    title: "AutomateOS Studio",
    tagline: "Visual Drag-and-Drop Agentic Automation Studio",
    category: "AI Automation & n8n",
    badge: "Low-Code Studio",
    featured: false,
    status: "Open Source",
    summary: "A sleek visual graph canvas allowing engineers to connect webhooks, LLM agents, code interpreters, and third-party APIs into resilient automated pipelines with real-time debugger and test runner.",
    metrics: [
      { label: "GitHub Stars", value: "850+" },
      { label: "Custom Nodes Built", value: "45+" },
      { label: "Community Contributors", value: "28" }
    ],
    architecture: [
      "React Flow canvas with custom WebGL connector cables and bezier path rendering",
      "Isolated Python execution sandbox using WebAssembly (Pyodide) in the browser",
      "One-click export to production n8n workflows and Docker Compose stacks",
      "Distributed queue execution via Celery and Redis"
    ],
    techStack: ["React", "React Flow", "Python / Pyodide", "Docker", "n8n Nodes", "Redis"],
    demoVideo: "https://assets.mixkit.co/videos/preview/mixkit-software-developer-working-on-code-screen-close-up-34538-large.mp4",
    canvasDemoType: "n8n-nodes",
    githubUrl: "https://github.com/example/automate-os",
    liveUrl: "https://automate-os.dev",
    previewColor: "from-teal-400 to-cyan-600"
  }
];

export const projectCategories = [
  "All",
  "Agentic AI",
  "AI Automation & n8n",
  "SaaS & Web"
];
