import React, { useState } from 'react';
import { 
  Zap, 
  Target, 
  BrainCircuit, 
  BarChart3, 
  Clock, 
  TrendingUp, 
  ShieldCheck,
  ChevronRight,
  Database,
  Users,
  Bot,
  Globe,
  X,
  Mail,
  Building,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { translations } from './translations';

const EarlyAccessModal = ({ isOpen, onClose, t }) => {
  const [submitted, setSubmitted] = useState(false);
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-dark/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-[2.5rem] w-full max-w-lg p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
        <button onClick={onClose} className="absolute top-6 right-6 p-2 hover:bg-slate-100 rounded-full transition-colors cursor-pointer">
          <X className="w-6 h-6 text-gray-400" />
        </button>
        
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-emerald-500" />
            </div>
            <h3 className="text-2xl font-bold font-heading text-dark mb-4">{t.modals.earlyAccess.success}</h3>
            <button onClick={onClose} className="text-primary font-bold hover:underline cursor-pointer">Close</button>
          </div>
        ) : (
          <>
            <h3 className="text-3xl font-bold font-heading text-dark mb-4">{t.modals.earlyAccess.title}</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">{t.modals.earlyAccess.subtitle}</p>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input required type="text" placeholder={t.modals.earlyAccess.name} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input required type="email" placeholder={t.modals.earlyAccess.email} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <div className="relative">
                <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input required type="text" placeholder={t.modals.earlyAccess.company} className="w-full pl-12 pr-4 py-4 bg-slate-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" />
              </div>
              <button type="submit" className="w-full bg-primary hover:bg-indigo-700 text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-indigo-100 transition-all transform hover:scale-[1.02] cursor-pointer">
                {t.modals.earlyAccess.submit}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

const ImmersiveCaseStudy = ({ isOpen, onClose, t }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-8">
      {/* Deep blurred backdrop */}
      <div className="absolute inset-0 bg-dark/40 backdrop-blur-[40px] animate-in fade-in duration-700" onClick={onClose}></div>
      
      {/* Editorial Card */}
      <div className="relative bg-white/90 rounded-[3rem] w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] flex flex-col md:flex-row animate-in zoom-in-95 duration-500">
        <button onClick={onClose} className="absolute top-8 right-8 z-10 p-3 hover:bg-slate-100 rounded-full transition-all group cursor-pointer">
          <X className="w-6 h-6 text-gray-400 group-hover:rotate-90 transition-transform" />
        </button>

        {/* Left Side: Context & Story */}
        <div className="md:w-1/2 p-10 md:p-20 overflow-y-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold mb-8 animate-in slide-in-from-bottom duration-700 delay-150">
            <Bot className="w-3 h-3" />
            <span>AI AGENT TRANSFORMATION</span>
          </div>
          
          <h3 className="text-4xl md:text-6xl font-bold font-heading text-dark mb-10 leading-tight animate-in slide-in-from-bottom duration-700 delay-300">
            {t.modals.caseStudy.title}
          </h3>

          <div className="space-y-12 animate-in slide-in-from-bottom duration-700 delay-500">
            <section>
              <h4 className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] mb-4">{t.modals.caseStudy.challenge}</h4>
              <p className="text-gray-600 leading-relaxed text-xl italic font-serif">"{t.modals.caseStudy.challengeText}"</p>
            </section>
            
            <section>
              <h4 className="text-xs font-black text-primary/40 uppercase tracking-[0.2em] mb-4">{t.modals.caseStudy.solution}</h4>
              <p className="text-gray-600 leading-relaxed text-lg">{t.modals.caseStudy.solutionText}</p>
            </section>
          </div>
        </div>

        {/* Right Side: High Impact Metrics */}
        <div className="md:w-1/2 bg-slate-50/50 p-10 md:p-20 flex flex-col justify-center border-l border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <h4 className="text-xs font-black text-dark/40 uppercase tracking-[0.2em] mb-12 text-center relative z-10">{t.modals.caseStudy.metrics}</h4>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            {t.modals.caseStudy.resultsList.map((res, i) => (
              <div key={i} className="group bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-dark font-bold text-lg leading-tight">{res}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-10 border-t border-slate-200 relative z-10 flex flex-col items-center">
            <p className="text-slate-400 text-sm mb-6 font-medium">{t.modals.caseStudy.footer}</p>
            <button onClick={onClose} className="bg-primary hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-2xl shadow-indigo-200 transition-all transform hover:scale-105 active:scale-95 cursor-pointer w-full">
              Get Your Custom Roadmap <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardMockup = ({ t }) => {
  const [activeTab, setActiveTab] = useState('leads');

  return (
    <div className="mt-16 relative group">
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-secondary/20 rounded-full blur-[100px] opacity-50 group-hover:opacity-80 transition-opacity"></div>

      <div className="relative bg-white/40 backdrop-blur-2xl border border-white/40 rounded-[2rem] p-3 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="bg-slate-900/90 rounded-[1.5rem] overflow-hidden flex flex-col h-[550px] shadow-2xl">
          
          <div className="flex items-center justify-between px-8 py-6 border-b border-white/5 bg-white/5">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_12px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_12px_rgba(245,158,11,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
              </div>
              <div className="h-4 w-px bg-white/10 mx-2"></div>
              <nav className="flex gap-1 bg-white/5 p-1 rounded-xl">
                {[
                  { id: 'leads', label: t.dashboard.tabs.monitoring, icon: <Bot className="w-4 h-4" /> },
                  { id: 'strategy', label: t.dashboard.tabs.strategy, icon: <Target className="w-4 h-4" /> },
                  { id: 'stats', label: t.dashboard.tabs.stats, icon: <TrendingUp className="w-4 h-4" /> }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeTab === tab.id 
                      ? 'bg-white text-dark shadow-xl scale-105' 
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tab.icon}
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-slate-900 bg-slate-700"></div>)}
              </div>
              <span className="text-[10px] font-bold text-white/40">{t.dashboard.activeAgents}</span>
            </div>
          </div>

          <div className="flex-1 p-8 overflow-hidden relative">
            <div className={`transition-all duration-500 h-full ${activeTab === 'leads' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute inset-0 pointer-events-none'}`}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 h-full">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <h3 className="text-white font-bold text-xl mb-1">{t.dashboard.leads.title}</h3>
                      <p className="text-white/40 text-xs">{t.dashboard.leads.subtitle}</p>
                    </div>
                    <span className="text-emerald-400 text-xs font-mono animate-pulse">{t.dashboard.leads.statusLive}</span>
                  </div>
                  {t.dashboard.leads.items.map((lead, i) => (
                    <div key={i} className="group/item bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl p-5 transition-all cursor-pointer flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center border border-white/10 group-hover/item:border-primary/50 transition-colors`}>
                          <span className="text-white font-bold">{lead.name[0]}</span>
                        </div>
                        <div>
                          <h4 className="text-white font-bold text-sm">{lead.name}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`w-1.5 h-1.5 rounded-full bg-current ${lead.color} animate-ping`}></span>
                            <span className={`text-[10px] font-bold uppercase tracking-wider ${lead.color}`}>{lead.status}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white/80 font-mono text-sm mb-1">{lead.action}</div>
                        <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-1000" style={{ width: `${90 - i * 10}%` }}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="lg:col-span-5 bg-gradient-to-br from-white/5 to-transparent rounded-[2rem] border border-white/10 p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/20 rounded-lg"><BrainCircuit className="w-4 h-4 text-primary" /></div>
                    <span className="text-white font-bold text-sm">{t.dashboard.neural.title}</span>
                  </div>
                  <div className="flex-1 space-y-4 font-mono text-[10px] leading-relaxed">
                    <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                      <span className="opacity-50">09:42:01</span> {t.dashboard.neural.log1}
                    </div>
                    <div className="p-3 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300">
                      <span className="opacity-50">09:42:05</span> {t.dashboard.neural.log2}
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/40 uppercase tracking-widest text-[8px]">{t.dashboard.neural.probLabel}</span>
                        <span className="text-emerald-400 font-bold">89.4% {t.dashboard.neural.success}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(20)].map((_, i) => (
                          <div key={i} className={`h-8 flex-1 rounded-sm ${i < 16 ? 'bg-primary' : 'bg-white/5'} animate-pulse`} style={{ animationDelay: `${i * 50}ms` }}></div>
                        ))}
                      </div>
                    </div>
                    <div className="flex-1 flex items-center justify-center opacity-20 italic text-white text-center px-8">
                       "{t.dashboard.neural.thinking}"
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-500 h-full ${activeTab === 'strategy' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute inset-0 pointer-events-none'}`}>
               <div className="flex flex-col items-center justify-center h-full text-center space-y-6">
                  <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center animate-bounce">
                    <Target className="w-12 h-12 text-primary" />
                  </div>
                  <h3 className="text-white font-bold text-2xl">{t.dashboard.strategy.title}</h3>
                  <p className="text-white/40 max-w-sm text-sm">{t.dashboard.strategy.desc}</p>
                  <div className="grid grid-cols-3 gap-8 w-full max-w-lg mt-8">
                     {t.dashboard.strategy.steps.map((step, i) => (
                       <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
                          <div className="text-primary font-bold mb-2">0{i+1}</div>
                          <div className="text-white text-xs font-bold">{step}</div>
                       </div>
                     ))}
                  </div>
               </div>
            </div>

            <div className={`transition-all duration-500 h-full ${activeTab === 'stats' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 absolute inset-0 pointer-events-none'}`}>
               <div className="grid grid-cols-2 gap-6 h-full p-4">
                  {t.dashboard.stats.map((s, i) => (
                    <div key={i} className="bg-white/5 rounded-[2rem] border border-white/5 p-8 flex flex-col justify-center items-center group/card transition-all hover:bg-white/10">
                       <span className="text-white/40 text-xs font-bold mb-2 uppercase tracking-widest">{s.label}</span>
                       <span className="text-4xl font-bold text-white group-hover/card:scale-110 transition-transform">{s.val}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>

          <div className="h-10 bg-black/40 border-t border-white/5 px-8 flex items-center justify-between text-[10px] text-white/40 font-mono">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> {t.dashboard.statusBar.stable}</span>
              <span>{t.dashboard.statusBar.memory} 14.2GB / 128GB</span>
            </div>
            <div className="flex items-center gap-2">
              <span>{t.dashboard.statusBar.tokens}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navbar = ({ lang, setLang, t, onShowModal }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-2">
          <Bot className="w-8 h-8 text-primary" />
          <span className="text-xl font-bold font-heading text-dark tracking-tight">SalesAgent AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">{t.nav.features}</a>
          <a href="#impact" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">{t.nav.impact}</a>
          <a href="#how-it-works" className="text-sm font-medium text-gray-600 hover:text-primary transition-colors">{t.nav.technology}</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-primary transition-colors px-3 py-1 rounded-lg border border-gray-200 hover:border-primary cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button 
            onClick={onShowModal}
            className="bg-cta hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-emerald-200"
          >
            {t.nav.bookDemo}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = ({ t, onShowModal, onShowDrawer }) => (
  <section className="pt-32 pb-20 px-4 bg-gradient-to-b from-white to-background">
    <div className="max-w-7xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold mb-6 animate-pulse">
        <Zap className="w-3 h-3" />
        <span>{t.hero.badge}</span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold font-heading text-dark mb-6 leading-tight">
        {t.hero.title} <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">{t.hero.titleAccent}</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10 font-body">
        {t.hero.desc}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={onShowModal}
          className="bg-primary hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2 cursor-pointer"
        >
          {t.hero.ctaStart} <ChevronRight className="w-5 h-5" />
        </button>
        <button 
          onClick={onShowDrawer}
          className="bg-white border border-gray-200 text-dark hover:border-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
        >
          {t.hero.ctaCase}
        </button>
      </div>
      
      <DashboardMockup t={t} />
    </div>
  </section>
);

const Impact = ({ t }) => {
  const iconMap = [
    <Clock className="text-blue-500" />,
    <Target className="text-emerald-500" />,
    <Users className="text-purple-500" />,
    <TrendingUp className="text-orange-500" />
  ];

  return (
    <section id="impact" className="py-20 px-4 bg-dark text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-heading mb-4">{t.impact.title}</h2>
          <p className="text-gray-400 max-w-xl mx-auto">{t.impact.desc}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.impact.stats.map((stat, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-white/30 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[i]}
              </div>
              <p className="text-gray-400 text-sm mb-2">{stat.label}</p>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-bold font-heading">{stat.after}</span>
                <span className="text-xs text-emerald-400 font-bold">{stat.sub}</span>
              </div>
              <p className="text-xs text-gray-500">vs {stat.before}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = ({ t }) => {
  const iconMap = [
    <Users className="w-6 h-6" />,
    <BrainCircuit className="w-6 h-6" />,
    <Zap className="w-6 h-6" />,
    <ShieldCheck className="w-6 h-6" />
  ];
  const colorMap = [
    "bg-blue-50 text-blue-600",
    "bg-indigo-50 text-indigo-600",
    "bg-emerald-50 text-emerald-600",
    "bg-orange-50 text-orange-600"
  ];

  return (
    <section id="features" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-dark mb-6 leading-tight">
              {t.features.title} <br />
              <span className="text-primary">{t.features.titleAccent}</span>
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              {t.features.desc}
            </p>
            <div className="space-y-6">
              {t.features.agents.map((agent, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${colorMap[i]}`}>
                    {iconMap[i]}
                  </div>
                  <div>
                    <h3 className="font-bold font-heading text-dark text-lg">{agent.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{agent.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
             <div className="relative p-8 bg-background rounded-3xl border border-indigo-100 shadow-xl overflow-hidden min-h-[400px] flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary rounded-lg text-white shadow-lg shadow-indigo-200 animate-pulse">
                      <Database className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-bold text-dark block text-sm">{t.features.crmStatus}</span>
                      <span className="text-[10px] text-emerald-500 font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                        {t.features.crmSync}
                      </span>
                    </div>
                  </div>
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full border-2 border-white bg-slate-200"></div>)}
                  </div>
                </div>

                <div className="space-y-4 flex-1">
                  {t.features.crmLeads.map((lead, i) => (
                    <div key={i} className="group flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 hover:border-primary/30 transition-all hover:shadow-md cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary font-bold text-xs border border-slate-100">
                          {lead.name[0]}
                        </div>
                        <div>
                          <p className="font-bold text-xs text-dark">{lead.name} · <span className="text-gray-400 font-medium">{lead.company}</span></p>
                          <p className="text-[10px] text-gray-400">{lead.time}</p>
                        </div>
                      </div>
                      <div className="px-2 py-1 rounded-md bg-indigo-50 text-primary text-[9px] font-bold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                        {lead.action}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-indigo-50 flex items-center justify-between">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                      <span className="text-[11px] text-gray-500 font-medium">{t.features.analysis} <strong className="text-dark">{t.features.intent}</strong></span>
                   </div>
                   <div className="px-3 py-1 bg-emerald-500 text-white text-[10px] font-bold rounded-lg shadow-md shadow-emerald-100">
                      {t.features.action}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = ({ t }) => (
  <section className="py-20 px-4">
    <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-300">
      <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
      <div className="relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">{t.cta.title}</h2>
        <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg">{t.cta.desc}</p>
        <button className="bg-white text-primary hover:bg-indigo-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl cursor-pointer">
          {t.cta.button}
        </button>
      </div>
    </div>
  </section>
);

const Footer = ({ t }) => (
  <footer className="py-12 px-4 border-t border-gray-200">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Bot className="w-6 h-6 text-primary" />
        <span className="text-lg font-bold font-heading text-dark tracking-tight">SalesAgent AI</span>
      </div>
      <div className="flex gap-8 text-sm text-gray-500">
        <a href="#" className="hover:text-primary transition-colors">{t.footer.privacy}</a>
        <a href="#" className="hover:text-primary transition-colors">{t.footer.terms}</a>
        <a href="#" className="hover:text-primary transition-colors">{t.footer.docs}</a>
      </div>
      <p className="text-sm text-gray-400">{t.footer.rights}</p>
    </div>
  </footer>
);

function App() {
  const [lang, setLang] = useState('zh');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background font-body text-dark selection:bg-primary/20">
      <Navbar lang={lang} setLang={setLang} t={t} onShowModal={() => setIsModalOpen(true)} />
      <Hero t={t} onShowModal={() => setIsModalOpen(true)} onShowDrawer={() => setIsDrawerOpen(true)} />
      <Impact t={t} />
      <Features t={t} />
      
      {/* Final CTA with modal trigger */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto bg-primary rounded-[2.5rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-300">
          <div className="absolute top-0 right-0 p-20 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6">{t.cta.title}</h2>
            <p className="text-indigo-100 mb-10 max-w-xl mx-auto text-lg">{t.cta.desc}</p>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-white text-primary hover:bg-indigo-50 px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-xl cursor-pointer"
            >
              {t.cta.button}
            </button>
          </div>
        </div>
      </section>

      <Footer t={t} />

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} t={t} />
      <ImmersiveCaseStudy isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} t={t} />
    </div>
  );
}

export default App;
