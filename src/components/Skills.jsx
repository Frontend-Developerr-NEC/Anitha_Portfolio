import React, { useState } from 'react';
import {
  FileSpreadsheet,
  BarChart3,
  Cpu,
  Database,
  GitBranch,
  Layers,
  CheckCircle2,
  Cloud,
  Box
} from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

export default function Skills() {
  const [filter, setFilter] = useState('all');

  const skillsData = [
    // 1. Programming & Analysis
    {
      name: 'Python',
      category: 'programming',
      categoryLabel: 'Programming & Analysis',
      icon: Cpu,
      desc: 'Exploratory data analysis (EDA), data cleaning, statistical analysis, and data transformation using Pandas, NumPy, Matplotlib, and Seaborn.',
      color: 'from-blue-400 to-indigo-600',
      badgeColor: 'border-blue-500/40 text-blue-300 bg-blue-950/40',
      tag: 'Programming & Analysis',
      pills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'EDA', 'Statistical Analysis']
    },
    {
      name: 'SQL',
      category: 'programming',
      categoryLabel: 'Programming & Analysis',
      icon: Database,
      desc: 'Advanced relational data querying, multi-table Joins, Subqueries, Common Table Expressions (CTEs), CASE statements, and Window Functions.',
      color: 'from-cyan-400 to-blue-600',
      badgeColor: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/40',
      tag: 'Programming & Analysis',
      pills: ['Joins', 'Subqueries', 'CTEs', 'Window Functions', 'CASE Statements', 'Query Optimization']
    },

    // 2. Data Analysis
    {
      name: 'Data Analysis & EDA',
      category: 'analysis',
      categoryLabel: 'Data Analysis',
      icon: Layers,
      desc: 'Systematic data cleaning, Exploratory Data Analysis (EDA), missing value treatment, outlier detection, data transformation, and feature preparation.',
      color: 'from-emerald-400 to-teal-600',
      badgeColor: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/40',
      tag: 'Data Analysis',
      pills: ['Data Cleaning', 'EDA', 'Missing Value Treatment', 'Outlier Detection', 'Transformation', 'Feature Prep']
    },

    // 3. BI & Visualization
    {
      name: 'Power BI',
      category: 'bi',
      categoryLabel: 'BI & Visualization',
      icon: BarChart3,
      desc: 'Interactive business intelligence dashboards, DAX measures, KPIs, data modeling, calculated fields, LOD expressions, and dynamic filters & parameters.',
      color: 'from-amber-400 to-yellow-600',
      badgeColor: 'border-amber-500/40 text-amber-300 bg-amber-950/40',
      tag: 'BI & Visualization',
      pills: ['Calculated Fields', 'LOD Expressions', 'Dashboards', 'Filters & Parameters', 'Power BI (DAX, KPIs)', 'Data Modeling']
    },

    // 4. Excel
    {
      name: 'Excel',
      category: 'excel',
      categoryLabel: 'Excel',
      icon: FileSpreadsheet,
      desc: 'Advanced lookup formulas (XLOOKUP, VLOOKUP), dynamic Pivot Tables, data validation, executive role-based KPI dashboards, and variance diagnostics.',
      color: 'from-green-400 to-emerald-600',
      badgeColor: 'border-green-500/40 text-green-300 bg-green-950/40',
      tag: 'Excel',
      pills: ['XLOOKUP', 'VLOOKUP', 'Pivot Tables', 'Dashboards', 'Data Validation', 'Sales Diagnostics']
    },

    // 5. Databases & Tools
    {
      name: 'MySQL & SQL Server',
      category: 'databases',
      categoryLabel: 'Databases & Tools',
      icon: Database,
      desc: 'Relational database schema modeling, data integrity enforcement, indexing, aggregate queries, and pricing variance analysis.',
      color: 'from-sky-400 to-blue-500',
      badgeColor: 'border-sky-500/40 text-sky-300 bg-sky-950/40',
      tag: 'Databases & Tools',
      pills: ['MySQL', 'SQL Server', 'Relational Schema', 'Aggregations', 'Integrity Constraints']
    },
    {
      name: 'AWS Data Workflows',
      category: 'databases',
      categoryLabel: 'Databases & Tools',
      icon: Cloud,
      desc: 'AWS-based data workflows, large-scale dataset handling, data validation pipelines, quality checks, and systematic error analysis.',
      color: 'from-purple-400 to-indigo-600',
      badgeColor: 'border-purple-500/40 text-purple-300 bg-purple-950/40',
      tag: 'Databases & Tools',
      pills: ['AWS Workflows', 'Data Validation', 'Quality Checks', 'Error Analysis', 'Large Datasets']
    },
    {
      name: 'LiDAR & Quality Validation',
      category: 'analysis',
      categoryLabel: 'Data Analysis & QA',
      icon: CheckCircle2,
      desc: '3 years of professional experience in 2D/3D LiDAR annotation, point cloud bounding boxes, segmentation, object classification, defect resolution, and QA benchmarks.',
      color: 'from-rose-400 to-pink-600',
      badgeColor: 'border-rose-500/40 text-rose-300 bg-rose-950/40',
      tag: 'Quality & Workflows',
      pills: ['2D/3D LiDAR', 'Point Cloud', 'Quality Validation', 'AI/ML Model Training', 'Error Analysis', 'QA Standards']
    },
    {
      name: 'Git & GitHub',
      category: 'databases',
      categoryLabel: 'Databases & Tools',
      icon: GitBranch,
      desc: 'Distributed version control, GitHub portfolio repositories, project code documentation, tracking, and collaborative workflow management.',
      color: 'from-teal-400 to-cyan-500',
      badgeColor: 'border-teal-500/40 text-teal-300 bg-teal-950/40',
      tag: 'Databases & Tools',
      pills: ['Git CLI', 'GitHub Repositories', 'Version Control', 'Project Tracking']
    }
  ];

  const filterCategories = [
    { id: 'all', label: 'All Skills (9)' },
    { id: 'programming', label: 'Programming & SQL' },
    { id: 'analysis', label: 'Data Analysis & QA' },
    { id: 'bi', label: 'Power BI & Viz' },
    { id: 'excel', label: 'Excel' },
    { id: 'databases', label: 'Databases & Tools' },
  ];

  const filteredSkills = filter === 'all'
    ? skillsData
    : skillsData.filter((s) => s.category === filter);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Core analytical skills from official resume: Programming & Analysis (Python, SQL), Data Analysis & EDA, BI & Visualization (Power BI), Databases & Tools (MySQL, SQL Server, AWS Workflows), and Advanced Excel.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {filterCategories.map((tab) => (
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

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <div
                key={idx}
                onMouseEnter={playHoverSound}
                className="glass-card rounded-2xl p-6 border border-white/15 flex flex-col justify-between group hover:border-cyan-500/60 shadow-xl transition-all duration-300"
              >
                <div className="space-y-4">
                  {/* Card Header: Icon & Category Tag */}
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} p-[1px] shadow-lg`}>
                      <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center text-white">
                        <Icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                    <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border shadow-sm ${skill.badgeColor}`}>
                      {skill.tag}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-extrabold text-white text-lg group-hover:text-cyan-300 transition-colors drop-shadow-sm">
                      {skill.name}
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed font-normal drop-shadow-sm">
                      {skill.desc}
                    </p>
                  </div>

                  {/* Skill Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {skill.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-900/90 text-slate-300 border border-white/10"
                      >
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
