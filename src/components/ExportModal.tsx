import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Copy, Check, FileText, Printer, ArrowDownToLine, Star } from 'lucide-react';
import { Language } from '../types';
import { PERSONAL_INFO, EXPERIENCES, EDUCATIONS, SKILL_GROUPS } from '../data';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
}

export default function ExportModal({ isOpen, onClose, lang }: ExportModalProps) {
  const [copied, setCopied] = useState(false);

  // Generate real, fully structured Markdown CV based on selected language
  const generateMarkdownResume = () => {
    let md = `# ${PERSONAL_INFO.name[lang]}\n`;
    md += `**${PERSONAL_INFO.title[lang]}**\n\n`;
    md += `- Email: ${PERSONAL_INFO.email}\n`;
    md += `- Location: ${PERSONAL_INFO.location[lang]}\n`;
    md += `- GitHub: ${PERSONAL_INFO.github}\n`;
    md += `- LinkedIn: ${PERSONAL_INFO.linkedin}\n\n`;
    
    md += `## Professional Summary / 关于我\n`;
    md += `${PERSONAL_INFO.about[lang]}\n\n`;

    md += `## Employment History / 工作经历\n\n`;
    EXPERIENCES.forEach((exp) => {
      md += `### ${exp.role[lang]} | ${exp.company}\n`;
      md += `*Period: ${exp.period} | Location: ${exp.location[lang]}*\n`;
      exp.description[lang].forEach((desc) => {
        md += `- ${desc}\n`;
      });
      md += `*Tech Stack: ${exp.skills.join(', ')}*\n\n`;
    });

    md += `## Education / 教育背景\n\n`;
    EDUCATIONS.forEach((edu) => {
      md += `### ${edu.degree[lang]}\n`;
      md += `*${edu.school[lang]} | Period: ${edu.period}*\n`;
      edu.highlights[lang].forEach((hl) => {
        md += `- ${hl}\n`;
      });
      md += `\n`;
    });

    md += `## Professional Skills / 技能清单\n\n`;
    SKILL_GROUPS.forEach((group) => {
      md += `### ${group.category[lang]}\n`;
      const skillsStr = group.skills.map((s) => `${s.name} (${s.level}%, ${s.years} yrs)`).join(', ');
      md += `${skillsStr}\n\n`;
    });

    md += `---\n*Generated from Jiehao's Flat Tech Resume Portfolio on ${new Date().toLocaleDateString()}*`;
    return md;
  };

  const copyMarkdown = () => {
    const md = generateMarkdownResume();
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const triggerPrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/65 backdrop-blur-xs"
          />

          {/* Dialog Body */}
          <motion.div
            initial={{ scale: 0.98, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.98, opacity: 0, y: 15 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            className="relative w-full max-w-2xl rounded-none border-2 border-slate-900 bg-white p-6 shadow-[8px_8px_0px_0px_#091e42] z-10"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-2 border-slate-900 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-none bg-slate-900 text-white border border-slate-900">
                  <FileText className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-black uppercase tracking-tight text-slate-900 leading-none">
                    {lang === 'zh' ? '导出与保存简历' : 'Export & Save Resume'}
                  </h3>
                  <p className="font-mono text-[10px] text-slate-400 font-extrabold uppercase tracking-wider mt-1">
                    {lang === 'zh' ? '获取纯文本 Markdown 排版或调用打印生成 PDF' : 'Get markdown or trigger print-friendly layout'}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 border border-transparent hover:border-slate-300 rounded-none text-slate-450 hover:text-slate-950 transition"
                id="close-export-modal"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Quick action buttons row (Bento Style) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              
              {/* Copy Markdown option button */}
              <button
                onClick={copyMarkdown}
                className="flex flex-col items-start gap-2.5 p-4 rounded-none border border-slate-300 bg-slate-50 hover:bg-white hover:border-slate-900 hover:shadow-[3px_3px_0px_#000] text-left transition relative overflow-hidden group"
                id="copy-markdown-trigger"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex h-8 w-8 items-center justify-center rounded-none bg-white border border-slate-900 text-slate-900 font-mono text-[10px] font-black tracking-widest uppercase">
                    MD
                  </div>
                  {copied ? (
                    <span className="text-[10px] font-mono font-black text-slate-900 flex items-center gap-1 uppercase bg-slate-100 px-1.5 py-0.5 border border-slate-900">
                      <Check className="h-3.5 w-3.5" />
                      <span>{lang === 'zh' ? '已复制!' : 'COPIED!'}</span>
                    </span>
                  ) : (
                    <Copy className="h-4 w-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                  )}
                </div>
                <div>
                  <h4 className="font-mono text-xs font-black uppercase text-slate-900 tracking-wider">
                    {lang === 'zh' ? '复制 Markdown 源码' : 'Copy Markdown Code'}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-650 mt-1 font-medium leading-relaxed">
                    {lang === 'zh' ? '便于剪贴、直发招聘后台或直接存入个人本地知识库' : 'Instant ready to paste inside any editor or mailbox'}
                  </p>
                </div>
              </button>

              {/* Print PDF option button */}
              <button
                onClick={triggerPrint}
                className="flex flex-col items-start gap-2.5 p-4 rounded-none border border-slate-300 bg-slate-50 hover:bg-white hover:border-slate-900 hover:shadow-[3px_3px_0px_#000] text-left transition relative overflow-hidden group"
                id="print-pdf-trigger"
              >
                <div className="flex items-center justify-between w-full">
                  <div className="flex p-1.5 rounded-none bg-white border border-slate-900 text-slate-900">
                    <Printer className="h-4 w-4" />
                  </div>
                  <ArrowDownToLine className="h-4 w-4 text-slate-400 group-hover:text-slate-950 transition-colors" />
                </div>
                <div>
                  <h4 className="font-mono text-xs font-black uppercase text-slate-900 tracking-wider">
                    {lang === 'zh' ? '打印或存为 PDF' : 'Print or Save as PDF'}
                  </h4>
                  <p className="font-sans text-[11px] text-slate-650 mt-1 font-medium leading-relaxed">
                    {lang === 'zh' ? '自动剔除多余交互边栏，生成精简、严谨的纸质尺寸版式' : 'Opens standard print panel omitting all sidebar rails'}
                  </p>
                </div>
              </button>

            </div>

            {/* Live Markdown Preview Container to show real content */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[9px] font-black text-slate-400 uppercase tracking-widest flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
                  <span>{lang === 'zh' ? '生成结果预览' : 'Raw CV Content'}</span>
                </span>
                <span className="font-mono text-[9px] text-slate-400 font-bold uppercase tracking-wider">
                  {lang === 'zh' ? '单页排版模式' : 'One-page compact blueprint'}
                </span>
              </div>
              <div className="max-h-48 overflow-y-auto rounded-none bg-slate-900 p-4 border border-slate-950 font-mono text-[11px] text-slate-300 select-all leading-normal">
                <pre className="whitespace-pre-wrap">{generateMarkdownResume()}</pre>
              </div>
            </div>

            {/* Decors / notice foot */}
            <div className="mt-6 border-t border-slate-300 pt-4 flex justify-between items-center text-[10px] text-slate-500 font-mono font-black uppercase tracking-wider">
              <span>{lang === 'zh' ? '✓ 安全说明: 数据保留在本地' : '✓ Client-side sandbox. Compliant format.'}</span>
              <button
                onClick={onClose}
                className="text-xs font-black text-slate-900 hover:text-slate-500 hover:underline tracking-widest cursor-pointer focus:outline-none"
              >
                {lang === 'zh' ? '我知道了' : 'Close Panel'}
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
