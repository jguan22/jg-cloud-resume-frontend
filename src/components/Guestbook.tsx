import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Copy, Check, MessageSquare, Linkedin, Github, Mail, User, ShieldCheck } from 'lucide-react';
import { VisitorMessage, Language } from '../types';
import { PERSONAL_INFO } from '../data';

interface GuestbookProps {
  lang: Language;
}

const BADGE_COLORS = [
  'bg-blue-50 border-blue-200 text-blue-900',
  'bg-emerald-50 border-emerald-200 text-emerald-900',
  'bg-indigo-50 border-indigo-200 text-indigo-900',
  'bg-slate-50 border-slate-200 text-slate-800'
];

export default function Guestbook({ lang }: GuestbookProps) {
  const [messages, setMessages] = useState<VisitorMessage[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [message, setMessage] = useState('');
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Load initial preset message list and local storage messages
  useEffect(() => {
    const defaultMessages: VisitorMessage[] = [];

    const stored = localStorage.getItem('jg_portfolio_greetings');
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as VisitorMessage[];
        // Combine preset and stored
        setMessages([...defaultMessages, ...parsed]);
      } catch (e) {
        setMessages(defaultMessages);
      }
    } else {
      setMessages(defaultMessages);
    }
  }, [lang]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || !email.trim()) return;

    // Validate email layout
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) return;

    const date = new Date();
    const formattedDate = date.toISOString().slice(0, 16).replace('T', ' ');

    const newMsg: VisitorMessage = {
      id: 'usr_' + Date.now().toString(),
      name: name.trim(),
      email: email.trim(),
      company: company.trim() ? company.trim() : undefined,
      message: message.trim(),
      timestamp: formattedDate,
      badgeColor: BADGE_COLORS[selectedColorIdx]
    };

    const currentStoredStr = localStorage.getItem('jg_portfolio_greetings');
    let currentStored: VisitorMessage[] = [];
    if (currentStoredStr) {
      try {
        currentStored = JSON.parse(currentStoredStr);
      } catch (e) {}
    }

    const updatedStored = [newMsg, ...currentStored];
    localStorage.setItem('jg_portfolio_greetings', JSON.stringify(updatedStored));

    // Instant append dynamically to state (keep default messages on top then stored on top?)
    // Let's filter out presets and insert the new user message at the beginning of stored list
    setMessages(prev => {
      // Find preset list of IDs
      const presets = prev.filter(m => m.id.startsWith('preset'));
      const userStored = prev.filter(m => !m.id.startsWith('preset'));
      return [...presets, newMsg, ...userStored];
    });

    // Reset fields
    setName('');
    setEmail('');
    setCompany('');
    setMessage('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="guestbook" className="scroll-mt-12 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-slate-100/50">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-widest text-slate-900 mb-2 flex items-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5 text-slate-900 animate-pulse" />
              <span>{lang === 'zh' ? '随时告知您的来意' : 'Leave your coordinates here'}</span>
            </div>
            <h2 className="font-display text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl uppercase">
              {lang === 'zh' ? '联系与访客互动' : 'Guestbook & Communication'}
            </h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-slate-500 max-w-sm md:text-right font-bold uppercase tracking-wider">
            {lang === 'zh' 
              ? '欢迎在此留下建议或您的职业联络坐标，它将实时被缓存在系统留言墙上。'
              : 'Write direct logs into my browser timeline to explore shared cooperations.'}
          </div>
        </div>

        {/* Form & Ledger Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Connect details and Submission Form (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick social card contacts */}
            <div className="rounded-none border border-slate-300 bg-white p-6 shadow-sm">
              <h3 className="font-mono text-xs font-black text-slate-900 mb-4 uppercase tracking-widest border-b border-slate-200 pb-2">
                // {lang === 'zh' ? '专业联络坐标' : 'Direct Channels'}
              </h3>
              
              <div className="space-y-3.5">
                {/* Email container */}
                <div className="flex items-center justify-between p-2.5 rounded-none bg-slate-50 border border-slate-300 font-mono text-xs">
                  <div className="flex items-center gap-2 text-slate-600 font-bold uppercase">
                    <Mail className="h-4 w-4 text-slate-900" />
                    <span>EMAIL</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-slate-950 font-black">{PERSONAL_INFO.email}</span>
                    <button 
                      onClick={copyEmail}
                      className="p-1 hover:bg-slate-200 rounded-none text-slate-500 hover:text-slate-900 transition-colors"
                      title={lang === 'zh' ? '复制邮箱' : 'Copy Email'}
                      id="copy-email-box"
                    >
                      {copiedEmail ? <Check className="h-3.5 w-3.5 text-slate-900" /> : <Copy className="h-3.5 w-3.5" />}
                    </button>
                  </div>
                </div>

                {/* LinkedIn container */}
                <a 
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-none bg-slate-50 border border-slate-300 font-mono text-xs text-slate-600 hover:border-slate-900 hover:bg-slate-100 transition-all group"
                  id="linkedin-link"
                >
                  <div className="flex items-center gap-2 font-bold uppercase">
                    <Linkedin className="h-4 w-4 text-slate-900" />
                    <span>LINKEDIN</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-900 transition-colors font-bold">@jiehao-guan</span>
                </a>

                {/* GitHub container */}
                <a 
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-none bg-slate-50 border border-slate-300 font-mono text-xs text-slate-600 hover:border-slate-900 hover:bg-slate-100 transition-all group"
                  id="github-link"
                >
                  <div className="flex items-center gap-2 font-bold uppercase">
                    <Github className="h-4 w-4 text-slate-900" />
                    <span>GITHUB</span>
                  </div>
                  <span className="text-slate-400 group-hover:text-slate-900 transition-colors font-bold">@jguan22</span>
                </a>
              </div>
            </div>

            {/* MESSAGE LEAVE FORM */}
            <div className="rounded-none border border-slate-350 bg-white p-6 shadow-sm">
              <h3 className="font-mono text-xs font-black text-slate-900 mb-4 uppercase tracking-widest flex items-center justify-between border-b border-slate-200 pb-2">
                <span>// {lang === 'zh' ? '给 Jiehao Guan 留言' : 'Submit log to Jiehao'}</span>
                {submitted && (
                  <span className="text-[9px] font-mono font-black text-slate-900 flex items-center gap-1 bg-slate-100 px-2 py-0.5 rounded-none border border-slate-900 uppercase">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>{lang === 'zh' ? '登载成功!' : 'LOGGED SUCCESS!'}</span>
                  </span>
                )}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Visual badge color choices */}
                <div>
                  <label className="block text-[10px] font-mono font-extrabold text-slate-400 uppercase tracking-widest mb-2">
                    {lang === 'zh' ? '卡片徽标色' : 'Visitor Badge Theme'}
                  </label>
                  <div className="flex items-center gap-2.5">
                    {BADGE_COLORS.map((bg, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setSelectedColorIdx(idx)}
                        className={`h-6 w-6 rounded-none border-2 transition-all ${bg.split(' ')[0]} ${bg.split(' ')[1]} ${
                          selectedColorIdx === idx ? 'border-slate-900 scale-110' : 'border-slate-200 opacity-60 scale-100 hover:opacity-100'
                        }`}
                        title={`Theme: ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {/* Name field */}
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-slate-700 tracking-wider mb-1">
                      {lang === 'zh' ? '称呼 / 姓名 *' : 'Your Name *'}
                    </label>
                    <div className="relative">
                      <User className="absolute left-2.5 top-2.5 h-3.5 w-3.5 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Alex, Bob, etc."
                        className="w-full pl-8 pr-3 py-1.5 border border-slate-300 rounded-none text-xs sm:text-xs font-mono font-bold focus:border-slate-900 focus:outline-none placeholder-slate-300"
                        id="form-name-input"
                      />
                    </div>
                  </div>

                  {/* Company field */}
                  <div>
                    <label className="block text-[10px] font-mono font-black uppercase text-slate-700 tracking-wider mb-1">
                      {lang === 'zh' ? '企业机构名称' : 'Company/Org'}
                    </label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="e.g. Google, ByteDance"
                      className="w-full px-3 py-1.5 border border-slate-300 rounded-none text-xs sm:text-xs font-mono font-bold focus:border-slate-900 focus:outline-none placeholder-slate-300"
                      id="form-company-input"
                    />
                  </div>
                </div>

                {/* Email field */}
                <div>
                  <label className="block text-[10px] font-mono font-black uppercase text-slate-700 tracking-wider mb-1">
                    {lang === 'zh' ? '电子邮箱 (用于后续专业回复) *' : 'Business Email *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="contact@company.com"
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-none text-xs sm:text-xs font-mono font-bold focus:border-slate-900 focus:outline-none placeholder-slate-300"
                    id="form-email-input"
                  />
                </div>

                {/* Message text area */}
                <div>
                  <label className="block text-[10px] font-mono font-black uppercase text-slate-700 tracking-wider mb-1">
                    {lang === 'zh' ? '留言内容 *' : 'Log Message (Markdown-safe) *'}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={lang === 'zh' ? '请留下您的想法或商业需求坐标...' : 'Leave a quick greeting or notes describing your workspace inquiries...'}
                    className="w-full px-3 py-1.5 border border-slate-300 rounded-none text-xs sm:text-xs font-mono font-bold focus:border-slate-900 focus:outline-none placeholder-slate-300 resize-none"
                    id="form-message-input"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-mono text-xs font-black uppercase tracking-widest py-2.5 px-4 rounded-none hover:bg-slate-800 transition-all cursor-pointer"
                  id="form-submit-trigger"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{lang === 'zh' ? '登载此条消息' : 'Submit to Ledger'}</span>
                </button>
              </form>
            </div>
          </div>

          {/* RIGHT: LEDGER COLLAGE OF VISITOR MESSAGES (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-2 mb-2">
              <h3 className="font-mono text-xs font-black uppercase tracking-widest text-slate-905 flex items-center gap-2">
                <span className="flex h-3 w-3 rounded-none bg-slate-900 animate-pulse"></span>
                <span>{lang === 'zh' ? '实时来访简报墙' : 'Active Visitor Slate'}</span>
              </h3>
              <span className="font-mono text-[10px] text-slate-500 font-extrabold uppercase">
                TOTAL: {messages.length} ACTIVE LOG(S)
              </span>
            </div>

            {/* Scrollable grid ledger list with micro-animations */}
            <div className="max-h-[510px] overflow-y-auto space-y-4 pr-2">
              <AnimatePresence initial={false}>
                {messages.length === 0 ? (
                  <div className="text-center py-12 text-slate-400 font-mono text-xs">
                    {lang === 'zh' ? '暂未收到额外来访登记，期待留下您的第一篇印记。' : 'No visitor logs yet. Leave the very first log on this slate!'}
                  </div>
                ) : (
                  messages.map((m) => (
                    <motion.div
                      key={m.id}
                      initial={{ opacity: 0, scale: 0.98, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 140, damping: 15 }}
                      className={`p-4 rounded-none border border-slate-300 ${m.badgeColor} flex flex-col justify-between shadow-sm relative group`}
                    >
                      {/* Meta top */}
                      <div>
                        <div className="flex items-center justify-between gap-1.5 flex-wrap border-b border-black/10 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="font-sans text-xs font-black uppercase tracking-wide">
                              {m.name}
                            </span>
                            {m.company && (
                              <span className="font-mono text-[9px] bg-white border border-slate-300 px-1.5 py-0.5 rounded-none font-bold">
                                @ {m.company.toUpperCase()}
                              </span>
                            )}
                          </div>
                          <span className="font-mono text-[9px] text-slate-500 font-bold">
                            {m.timestamp}
                          </span>
                        </div>

                        {/* Content text */}
                        <p className="font-sans text-xs text-slate-800 mt-2.5 leading-relaxed break-words whitespace-pre-line bg-white/40 p-2.5 rounded-none border border-slate-350/10 font-medium">
                          {m.message}
                        </p>
                      </div>

                      {/* Decors or emails */}
                      <div className="flex items-center justify-between mt-3 font-mono text-[9px] text-slate-400 font-extrabold uppercase tracking-widest border-t border-black/5 pt-2.5">
                        <span className="p-0.5 rounded-none bg-white/50 border border-slate-300 text-slate-700">
                          {m.email.replace(/(.{3})(.*)(@.*)/, '$1***$3')}
                        </span>
                        
                        {/* Unique id stamp */}
                        <span className="text-slate-500">REF: {m.id.substring(0, 8).toUpperCase()}</span>
                      </div>
                    </motion.div>
                  ))
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
