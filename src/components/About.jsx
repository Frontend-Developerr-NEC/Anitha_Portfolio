import React from 'react';
import { User, Award, Globe, BookOpen, HeartHandshake, CheckCircle2, Layers, Sparkles, GraduationCap, MapPin, CheckCircle } from 'lucide-react';
import { playHoverSound } from '../utils/soundEffects';

export default function About() {

  const Activities = [
    { title: 'Personal side projects', desc: 'Developing modern 3D web applications, responsive tools, and AI prototypes' },
    { title: 'Open-Source projects contribution', desc: 'Actively exploring and contributing to open-source developer repositories' },
    { title: 'Facial Emotion Recognition Research', desc: 'Building deep learning computer vision models with real-time video feedback' },
    { title: 'Cybersecurity SOC Architecture', desc: 'Engineering threat telemetry and user-centric anomaly scoring interfaces' }
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            About <span className="gradient-text">Anitha Suriyamoorthi</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Discover my background, data analytics expertise, LiDAR quality track record, and core competencies.
          </p>
        </div>

        {/* Main Grid: Profile Photo Card & Career Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Profile Photo Showcase Card */}
          <div className="lg:col-span-3 glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/30 flex flex-col items-center justify-between relative overflow-hidden shadow-2xl space-y-6 text-center group">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Photo with Glowing Ring */}
            <div className="relative pt-2">
              <div className="absolute bg-gradient-to-tr from-cyan-400 via-sky-500 to-purple-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-48 sm:w-60 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Anitha Suriyamoorthi"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            </div>

          </div>

          {/* Career Objective Box */}
          <div className="lg:col-span-9 glass-panel rounded-3xl p-8 sm:p-10 border border-cyan-500/30 flex flex-col justify-between relative overflow-hidden shadow-2xl space-y-6">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-950/90 border border-cyan-500/40 text-cyan-400 shadow-md">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-sm">Professional Summary</h3>
                  <span className="text-xs text-cyan-300 font-mono font-semibold">Mission & Analytical Outlook</span>
                </div>
              </div>

              <blockquote className="text-slate-100 italic text-base sm:text-lg leading-relaxed border-l-4 border-cyan-500 pl-5 py-3 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] font-medium bg-slate-950/60 rounded-r-2xl">
                "Detail-oriented Data Analyst with strong academic and project-based exposure, backed by 3 years of professional experience in LiDAR data annotation and quality-driven data workflows."
              </blockquote>

              <div className="space-y-3 text-slate-200 text-sm sm:text-base leading-relaxed font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
                <p>
                  Holding a <strong>Bachelor degree in Computer Science from Jairam Arts and Science College (2016–2018)</strong>, 
                  I bring 3 years of professional experience handling large-scale datasets, performing data validation, quality checks, 
                  and error analysis to maintain strict project standards at <strong>Objectways Technologies</strong> and <strong>Iva Technology</strong>.
                </p>
                <p>
                  Having completed a comprehensive Data Analytics course, I possess hands-on expertise in <strong>Python (Pandas, NumPy, Matplotlib, Seaborn)</strong>, 
                  <strong>SQL (Joins, Subqueries, CTEs, Window Functions)</strong>, <strong>Power BI (DAX, KPIs, Data Modeling)</strong>, and 
                  <strong>Advanced Excel (XLOOKUP, Pivot Tables, Dashboards)</strong>. Experienced in identifying patterns, validating data quality, and translating complex data into actionable business insights.
                </p>
              </div>

              {/* Core Competencies Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 text-center">
                  <span className="text-xs font-mono text-cyan-400 font-bold block">3+ Years</span>
                  <span className="text-[11px] text-slate-300">Data Workflows</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 text-center">
                  <span className="text-xs font-mono text-[#b6f23e] font-bold block">Python & SQL</span>
                  <span className="text-[11px] text-slate-300">EDA & Analytics</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 text-center">
                  <span className="text-xs font-mono text-purple-400 font-bold block">Power BI & Excel</span>
                  <span className="text-[11px] text-slate-300">Dashboards & KPIs</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/70 border border-white/10 text-center">
                  <span className="text-xs font-mono text-amber-400 font-bold block">QA & Validation</span>
                  <span className="text-[11px] text-slate-300">Quality Checks</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
