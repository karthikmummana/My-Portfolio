import React from 'react';
import { ArrowUp, Terminal, Heart } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-darkBorder bg-darkBg py-12 relative light:bg-slate-100 light:border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Tagline */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-accentViolet to-accentPink p-0.5 shadow-md">
              <div className="w-full h-full bg-darkBg rounded-[6px] flex items-center justify-center light:bg-white">
                <Terminal className="w-4 h-4 text-accentPurple" />
              </div>
            </div>
            <div>
              <span className="font-bold text-white light:text-slate-900 tracking-tight">
                {profileData.name}
              </span>
              <p className="text-xs text-slate-400">
                AI & Machine Learning Student • Aspiring AI Engineer
              </p>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="text-center text-xs text-slate-400 flex items-center gap-1">
            <span>© {new Date().getFullYear()} {profileData.name}. Built with</span>
            <Heart className="w-3.5 h-3.5 text-accentPink fill-accentPink" />
            <span>React & Tailwind CSS.</span>
          </div>

          {/* Back to top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="p-3 rounded-xl border border-darkBorder bg-darkCard/80 text-slate-300 hover:text-accentPurple hover:border-accentPurple/50 transition-all light:bg-white light:border-slate-300 light:text-slate-700"
          >
            <ArrowUp className="w-5 h-5" />
          </button>

        </div>
      </div>
    </footer>
  );
}
