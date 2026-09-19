import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldAlert, FileSearch, ShoppingCart, TrendingDown, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import { projectsData } from '../data/projects';

// Custom SVG Visual Illustrations for each project
const renderProjectBanner = (type, title, gradient) => {
  switch (type) {
    case 'security':
      return (
        <div className={`w-full h-48 bg-gradient-to-tr ${gradient} relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <ShieldAlert className="w-20 h-20 text-white/80 z-10 animate-pulse" />
          <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-purple-200 z-10 flex items-center justify-between opacity-80">
            <span>AI Threat Intel v1.0</span>
            <span className="px-2 py-0.5 rounded bg-black/50 border border-purple-400/30">Threat Severity Predictor</span>
          </div>
        </div>
      );
    case 'resume':
      return (
        <div className={`w-full h-48 bg-gradient-to-tr ${gradient} relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <FileSearch className="w-20 h-20 text-white/80 z-10 animate-pulse" />
          <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-pink-200 z-10 flex items-center justify-between opacity-80">
            <span>ATS Resume Matcher</span>
            <span className="px-2 py-0.5 rounded bg-black/50 border border-pink-400/30">NLP Analytics</span>
          </div>
        </div>
      );
    case 'ecommerce':
      return (
        <div className={`w-full h-48 bg-gradient-to-tr ${gradient} relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <ShoppingCart className="w-20 h-20 text-white/80 z-10 animate-pulse" />
          <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-cyan-200 z-10 flex items-center justify-between opacity-80">
            <span>FlipKartX Full-Stack</span>
            <span className="px-2 py-0.5 rounded bg-black/50 border border-cyan-400/30">Cart & Checkout</span>
          </div>
        </div>
      );
    case 'attrition':
    default:
      return (
        <div className={`w-full h-48 bg-gradient-to-tr ${gradient} relative flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
          <TrendingDown className="w-20 h-20 text-white/80 z-10 animate-pulse" />
          <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-purple-200 z-10 flex items-center justify-between opacity-80">
            <span>ML Classifier</span>
            <span className="px-2 py-0.5 rounded bg-black/50 border border-purple-400/30">Scikit-Learn</span>
          </div>
        </div>
      );
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-darkBg/60 light:bg-slate-50/60">
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
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            My Portfolio <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            Hands-on machine learning, AI, and full-stack software development projects.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentPink mx-auto rounded-full" />
        </motion.div>

        {/* 4 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="rounded-2xl glass-card border border-darkBorder hover:border-accentPurple/50 overflow-hidden group flex flex-col justify-between hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div>
                {/* Project Image Banner */}
                <div className="relative overflow-hidden">
                  {renderProjectBanner(project.illustrationType, project.title, project.accentColor)}
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-darkBg/80 backdrop-blur-md text-xs font-semibold text-white border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-white light:text-slate-900 group-hover:text-accentPurple transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 light:text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Badges */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded-md bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs font-medium light:bg-purple-100 light:border-purple-200 light:text-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons: GitHub & Live Demo */}
              <div className="p-6 pt-0 border-t border-slate-800/40 light:border-slate-200 flex items-center gap-3 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-darkBorder bg-darkCard/90 text-slate-200 hover:text-white hover:border-accentPurple/60 hover:bg-slate-800 transition-all text-sm font-semibold light:bg-slate-100 light:border-slate-300 light:text-slate-800"
                >
                  <GithubIcon className="w-4 h-4 text-accentPurple" />
                  <span>GitHub</span>
                </a>

                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-accentPurple to-accentViolet text-white hover:opacity-90 transition-all text-sm font-semibold shadow-md shadow-purple-500/20"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
