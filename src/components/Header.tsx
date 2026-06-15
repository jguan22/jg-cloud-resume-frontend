import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe, Copy, Check, Clock, Github, Linkedin } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO } from '../data';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  activeSection: string;
}

export default function Header({ lang, setLang, activeSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');

  // Update timezone-based tech clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to HH:MM:SS with a techy look
      const tStr = now.toLocaleTimeString(lang === 'zh' ? 'zh-CN' : 'en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });
      setCurrentTime(tStr);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, [lang]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navItems = [
    { id: 'about', label: { zh: '关于我', en: 'About' } },
    { id: 'resume', label: { zh: '履历详情', en: 'Resume' } },
    { id: 'projects', label: { zh: '甄选作品', en: 'Projects' } },
    { id: 'skills', label: { zh: '专业技能', en: 'Skills' } },
    { id: 'guestbook', label: { zh: '访客互动', en: 'Guestbook' } },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md no-print">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo / Identity */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-none border border-slate-900 bg-slate-900 font-mono text-sm font-black text-white">
            JG
          </div>
          <div>
            <div className="font-display text-sm font-extrabold tracking-tight text-slate-900 uppercase">
              {PERSONAL_INFO.name[lang]}
            </div>
            <div className="flex items-center gap-1.5 font-mono text-[10px] text-slate-500 uppercase tracking-widest">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-900 opacity-75"></span>
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-blue-950"></span>
              </span>
              <span>{PERSONAL_INFO.status[lang]}</span>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-250 ${
                  isActive ? 'text-slate-900 font-black' : 'text-slate-400 hover:text-slate-900'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label[lang]}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-3 right-3 h-[3px] bg-slate-900"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Widgets */}
        <div className="hidden lg:flex items-center gap-3 border-l border-slate-200 pl-4">
          {/* Tech Live Clock */}
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-600 bg-slate-100 px-2.5 py-1.5 rounded-none border border-slate-350">
            <Clock className="h-3.5 w-3.5 stroke-[2.5] text-slate-500" />
            <span className="font-bold tracking-wider">{currentTime || '00:00:00'}</span>
          </div>

          {/* Quick Copy Email */}
          <button
            onClick={copyEmail}
            className="group flex items-center gap-1.5 rounded-none border border-slate-350 bg-white px-3 py-1.5 font-mono text-xs text-slate-700 hover:border-slate-900 hover:bg-slate-50 transition-all duration-200"
            title="点击复制邮箱"
            id="copy-email-desktop"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-slate-900" />
            ) : (
              <Copy className="h-3.5 w-3.5 text-slate-400 group-hover:text-slate-900 transition-colors" />
            )}
            <span className="font-bold">{copied ? (lang === 'zh' ? '已复制!' : 'COPIED!') : PERSONAL_INFO.email}</span>
          </button>

          {/* Lang Switcher */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="flex items-center gap-1 rounded-none border border-slate-350 bg-white px-2.5 py-1.5 text-xs font-bold font-mono text-slate-700 hover:border-slate-900 hover:bg-slate-50 transition-colors cursor-pointer"
            id="lang-toggle-desktop"
          >
            <Globe className="h-3.5 w-3.5 text-slate-400" />
            <span>{lang === 'zh' ? 'EN' : 'ZH'}</span>
          </button>

          {/* Social Links */}
          <span className="h-4 w-px bg-slate-300 mx-1"></span>
          
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-none border border-slate-350 bg-white hover:border-slate-900 text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
            title="GitHub"
            id="header-github-desktop"
          >
            <Github className="h-3.5 w-3.5" />
          </a>

          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-2 rounded-none border border-slate-350 bg-white hover:border-slate-900 text-slate-500 hover:text-slate-900 transition-all cursor-pointer"
            title="LinkedIn"
            id="header-linkedin-desktop"
          >
            <Linkedin className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile controls bar (Lang + menu) */}
        <div className="flex items-center gap-2 md:hidden">
          {/* Email Fast Copy (Mobile Icon) */}
          <button
            onClick={copyEmail}
            className="p-2 rounded-none border border-slate-300 bg-white hover:border-slate-950"
            id="copy-email-mobile"
          >
            {copied ? (
              <Check className="h-4 w-4 text-slate-900" />
            ) : (
              <Copy className="h-4 w-4 text-slate-500" />
            )}
          </button>

          {/* Lang switch icon */}
          <button
            onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
            className="p-2 rounded-none border border-slate-300 bg-white hover:border-slate-950 flex items-center justify-center font-mono text-[10px] font-bold"
            id="lang-toggle-mobile"
          >
            {lang === 'zh' ? 'EN' : '中'}
          </button>

          {/* Hamburger menu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-none border border-slate-300 bg-white text-slate-705 hover:border-slate-950 focus:outline-none"
            id="mobile-menu-trigger"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 bg-white overflow-hidden"
          >
            <div className="space-y-1 px-4 py-3 pb-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left rounded-none px-4 py-2.5 text-xs font-bold tracking-wider uppercase transition-colors ${
                      isActive
                        ? 'bg-slate-100 text-slate-900 border-l-4 border-slate-900'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {item.label[lang]}
                  </button>
                );
              })}
              <div className="pt-3 border-t border-slate-200 mt-2 flex items-center justify-center gap-4">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-none border border-slate-300 px-3 py-1.5 font-mono text-xs text-slate-600 hover:text-slate-950 hover:border-slate-950 uppercase"
                >
                  <Github className="h-4 w-4" />
                  <span>GitHub</span>
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-none border border-slate-300 px-3 py-1.5 font-mono text-xs text-slate-600 hover:text-slate-950 hover:border-slate-950 uppercase"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </a>
              </div>

              <div className="pt-2.5 border-t border-slate-200 mt-2 font-mono text-[10px] text-slate-400 flex justify-between items-center px-2">
                <span>TIME: {currentTime || '00:00:00'}</span>
                <span>{PERSONAL_INFO.location[lang]}</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
