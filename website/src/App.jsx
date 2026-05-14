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
  Globe
} from 'lucide-react';
import { translations } from './translations';

const Navbar = ({ lang, setLang, t }) => (
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
          <button className="bg-cta hover:bg-emerald-600 text-white px-5 py-2 rounded-full text-sm font-bold transition-all transform hover:scale-105 cursor-pointer shadow-lg shadow-emerald-200">
            {t.nav.bookDemo}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = ({ t }) => (
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
        <button className="bg-primary hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-indigo-100 flex items-center justify-center gap-2 cursor-pointer">
          {t.hero.ctaStart} <ChevronRight className="w-5 h-5" />
        </button>
        <button className="bg-white border border-gray-200 text-dark hover:border-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center justify-center gap-2 cursor-pointer">
          {t.hero.ctaCase}
        </button>
      </div>
      
      <div className="mt-16 relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20"></div>
        <div className="relative bg-white border border-gray-100 rounded-2xl p-4 shadow-2xl">
           <div className="aspect-[16/9] bg-slate-50 rounded-xl border border-dashed border-gray-200 flex items-center justify-center">
              <div className="flex flex-col items-center gap-4 text-gray-400">
                <BarChart3 className="w-16 h-16 opacity-50" />
                <p className="font-heading font-medium">{t.hero.dashboard}</p>
              </div>
           </div>
        </div>
      </div>
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
             <div className="relative p-8 bg-background rounded-3xl border border-indigo-100 shadow-xl overflow-hidden">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-2 bg-primary rounded-lg text-white"><Database className="w-5 h-5" /></div>
                  <span className="font-bold text-dark">{t.features.crmStatus}</span>
                </div>
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="flex items-center justify-between p-4 bg-white rounded-xl border border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-slate-100"></div>
                        <div>
                          <div className="h-3 w-24 bg-slate-100 rounded mb-1"></div>
                          <div className="h-2 w-16 bg-slate-50 rounded"></div>
                        </div>
                      </div>
                      <div className="h-2 w-12 bg-emerald-100 rounded-full"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-indigo-50">
                   <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500 italic">{t.features.analysis} <strong>{t.features.intent}</strong></span>
                      <span className="text-primary font-bold">{t.features.action}</span>
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
  const t = translations[lang];

  return (
    <div className="min-h-screen bg-background font-body text-dark selection:bg-primary/20">
      <Navbar lang={lang} setLang={setLang} t={t} />
      <Hero t={t} />
      <Impact t={t} />
      <Features t={t} />
      <CTA t={t} />
      <Footer t={t} />
    </div>
  );
}

export default App;
