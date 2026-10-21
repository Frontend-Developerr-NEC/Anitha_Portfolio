import React, { useState } from 'react';
import { FileText, Eye, Mail, Phone, Download, Copy, Check, ExternalLink, MapPin, Briefcase, GraduationCap, Award } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

export default function ResumeSection() {
  const [viewMode, setViewMode] = useState('sheet'); // 'sheet' | 'pdf'
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = (text, type) => {
    playClickSound();
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(''), 2500);
  };

  return (
    <section id="resume" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <FileText className="w-3.5 h-3.5 text-cyan-400" />
            <span>Official CV</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Official <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            View the official resume CV document of Anitha Suriyamoorthi
          </p>
        </div>

        {/* Control Bar: Mode Toggle & Action Buttons */}
        <div className="max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-4 glass-panel p-4 rounded-2xl border border-white/15 shadow-xl">
          {/* Toggle View Mode */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                playClickSound();
                setViewMode('sheet');
              }}
              onMouseEnter={playHoverSound}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'sheet'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Interactive CV</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                setViewMode('pdf');
              }}
              onMouseEnter={playHoverSound}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
                viewMode === 'pdf'
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>PDF Document View</span>
            </button>
          </div>

          {/* Action Tools */}
          <div className="flex items-center gap-2">
            <a
              href={`${import.meta.env.BASE_URL}Resume.pdf`}
              download="Anitha_Suriyamoorthi_Resume.pdf"
              onClick={playClickSound}
              onMouseEnter={playHoverSound}
              className="px-4 py-2.5 rounded-xl bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Resume Content View */}
        <div className="max-w-4xl mx-auto">
          {viewMode === 'sheet' ? (
            /* Interactive Resume Sheet matching Resume PDF content */
            <div className="glass-panel rounded-3xl p-8 sm:p-12 border border-cyan-500/30 space-y-8 shadow-2xl relative overflow-hidden text-slate-200">
              
              {/* Header Contact Details */}
              <div className="border-b border-white/15 pb-6 text-center space-y-3">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight drop-shadow-sm">
                  ANITHA SURIYAMOORTHI
                </h1>
                
                {/* Contact bar: Phone | Email | LinkedIn | GitHub */}
                <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1.5 text-xs font-mono text-slate-300">
                  <div className="inline-flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>+91 9384149860</span>
                    <button
                      onClick={() => copyToClipboard('+919384149860', 'phone')}
                      className="text-slate-400 hover:text-cyan-400 p-0.5 transition-colors cursor-pointer"
                      title="Copy Phone"
                    >
                      {copiedText === 'phone' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  <span className="text-white/20 hidden sm:inline">|</span>

                  <div className="inline-flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <a href="mailto:anithasuriyamoorthi@gmail.com" className="hover:underline hover:text-cyan-300 transition-colors">
                      anithasuriyamoorthi@gmail.com
                    </a>
                    <button
                      onClick={() => copyToClipboard('anithasuriyamoorthi@gmail.com', 'email')}
                      className="text-slate-400 hover:text-cyan-400 p-0.5 transition-colors cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedText === 'email' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    </button>
                  </div>

                  <span className="text-white/20 hidden sm:inline">|</span>

                  <div className="inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>Tamil Nadu, India</span>
                  </div>
                </div>

                {/* Social Profiles: LinkedIn | GitHub */}
                <div className="flex items-center justify-center gap-3 pt-0.5 text-xs font-mono">
                  <a
                    href="https://www.linkedin.com/in/Anithasuriyamoorthi"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHoverSound}
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors font-bold"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5" />
                    <span>Anithasuriyamoorthi</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>

                  <span className="text-white/20">|</span>

                  <a
                    href="https://github.com/anitha_lab_coder_GitHub"
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={playHoverSound}
                    className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 hover:underline transition-colors font-bold"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>anitha_lab_coder_GitHub</span>
                    <ExternalLink className="w-3 h-3 opacity-70" />
                  </a>
                </div>
              </div>

              {/* PROFESSIONAL SUMMARY */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
                  PROFESSIONAL SUMMARY
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-200">
                  Detail-oriented Data Analyst (Fresher) with strong academic and project-based exposure, backed by 3 years of professional experience in LiDAR data annotation and quality-driven data workflows. Recently completed a comprehensive Data Analytics course, gaining hands-on experience in Python, SQL, Power BI and Excel. Strong in data cleaning, exploratory data analysis (EDA), statistical analysis, and dashboard development. Experienced in handling large datasets, validating data quality, identifying patterns, and translating data into actionable business insights.
                </p>
              </div>

              {/* TECHNICAL SKILLS */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
                  TECHNICAL SKILLS
                </h3>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-bold text-white min-w-[200px] shrink-0">
                      Programming & Analysis:
                    </span>
                    <span className="text-slate-200">Python (Pandas, NumPy, Matplotlib, Seaborn), SQL (Joins, Subqueries, CTEs, Window Functions)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-bold text-white min-w-[200px] shrink-0">
                      Data Analysis:
                    </span>
                    <span className="text-slate-200">Data Cleaning, EDA, Missing Value Treatment, Outlier Detection, Data Transformation, Feature Preparation</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-bold text-white min-w-[200px] shrink-0">
                      BI & Visualization:
                    </span>
                    <span className="text-slate-200">Calculated Fields, LOD Expressions, Dashboards, Filters & Parameters, Power BI (DAX, KPIs, Data Modeling)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-bold text-white min-w-[200px] shrink-0">
                      Databases & Tools:
                    </span>
                    <span className="text-slate-200">MySQL, SQL Server, AWS-based data workflows (Data Validation & Quality Checks)</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                    <span className="font-bold text-white min-w-[200px] shrink-0">
                      Excel:
                    </span>
                    <span className="text-slate-200">XLOOKUP, VLOOKUP, Pivot Tables, Dashboards</span>
                  </div>
                </div>
              </div>

              {/* PROFESSIONAL EXPERIENCE */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
                  PROFESSIONAL EXPERIENCE
                </h3>

                <div className="space-y-4">
                  {/* Iva Technology */}
                  <div className="space-y-1.5">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h4 className="font-extrabold text-white text-sm sm:text-base">
                          Iva Technology, Coimbatore
                        </h4>
                        <div className="text-xs font-mono text-cyan-300">
                          Quality Analyst
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        Jun 2025 – May 2026
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
                      <li className="leading-relaxed">
                        Performed quality validation and review of 2D/3D LiDAR annotations, identifying errors and inconsistencies across large-scale datasets.
                      </li>
                      <li className="leading-relaxed">
                        Reviewed bounding boxes, segmentation, and object classification against project guidelines and quality standards.
                      </li>
                      <li className="leading-relaxed">
                        Worked with annotation teams to resolve defects and maintain accuracy, consistency, and productivity benchmarks.
                      </li>
                    </ul>
                  </div>

                  {/* Objectways Technologies */}
                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                      <div>
                        <h4 className="font-extrabold text-white text-sm sm:text-base">
                          Objectways Technologies, Karur
                        </h4>
                        <div className="text-xs font-mono text-cyan-300">
                          LiDAR Data Analyst | Senior Analyst
                        </div>
                      </div>
                      <span className="text-xs font-mono text-slate-400">
                        Dec 2021 – Mar 2024
                      </span>
                    </div>
                    <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
                      <li className="leading-relaxed">
                        Worked on 2D/3D LiDAR annotation for AI/ML model training, including point cloud bounding boxes, segmentation, and object classification.
                      </li>
                      <li className="leading-relaxed">
                        Handled large-scale datasets and performed data validation, quality checks, and error analysis to maintain accuracy and project standards.
                      </li>
                      <li className="leading-relaxed">
                        Collaborated with QA teams and project leads to resolve annotation issues and improve dataset reliability.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* PROJECTS */}
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
                  PROJECTS
                </h3>

                <div className="space-y-4">
                  {/* Healthplus Care Database */}
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-white text-sm sm:text-base">
                      Healthplus Care Database | SQL
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Designed a relational database for 18 clinics and 220+ specialists, leveraging advanced SQL joins, subqueries, and CASE statements to analyze fee structures, identify pricing variances, and support clinic fee optimization.
                    </p>
                  </div>

                  {/* FreshMart */}
                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    <h4 className="font-extrabold text-white text-sm sm:text-base">
                      FreshMart Sales Dashboard | Excel
                    </h4>
                    <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
                      <li className="leading-relaxed">
                        FreshMart's grocery sales data (2,500+ transactions across customers, products, stores, employees, and suppliers) existed as disconnected raw tables with no tailored view for different business functions.
                      </li>
                      <li className="leading-relaxed">
                        Built a role-based Excel dashboard so Store Managers, Product Managers, Marketing, Operations, and Executive/Finance teams could each get insights relevant to their function from the same dataset.
                      </li>
                      <li className="leading-relaxed">
                        Enabled each stakeholder group to self-serve relevant metrics from one workbook, revealing insights such as Gold-tier members spending ~₹1,673 per order versus ~₹721 for Bronze-tier, informing loyalty-program targeting and category investment decisions.
                      </li>
                    </ul>
                  </div>

                  {/* TrendKart */}
                  <div className="space-y-1.5 pt-3 border-t border-white/10">
                    <h4 className="font-extrabold text-white text-sm sm:text-base">
                      TrendKart Fashion Sales Analysis Dashboard | Excel
                    </h4>
                    <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
                      <li className="leading-relaxed">
                        Cleaned and transformed retail sales data using Excel functions and PivotTables.
                      </li>
                      <li className="leading-relaxed">
                        Built a dynamic dashboard to monitor key sales metrics and trends for business decision-making.
                      </li>
                      <li className="leading-relaxed">
                        Applied analytical thinking and problem-solving to diagnose a 30.6% month-over-month sales decline, then communicated findings and recovery recommendations in simple, clear language for business stakeholders.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* EDUCATION */}
              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
                  EDUCATION
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 text-xs sm:text-sm">
                  <div>
                    <div className="font-extrabold text-white">
                      Bachelor degree in Computer Science
                    </div>
                    <div className="text-xs text-slate-300">Jairam Arts and Science College</div>
                  </div>
                  <div className="text-xs font-mono text-cyan-400 font-semibold sm:text-right">
                    2016 – 2018
                  </div>
                </div>
              </div>

              {/* CERTIFICATION */}
              <div className="space-y-2">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-cyan-400 border-b border-cyan-500/30 pb-1">
                  CERTIFICATION
                </h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-xs sm:text-sm text-slate-300">
                  <li className="leading-relaxed">MySQL Basics – HackerRank</li>
                  <li className="leading-relaxed">Using Generative AI Tools to Learn Python – Infosys Springboard</li>
                  <li className="leading-relaxed">Data Analytics using Excel – HackerRank</li>
                </ul>
              </div>

            </div>
          ) : (
            /* PDF Document View */
            <div className="glass-panel rounded-3xl p-4 sm:p-6 border border-cyan-500/30 space-y-4 shadow-2xl">
              <div className="flex items-center justify-between px-2">
                <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                  <FileText className="w-4 h-4 text-cyan-400" />
                  Official Resume PDF Document
                </span>
                <a
                  href={`${import.meta.env.BASE_URL}Resume.pdf`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-cyan-400 hover:underline flex items-center gap-1"
                >
                  <span>Open In New Tab</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="w-full h-[700px] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                <iframe
                  src={`${import.meta.env.BASE_URL}Resume.pdf`}
                  className="w-full h-full"
                  title="Anitha Suriyamoorthi Resume PDF"
                />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
