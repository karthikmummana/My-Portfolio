import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, Brain, Code2, Award, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient glow circles */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-accentPurple/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accentPink/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 text-center lg:text-left space-y-6"
          >
            {/* Top Greeting Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs sm:text-sm font-medium tracking-wide shadow-lg shadow-purple-500/10 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accentPink animate-pulse" />
              <span>{profileData.role}</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-2">
              <h2 className="text-slate-400 font-medium text-sm sm:text-base uppercase tracking-wider">
                Hello, I'm
              </h2>
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white light:text-slate-900 leading-none">
                <span className="bg-gradient-to-r from-white via-purple-100 to-purple-300 bg-clip-text text-transparent light:from-slate-900 light:to-purple-900">
                  {profileData.name}
                </span>
              </h1>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold bg-gradient-to-r from-accentPurple via-purple-400 to-accentPink bg-clip-text text-transparent pt-1">
                {profileData.careerGoal}
              </h3>
            </div>

            {/* Short Introduction */}
            <p className="text-slate-300 light:text-slate-600 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              "{profileData.heroIntro}"
            </p>

            {/* Action Buttons: View Projects + Dual Resume Download Options */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-accentPurple via-purple-600 to-accentViolet text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-[1.03] active:scale-[0.98] transition-all text-sm"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* AI/ML Resume Download Button */}
              <a
                href={profileData.resumeAimlPdf}
                download="Sai_Ganga_Karthik_Mummana_AIML_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-purple-500/40 bg-purple-950/40 text-purple-200 font-semibold hover:border-accentPurple hover:text-white hover:bg-purple-900/60 hover:scale-[1.02] transition-all text-sm shadow-md"
              >
                <Brain className="w-4 h-4 text-accentPurple" />
                <span>AI/ML Resume</span>
                <Download className="w-3.5 h-3.5 opacity-70" />
              </a>

              {/* MERN Resume Download Button */}
              <a
                href={profileData.resumeMernPdf}
                download="Sai_Ganga_Karthik_Mummana_MERN_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl border border-pink-500/40 bg-pink-950/40 text-pink-200 font-semibold hover:border-accentPink hover:text-white hover:bg-pink-900/60 hover:scale-[1.02] transition-all text-sm shadow-md"
              >
                <Code2 className="w-4 h-4 text-accentPink" />
                <span>MERN Resume</span>
                <Download className="w-3.5 h-3.5 opacity-70" />
              </a>
            </div>

            {/* Social Link Icons */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-3.5 text-slate-400">
              <span className="text-xs uppercase tracking-widest text-slate-500 font-medium mr-1">Connect:</span>
              
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-3 rounded-xl border border-darkBorder bg-darkCard/80 hover:text-accentPurple hover:border-accentPurple/50 hover:scale-110 transition-all light:bg-slate-100 light:border-slate-300"
              >
                <GithubIcon className="w-5 h-5" />
              </a>

              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-3 rounded-xl border border-darkBorder bg-darkCard/80 hover:text-accentPurple hover:border-accentPurple/50 hover:scale-110 transition-all light:bg-slate-100 light:border-slate-300"
                title="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>

              <a
                href={`mailto:${profileData.email}`}
                aria-label="Send Email"
                className="p-3 rounded-xl border border-darkBorder bg-darkCard/80 hover:text-accentPink hover:border-accentPink/50 hover:scale-110 transition-all light:bg-slate-100 light:border-slate-300"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href={profileData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Karthik Mummana on WhatsApp"
                className="p-3 rounded-xl border border-darkBorder bg-darkCard/80 text-emerald-400 hover:text-emerald-300 hover:border-emerald-500/50 hover:scale-110 transition-all light:bg-slate-100 light:border-slate-300"
                title="Direct WhatsApp Message"
              >
                <WhatsappIcon className="w-5 h-5" />
              </a>
            </div>

          </motion.div>

          {/* Right Column: Interactive Profile Photo Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative group">
              {/* Outer Decorative Glowing Rings */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-accentPurple via-accentPink to-indigo-500 opacity-70 blur-xl group-hover:opacity-100 transition duration-1000 animate-pulse-slow"></div>

              {/* Photo Frame Container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-purple-500/30 bg-darkCard flex flex-col items-center justify-center p-2 shadow-2xl backdrop-blur-xl">
                {!imgError ? (
                  <img
                    src={profileData.profilePhoto}
                    alt="Sai Ganga Karthik Mummana"
                    onError={() => setImgError(true)}
                    className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  /* Elegant AI Avatar Graphic Fallback */
                  <div className="w-full h-full rounded-xl bg-gradient-to-b from-darkCard to-darkBg flex flex-col items-center justify-center text-center p-6 space-y-3 relative overflow-hidden border border-purple-500/20">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-accentPurple to-accentPink p-1 flex items-center justify-center shadow-lg shadow-purple-500/30">
                      <div className="w-full h-full bg-darkBg rounded-full flex items-center justify-center">
                        <Brain className="w-10 h-10 text-accentPurple animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white tracking-wide">{profileData.shortName}</h4>
                      <p className="text-xs text-purple-300 font-medium">{profileData.role}</p>
                    </div>
                    <div className="text-[10px] text-slate-400 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                      Place your photo at: <code className="text-accentPink">public/profile.jpg</code>
                    </div>
                  </div>
                )}
              </div>

              {/* Floating Badge 1: Top Right CGPA */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-darkCard/90 border border-purple-500/30 backdrop-blur-xl px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="p-1.5 rounded-lg bg-pink-500/20 text-pink-400">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">CGPA</p>
                  <p className="text-xs font-extrabold text-white">8.57 / 10</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Bottom Left DSA Problems */}
              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-darkCard/90 border border-purple-500/30 backdrop-blur-xl px-3.5 py-2 rounded-xl shadow-xl flex items-center gap-2.5 z-20"
              >
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Coding</p>
                  <p className="text-xs font-extrabold text-white">900+ CodeChef</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
