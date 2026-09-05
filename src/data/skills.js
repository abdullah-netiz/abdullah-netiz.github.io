export const skillCategories = [
  {
    id: "agentic-ai",
    title: "Agentic AI & LLM Systems",
    icon: "Bot",
    description: "Designing autonomous multi-agent swarms, goal-directed planners, function calling tools, and RAG pipelines.",
    color: "cyan",
    skills: [
      { name: "Multi-Agent Frameworks (LangGraph, CrewAI, AutoGen)", level: 95, tag: "Core" },
      { name: "LLM Orchestration & Prompt Engineering (Claude 3.5, GPT-4o)", level: 98, tag: "Expert" },
      { name: "Vector Databases & Semantic Search (Pinecone, ChromaDB, Weaviate)", level: 92, tag: "Production" },
      { name: "Function Calling & Tool Execution Rails", level: 96, tag: "Architecture" },
      { name: "Autonomous Memory Models (Buffer, Vector RAG, Hierarchical)", level: 90, tag: "Advanced" }
    ]
  },
  {
    id: "automation-n8n",
    title: "AI Automation & n8n Hubs",
    icon: "Workflow",
    description: "Architecting self-hosted and cloud automated workflows bridging APIs, AI endpoints, and enterprise databases.",
    color: "emerald",
    skills: [
      { name: "Self-Hosted & Enterprise n8n Workflows", level: 98, tag: "Specialist" },
      { name: "Webhook Ingestion & Idempotent Event Handlers", level: 94, tag: "Production" },
      { name: "Multimodal Document Intelligence (OCR + AI Vision)", level: 92, tag: "Deployed" },
      { name: "Custom n8n JavaScript / Python Automation Nodes", level: 95, tag: "Custom Dev" },
      { name: "Error Catching, Retry Policies & Dead Letter Queues", level: 93, tag: "Resilience" }
    ]
  },
  {
    id: "fullstack-saas",
    title: "Modern Full-Stack & SaaS",
    icon: "Layers",
    description: "Shipping responsive, high-speed, and secure web applications with real-time reactive interfaces.",
    color: "violet",
    skills: [
      { name: "React 18 / Next.js (App Router, Server Components)", level: 94, tag: "Core" },
      { name: "TypeScript & Modern JavaScript (ESNext)", level: 92, tag: "Production" },
      { name: "Backend APIs (FastAPI, Node.js, Express, Python)", level: 95, tag: "High Performance" },
      { name: "Database Engineering (PostgreSQL, Supabase, Redis, Prisma)", level: 90, tag: "Data Layer" },
      { name: "Tailwind CSS & 3D Interactive WebGL (Three.js)", level: 91, tag: "UI/UX" }
    ]
  },
  {
    id: "swe-foundations",
    title: "Software Engineering & DevOps",
    icon: "Cpu",
    description: "Solid theoretical and practical foundations in algorithms, microservices, containerization, and CI/CD.",
    color: "amber",
    skills: [
      { name: "Data Structures, Algorithms & System Design", level: 92, tag: "Foundations" },
      { name: "Docker Containerization & Microservices", level: 88, tag: "DevOps" },
      { name: "Git Workflow, Branching Strategies & CI/CD Actions", level: 95, tag: "Workflow" },
      { name: "RESTful & GraphQL API Architecture", level: 94, tag: "Design" },
      { name: "Security, Rate Limiting & Token Tier Guardrails", level: 89, tag: "Hardening" }
    ]
  }
];

export const techBadges = [
  "Python", "FastAPI", "LangGraph", "n8n", "OpenAI API", "Claude 3.5 Sonnet",
  "React", "TypeScript", "Next.js", "Docker", "PostgreSQL", "Pinecone",
  "Supabase", "Redis", "Three.js", "Tailwind CSS", "Linux", "Git"
];
