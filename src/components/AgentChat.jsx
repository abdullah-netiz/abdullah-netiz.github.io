import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Sparkles, Terminal, User, RefreshCw, CheckCircle2, ChevronRight } from 'lucide-react';

const presetQueries = [
  "What is your experience with n8n and AI automation?",
  "Tell me about your Agentic AI and multi-agent projects.",
  "What tech stack do you build SaaS applications with?",
  "Are you available for freelance projects or SWE internships?"
];

const knowledgeBase = {
  "n8n": {
    tools: ["fetch_n8n_registry()", "parse_enterprise_metrics()"],
    response: "I specialize in architecting production n8n workflows integrated with LLM endpoints (OpenAI, Claude, open-source models). I've deployed over 25 enterprise automations managing document intelligence (OCR invoices, contracts), automated customer triage, and multi-system synchronization across PostgreSQL, Stripe, and Slack. My focus is on fault-tolerant systems with retry queues, idempotency, and human-in-the-loop fallback."
  },
  "agentic": {
    tools: ["inspect_langgraph_nodes()", "fetch_agentforge_repo()"],
    response: "In the Agentic AI space, I build multi-agent systems using frameworks like LangGraph, CrewAI, and AutoGen. My flagship system, AgentForge, coordinates specialized agent personas (Researcher, Critic, Synthesizer) with cyclical state graphs, sandboxed tool execution, and vector memory retrieval (Pinecone & ChromaDB) to accomplish multi-step goals with a 98.7% task completion rate."
  },
  "saas": {
    tools: ["analyze_stack_config()", "query_docker_compose()"],
    response: "For SaaS engineering, I use React 18 / Next.js (TypeScript) paired with high-performance backends in FastAPI or Node.js. On the persistence and caching side, I rely on PostgreSQL (often Supabase with RLS) and Redis. I containerize applications with Docker, implement Stripe recurring billing, and craft responsive, 60fps UIs with Tailwind CSS and Three.js."
  },
  "internships": {
    tools: ["check_calendar_availability()", "fetch_student_status()"],
    response: "Yes! As a Software Engineering student passionate about pushing the boundaries of AI agents and scalable SaaS, I am actively open to SWE internships, AI engineering roles, and selective contract automation projects. Feel free to use the contact form below or reach out via LinkedIn or email!"
  },
  "default": {
    tools: ["vector_search(query)", "synthesize_context()"],
    response: "As a Software Engineering student specializing in Web Development with AI, AI Automation, n8n, SaaS, and Agentic AI, I bridge cutting-edge LLM reasoning with production software engineering. Explore my live projects above, test the interactive n8n simulator, or scroll down to get in touch!"
  }
};

export default function AgentChat() {
  const [messages, setMessages] = useState([
    {
      sender: "agent",
      text: "Greetings! I am Abdullah's AI Twin. Ask me anything about his skills in Agentic AI, n8n automations, SaaS engineering, or projects.",
      thought: "Autonomous agent initialized with student portfolio context."
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim() || isTyping) return;

    // Add user message
    const newMessages = [...messages, { sender: "user", text: query }];
    setMessages(newMessages);
    setInputValue("");
    setIsTyping(true);

    // Determine matching knowledge
    const lower = query.toLowerCase();
    let match = knowledgeBase.default;
    if (lower.includes("n8n") || lower.includes("automation") || lower.includes("workflow")) {
      match = knowledgeBase.n8n;
    } else if (lower.includes("agent") || lower.includes("multi-agent") || lower.includes("langgraph")) {
      match = knowledgeBase.agentic;
    } else if (lower.includes("saas") || lower.includes("stack") || lower.includes("tech") || lower.includes("web")) {
      match = knowledgeBase.saas;
    } else if (lower.includes("hire") || lower.includes("internship") || lower.includes("available") || lower.includes("freelance")) {
      match = knowledgeBase.internships;
    }

    // Simulate Agent Tool Call & Streaming response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "agent",
          text: match.response,
          thought: `[Executed Tools: ${match.tools.join(" → ")}] Retrieved high confidence context.`
        }
      ]);
      setIsTyping(false);
    }, 900);
  };

  const handleResetChat = () => {
    setMessages([
      {
        sender: "agent",
        text: "Greetings! I am Abdullah's AI Twin. Ask me anything about his skills in Agentic AI, n8n automations, SaaS engineering, or projects.",
        thought: "Agent state reset to baseline."
      }
    ]);
  };

  return (
    <section id="ai-twin" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-xs font-mono text-purple-300 mb-3">
          <Bot className="w-3.5 h-3.5" />
          <span>Interactive AI Twin Terminal</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Chat With My <span className="text-gradient-neon">AI Twin</span>
        </h2>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Ask questions to explore my tech stack, workflow designs, experience, or availability. Responses are simulated using real project data.
        </p>
      </div>

      {/* Terminal Container */}
      <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
        {/* Terminal Titlebar */}
        <div className="bg-[#090D18] px-5 py-3.5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1.5 ml-2">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              abdullah-ai-agent@portfolio:~
            </span>
          </div>

          <button
            onClick={handleResetChat}
            className="text-xs font-mono text-slate-400 hover:text-white flex items-center gap-1.5 px-2.5 py-1 rounded-lg hover:bg-white/5 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset State</span>
          </button>
        </div>

        {/* Quick Suggestion Chips */}
        <div className="bg-[#070A14] px-4 py-2.5 border-b border-white/5 flex items-center gap-2 overflow-x-auto text-xs">
          <span className="text-[11px] font-mono text-slate-400 whitespace-nowrap">Suggested:</span>
          {presetQueries.map((preset, i) => (
            <button
              key={i}
              onClick={() => handleSend(preset)}
              disabled={isTyping}
              className="whitespace-nowrap px-3 py-1 rounded-full bg-white/5 hover:bg-cyan-950/50 hover:text-cyan-300 text-slate-300 border border-white/10 text-xs transition-colors"
            >
              {preset}
            </button>
          ))}
        </div>

        {/* Message Stream Box */}
        <div className="p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-4 bg-[#05070E]/90 font-sans">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex flex-col ${msg.sender === "user" ? "items-end" : "items-start"}`}
            >
              <div
                className={`flex gap-3 max-w-xl ${
                  msg.sender === "user"
                    ? "bg-cyan-500 text-black font-medium rounded-2xl rounded-tr-none px-4 py-3"
                    : "glass-card text-slate-200 rounded-2xl rounded-tl-none p-4 border border-white/10"
                }`}
              >
                {msg.sender === "agent" && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                )}

                <div className="space-y-2">
                  <p className="text-sm leading-relaxed">{msg.text}</p>
                  {msg.thought && (
                    <div className="mt-2 pt-2 border-t border-white/10 font-mono text-[11px] text-cyan-400 flex items-center gap-1.5">
                      <ChevronRight className="w-3 h-3 shrink-0" />
                      <span className="italic">{msg.thought}</span>
                    </div>
                  )}
                </div>

                {msg.sender === "user" && (
                  <div className="w-7 h-7 rounded-lg bg-black/30 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Bot className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="glass-card px-4 py-3 rounded-2xl rounded-tl-none border border-cyan-500/30 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-purple-400 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-pink-400 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs font-mono text-slate-400 ml-2">Agent reasoning &amp; querying memory...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="p-3 bg-[#080C16] border-t border-white/10 flex items-center gap-2"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about my AI agent architectures, n8n automations, or SaaS projects..."
            disabled={isTyping}
            className="flex-1 bg-black/50 border border-white/10 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 text-sm text-white px-4 py-3 rounded-xl placeholder:text-slate-500 font-sans"
          />
          <button
            type="submit"
            disabled={!inputValue.trim() || isTyping}
            className="p-3 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black disabled:opacity-40 disabled:cursor-not-allowed transition-all font-semibold"
            aria-label="Send message"
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
}
