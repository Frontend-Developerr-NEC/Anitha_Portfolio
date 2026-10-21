import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, Building2, CheckCircle2, Award, MapPin } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

export default function EducationTimeline() {
  const [filter, setFilter] = useState('all'); // 'all' | 'experience' | 'education'

  const timelineData = [
    {
      type: 'experience',
      title: 'Quality Analyst',
      organization: 'Iva Technology',
      location: 'Coimbatore, Tamil Nadu',
      period: 'Jun 2025 – May 2026',
      badge: 'QA & Validation',
      badgeColor: 'border-emerald-500/50 text-emerald-300 bg-slate-950 font-bold',
      nodeBg: 'bg-emerald-500 shadow-emerald-500/50',
      highlights: [
        'Performed quality validation and review of 2D/3D LiDAR annotations, identifying errors and inconsistencies across large-scale datasets.',
        'Reviewed bounding boxes, segmentation, and object classification against project guidelines and quality standards.',
        'Worked with annotation teams to resolve defects and maintain accuracy, consistency, and productivity benchmarks.'
      ],
    },
    {
      type: 'experience',
      title: 'LiDAR Data Analyst | Senior Analyst',
      organization: 'Objectways Technologies',
      location: 'Karur, Tamil Nadu',
      period: 'Dec 2021 – Mar 2024',
      badge: 'Data Analyst & Lead',
      badgeColor: 'border-cyan-500/50 text-cyan-300 bg-slate-950 font-bold',
      nodeBg: 'bg-cyan-500 shadow-cyan-500/50',
      highlights: [
        'Worked on 2D/3D LiDAR annotation for AI/ML model training, including point cloud bounding boxes, segmentation, and object classification.',
        'Handled large-scale datasets and performed data validation, quality checks, and error analysis to maintain accuracy and project standards.',
        'Collaborated with QA teams and project leads to resolve annotation issues and improve dataset reliability.'
      ],
    },
    {
      type: 'education',
      title: 'Bachelor degree in Computer Science',
      organization: 'Jairam Arts and Science College',
      location: 'Tamil Nadu, India',
      period: '2016 – 2018',
      badge: 'Undergraduate Degree',
      badgeColor: 'border-purple-500/50 text-purple-300 bg-slate-950 font-bold',
      nodeBg: 'bg-purple-500 shadow-purple-500/50',
      highlights: [
        'Foundational curriculum in computer science, algorithmic logic, programming principles, and database management.',
        'Strong academic foundation supporting advanced analytical pipelines, relational database architecture, and data engineering workflows.'
      ],
    },
    {
      type: 'education',
      title: 'Professional Certifications',
      organization: 'HackerRank & Infosys Springboard',
      location: 'Online Verified Credentials',
      period: 'Data Analytics Credentials',
      badge: 'Verified Certifications',
      badgeColor: 'border-amber-500/50 text-amber-300 bg-slate-950 font-bold',
      nodeBg: 'bg-amber-500 shadow-amber-500/50',
      highlights: [
        'MySQL Basics – HackerRank',
        'Using Generative AI Tools to Learn Python – Infosys Springboard',
        'Data Analytics using Excel – HackerRank'
      ],
    },
  ];

  const filteredData = filter === 'all' 
    ? timelineData 
    : timelineData.filter((item) => item.type === filter);

  return (
    <section id="education" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career & Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Professional industry experience in LiDAR data analytics & quality assurance, paired with academic computer science education and certifications.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {[
            { id: 'all', label: 'All Journey (4)' },
            { id: 'experience', label: 'Work Experience (2)' },
            { id: 'education', label: 'Education & Certifications (2)' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                playClickSound();
                setFilter(tab.id);
              }}
              onMouseEnter={playHoverSound}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-extrabold transition-all border shadow-md cursor-pointer ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border-transparent shadow-lg shadow-cyan-500/30 scale-105'
                  : 'bg-slate-900/90 border-white/20 text-slate-100 hover:text-white hover:border-cyan-500/50 hover:scale-102'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Central Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-purple-500 to-emerald-500 -translate-x-1/2 opacity-50" />

          <div className="space-y-12">
            {filteredData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  onMouseEnter={playHoverSound}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-slate-950 border-4 border-cyan-400 z-20 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                    <div className={`w-2.5 h-2.5 rounded-full ${item.nodeBg}`} />
                  </div>

                  {/* Card Box */}
                  <div className="w-full sm:w-[calc(50%-2.5rem)] ml-10 sm:ml-0">
                    <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/15 group hover:border-cyan-500/60 transition-all duration-300 shadow-2xl space-y-4">
                      
                      {/* Header info */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className={`text-xs font-mono px-3 py-1 rounded-full border ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-slate-200 font-bold flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                            {item.period}
                          </span>
                        </div>
                      </div>

                      {/* Degree/Role & School/Company */}
                      <div>
                        <h3 className="text-xl font-extrabold text-white group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-bold text-slate-200 flex items-center gap-1.5 mt-1">
                          <Building2 className="w-4 h-4 text-purple-400 shrink-0" />
                          {item.organization}
                        </p>
                        {item.location && (
                          <p className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3 text-cyan-400 shrink-0" />
                            {item.location}
                          </p>
                        )}
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2 pt-2 border-t border-white/15">
                        {item.highlights.map((hl, i) => (
                          <li key={i} className="text-xs text-slate-200 flex items-start gap-2 font-medium">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
