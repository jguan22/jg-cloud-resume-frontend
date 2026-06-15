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

              {/* Skills Bars Stack */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                className="space-y-4"
              >
                {group.skills.map((sk, skIdx) => (
                  <motion.div 
                    key={skIdx} 
                    variants={itemVariants}
                    className="group"
                  >
                    {/* Labels row */}
                    <div className="flex items-center justify-between text-xs mb-1.5 font-mono text-slate-700">
                      <span className="font-black text-slate-900 uppercase tracking-wide">
                        {sk.name}
                      </span>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400 font-extrabold">
                        <span>
                          {sk.years} {lang === 'zh' ? '年经验' : 'YRS'}
                        </span>
                        <span>•</span>
                        <span className="font-black text-slate-900">
                          {sk.level}%
                        </span>
                      </div>
                    </div>

                    {/* Progress Track */}
                    <div className="h-3 w-full bg-slate-205 rounded-none overflow-hidden relative border border-slate-300">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${sk.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="h-full bg-slate-900 rounded-none relative"
                      >
                        {/* Shimmer overlay accent for visual feedback */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-full animate-shimmer" />
                      </motion.div>
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
