import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Download, 
  MapPin, 
  Mail, 
  Github, 
  Linkedin, 
  Compass, 
  Terminal, 
  TrendingUp, 
  CheckCircle,
  FileText
} from 'lucide-react';
import { Language } from './types';
import { PERSONAL_INFO } from './data';

// Import newly created sub-components
import Header from './components/Header';
import ResumeTimeline from './components/ResumeTimeline';
import ProjectCard from './components/ProjectCard';
import SkillBar from './components/SkillBar';
import Guestbook from './components/Guestbook';
import ExportModal from './components/ExportModal';
import ProxyCacheDetail from './components/ProxyCacheDetail';
import DfsDetail from './components/DfsDetail';
import KvMemNetDetail from './components/KvMemNetDetail';

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    // Get stored locale or default to 'en'
    const stored = localStorage.getItem('jg_portfolio_lang');
    return (stored === 'zh' || stored === 'en') ? stored : 'en';
  });

  const [activeSection, setActiveSection] = useState('about');
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [currentView, setCurrentView] = useState<'portfolio' | 'proxy-cache-detail' | 'dfs-detail' | 'kv-mem-net-detail'>('portfolio');

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#/project/proxy-cache') {
        setCurrentView('proxy-cache-detail');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (window.location.hash === '#/project/dfs') {
        setCurrentView('dfs-detail');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else if (window.location.hash === '#/project/kv-mem') {
        setCurrentView('kv-mem-net-detail');
        window.scrollTo({ top: 0, behavior: 'instant' as any });
      } else {
        setCurrentView('portfolio');
      }
    };

    handleHashChange(); // Run initially
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // AWS Cloud Resume Challenge State Engine
  const [awsGateUrl, setAwsGateUrl] = useState(() => {
    return localStorage.getItem('aws_gate_url') || '';
  });
  const [visitorCount, setVisitorCount] = useState<number | null>(null);
  const [awsStatus, setAwsStatus] = useState<'pending' | 'online' | 'offline' | 'standby'>('standby');
  const [isEditingUrl, setIsEditingUrl] = useState(false);
  const [urlInput, setUrlInput] = useState(awsGateUrl);

  const fetchLiveCounter = async (url: string) => {
    if (!url || url.trim() === '') {
      setAwsStatus('standby');
      // Local seed based on greetings counts
      const storedGreetings = localStorage.getItem('jg_portfolio_greetings');
      const messagesCount = storedGreetings ? JSON.parse(storedGreetings).length : 0;
      setVisitorCount(248 + messagesCount * 5);
      return;
    }

    setAwsStatus('pending');
    try {
      const res = await fetch(url, { method: 'GET', mode: 'cors' });
      if (!res.ok) throw new Error('HTTP request failed');
      const data = await res.json();
      
      let count = 0;
      if (typeof data === 'number') {
        count = data;
      } else if (data && typeof data.count !== 'undefined') {
        count = Number(data.count);
      } else if (data && typeof data.visitors !== 'undefined') {
        count = Number(data.visitors);
      } else if (data && typeof data.body === 'string') {
        const bodyObj = JSON.parse(data.body);
        count = Number(bodyObj.count || bodyObj.visitors || 0);
      } else if (data && data.body && typeof data.body.count !== 'undefined') {
        count = Number(data.body.count);
      } else {
        // Try fallback parsing
        const firstVal = Object.values(data)[0];
        if (typeof firstVal === 'number') {
          count = firstVal;
        } else if (typeof firstVal === 'string' && !isNaN(Number(firstVal))) {
          count = Number(firstVal);
        } else {
          throw new Error('Metadata mismatch');
        }
      }

      setVisitorCount(count);
      setAwsStatus('online');
    } catch (err) {
      console.error('AWS Gateway live fetch error:', err);
      setAwsStatus('offline');
      // Smooth fallback to simulated counter so UI is never blank
      const storedGreetings = localStorage.getItem('jg_portfolio_greetings');
      const messagesCount = storedGreetings ? JSON.parse(storedGreetings).length : 0;
      setVisitorCount(248 + messagesCount * 5);
    }
  };

  useEffect(() => {
    async function updateCounter() {
      const counterElement = document.getElementById('counter');
      const apiUrl = "https://sxhyoqf9nf.execute-api.us-east-1.amazonaws.com/Prod/counter";

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (counterElement) {
          counterElement.innerHTML = data.views;
        }
        if (data && typeof data.views !== 'undefined') {
          setVisitorCount(Number(data.views));
          setAwsStatus('online');
        }
      } catch (error) {
        console.error("Error fetching counter:", error);
        if (counterElement) {
          counterElement.innerHTML = "Unavailable";
        }
      }
    }

    if (!awsGateUrl) {
      updateCounter();
    } else {
      fetchLiveCounter(awsGateUrl);
    }
  }, [awsGateUrl]);

  const handleSaveUrl = () => {
    const trimmed = urlInput.trim();
    localStorage.setItem('aws_gate_url', trimmed);
    setAwsGateUrl(trimmed);
    setIsEditingUrl(false);
  };

  const handleResetUrl = () => {
    localStorage.removeItem('aws_gate_url');
    setAwsGateUrl('');
    setUrlInput('');
    setIsEditingUrl(false);
  };

  // Save language selection changes
  useEffect(() => {
    localStorage.setItem('jg_portfolio_lang', lang);
  }, [lang]);

  // Section Interaction Tracking (scroll monitor)
  useEffect(() => {
    const sections = ['about', 'resume', 'projects', 'skills', 'guestbook'];
    
    const countIntersection = new Map<string, number>();
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            countIntersection.set(entry.target.id, entry.intersectionRatio);
          } else {
            countIntersection.delete(entry.target.id);
          }
        });

        // Find section with the highest intersection ratio
        let highestId = 'about';
        let highestVal = -1;
        countIntersection.forEach((val, id) => {
          if (val > highestVal) {
            highestVal = val;
            highestId = id;
          }
        });

        if (highestId) {
          setActiveSection(highestId);
        }
      },
      {
        root: null,
        rootMargin: '-20% 0px -40% 0px', // focused viewport offset
        threshold: [0, 0.25, 0.5, 0.75, 1.0]
      }
    );

    sections.forEach((sId) => {
      const el = document.getElementById(sId);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-slate-900 selection:text-white">
      
      {/* Structural Dotted Backplane */}
      <div className="absolute inset-0 tech-dot-grid pointer-events-none opacity-[0.45] z-0" />
      <div className="absolute inset-0 tech-grid-lines pointer-events-none opacity-[0.1] z-0" />

      {currentView === 'proxy-cache-detail' ? (
        <ProxyCacheDetail 
          lang={lang} 
          onBack={() => { window.location.hash = '#projects'; }} 
        />
      ) : currentView === 'dfs-detail' ? (
        <DfsDetail 
          lang={lang} 
          onBack={() => { window.location.hash = '#projects'; }} 
        />
      ) : currentView === 'kv-mem-net-detail' ? (
        <KvMemNetDetail 
          lang={lang} 
          onBack={() => { window.location.hash = '#projects'; }} 
        />
      ) : (
        /* Main Container Layering */
        <div className="relative z-10 flex flex-col min-h-screen">
          
          {/* Multilingual Nav Header */}
          <Header lang={lang} setLang={setLang} activeSection={activeSection} />

        {/* HERO / ABOUT SECTION */}
        <section 
          id="about" 
          className="scroll-mt-16 flex-grow flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200"
        >
          <div className="mx-auto max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* HERO LEFT: Text and profile headlines (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Vigor badge status */}
              <div className="inline-flex items-center gap-2 rounded-none border border-slate-900 bg-white px-3 py-1.5 font-mono text-xs font-bold text-slate-900 uppercase tracking-wider">
                <span className="flex h-2 w-2 rounded-none bg-slate-900 animate-pulse"></span>
                <span>{lang === 'zh' ? '欢迎光临我的数字工作室' : 'WELCOME TO MY BLUEPRINT'}</span>
              </div>

              {/* Title & Core Stack */}
              <div className="space-y-2">
                <h1 className="font-display text-5xl font-black leading-none tracking-tighter text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl uppercase">
                  {lang === 'zh' ? '管劼昊' : 'Jiehao Guan'}
                  <span className="block mt-4 font-mono text-base sm:text-lg font-bold tracking-widest text-slate-500 normal-case">
                    [ {PERSONAL_INFO.title[lang]} ]
                  </span>
                </h1>
              </div>

              {/* Detailed personal bio summary */}
              <p className="font-sans text-sm sm:text-base text-slate-650 leading-relaxed max-w-2xl font-medium">
                {PERSONAL_INFO.about[lang]}
              </p>

              {/* Interactive bento key bullet details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md pt-2">
                <div className="flex items-center gap-3 font-mono text-xs text-slate-700 bg-white border border-slate-300 p-3 rounded-none shadow-sm">
                  <MapPin className="h-4 w-4 text-slate-900" />
                  <div>
                    <span className="block text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">{lang === 'zh' ? '当前城市' : 'LOCATION'}</span>
                    <span className="font-bold text-slate-900">{PERSONAL_INFO.location[lang]}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 font-mono text-xs text-slate-700 bg-white border border-slate-300 p-3 rounded-none shadow-sm">
                  <Terminal className="h-4 w-4 text-slate-900" />
                  <div>
                    <span className="block text-[9px] text-slate-400 font-extrabold uppercase tracking-wider">{lang === 'zh' ? '云计算方向' : 'CLOUD FOCUS'}</span>
                    <span className="font-bold text-slate-900">{lang === 'zh' ? 'AWS / 自动化 DevOps' : 'AWS / DevOps Systems'}</span>
                  </div>
                </div>
              </div>

              {/* Dynamic Call To Actions Buttons Row */}
              <div className="flex flex-wrap items-center gap-3.5 pt-4">
                
                {/* Scroll downstream trigger button */}
                <button
                  onClick={() => {
                    const el = document.getElementById('projects');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flat-btn-primary flex items-center gap-1.5 cursor-pointer"
                  id="hero-view-works"
                >
                  <span>{lang === 'zh' ? '浏览精选项目集' : 'View Select Projects'}</span>
                  <ArrowUpRight className="h-4 w-4" />
                </button>

                {/* Instant modal launcher */}
                <button
                  onClick={() => setIsExportOpen(true)}
                  className="flat-btn-secondary flex items-center gap-1.5 cursor-pointer"
                  id="hero-export-modal-trigger"
                >
                  <Download className="h-4 w-4" />
                  <span>{lang === 'zh' ? '导出 / 打印简历' : 'Export / Print CV'}</span>
                </button>

                {/* GitHub Direct Link */}
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flat-btn-secondary flex items-center gap-1.5 cursor-pointer hover:border-slate-950 group"
                  id="hero-github-link"
                >
                  <Github className="h-4 w-4 text-slate-500 group-hover:text-slate-950 transition-colors" />
                  <span>GitHub</span>
                </a>

                {/* LinkedIn Direct Link */}
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flat-btn-secondary flex items-center gap-1.5 cursor-pointer hover:border-slate-950 group"
                  id="hero-linkedin-link"
                >
                  <Linkedin className="h-4 w-4 text-slate-500 group-hover:text-slate-950 transition-colors" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

            {/* HERO RIGHT: Tech Stack Blueprint Dashboard (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="absolute inset-0 bg-slate-300 rounded-none blur-sm opacity-50 transform rotate-1 scale-95 pointer-events-none"></div>
              
              {/* Nested Dashboard UI block */}
              <div className="relative rounded-none border-2 border-slate-900 bg-white p-6 shadow-[6px_6px_0px_0px_rgba(9,30,66,1)] overflow-hidden">
                
                {/* Border accent details representing tech vibe */}
                <div className="absolute top-0 left-0 right-0 h-[4px] bg-slate-900"></div>
                <div className="flex items-center justify-between border-b-2 border-slate-900 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="flex h-2 w-2 rounded-none bg-slate-900 animate-ping"></span>
                    <span className="font-mono text-[10px] font-black text-slate-900 uppercase tracking-widest">
                      AWS_SERVERLESS_CONSOLE
                    </span>
                  </div>
                  <span className="font-mono text-[9px] font-bold text-slate-500 bg-slate-150 px-1.5 py-0.5 rounded-none border border-slate-305 uppercase">
                    REGION: GLOBAL
                  </span>
                </div>

                {/* Micro tech metrics layout (Bento highlights) */}
                <div className="space-y-4">
                  
                  {/* Visitor stat segment */}
                  <div className="p-3.5 rounded-none bg-slate-950 text-white border border-slate-900 flex flex-col gap-2 relative overflow-hidden">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[9px] text-slate-400 font-extrabold uppercase tracking-wider leading-none">DYNAMODB VISITORS</span>
                      </div>
                      <div className="flex items-center gap-1.5 font-mono text-[9px] font-bold text-emerald-400 bg-emerald-950/50 border border-emerald-900 px-1.5 py-0.5 rounded-none">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>LIVE_SYNC</span>
                      </div>
                    </div>
                    
                    {/* Glowing LED meter display */}
                    <div className="flex items-center gap-1 py-1 font-mono text-xl sm:text-2xl font-black text-emerald-400 tracking-wider">
                      <span id="counter" className="px-4 py-1.5 bg-slate-900 border border-slate-800 text-center rounded-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)] font-mono text-xl sm:text-2xl font-black text-emerald-400 tracking-widest">
                        {visitorCount !== null ? visitorCount.toString().padStart(6, '0') : 'LOADING...'}
                      </span>
                    </div>
                  </div>

                  {/* Gateway Connectivity Route */}
                  <div className="p-3.5 rounded-none bg-slate-50 border border-slate-200 flex flex-col gap-2 hover:border-slate-900 transition-all duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="font-mono text-[9px] text-slate-400 font-extrabold uppercase tracking-wider leading-none font-sans">AWS GATEWAY STATUS</span>
                      </div>
                      <div>
                        {awsStatus === 'online' && (
                          <span className="inline-block px-1.5 py-0.5 text-[8px] font-mono font-black text-emerald-950 bg-emerald-100 border border-emerald-300 rounded-none uppercase">
                            ONLINE / LIVE
                          </span>
                        )}
                        {awsStatus === 'pending' && (
                          <span className="inline-block px-1.5 py-0.5 text-[8px] font-mono font-black text-amber-950 bg-amber-100 border border-amber-300 rounded-none uppercase font-sans">
                            CONTACTING...
                          </span>
                        )}
                        {awsStatus === 'standby' && (
                          <span className="inline-block px-1.5 py-0.5 text-[8px] font-mono font-black text-slate-800 bg-slate-100 border border-slate-300 rounded-none uppercase font-sans">
                            STANDBY (SIM)
                          </span>
                        )}
                        {awsStatus === 'offline' && (
                          <span className="inline-block px-1.5 py-0.5 text-[8px] font-mono font-black text-red-950 bg-red-100 border border-red-300 rounded-none uppercase font-sans">
                            FAIL / SYNC_OFF
                          </span>
                        )}
                      </div>
                    </div>

                    {/* API route custom input widget */}
                    <div className="pt-1.5">
                      {isEditingUrl ? (
                        <div className="space-y-1.5">
                          <input
                            type="text"
                            value={urlInput}
                            onChange={(e) => setUrlInput(e.target.value)}
                            placeholder="https://xxxxxx.execute-api..."
                            className="w-full font-mono text-[10px] text-slate-800 border-2 border-slate-900 px-2 py-1.5 bg-white tracking-tighter focus:outline-none"
                          />
                          <div className="flex items-center gap-1.5">
                            <button
                              onClick={handleSaveUrl}
                              className="px-2 py-1 bg-slate-900 text-white font-mono text-[9px] font-bold rounded-none hover:bg-slate-750 uppercase"
                            >
                              [ {lang === 'zh' ? '应用端点' : 'APPLY'} ]
                            </button>
                            <button
                              onClick={handleResetUrl}
                              className="px-2 py-1 bg-red-100 border border-red-350 text-red-900 font-mono text-[9px] font-bold rounded-none hover:bg-red-50 uppercase"
                            >
                              [ {lang === 'zh' ? '重置' : 'RESET'} ]
                            </button>
                            <button
                              onClick={() => {
                                setIsEditingUrl(false);
                                setUrlInput(awsGateUrl);
                              }}
                              className="px-2 py-1 bg-white border border-slate-300 text-slate-705 font-mono text-[9px] font-bold rounded-none hover:bg-slate-50 uppercase"
                            >
                              [ {lang === 'zh' ? '取消' : 'CANCEL'} ]
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between gap-2 bg-slate-100 p-2 border border-slate-205">
                          <div className="font-mono text-[10px] text-slate-500 truncate max-w-[200px] lowercase">
                            {awsGateUrl ? awsGateUrl : (lang === 'zh' ? '模拟模式：点击配置对接 AWS' : 'STANDBY MODE: SYNC INTERACTIVE')}
                          </div>
                          <button
                            onClick={() => setIsEditingUrl(true)}
                            className="font-mono text-[9px] font-extrabold text-slate-900 hover:underline uppercase shrink-0 focus:outline-none cursor-pointer"
                          >
                            [ {awsGateUrl ? (lang === 'zh' ? '配置' : 'CONFIG') : (lang === 'zh' ? '对接 AWS' : 'ACTIVATE')} ]
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bullet Highlights */}
                  <div className="space-y-2.5 pt-2 border-t border-slate-200">
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700">
                      <CheckCircle className="h-3.5 w-3.5 text-slate-900" />
                      <span>{lang === 'zh' ? '双通道 GitHub Actions 持续交付' : 'CI/CD: GITHUB ACTIONS ACTIVE'}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700">
                      <CheckCircle className="h-3.5 w-3.5 text-slate-900" />
                      <span>{lang === 'zh' ? 'Terraform 原生基础设施即代码' : 'INFRA: IACO Terraform COMPLIANT'}</span>
                    </div>
                    <div className="flex items-center gap-2 font-mono text-xs font-bold text-slate-700">
                      <CheckCircle className="h-3.5 w-3.5 text-slate-900" />
                      <span>{lang === 'zh' ? '本地、云端无缝缓存分布控制' : 'EDGE: S3 + CloudFront DISTRIBUTION'}</span>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        {/* COMBINED RESUME TIMELINE MODULE */}
        <ResumeTimeline lang={lang} />

        {/* FEATURED PROJECTS CLUSTER */}
        <ProjectCard lang={lang} />

        {/* DETAILED SKILLS DISTRIBUTION */}
        <SkillBar lang={lang} />

        {/* GUESTBOOK AND GREETINGS PANEL */}
        <Guestbook lang={lang} />

        {/* FOOTER RAILS */}
        <footer className="mt-auto border-t border-slate-200 bg-white py-10 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400 no-print">
          <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4">
            
            {/* Stamp info */}
            <div className="flex items-center gap-2 font-mono">
              <span className="h-2 w-2 rounded-full bg-blue-900"></span>
              <span>
                {PERSONAL_INFO.name[lang]} © {new Date().getFullYear()} • ALL RIGHTS RESERVED
              </span>
            </div>

            {/* Downstream links */}
            <div className="flex items-center gap-4 text-slate-400 text-xs font-medium">
              <button 
                onClick={() => setIsExportOpen(true)}
                className="hover:text-blue-900 flex items-center gap-1 font-mono hover:underline"
                id="footer-export-cv"
              >
                <FileText className="h-3 w-3" />
                <span>EXPORT_CV</span>
              </button>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-900 inline-flex items-center gap-1 hover:underline"
              >
                <Github className="h-3 w-3" />
                <span>GITHUB</span>
              </a>
              <span>•</span>
              <a 
                href={PERSONAL_INFO.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-900 inline-flex items-center gap-1 hover:underline"
              >
                <Linkedin className="h-3 w-3" />
                <span>LINKEDIN</span>
              </a>
            </div>

          </div>
        </footer>
      </div>
    )}

      {/* IMMERSIVE EXPORT MODAL PANEL */}
      <ExportModal 
        isOpen={isExportOpen} 
        onClose={() => setIsExportOpen(false)} 
        lang={lang} 
      />

    </div>
  );
}
