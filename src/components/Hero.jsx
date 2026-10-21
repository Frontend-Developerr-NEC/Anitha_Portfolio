import React, { useState } from 'react';
import { ArrowRight, Download, Mail, Rotate3d } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import Canvas3D from './Canvas3D';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const modelTemplates = [
  { id: 'laptop', name: '3D Dev Station', icon: '💻', desc: 'Interactive laptop & code screen' },
  { id: 'geosphere', name: 'Geodesic Sphere', icon: '🌐', desc: 'Concentric wireframe icosphere' },
  { id: 'reactor', name: 'Quantum Reactor', icon: '⚛️', desc: 'Multi-axis gyroscopic core' },
  { id: 'globe', name: 'Neural AI Globe', icon: '🌍', desc: 'Network grid & neural vertices' },
  { id: 'crystal', name: 'Matrix Crystal', icon: '💎', desc: 'Gem-cut refractive polyhedron' },
  { id: 'portal', name: 'Nexus Portal', icon: '🌀', desc: 'Spacetime curvature vortex' },
];

export default function Hero({ 
  scrollToSection, 
  colorTheme = 'cyan', 
  is3DInteractive = true, 
  setIs3DInteractive 
}) {
  const [template, setTemplate] = useState('laptop');
  const [wireframeOnly, setWireframeOnly] = useState(false);
  const [showModelPicker, setShowModelPicker] = useState(false);

  const cycleTemplate = () => {
    playClickSound();
    const currentIndex = modelTemplates.findIndex((t) => t.id === template);
    const nextIndex = (currentIndex + 1) % modelTemplates.length;
    setTemplate(modelTemplates[nextIndex].id);
  };

  const selectTemplate = (id) => {
    playClickSound();
    setTemplate(id);
    setShowModelPicker(false);
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 md:px-10 lg:px-14 xl:px-16 overflow-hidden">
      {/* Background 3D Canvas - strictly scoped to Home section */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Canvas3D 
          colorTheme={colorTheme} 
          isInteractive={is3DInteractive} 
          template={template} 
          wireframeOnly={wireframeOnly}
        />
      </div>

      {/* Ambient edge fade so navbar & transition to next section are smooth */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/90" />

      {/* Subtle Glow backdrop Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-[2]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none animate-pulse-glow z-[2]" />

      {/* Main Hero Grid Content */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10 pointer-events-none">
        
        {/* Left Column Text Content - Clean, responsive glassmorphic backdrop */}
        <div className="lg:col-span-7 xl:col-span-6 w-full space-y-6 text-center lg:text-left pointer-events-auto">
          
          {/* Eyebrow Pill
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-mono font-semibold tracking-wider uppercase backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" />
            <span>Interactive 3D Portfolio & Resume</span>
          </div> */}

          {/* Headline with Hi, I'm and large gradient name */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
              <span className="text-white block font-bold">Hi, I'm</span>
              <span className="bg-gradient-to-r from-[#00f5c4] via-[#38bdf8] to-[#c084fc] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,245,196,0.35)]">
                ANITHA SURIYAMOORTHI
              </span>
            </h1>
          </div>

          {/* Description Paragraph */}
          <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Detail-oriented Data Analyst with strong project-based exposure, backed by 3 years of professional
            experience in LiDAR data annotation and quality-driven workflows. Hands-on in Python, SQL, Power BI,
            and Excel to clean datasets, uncover patterns, and translate data into actionable business insights.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-3">
            <button
              onClick={() => {
                playClickSound();
                scrollToSection('projects');
              }}
              onMouseEnter={playHoverSound}
              className="px-8 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#00f5c4] via-[#00b4d8] to-[#9333ea] text-slate-950 shadow-[0_0_20px_rgba(0,245,196,0.35)] hover:shadow-[0_0_30px_rgba(0,245,196,0.6)] hover:scale-105 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </button>

            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              download="Anitha_Suriyamoorthi_Resume.pdf"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-7 py-3.5 rounded-full font-bold text-sm bg-slate-900/90 border border-white/20 text-slate-100 hover:text-cyan-400 hover:border-cyan-500/50 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all shadow-md cursor-pointer"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links & Quick Contact Info */}
          <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-300 text-xs sm:text-sm font-medium border-t border-white/10">
            <a
              href="https://github.com/anitha_lab_coder_GitHub"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors drop-shadow-sm cursor-pointer"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/Anithasuriyamoorthi"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors drop-shadow-sm cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4 text-cyan-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="mailto:anithasuriyamoorthi@gmail.com"
              onMouseEnter={playHoverSound}
              className="flex items-center gap-2 hover:text-cyan-400 transition-colors drop-shadow-sm cursor-pointer"
            >
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>anithasuriyamoorthi@gmail.com</span>
            </a>
          </div>

        </div>

        {/* Right Column - Dedicated 3D Interactive Model Stage & Controls */}
        <div className="lg:col-span-5 xl:col-span-6 w-full flex flex-col items-center lg:items-end justify-end pointer-events-none select-none min-h-[320px] sm:min-h-[420px] lg:min-h-[580px] xl:min-h-[640px] relative pb-4">
          
          {/* Interactive Floating 3D Control Pill */}
          <div className="pointer-events-auto flex flex-col items-center lg:items-end gap-3 w-full sm:w-auto">
            
            {/* Quick 3D Model Cycler Pill */}
            <div className="flex items-center gap-2 glass-panel p-2 rounded-2xl border border-cyan-500/40 shadow-2xl backdrop-blur-xl">
              
              {/* Active Model Button (opens picker) */}
              {/* <button
                onClick={() => setShowModelPicker(!showModelPicker)}
                onMouseEnter={playHoverSound}
                className="px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 border border-cyan-500/40 text-cyan-300 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/20 transition-all flex items-center gap-2 shadow-sm cursor-pointer"
                title="Click to view all 3D Models"
              >
                <span>{modelTemplates.find((t) => t.id === template)?.icon}</span>
                <span className="hidden sm:inline">{modelTemplates.find((t) => t.id === template)?.name}</span>
                <span className="sm:hidden">Model</span>
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
              </button> */}

              {/* Cycle to next model */}
              <button
                onClick={cycleTemplate}
                onMouseEnter={playHoverSound}
                title="Next 3D Model"
                className="p-1.5 rounded-xl bg-slate-900 text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/20 border border-white/10 transition-all cursor-pointer"
              >
                <Rotate3d className="w-4 h-4" />
              </button>

              {/* Wireframe toggle */}
              {/* <button
                onClick={() => {
                  playClickSound();
                  setWireframeOnly(!wireframeOnly);
                }}
                onMouseEnter={playHoverSound}
                title={wireframeOnly ? 'Switch to Solid Material' : 'Switch to Wireframe Mode'}
                className={`p-1.5 rounded-xl border transition-all cursor-pointer ${
                  wireframeOnly 
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-sm shadow-cyan-500/50' 
                    : 'bg-slate-900 text-slate-300 hover:text-cyan-400 border-white/10'
                }`}
              >
                <Box className="w-4 h-4" />
              </button> */}

              {/* Orbit rotation toggle */}
              {/* {setIs3DInteractive && (
                <button
                  onClick={() => {
                    playClickSound();
                    setIs3DInteractive(!is3DInteractive);
                  }}
                  onMouseEnter={playHoverSound}
                  title={is3DInteractive ? 'Pause 3D Orbit' : 'Resume 3D Orbit'}
                  className={`px-2.5 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase transition-all cursor-pointer ${
                    is3DInteractive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/50'
                      : 'bg-slate-900 text-slate-400 border border-white/10'
                  }`}
                >
                  {is3DInteractive ? 'Orbit ON' : 'Orbit OFF'}
                </button>
              )} */}

            </div>

            {/* Model Picker Drawer */}
            {showModelPicker && (
              <div className="glass-panel p-3 rounded-2xl border border-cyan-500/50 shadow-2xl backdrop-blur-2xl grid grid-cols-2 sm:grid-cols-3 gap-2 w-full max-w-sm animate-in fade-in zoom-in-95 duration-150">
                {modelTemplates.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => selectTemplate(m.id)}
                    onMouseEnter={playHoverSound}
                    className={`p-2 rounded-xl text-left transition-all border cursor-pointer ${
                      template === m.id
                        ? 'bg-cyan-500/20 border-cyan-400 text-white shadow-sm shadow-cyan-500/30'
                        : 'bg-slate-900/80 border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-white'
                    }`}
                  >
                    <div className="text-lg">{m.icon}</div>
                    <div className="text-[11px] font-bold truncate mt-1">{m.name}</div>
                    <div className="text-[9px] text-slate-400 truncate">{m.desc}</div>
                  </button>
                ))}
              </div>
            )}

            {/* Orbit Instructions Pill */}
            {/* <div className="text-[10px] font-mono text-cyan-300/80 flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/60 border border-cyan-500/20 backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
              <span>Drag to rotate • Scroll to zoom</span>
            </div> */}

          </div>

        </div>

      </div>
    </section>
  );
}
