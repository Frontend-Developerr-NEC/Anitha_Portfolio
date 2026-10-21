import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import confetti from 'canvas-confetti';
import { playClickSound, playHoverSound, playSuccessSound } from '../utils/soundEffects';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    playClickSound();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      playSuccessSound();

      // Trigger Confetti Explosion
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00f5c4', '#38bdf8', '#c084fc', '#ffffff'],
        });
      } catch {
        // Fallback
      }

      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 700);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Connect & <span className="gradient-text">Collaborate</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Interested in hiring, technical collaboration, or discussing a project? Reach out directly!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-panel rounded-3xl p-8 border border-white/15 space-y-6 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white flex items-center gap-2 drop-shadow-sm">
                <MessageSquare className="w-5 h-5 text-cyan-400" />
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                Verified communication channels from resume. I am responsive to email, phone, and professional inquiries.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href="tel:+919384149860"
                  onMouseEnter={playHoverSound}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/90 border border-white/10 hover:border-cyan-500/50 transition-colors group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono font-semibold">Phone / WhatsApp</span>
                    <span className="text-sm font-extrabold text-white group-hover:text-cyan-300">+91 9384149860</span>
                  </div>
                </a>

                <a
                  href="mailto:anithasuriyamoorthi@gmail.com"
                  onMouseEnter={playHoverSound}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/90 border border-white/10 hover:border-cyan-500/50 transition-colors group shadow-md"
                >
                  <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono font-semibold">Email Address</span>
                    <span className="text-sm font-extrabold text-white group-hover:text-purple-300 break-all">anithasuriyamoorthi@gmail.com</span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950/90 border border-white/10 shadow-md">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 block font-mono font-semibold">Location</span>
                    <span className="text-sm font-extrabold text-white">Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/15 space-y-3">
                <span className="text-xs font-mono text-slate-400 font-bold block uppercase tracking-wider">
                  Professional Profiles
                </span>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <a
                    href="https://github.com/anitha_lab_coder_GitHub"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHoverSound}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/50 transition-colors text-xs font-bold text-slate-200 hover:text-cyan-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <GithubIcon className="w-4 h-4 text-cyan-400" />
                      <span>GitHub</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/Anithasuriyamoorthi"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHoverSound}
                    className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-950/80 border border-white/10 hover:border-cyan-500/50 transition-colors text-xs font-bold text-slate-200 hover:text-cyan-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <LinkedinIcon className="w-4 h-4 text-cyan-400" />
                      <span>LinkedIn</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-8 border border-white/15 shadow-2xl relative overflow-hidden">
              <h3 className="text-xl font-extrabold text-white mb-2 drop-shadow-sm">
                Send a Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 font-medium">
                Fill out the quick form below to get in touch directly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-slate-950/90 border border-emerald-500/50 text-center space-y-4 animate-in fade-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, Anitha will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-900 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-500/20 transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-slate-300 font-semibold">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Subject</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project Opportunity / Collaboration / Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 font-semibold">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hi Anitha, I reviewed your data analytics portfolio and resume..."
                      className="w-full px-4 py-3 rounded-xl bg-slate-950/90 border border-white/10 focus:border-cyan-400 focus:outline-none text-white text-sm transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    onMouseEnter={playHoverSound}
                    className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/50 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending Message...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
