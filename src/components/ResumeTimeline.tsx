import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { Experience, Education, Language } from '../types';
import { EXPERIENCES, EDUCATIONS } from '../data';

interface ResumeTimelineProps {
  lang: Language;
}

export default function ResumeTimeline({ lang }: ResumeTimelineProps) {
  // Container animation configuration
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
  };

  return (
    <section id="resume" className="scroll-mt-12 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <div className="font-mono text-xs font-black uppercase tracking-widest text-slate-900 mb-2 flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5 text-slate-900" />
              <span>{lang === 'zh' ? '职业生涯与学历背景' : 'Career & Education Path'}</span>
            </div>
            <h2 className="font-display text-4xl font-black tracking-tighter text-slate-900 sm:text-5xl uppercase">
              {lang === 'zh' ? '履历详情' : 'Resume Details'}
            </h2>
          </div>
          <div className="font-mono text-xs leading-relaxed text-slate-500 max-w-sm lg:text-right font-bold uppercase tracking-wider">
            {lang === 'zh' 
              ? '注重代码架构，通过标准且健全的前后端工程实践，持续推进商业效益实现。'
              : 'Focusing on modular workflows and system-level performance optimizations.'}
          </div>
        </div>

        {/* Master Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: EXPERIENCES (7 cols) */}
          <div className="lg:col-span-7">
            <h3 className="flex items-center gap-2 mb-10 font-display text-lg font-black text-slate-905 uppercase tracking-wider border-b-2 border-slate-900 pb-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-none bg-slate-900 text-white">
                <Briefcase className="h-4 w-4" />
              </span>
              <span>{lang === 'zh' ? '专业工作经历' : 'Employment History'}</span>
            </h3>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="relative border-l-2 border-slate-900 pl-6 space-y-12 ml-3"
            >
              {EXPERIENCES.map((exp: Experience, index) => (
                <motion.div 
                   key={exp.id} 
                   variants={itemVariants} 
                   className="relative group pr-2"
                >
                  {/* Timeline dot */}
                  <span className="absolute -left-[32px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-none border-2 border-slate-900 bg-white group-hover:bg-slate-900 transition-colors duration-250">
                    <span className="h-1.5 w-1.5 rounded-none bg-slate-900 group-hover:bg-white transition-colors" />
                  </span>

                  {/* Date Period Indicator */}
                  <div className="inline-block px-2.5 py-1 mb-2.5 rounded-none border border-slate-900 bg-white font-mono text-[9px] font-black text-slate-900 tracking-widest uppercase">
                    [ {exp.period} ]
                  </div>

                  {/* Header info */}
                  <h4 className="font-display text-xl font-black text-slate-900 leading-snug group-hover:text-slate-500 transition-colors duration-200 uppercase tracking-tight">
                    {exp.role[lang]}
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 mb-3.5 text-xs font-bold font-mono uppercase tracking-wider text-slate-500">
                    <span className="text-slate-900 font-extrabold">{exp.company}</span>
                    <span className="text-slate-300">•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3 inline text-slate-400" />
                      {exp.location[lang]}
                    </span>
                  </div>

                  {/* Content bullet description lists */}
                  <ul className="space-y-2 text-slate-650 text-xs sm:text-xs mb-4 pl-4 list-square">
                    {exp.description[lang].map((desc, idx) => (
                      <li key={idx} className="leading-relaxed list-item list-disc marker:text-slate-900">
                        {desc}
                      </li>
                    ))}
                  </ul>

                  {/* Embedded badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {exp.skills.map(skill => (
                      <span 
                        key={skill} 
                        className="rounded-none border border-slate-300 bg-white px-2 py-0.5 font-mono text-[9px] font-bold text-slate-600 transition-all hover:border-slate-900 hover:text-slate-900"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: EDUCATION & ACCOMPLISHMENTS (5 cols) */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h3 className="flex items-center gap-2 mb-10 font-display text-lg font-black text-slate-905 uppercase tracking-wider border-b-2 border-slate-900 pb-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-none bg-slate-900 text-white">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <span>{lang === 'zh' ? '高等教育与技能培养' : 'Education'}</span>
              </h3>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative border-l-2 border-slate-900 pl-6 space-y-10 ml-3"
              >
                {EDUCATIONS.map((edu: Education) => (
                  <motion.div 
                    key={edu.id} 
                    variants={itemVariants}
                    className="relative group pr-2"
                  >
                    {/* Timeline dot */}
                    <span className="absolute -left-[32px] top-1.5 flex h-3.5 w-3.5 items-center justify-center rounded-none border-2 border-slate-900 bg-white group-hover:bg-slate-900 transition-colors duration-250">
                      <span className="h-1.5 w-1.5 rounded-none bg-slate-900 group-hover:bg-white transition-colors" />
                    </span>

                    {/* Date */}
                    <div className="inline-block px-2.5 py-1 mb-2.5 rounded-none border border-slate-900 bg-white font-mono text-[9px] font-black text-slate-900 tracking-widest uppercase">
                      [ {edu.period} ]
                    </div>

                    <h4 className="font-display text-lg font-black text-slate-900 leading-snug uppercase tracking-tight">
                      {edu.degree[lang]}
                    </h4>
                    
                    <div className="text-xs font-bold font-mono text-slate-500 uppercase tracking-widest mt-0.5 mb-3">
                      {edu.school[lang]}
                    </div>

                    <ul className="space-y-2 text-slate-650 text-xs sm:text-xs list-disc pl-4 marker:text-slate-900">
                      {edu.highlights[lang].map((highlight, idx) => (
                        <li key={idx} className="leading-relaxed">
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
