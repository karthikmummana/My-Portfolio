import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Briefcase, Target, User } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  const cards = [
    {
      title: "Education",
      value: profileData.educationDegree,
      icon: GraduationCap,
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "CGPA",
      value: profileData.cgpa,
      icon: Award,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Experience",
      value: profileData.experience,
      subtitle: "Entry-level Aspirant",
      icon: Briefcase,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Career Goal",
      value: profileData.careerGoal,
      icon: Target,
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="about" className="py-20 relative bg-darkBg/50 light:bg-slate-50/50">
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
            <User className="w-3.5 h-3.5" />
            <span>Discover</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            About <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentPink mx-auto rounded-full" />
        </motion.div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Detailed Paragraph Text */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="p-8 rounded-2xl glass-card border border-darkBorder shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accentPurple/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="text-xl font-bold text-white light:text-slate-900 mb-4">
                Specialized in Artificial Intelligence & Software Engineering
              </h3>
              <p className="text-slate-300 light:text-slate-600 leading-relaxed text-base">
                "{profileData.aboutText}"
              </p>
              <div className="pt-6 border-t border-slate-800/80 light:border-slate-200 mt-6 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider text-slate-400">Professional Objective</p>
                  <p className="text-sm font-medium text-slate-200 light:text-slate-800 pt-1">
                    {profileData.objective}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 4 Information Cards Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {cards.map((card, idx) => {
              const IconComponent = card.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl glass-card border border-darkBorder hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group relative overflow-hidden"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} p-2.5 text-white mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-full h-full" />
                  </div>
                  <h4 className="text-xs uppercase font-semibold text-slate-400 tracking-wider">
                    {card.title}
                  </h4>
                  <p className="text-lg font-bold text-white light:text-slate-900 mt-1 leading-snug">
                    {card.value}
                  </p>
                  {card.subtitle && (
                    <span className="text-xs text-slate-400 block mt-0.5">{card.subtitle}</span>
                  )}
                </div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
