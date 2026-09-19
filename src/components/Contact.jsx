import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2, AlertCircle, MessageSquare, Loader2, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './Icons';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // { type: 'success' | 'error', text: string }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    if (status) setStatus(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setStatus({
        type: 'error',
        text: 'Please complete all required fields (Name, Email, Message).'
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      setStatus({
        type: 'error',
        text: 'Please enter a valid email address.'
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    const subject = `Portfolio Message from ${trimmedName}`;
    const body = `Name: ${trimmedName}\nSender Email: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`;

    const mailtoUrl = `mailto:${profileData.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profileData.email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // 1. Directly open native email application (Outlook, Apple Mail, Windows Mail, Thunderbird, Mobile Mail)
    window.location.href = mailtoUrl;

    // 2. Also send background copy via FormSubmit AJAX as a server backup
    try {
      await fetch(`https://formsubmit.co/ajax/${profileData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
          _subject: subject,
          _captcha: 'false'
        })
      });
    } catch {
      // Background submit error ignored since mailto is triggered
    }

    setStatus({
      type: 'success',
      text: `Opening email client pre-filled to ${profileData.email}! Click "Send" in your mail app to deliver.`,
      gmailUrl: gmailWebUrl
    });

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#08090D] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-widest border border-purple-500/20">
            <MessageSquare className="w-3.5 h-3.5 text-[#8B5CF6]" />
            <span>Contact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-[#8B5CF6] via-purple-400 to-[#EC4899] bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-[#94A3B8] max-w-xl mx-auto text-sm sm:text-base">
            Have an exciting project, entry-level opportunity, or question? Send a message directly to my inbox!
          </p>
        </motion.div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-[50px] items-start">
          
          {/* LEFT COLUMN: 3 Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-5 sm:gap-6"
          >
            {/* CARD 1: EMAIL */}
            <a
              href={`mailto:${profileData.email}`}
              className="bg-[#11131B] border border-[#272B36] rounded-[20px] p-5 sm:p-[30px] min-h-[120px] flex items-center gap-[20px] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#8B5CF6] hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.35)] group"
              aria-label="Send email to Karthik Mummana"
            >
              <div className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-[15px] bg-[#8B5CF6]/15 text-[#8B5CF6] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-7 h-7" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-[14px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                  EMAIL ADDRESS
                </h3>
                <p className="text-[16px] sm:text-[20px] font-bold text-[#F8FAFC] truncate group-hover:text-[#8B5CF6] transition-colors">
                  {profileData.email}
                </p>
              </div>
            </a>

            {/* CARD 2: LINKEDIN */}
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11131B] border border-[#272B36] rounded-[20px] p-5 sm:p-[30px] min-h-[120px] flex items-center gap-[20px] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#8B5CF6] hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.35)] group"
              aria-label="Open Karthik Mummana's LinkedIn Profile"
            >
              <div className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-[15px] bg-[#3B82F6]/15 text-[#60A5FA] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <LinkedinIcon className="w-7 h-7" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-[14px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                  LINKEDIN PROFILE
                </h3>
                <p className="text-[16px] sm:text-[20px] font-bold text-[#F8FAFC] truncate group-hover:text-[#8B5CF6] transition-colors">
                  {profileData.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')}
                </p>
              </div>
            </a>

            {/* CARD 3: GITHUB */}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11131B] border border-[#272B36] rounded-[20px] p-5 sm:p-[30px] min-h-[120px] flex items-center gap-[20px] transition-all duration-300 hover:-translate-y-[4px] hover:border-[#8B5CF6] hover:shadow-[0_10px_30px_-10px_rgba(139,92,246,0.35)] group"
              aria-label="Open Karthik Mummana's GitHub Portfolio"
            >
              <div className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-[15px] bg-[#EC4899]/15 text-[#F472B6] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <GithubIcon className="w-7 h-7" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-[14px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1">
                  GITHUB PORTFOLIO
                </h3>
                <p className="text-[16px] sm:text-[20px] font-bold text-[#F8FAFC] truncate group-hover:text-[#8B5CF6] transition-colors">
                  github.com/karthikmummana
                </p>
              </div>
            </a>

            {/* CARD 4: PHONE NUMBER / WHATSAPP */}
            <a
              href={profileData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#11131B] border border-[#272B36] rounded-[20px] p-5 sm:p-[30px] min-h-[120px] flex items-center gap-[20px] transition-all duration-300 hover:-translate-y-[4px] hover:border-emerald-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.35)] group"
              aria-label="Send direct message on WhatsApp to Karthik Mummana"
            >
              <div className="w-[60px] h-[60px] min-w-[60px] min-h-[60px] rounded-[15px] bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <WhatsappIcon className="w-7 h-7 text-emerald-400" />
              </div>
              <div className="overflow-hidden">
                <h3 className="text-[14px] font-bold text-[#94A3B8] uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span>PHONE / WHATSAPP</span>
                  <span className="text-[10px] normal-case bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full font-medium">Click to Chat</span>
                </h3>
                <p className="text-[16px] sm:text-[20px] font-bold text-[#F8FAFC] truncate group-hover:text-emerald-400 transition-colors">
                  {profileData.phone}
                </p>
              </div>
            </a>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-[#11131B] border border-[#272B36] rounded-[20px] p-6 sm:p-[40px] shadow-2xl flex flex-col gap-6"
            >
              {/* YOUR NAME Field */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-[14px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2.5"
                >
                  YOUR NAME
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  disabled={isSubmitting}
                  required
                  className="w-full h-[62px] px-5 rounded-[15px] bg-[#12151D] border border-[#394255] text-white text-[18px] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all disabled:opacity-50"
                />
              </div>

              {/* YOUR EMAIL Field */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-[14px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2.5"
                >
                  YOUR EMAIL
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  disabled={isSubmitting}
                  required
                  className="w-full h-[62px] px-5 rounded-[15px] bg-[#12151D] border border-[#394255] text-white text-[18px] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all disabled:opacity-50"
                />
              </div>

              {/* MESSAGE Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-[14px] font-bold text-[#94A3B8] uppercase tracking-wider mb-2.5"
                >
                  MESSAGE
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  disabled={isSubmitting}
                  required
                  rows={4}
                  className="w-full h-[150px] min-h-[150px] px-5 py-4 rounded-[15px] bg-[#12151D] border border-[#394255] text-white text-[18px] placeholder-[#64748B] focus:outline-none focus:border-[#8B5CF6] focus:ring-2 focus:ring-[#8B5CF6]/30 transition-all resize-y disabled:opacity-50"
                />
              </div>

              {/* Status Alert Messages */}
              {status?.type === 'success' && (
                <div className="p-4 rounded-[15px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                    <span>{status.text}</span>
                  </div>
                  {status.gmailUrl && (
                    <a
                      href={status.gmailUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 text-xs text-purple-300 hover:text-purple-200 underline font-normal flex items-center gap-1.5 self-start"
                    >
                      <span>Mail app didn't open? Click here to compose in Web Gmail</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              )}

              {status?.type === 'error' && (
                <div className="p-4 rounded-[15px] bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-semibold flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{status.text}</span>
                </div>
              )}

              {/* SEND MESSAGE Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[64px] rounded-[15px] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white font-bold text-[19px] flex items-center justify-center gap-3 shadow-[0_10px_25px_-5px_rgba(139,92,246,0.4)] hover:-translate-y-[2px] hover:shadow-[0_12px_30px_-4px_rgba(139,92,246,0.6)] hover:brightness-110 active:translate-y-0 transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
