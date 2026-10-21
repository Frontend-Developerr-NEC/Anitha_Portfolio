import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, Sparkles, User, Cpu, FolderGit2, GraduationCap, Mail, FileText } from 'lucide-react';
import { toggleMute, getIsMuted, playClickSound, playHoverSound } from '../utils/soundEffects';

export default function Navbar({ activeSection, colorTheme, setColorTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [muted, setMuted] = useState(getIsMuted());

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMuteToggle = () => {
    const newState = toggleMute();
    setMuted(newState);
    if (!newState) playClickSound();
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Sparkles },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'education', label: 'Experience', icon: GraduationCap },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollTo = (id) => {
    playClickSound();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themes = [
    { name: 'cyan', label: 'Cyan Cyber', bg: 'bg-[#00f5c4]' },
    { name: 'purple', label: 'Neon Purple', bg: 'bg-[#c084fc]' },
    { name: 'emerald', label: 'Matrix Emerald', bg: 'bg-[#34d399]' },
    { name: 'gold', label: 'Solar Gold', bg: 'bg-[#fbbf24]' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('hero')}
          onMouseEnter={playHoverSound}
          className="flex items-center gap-3 group text-left focus:outline-none cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-slate-950 border-2 border-cyan-400 flex items-center justify-center font-mono font-bold text-cyan-400 text-lg shadow-[0_0_15px_rgba(0,245,196,0.35)] group-hover:shadow-[0_0_22px_rgba(0,245,196,0.7)] group-hover:scale-105 transition-all">
            AS
          </div>
          <div>
            <span className="font-black text-sm sm:text-base tracking-wider text-white flex items-center gap-1.5 uppercase">
              ANITHA SURIYAMOORTHI
            </span>
            <span className="text-[10px] sm:text-xs font-mono text-cyan-400 block tracking-wider font-semibold">
              DATA ANALYST
            </span>
          </div>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-1.5 bg-[#050c18]/80 backdrop-blur-xl px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={playHoverSound}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all flex items-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold shadow-md shadow-cyan-500/25'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Mobile Controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleMuteToggle}
            className="p-2 rounded-lg bg-slate-900/80 border border-white/10 text-slate-300"
          >
            {muted ? <VolumeX className="w-4 h-4 text-slate-500" /> : <Volume2 className="w-4 h-4 text-cyan-400" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-900/80 border border-cyan-500/30 text-cyan-400 focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/15 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`p-3 rounded-xl text-left text-xs font-semibold flex items-center gap-2.5 ${
                    activeSection === item.id
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'bg-slate-900/60 text-slate-300 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Theme Switcher */}
          <div className="pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">Color Theme:</span>
            <div className="flex items-center gap-2">
              {themes.map((t) => (
                <button
                  key={t.name}
                  onClick={() => {
                    playClickSound();
                    setColorTheme(t.name);
                  }}
                  className={`w-6 h-6 rounded-full ${t.bg} transition-transform ${
                    colorTheme === t.name ? 'ring-2 ring-white scale-110' : 'opacity-70'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
