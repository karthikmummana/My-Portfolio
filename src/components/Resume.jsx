import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Download, Brain, Code2, CheckCircle2, Info } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Resume() {
  return (
    <section id="resume" className="py-20 relative bg-darkBg/60 light:bg-slate-50/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-accentPurple text-xs font-semibold uppercase tracking-widest border border-purple-500/20">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Download My <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent">Resumes</span>
          </h2>
          <p className="text-slate-300 light:text-slate-600 text-base max-w-xl mx-auto">
            Choose the specialized resume tailored for your hiring requirements:
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentPink mx-auto rounded-full" />
        </motion.div>

        {/* Dual Resume Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: AI / ML Engineer Resume */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-darkCard via-purple-950/30 to-darkCard border border-purple-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between hover:border-purple-500/60 transition-all group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accentPurple/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accentPurple to-accentViolet p-3 text-white shadow-lg shadow-purple-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Brain className="w-8 h-8" />
              </div>

              <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-semibold uppercase tracking-wider border border-purple-500/30">
                Specialized Track 01
              </span>

              <h3 className="text-2xl font-extrabold text-white light:text-slate-900 mt-3">
                AI / ML Engineer Resume
              </h3>

              <p className="text-slate-300 light:text-slate-600 text-sm mt-2 leading-relaxed">
                Tailored for Artificial Intelligence, Machine Learning, NLP, Data Science, and Python Developer roles.
              </p>

              <div className="space-y-2 my-6 text-xs text-slate-300 light:text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accentPurple shrink-0" />
                  <span>AI Cyber Threat Intelligence & NLP Projects</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accentPurple shrink-0" />
                  <span>AI/ML Internship Certification at Huebits</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accentPurple shrink-0" />
                  <span>Python, Scikit-learn, Pandas, FastAPI & MongoDB</span>
                </div>
              </div>
            </div>

            <a
              href={profileData.resumeAimlPdf}
              download="Sai_Ganga_Karthik_Mummana_AIML_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accentPurple to-accentViolet text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all w-full mt-4"
            >
              <Download className="w-4 h-4" />
              <span>Download AI / ML Resume (PDF)</span>
            </a>
          </motion.div>

          {/* Card 2: Full-Stack / MERN Developer Resume */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-darkCard via-pink-950/30 to-darkCard border border-pink-500/30 shadow-2xl relative overflow-hidden flex flex-col justify-between hover:border-pink-500/60 transition-all group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accentPink/10 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accentPink to-rose-600 p-3 text-white shadow-lg shadow-pink-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code2 className="w-8 h-8" />
              </div>

              <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 text-xs font-semibold uppercase tracking-wider border border-pink-500/30">
                Specialized Track 02
              </span>

              <h3 className="text-2xl font-extrabold text-white light:text-slate-900 mt-3">
                Full-Stack (MERN) Resume
              </h3>

              <p className="text-slate-300 light:text-slate-600 text-sm mt-2 leading-relaxed">
                Tailored for Software Developer, Full-Stack Developer, React, Node.js, and Web Engineering roles.
              </p>

              <div className="space-y-2 my-6 text-xs text-slate-300 light:text-slate-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accentPink shrink-0" />
                  <span>FlipKartX Full-Stack E-Commerce Platform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accentPink shrink-0" />
                  <span>Web Technology Training Certification at Skill Dzire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-accentPink shrink-0" />
                  <span>React.js, Node.js, Express.js, MongoDB & REST APIs</span>
                </div>
              </div>
            </div>

            <a
              href={profileData.resumeMernPdf}
              download="Sai_Ganga_Karthik_Mummana_MERN_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accentPink to-rose-600 text-white font-bold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all w-full mt-4"
            >
              <Download className="w-4 h-4" />
              <span>Download MERN Resume (PDF)</span>
            </a>
          </motion.div>

        </div>

        {/* Note Footer */}
        <div className="mt-12 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Info className="w-4 h-4 text-accentPurple shrink-0" />
          <span>Both official resumes are stored in <code className="text-accentPink font-mono">public/</code> directory and ready for instant download.</span>
        </div>

      </div>
    </section>
  );
}
