import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Globe, Database, Wrench, Cpu, CheckCircle2 } from 'lucide-react';
import { profileData } from '../data/profile';

const categoryMeta = [
  {
    key: 'programming',
    title: 'Programming Languages',
    icon: Code2,
    gradient: 'from-purple-500 to-indigo-500'
  },
  {
    key: 'aiMl',
    title: 'AI / Machine Learning',
    icon: Brain,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    key: 'web',
    title: 'Web Development',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    key: 'database',
    title: 'Database Systems',
    icon: Database,
    gradient: 'from-emerald-500 to-teal-500'
  },
  {
    key: 'tools',
    title: 'Developer Tools',
    icon: Wrench,
    gradient: 'from-amber-500 to-orange-500'
  }
];

export default function Skills() {
  const { skills } = profileData;

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-accentPink text-xs font-semibold uppercase tracking-widest border border-pink-500/20">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Skills & <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent">Technologies</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentPink mx-auto rounded-full" />
        </motion.div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryMeta.map((cat, idx) => {
            const skillList = skills[cat.key] || [];
            const IconComp = cat.icon;

            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl glass-card border border-darkBorder hover:border-accentPurple/40 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 group flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800/80 light:border-slate-200">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${cat.gradient} p-2 text-white shadow-md group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-full h-full" />
                    </div>
                    <h3 className="text-lg font-bold text-white light:text-slate-900">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Skills Badges Tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {skillList.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-darkCard border border-slate-700/60 text-slate-200 hover:text-white hover:border-accentPurple/60 hover:bg-slate-800/90 transition-all duration-200 text-sm font-medium shadow-sm hover:scale-105 light:bg-slate-100 light:border-slate-300 light:text-slate-800 light:hover:bg-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-accentPurple light:text-accentViolet" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-4 border-t border-slate-800/40 text-xs text-slate-500 light:text-slate-400">
                  {skillList.length} Core Competencies
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
