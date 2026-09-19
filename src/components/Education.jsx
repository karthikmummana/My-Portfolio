import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle, Edit3 } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Education() {
  return (
    <section id="education" className="py-20 relative">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight">
            Education & <span className="bg-gradient-to-r from-accentPurple to-accentPink bg-clip-text text-transparent">Qualifications</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-accentPurple to-accentPink mx-auto rounded-full" />
        </motion.div>

        {/* Timeline / Card Layout */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 sm:p-10 rounded-2xl glass-card border border-darkBorder hover:border-accentPurple/40 relative shadow-2xl overflow-hidden"
          >
            {/* Ambient Corner Glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accentPurple/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-800/80 light:border-slate-200">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-accentPurple to-accentPink p-3 text-white shadow-lg shadow-purple-500/20 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white light:text-slate-900">
                    {profileData.educationDegree}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-400 text-sm mt-1">
                    <MapPin className="w-4 h-4 text-accentPink" />
                    {/* Placeholder for College & University */}
                    <span className="font-medium text-purple-300">
                      {profileData.collegeName} • {profileData.universityName}
                    </span>
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20 text-accentPurple text-sm font-semibold">
                <Calendar className="w-4 h-4" />
                <span>{profileData.graduationYears}</span>
              </div>
            </div>

            {/* Metrics & Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              <div className="p-4 rounded-xl bg-darkCard/80 border border-slate-800 light:bg-slate-100 light:border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-pink-500/20 text-accentPink flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400">Cumulative GPA</span>
                  <p className="text-xl font-extrabold text-white light:text-slate-900">
                    {profileData.cgpa} <span className="text-xs font-normal text-slate-400">/ 10.0</span>
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-darkCard/80 border border-slate-800 light:bg-slate-100 light:border-slate-200 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-accentPurple flex items-center justify-center font-bold">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-slate-400">Professional Experience</span>
                  <p className="text-xl font-extrabold text-white light:text-slate-900">
                    {profileData.experience}
                  </p>
                </div>
              </div>
            </div>

            {/* Editable Placeholder Banner Note */}
            <div className="mt-8 p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-slate-300 light:bg-purple-50 light:border-purple-200 light:text-purple-900 flex items-start gap-3">
              <Edit3 className="w-4 h-4 text-accentPink shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-accentPink">Editable Customization Note:</span> You can edit your college name, university name, or graduation years anytime inside <code className="text-purple-300 font-mono">src/data/profile.js</code>.
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
