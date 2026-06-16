import { motion } from 'motion/react';
import { Award, Zap, Code } from 'lucide-react';
import { SKILL_GROUPS } from '../data';
import { Language } from '../types';

interface SkillBarProps {
  lang: Language;
}

export default function SkillBar({ lang }: SkillBarProps) {
  // Config for list entry
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="skills" className="scroll-mt-12 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-widest text-slate-900 mb-2 flex items-center gap-1.5">
              <Zap className="h-3.5 w-3.5 text-slate-900" />
              <span>{lang === 'zh' ? '全栈技术栈熟练度' : 'Engine Masteries & Proficiencies'}</span>
            </div>
            <h2 className="font-display text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl uppercase">
              {lang === 'zh' ? '专业技能分布' : 'Professional Skills'}
            </h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-slate-500 max-w-sm md:text-right font-bold uppercase tracking-wider">
            {lang === 'zh' 
              ? '不以年份论是非。坚持数据结构本位、系统级深度性能追踪。'
              : 'Continuous auditing, keeping alignment with system-level optimizations.'}
          </div>
        </div>

        {/* Categories Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILL_GROUPS.map((group, groupIdx) => (
            <div 
              key={groupIdx} 
              className="flex flex-col bg-slate-50 border border-slate-300 rounded-none p-6 relative overflow-hidden"
            >
              {/* Grid blueprints backgrounds */}
              <div className="absolute top-0 right-0 h-16 w-16 opacity-[0.03] select-none pointer-events-none">
                <Code className="h-full w-full" />
              </div>

              {/* Group Title */}
              <h3 className="font-mono text-xs font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2 border-b-2 border-slate-900 pb-2.5">
                <span className="h-2 w-2 rounded-none bg-slate-900" />
                <span>{group.category[lang]}</span>
              </h3>

              {/* Skills Card Stack (Descriptive & Contextual) */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-3.5"
              >
                {group.skills.map((sk, skIdx) => (
                  <motion.div 
                    key={skIdx} 
                    variants={itemVariants}
                    className="p-3 border border-slate-200 bg-white group hover:border-slate-900 hover:shadow-xs transition-all duration-200 rounded-none flex flex-col gap-1.5 relative cursor-default"
                  >
                    {/* Top Row: Name & Badge */}
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-xs font-black text-slate-900 tracking-tight uppercase leading-snug">
                        {sk.name}
                      </span>
                      <span className="shrink-0 px-1.5 py-0.5 text-[9px] font-mono font-bold uppercase rounded-none border border-slate-300 bg-slate-50 text-slate-500 group-hover:border-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all duration-200 leading-none">
                        {sk.badge[lang]}
                      </span>
                    </div>

                    {/* Bottom Row: Context comment */}
                    <div className="text-[10px] font-mono text-slate-400 font-bold leading-normal tracking-wide uppercase flex items-start gap-1">
                      <span className="text-slate-300 group-hover:text-slate-400 transition-colors select-none shrink-0">//</span>
                      <span className="group-hover:text-slate-600 transition-colors break-words">
                        {sk.context[lang]}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>

        {/* Fine-detailed skills footnote footer (Bento style highlight) */}
        <div className="flat-tech-card mt-10 rounded-none p-5 border border-slate-300 bg-white flex flex-col sm:flex-row items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-none bg-slate-900 text-white shrink-0">
            <Award className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-black uppercase tracking-wider text-slate-900 mb-1">
              // {lang === 'zh' ? '其他技术领域积累' : 'Other Tech Domain & Competence'}
            </h4>
            <p className="font-sans text-[11px] sm:text-xs text-slate-650 leading-relaxed font-semibold">
              {lang === 'zh' 
                ? '深度接触过 WebAssembly, WebRTC (多对多连线视频), Web Audio API (混音处理器合成), 持续在 CI/CD, Terraform 容器化运维以及极速测试平台打磨，力求打造无懈可击的技术生命力。'
                : 'Experience covering WebAssembly, WebRTC P2P multi-connections, Web Audio synthesis pipelines, fully configured GitLab runners, Terraform IaC scripting, and high-performance automated quality controls.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
