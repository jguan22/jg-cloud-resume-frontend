import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Layers, Server, Sparkles, Cpu, FileText, ArrowUpRight, Github } from 'lucide-react';
import { Project, Language } from '../types';
import { PROJECTS } from '../data';

interface ProjectCardProps {
  lang: Language;
}

export default function ProjectCard({ lang }: ProjectCardProps) {
  const [filter, setFilter] = useState<'all' | 'fullstack' | 'ai' | 'systems'>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: { zh: '全部作品', en: 'All' }, icon: Layers },
    { id: 'systems', label: { zh: '核心系统', en: 'Systems' }, icon: Cpu },
    { id: 'fullstack', label: { zh: '全栈与云', en: 'Cloud & Fullstack' }, icon: Server },
    { id: 'ai', label: { zh: '核心智能', en: 'GenAI & ML' }, icon: Sparkles },
  ] as const;

  const filteredProjects = PROJECTS.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  const toggleExpand = (id: string) => {
    if (expandedId === id) {
      setExpandedId(null);
    } else {
      setExpandedId(id);
    }
  };

  return (
    <section id="projects" className="scroll-mt-12 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-slate-100/50">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-widest text-slate-900 mb-2 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-slate-900 animate-pulse" />
              <span>{lang === 'zh' ? '设计与实用兼具的产品案例' : 'Practical & High-Performance Builds'}</span>
            </div>
            <h2 className="font-display text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl uppercase">
              {lang === 'zh' ? '甄选独立作品库' : 'Featured Projects'}
            </h2>
          </div>

          {/* Filtering Widgets */}
          <div className="flex flex-wrap gap-1 border border-slate-900 bg-white p-1 rounded-none">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setFilter(cat.id);
                    setExpandedId(null); // Reset detail expansion on change
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-none text-xs font-black tracking-wider uppercase transition-all duration-200 ${
                    isSelected
                      ? 'bg-slate-900 text-white font-black'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'
                  }`}
                  id={`filter-btn-${cat.id}`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  <span>{cat.label[lang]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj: Project) => {
              const isExpanded = expandedId === proj.id;
              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 120, damping: 20 }}
                  className="group flex flex-col justify-between h-full bg-white border border-slate-350 rounded-none overflow-hidden hover:border-slate-900 hover:shadow-[4px_4px_0px_0px_#091e42] hover:translate-x-[-2px] hover:translate-y-[-2px] transition-all duration-350 relative"
                >
                  {/* Card top blueprint decorative strip */}
                  <div className="h-1.5 w-full bg-slate-205 group-hover:bg-slate-900 transition-colors" />

                  {/* Core Content */}
                  <div className="p-6 flex-grow">
                    {/* Header line & tag */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-none bg-slate-900 border border-slate-900 px-2 py-0.5 font-mono text-[9px] font-black text-white tracking-widest uppercase">
                        {proj.category.toUpperCase()}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {proj.id === 'proj1' && (
                          <a
                            href="#/project/dfs"
                            className="p-1 px-1.5 text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white rounded-none transition-all flex items-center gap-1 font-mono text-[9px] font-black"
                            title={lang === 'zh' ? '设计说明文档' : 'System Design Doc'}
                          >
                            <FileText className="h-3 w-3" />
                            <span>{lang === 'zh' ? '说明文档' : 'SYSTEM DOC'}</span>
                          </a>
                        )}
                        {proj.id === 'proj2' && (
                          <a
                            href="#/project/proxy-cache"
                            className="p-1 px-1.5 text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white rounded-none transition-all flex items-center gap-1 font-mono text-[9px] font-black"
                            title={lang === 'zh' ? '设计说明文档' : 'System Design Doc'}
                          >
                            <FileText className="h-3 w-3" />
                            <span>{lang === 'zh' ? '说明文档' : 'SYSTEM DOC'}</span>
                          </a>
                        )}
                        {proj.id === 'proj5' && (
                          <a
                            href="#/project/kv-mem"
                            className="p-1 px-1.5 text-slate-900 border border-slate-900 hover:bg-slate-900 hover:text-white rounded-none transition-all flex items-center gap-1 font-mono text-[9px] font-black"
                            title={lang === 'zh' ? '设计说明文档' : 'System Design Doc'}
                          >
                            <FileText className="h-3 w-3" />
                            <span>{lang === 'zh' ? '说明文档' : 'SYSTEM DOC'}</span>
                          </a>
                        )}
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-1 px-1.5 text-slate-600 border border-slate-300 hover:bg-slate-900 hover:text-white hover:border-slate-900 rounded-none transition-all flex items-center gap-1 font-mono text-[9px] font-black"
                            title="GitHub Repository"
                          >
                            <Github className="h-3.5 w-3.5" />
                            <span>GITHUB</span>
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-black text-slate-900 uppercase tracking-tight leading-snug group-hover:text-slate-500 transition-colors">
                      {proj.title[lang]}
                    </h3>
                    
                    <p className="font-mono text-[10px] text-slate-400 font-extrabold tracking-widest uppercase mb-4 mt-1.5">
                      [ {proj.subtitle[lang]} ]
                    </p>

                    <p className="font-sans text-xs sm:text-xs text-slate-650 leading-relaxed mb-6 font-medium">
                      {proj.description[lang]}
                    </p>

                    {/* Integrated Key Performance Indicators (Bento Grid Style metrics) */}
                    {proj.metrics && proj.metrics.length > 0 && (
                      <div className="grid grid-cols-3 gap-2 border border-slate-300 py-3.5 my-4 bg-slate-50 px-2 rounded-none">
                        {proj.metrics.map((m, idx) => (
                          <div key={idx} className="text-center">
                            <div className="font-mono text-xs font-black text-slate-900">
                              {m.value}
                            </div>
                            <div className="font-mono text-[8px] text-slate-400 font-black tracking-wider mt-0.5">
                              {m.label[lang]}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap gap-1.5 mt-3 mb-1">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-none bg-white px-2 py-0.5 font-mono text-[9px] font-bold text-slate-600 border border-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Detail collapse box */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden mt-4 pt-4 border-t border-slate-300 animate-fade"
                        >
                          <h4 className="font-mono text-[9px] font-black uppercase tracking-widest text-slate-900 mb-2">
                            // {lang === 'zh' ? '设计方案核心点' : 'Key Engineering Highlights'}
                          </h4>
                          <ul className="space-y-1.5 list-square pl-4">
                            {proj.features[lang].map((fStr, idx) => (
                              <li key={idx} className="font-mono text-[11px] font-bold text-slate-600 leading-relaxed list-item list-disc marker:text-slate-900">
                                {fStr}
                              </li>
                            ))}
                          </ul>
                          {proj.id === 'proj1' && (
                            <div className="mt-5 pt-4 border-t border-slate-200">
                              <a
                                href="#/project/dfs"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-3 py-2 border border-slate-900 bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white transition-all duration-250 font-mono text-xs font-black uppercase tracking-wider"
                              >
                                <FileText className="h-4 w-4 animate-pulse" />
                                <span>{lang === 'zh' ? '阅读完整设计及控制流说明文档' : 'Read Full Design & Concurrency Spec'}</span>
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </div>
                          )}
                          {proj.id === 'proj2' && (
                            <div className="mt-5 pt-4 border-t border-slate-200">
                              <a
                                href="#/project/proxy-cache"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-3 py-2 border border-slate-900 bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white transition-all duration-250 font-mono text-xs font-black uppercase tracking-wider"
                              >
                                <FileText className="h-4 w-4 animate-pulse" />
                                <span>{lang === 'zh' ? '阅读完整设计及控制流说明文档' : 'Read Full Design & Concurrency Spec'}</span>
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </div>
                          )}
                          {proj.id === 'proj5' && (
                            <div className="mt-5 pt-4 border-t border-slate-200">
                              <a
                                href="#/project/kv-mem"
                                className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 px-3 py-2 border border-slate-900 bg-slate-50 hover:bg-slate-900 text-slate-900 hover:text-white transition-all duration-250 font-mono text-xs font-black uppercase tracking-wider"
                              >
                                <FileText className="h-4 w-4 animate-pulse" />
                                <span>{lang === 'zh' ? '阅读计算模型及NLP学术说明文档' : 'Read Full Model & NLP Academic Spec'}</span>
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Card footer expand button */}
                  <div className="border-t border-slate-300 px-6 py-3 bg-white flex items-center justify-between">
                    <button
                      onClick={() => toggleExpand(proj.id)}
                      className="text-xs font-black font-mono uppercase tracking-wider text-slate-900 hover:text-slate-500 flex items-center gap-1 group/btn transition-colors focus:outline-none"
                    >
                      <span>{isExpanded ? (lang === 'zh' ? '收起详情' : 'Hide Details') : (lang === 'zh' ? '架构详情' : 'Show Details')}</span>
                      <ChevronRight className={`h-3.5 w-3.5 transform transition-transform duration-200 ${isExpanded ? 'rotate-90' : 'group-hover/btn:translate-x-0.5'}`} />
                    </button>
                    <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-widest">
                      ID: {proj.id.toUpperCase()}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
