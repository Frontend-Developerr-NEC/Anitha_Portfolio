import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  FolderGit2, 
  ShieldAlert, 
  Calendar, 
  Check, 
  RefreshCw, 
  X, 
  BarChart3, 
  Sparkles, 
  ChevronRight,
  Layers,
  ArrowUpRight,
  ExternalLink,
  Maximize2,
  Eye,
  TrendingUp,
  ShoppingBag,
  Filter,
  ArrowDownRight,
  AlertTriangle
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

export default function Projects() {
  // Active in-page case study state (defaults to null, expands on demand)
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  // Active interactive dashboard simulator modal
  const [selectedDashboard, setSelectedDashboard] = useState(null);

  // Lock background scrolling and enable Escape key to close modal
  useEffect(() => {
    if (selectedDashboard) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          playClickSound();
          setSelectedDashboard(null);
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [selectedDashboard]);

  // FreshMart Modal View Mode: 'image' | 'simulator'
  const [freshMartModalView, setFreshMartModalView] = useState('image');
  // FreshMart Simulator State
  const [selectedFreshMartRole, setSelectedFreshMartRole] = useState('marketing');

  // TrendKart Modal View Mode: 'image' | 'simulator'
  const [trendKartModalView, setTrendKartModalView] = useState('image');
  // TrendKart Simulator State
  const [selectedTrendKartTab, setSelectedTrendKartTab] = useState('products');
  const [trendKartSelectedChannel, setTrendKartSelectedChannel] = useState('Online');
  const [trendKartSelectedRegion, setTrendKartSelectedRegion] = useState('South Zone 1');

  // HealthPlus Modal View Mode: 'image' | 'simulator'
  const [healthPlusModalView, setHealthPlusModalView] = useState('image');
  // HealthPlus Simulator State
  const [activeSqlQuery, setActiveSqlQuery] = useState('rank');

  // MediCare Modal View Mode: 'image' | 'simulator'
  const [mediCareModalView, setMediCareModalView] = useState('image');
  // MediCare Healthcare Simulator State
  const [activeMediCareQuery, setActiveMediCareQuery] = useState('demand');

  const projectsList = [
    {
      id: 'freshmart',
      category: 'Excel | Pivot Tables | Data Cleaning',
      title: 'FreshMart Retail Performance Dashboard',
      subtitle: 'Role-Based Grocery Analytics & Stakeholder Views',
      image: `${import.meta.env.BASE_URL}projects/freshmart-dashboard.png`,
      desc: 'FreshMart’s grocery sales data (2,500+ transactions across customers, products, stores, employees, and suppliers) existed as disconnected raw tables with no tailored view for different business functions. Built a role-based Excel dashboard so Store Managers, Product Managers, Marketing, Operations, and Executive/Finance teams could each get insights relevant to their function from the same dataset.',
      tech: ['Excel', 'Pivot Tables', 'Data Cleaning', 'Data Validation', 'Segmentation'],
      github: 'https://github.com/anitha_lab_coder_GitHub',
      highlights: [
        "FreshMart's grocery sales data (2,500+ transactions across customers, products, stores, employees, and suppliers) existed as disconnected raw tables with no tailored view for different business functions.",
        "Built a role-based Excel dashboard so Store Managers, Product Managers, Marketing, Operations, and Executive/Finance teams could each get insights relevant to their function from the same dataset.",
        "Cleaned and validated the source tables, then designed five dedicated PivotTable views — regional sales performance for store managers, category & brand profitability for product managers, customer segmentation by membership tier for marketing, a sales-channel x payment-mode matrix for operations, and monthly sales/profit trends for executives/finance — and combined them into one consolidated dashboard sheet.",
        "Enabled each stakeholder group to self-serve relevant metrics from one workbook, revealing insights such as Gold-tier members spending ~ ₹1,673 per order versus ~ ₹721 for Bronze-tier, informing loyalty-program targeting and category investment decisions."
      ],
      metrics: [
        { label: 'Volume', val: '2,500+ Transactions' },
        { label: 'Architecture', val: '5 Role-Based Pivot Views' },
        { label: 'Key Insight', val: 'Gold ~ ₹1,673 vs Bronze ~ ₹721' }
      ]
    },
    {
      id: 'trendkart',
      category: 'Excel | Retail Analytics | Diagnostics',
      title: 'TrendKart Fashion Sales Analysis & Diagnostics',
      subtitle: 'Retail Sales Diagnostics, Performance Recovery & Decline Analysis',
      image: `${import.meta.env.BASE_URL}projects/trendkart-dashboard.png`,
      desc: 'Analyzed 3,000 transaction records across six linked relational tables and diagnosed an acute month-over-month sales decline between October and November. Engineered an interactive executive Excel dashboard featuring dynamic KPI cards (₹9,227,180 Total Sales, ₹1,801,437 Total Profit), multi-criteria slicers (Store Region, Sales Channel, 20 Product Categories), and product/channel decline diagnostics to deliver an actionable merchandise recovery roadmap.',
      tech: ['Excel', 'Pivot Tables', 'Power Query', 'Data Cleaning', 'Slicers', 'Variance Diagnostics'],
      github: 'https://github.com/anitha_lab_coder_GitHub',
      highlights: [
        'Cleaned and transformed retail sales data using Excel functions and PivotTables.',
        'Built a dynamic dashboard to monitor key sales metrics and trends for business decision-making.',
        'Applied analytical thinking and problem-solving to diagnose a 30.6% month-over-month sales decline, then communicated findings and recovery recommendations in simple, clear language for business stakeholders.',
        'Engineered an interactive executive Excel dashboard with dynamic KPI cards displaying ₹9,227,180 Total Sales and ₹1,801,437 Total Profit (19.52% net profit margin).',
        'Configured interactive multi-slicers across Store Region (South Zone 1, 2, 3), Sales Channel (Online & Offline), and 20 distinct fashion categories to empower seamless stakeholder drill-downs.'
      ],
      metrics: [
        { label: 'Total Sales', val: '₹9,227,180' },
        { label: 'Total Profit', val: '₹1,801,437 (19.5%)' },
        { label: 'MoM Diagnostic', val: '30.6% MoM Decline' }
      ]
    },
    {
      id: 'healthplus',
      category: 'MySQL | Relational Analytics | Window Functions',
      title: 'HealthPlus Healthcare Database Analysis',
      subtitle: 'Relational Intelligence, Clinic Optimization & Specialist Fee Ranking',
      image: `${import.meta.env.BASE_URL}projects/healthplus-dashboard.png`,
      desc: 'Designed a relational database for 18 clinics and 220+ specialists, leveraging advanced SQL joins, subqueries, and CASE statements to analyze fee structures, identify pricing variances, and support clinic fee optimization.',
      tech: ['MySQL', 'SQL', 'Window Functions', 'RANK() / LAG()', 'Data Modeling', 'Aggregations'],
      github: 'https://github.com/anitha_lab_coder_GitHub',
      highlights: [
        'Designed a relational database for 18 clinics and 220+ specialists across multi-table healthcare schemas.',
        'Leveraged advanced SQL joins, subqueries, and CASE statements to analyze fee structures and identify pricing variances.',
        'Supported clinic fee optimization and isolated clinical volume leaders across healthcare facilities.',
        'Applied window functions (RANK() OVER (PARTITION BY specialization ORDER BY fee DESC)) to calculate specialization fee gradients.'
      ],
      metrics: [
        { label: 'Relational Scope', val: '18 Clinics & 220+ Doctors' },
        { label: 'Key Technique', val: 'SQL Joins, Subqueries & CASE' },
        { label: 'Core Impact', val: 'Fee Structure Optimization' }
      ]
    },
    {
      id: 'medicare',
      category: 'MySQL | Healthcare Relational Intelligence',
      title: 'MediCare Healthcare Database Analysis',
      subtitle: 'Hospital Relational Intelligence, Specialist Fee Ranking & Capacity Planning',
      image: `${import.meta.env.BASE_URL}projects/medicare-dashboard.png`,
      desc: 'Analyzed hospitals, doctors, and appointments across relational tables using SQL JOIN, GROUP BY, HAVING, and aggregates to identify high-demand specializations, compare average consultation fees, and rank medical staff using LAG() to support capacity planning.',
      tech: ['MySQL', 'SQL', 'JOIN', 'GROUP BY', 'HAVING', 'LAG() Window Function'],
      github: 'https://github.com/anitha_lab_coder_GitHub',
      highlights: [
        'Aggregated multi-hospital appointment data using JOIN, GROUP BY, and HAVING to isolate high-demand departments exceeding 2,000 appointments.',
        'Identified Cardiology (4,280 appointments, 98% doctor capacity) and Neurology (3,420 appointments, 92% doctor capacity) as the top clinical demand drivers.',
        'Engineered window function LAG(consultation_fee) partitioned by specialization to compute physician fee differentials and inform compensation tiers.',
        'Formulated actionable clinical capacity planning recommendations, identifying specialist shortages and optimizing physician rosters across hospital wings.'
      ],
      metrics: [
        { label: 'Relational Schema', val: '3 Core Tables' },
        { label: 'Top Demand', val: 'Cardiology (4,280 Appts)' },
        { label: 'Window Function', val: 'LAG() Fee Ranking' }
      ]
    }
  ];

  const handleOpenCaseStudy = (proj) => {
    playClickSound();
    if (selectedCaseStudy?.id === proj.id) {
      handleCloseCaseStudy();
    } else {
      setSelectedCaseStudy(proj);
      setTimeout(() => {
        const el = document.getElementById('case-study-section');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 120);
    }
  };

  const handleCloseCaseStudy = () => {
    playClickSound();
    setSelectedCaseStudy(null);
    setTimeout(() => {
      const projectsEl = document.getElementById('projects');
      if (projectsEl) {
        projectsEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  };

  const handleOpenDashboard = (proj) => {
    playClickSound();
    setSelectedDashboard(proj);
  };

  const closeModal = () => {
    playClickSound();
    setSelectedDashboard(null);
  };

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Section Header */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-cyan-500/30 shadow-2xl text-center space-y-3 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/50 text-cyan-300 text-xs font-bold uppercase tracking-widest shadow-md">
            <FolderGit2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
            Innovations & <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-2xl mx-auto font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            Retail Performance Analytics, Fashion Sales Diagnostics, Clinical Database Analytics & Healthcare Intelligence.
          </p>
        </div>

        {/* 4 Cards Grid - Strictly Uniform Alignments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {projectsList.map((proj) => {
            const isSelected = selectedCaseStudy?.id === proj.id;
            return (
              <div
                key={proj.id}
                id={proj.id}
                onMouseEnter={playHoverSound}
                className={`scroll-mt-28 bg-[#111417] rounded-2xl overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group ${
                  isSelected 
                    ? 'border-2 border-[#b6f23e] ring-4 ring-[#b6f23e]/20 shadow-lime-500/20' 
                    : 'border border-neutral-800/90 hover:border-neutral-700'
                }`}
              >
                {/* Top Image Preview Banner */}
                <div className="relative h-44 w-full overflow-hidden bg-neutral-900 border-b border-neutral-800/80">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111417] via-transparent to-transparent opacity-50 pointer-events-none" />
                </div>

                {/* Card Body Content - Fixed Height Blocks For True Horizontal Alignment */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    {/* Category in vivid lime green #b6f23e */}
                    <span className="text-[#b6f23e] text-xs font-bold tracking-wide mb-2 block h-5 flex items-center truncate">
                      {proj.category}
                    </span>

                    {/* Project Title (Consistent 56px height block) */}
                    <div className="h-14 flex items-start mb-2.5">
                      <h3 className="text-white font-extrabold text-base leading-snug line-clamp-2">
                        {proj.title}
                      </h3>
                    </div>

                    {/* Project Description (Consistent 80px height block) */}
                    <div className="h-20 mb-4 overflow-hidden">
                      <p className="text-neutral-300 text-xs sm:text-[13px] leading-relaxed line-clamp-4">
                        {proj.desc}
                      </p>
                    </div>

                    {/* Tech Stack Pills (Consistent 64px height block) */}
                    <div className="flex flex-wrap gap-1.5 mb-5 h-16 content-start overflow-hidden">
                      {proj.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-neutral-700/60 bg-[#161a20] px-2.5 py-1 text-[11px] font-medium text-neutral-300 shadow-sm"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Buttons - Aligns Horizontally Across All Cards */}
                  <div className="pt-2 mt-auto">
                    {/* Primary Bright Lime CTA Button */}
                    <button
                      onClick={() => handleOpenCaseStudy(proj)}
                      className={`w-full py-2.5 px-4 rounded-full font-extrabold text-xs sm:text-sm text-center transition-all duration-200 shadow-md active:scale-[0.98] cursor-pointer flex items-center justify-center gap-1.5 ${
                        isSelected 
                          ? 'bg-white text-black shadow-white/20' 
                          : 'bg-[#b6f23e] hover:bg-[#c9ff45] text-black shadow-[#b6f23e]/15'
                      }`}
                    >
                      <span>{isSelected ? 'Viewing Case Study' : 'View Case Study'}</span>
                    </button>

                    {/* Secondary Buttons Row */}
                    <div className="grid grid-cols-2 gap-2 mt-2.5">
                      <button
                        onClick={() => handleOpenDashboard(proj)}
                        className="py-2 px-3 rounded-full bg-[#181d24] hover:bg-[#222933] border border-neutral-700/60 text-neutral-200 hover:text-white text-xs font-semibold text-center transition-colors cursor-pointer"
                      >
                        View Dashboard
                      </button>
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playClickSound}
                        className="py-2 px-3 rounded-full bg-[#181d24] hover:bg-[#222933] border border-neutral-700/60 text-neutral-200 hover:text-white text-xs font-semibold text-center transition-colors cursor-pointer flex items-center justify-center"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* IN-PAGE DEDICATED CASE STUDY SHOWCASE (Aligned to 7xl Page Grid) */}
        {selectedCaseStudy && (
          <div 
            id="case-study-section"
            className="scroll-mt-28 w-full max-w-7xl mx-auto rounded-3xl bg-[#0f1217] border border-neutral-800 p-6 sm:p-10 shadow-2xl transition-all duration-300 space-y-8 animate-fade-in"
          >
            {/* Case Study Header & Quick Switcher */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
              <div className="space-y-1.5 max-w-3xl">
                <div className="flex items-center gap-2">
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {selectedCaseStudy.title}
                </h3>

              </div>

              {/* Quick Project Switcher & Close Button */}
              <div className="flex items-center gap-2 flex-wrap">
                <div className="hidden lg:flex items-center gap-1.5 bg-[#161a20] p-1.5 rounded-2xl border border-neutral-800">
                  {projectsList.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        playClickSound();
                        setSelectedCaseStudy(p);
                      }}
                      className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                        selectedCaseStudy.id === p.id
                          ? 'bg-[#b6f23e] text-black font-bold shadow-sm'
                          : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                      }`}
                    >
                      {p.id === 'freshmart' ? 'FreshMart' : p.id === 'trendkart' ? 'TrendKart' : p.id === 'healthplus' ? 'HealthPlus' : 'MediCare'}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCloseCaseStudy}
                  className="px-4 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ml-auto group"
                  title="Close Case Study & Return to Projects"
                >
                  <X className="w-4 h-4 group-hover:rotate-90 transition-transform" />
                </button>
              </div>
            </div>

            {/* Case Study Content Grid: 2 Columns Aligned to Page */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column (5 cols): Visuals & Key Metrics */}
              <div className="lg:col-span-5 space-y-6">
                <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-inner group">
                  <img
                    src={selectedCaseStudy.image}
                    alt={selectedCaseStudy.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {selectedCaseStudy.metrics.map((m, idx) => (
                    <div key={idx} className="p-3.5 rounded-2xl bg-neutral-900/90 border border-neutral-800/90 text-center">
                      <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">{m.label}</div>
                      <div className="text-xs sm:text-sm font-bold text-white mt-1">{m.val}</div>
                    </div>
                  ))}
                </div>


              </div>

              {/* Right Column (7 cols): Full Narrative & Resume Highlights */}
              <div className="lg:col-span-7 space-y-6">
                {/* Executive Summary */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    Executive Summary & Project Scope
                  </h4>
                  <p className="text-sm sm:text-base leading-relaxed text-neutral-200 font-normal">
                    {selectedCaseStudy.desc}
                  </p>
                </div>

                {/* Resume Highlights */}
                <div className="space-y-3 pt-2 border-t border-neutral-800/80">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#b6f23e] font-bold">
                    Verified Methodology & Technical Highlights
                  </h4>
                  <ul className="space-y-3">
                    {selectedCaseStudy.highlights.map((h, i) => (
                      <li key={i} className="text-xs sm:text-sm text-neutral-300 flex items-start gap-3 leading-relaxed p-3.5 rounded-2xl bg-neutral-900/50 border border-neutral-800/60">
                        <Check className="w-4 h-4 text-[#b6f23e] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </div>

          </div>
        )}

        {/* Modal: View Interactive Dashboard (Portaled to document.body with z-[99999] so it is ALWAYS in front and immune to lower section stacking contexts) */}
        {selectedDashboard && typeof document !== 'undefined' && createPortal(
          <div 
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={closeModal}
          >
            <div 
              className="bg-[#0b0e14] border border-neutral-800 rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-slate-200 p-6 sm:p-8 space-y-6 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-5 right-5 p-2 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="space-y-0 pr-8">
                <div className="flex items-center gap-2">
                  {/* <span className="text-[#b6f23e] text-xs font-bold uppercase tracking-wider">
                    {selectedDashboard.category}
                  </span> */}
                  {/* <span className="text-neutral-500">•</span> */}
                  {/* <span className="text-xs font-mono text-cyan-400">Live Simulator</span> */}
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                  {selectedDashboard.title}
                </h3>
              </div>

              {/* DYNAMIC DASHBOARD CONTENT BASED ON PROJECT */}

              {/* 1. FreshMart Simulator & Dashboard View */}
              {selectedDashboard.id === 'freshmart' && (
                <div className="space-y-6">

                  {/* Top KPI Cards (Extracted directly from the real Excel dashboard image) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Total Sales</div>
                      <div className="text-xl font-extrabold text-white mt-1">₹ 2,894,663</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Sum of Sales Amount</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Total Profit</div>
                      <div className="text-xl font-extrabold text-[#b6f23e] mt-1">₹ 737,359</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Sum of Profit</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Profit Margin</div>
                      <div className="text-xl font-extrabold text-cyan-400 mt-1">25.47%</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Overall Margin</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Average Sales</div>
                      <div className="text-xl font-extrabold text-amber-400 mt-1">₹ 1,158</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Avg per Order</div>
                    </div>
                  </div>

                  {/* VIEW 1: OFFICIAL EXCEL DASHBOARD IMAGE (Default) */}
                  {freshMartModalView === 'image' && (
                    <div className="space-y-4 animate-fade-in">
                      {/* Image Viewer Container */}
                      <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl group">
                        <img
                          src={`${import.meta.env.BASE_URL}projects/freshmart-dashboard.png`}
                          alt="FreshMart Sales Dashboard - Microsoft Excel"
                          className="w-full h-auto object-contain cursor-zoom-in group-hover:brightness-105 transition-all duration-300"
                          onClick={() => window.open(`${import.meta.env.BASE_URL}projects/freshmart-dashboard.png`, '_blank')}
                        />
                        <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                          <a
                            href={`${import.meta.env.BASE_URL}projects/freshmart-dashboard.png`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-mono border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Click to Enlarge in Full View</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* VIEW 2: INTERACTIVE 5-ROLE PIVOT SIMULATOR */}
                  {freshMartModalView === 'simulator' && (
                    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5 animate-fade-in">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                      <div className="flex items-center gap-2">
                        <Layers className="w-4 h-4 text-[#b6f23e]" />
                        <span className="text-xs font-mono text-neutral-200 font-bold uppercase tracking-wider">
                          Select Stakeholder PivotTable View:
                        </span>
                      </div>
                      <span className="text-[11px] font-mono text-neutral-400">5 Distinct Business Functions</span>
                    </div>

                    {/* 5 Role Tabs */}
                    <div className="flex flex-wrap gap-2">
                      {[
                        { id: 'marketing', label: 'Marketing: Tier Segmentation' },
                        { id: 'store', label: 'Store Managers: Regional Sales' },
                        { id: 'product', label: 'Product Managers: Category & Brand' },
                        { id: 'operations', label: 'Operations: Channel × Payment Matrix' },
                        { id: 'finance', label: 'Exec/Finance: Monthly Trends' }
                      ].map((tab) => (
                        <button
                          key={tab.id}
                          onClick={() => setSelectedFreshMartRole(tab.id)}
                          className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                            selectedFreshMartRole === tab.id
                              ? 'bg-[#b6f23e] text-black font-bold shadow-md shadow-lime-500/20'
                              : 'bg-neutral-800/90 text-neutral-300 hover:text-white hover:bg-neutral-700'
                          }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>

                    {/* DYNAMIC CONTENT FOR EACH VIEW */}

                    {/* 1. Marketing View */}
                    {selectedFreshMartRole === 'marketing' && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">Customer Segmentation by Membership Tier (Marketing View)</div>
                            <div className="text-[11px] text-neutral-400">Average order value (AOV) and customer lifetime spend distribution</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                            Loyalty Uplift Priority
                          </span>
                        </div>

                        {/* Tier Comparison Bars */}
                        <div className="space-y-3 p-4 rounded-xl bg-slate-950/70 border border-white/5">
                          {[
                            { tier: 'Gold-Tier Members', spend: '₹1,673 / order', pct: 100, orders: '940 orders', color: 'bg-emerald-400', textColor: 'text-emerald-400', tag: 'Top Spenders (+132% premium)' },
                            { tier: 'Silver-Tier Members', spend: '₹1,120 / order', pct: 67, orders: '810 orders', color: 'bg-cyan-400', textColor: 'text-cyan-400', tag: 'Core Loyalty Group' },
                            { tier: 'Bronze-Tier Members', spend: '₹721 / order', pct: 43, orders: '750 orders', color: 'bg-amber-400', textColor: 'text-amber-400', tag: 'Discount-Sensitive Baseline' }
                          ].map((t, idx) => (
                            <div key={idx} className="space-y-1.5">
                              <div className="flex justify-between items-center text-xs font-mono">
                                <div className="flex items-center gap-2">
                                  <span className="text-white font-bold">{t.tier}</span>
                                  <span className="text-[10px] text-neutral-400">({t.orders})</span>
                                </div>
                                <div className="flex items-center gap-3">
                                  <span className={`font-bold ${t.textColor}`}>{t.spend}</span>
                                  <span className="text-[10px] text-neutral-400 hidden sm:inline">{t.tag}</span>
                                </div>
                              </div>
                              <div className="w-full h-2.5 rounded-full bg-neutral-800 overflow-hidden">
                                <div className={`h-full ${t.color} rounded-full`} style={{ width: `${t.pct}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="p-3.5 rounded-xl bg-emerald-950/30 border border-emerald-500/20 text-xs text-neutral-300">
                          <strong className="text-emerald-400">Strategic Marketing Takeaway:</strong> Gold members generate ~ ₹1,673 per order vs ~ ₹721 for Bronze tier. Informs loyalty-program tier upgrades, exclusive weekend grocery bundles, and high-margin product placement targeting.
                        </div>
                      </div>
                    )}

                    {/* 2. Store Managers View */}
                    {selectedFreshMartRole === 'store' && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">Regional Sales Performance (Store Managers View)</div>
                            <div className="text-[11px] text-neutral-400">Revenue, quota achievement, footfall, and top performing stores</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono font-bold">
                            4 Sales Regions
                          </span>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-white/10">
                          <table className="w-full text-xs font-mono text-left">
                            <thead className="bg-neutral-800 text-neutral-200">
                              <tr>
                                <th className="p-2.5">Region</th>
                                <th className="p-2.5">Store Cluster</th>
                                <th className="p-2.5">Total Revenue</th>
                                <th className="p-2.5">Target Achievement</th>
                                <th className="p-2.5">Avg Basket Size</th>
                                <th className="p-2.5">Status</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                              <tr>
                                <td className="p-2.5 text-white font-bold">North Zone</td>
                                <td className="p-2.5 text-cyan-400">Metro Hub #1 & #3</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹12,40,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">104.2%</td>
                                <td className="p-2.5">₹1,450</td>
                                <td className="p-2.5 text-emerald-400">Exceeded</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">South Zone</td>
                                <td className="p-2.5 text-cyan-400">Central Plaza Superstore</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹10,80,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">98.5%</td>
                                <td className="p-2.5">₹1,320</td>
                                <td className="p-2.5 text-cyan-400">On Track</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">West Zone</td>
                                <td className="p-2.5 text-cyan-400">Suburban Mart Express</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹11,20,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">96.8%</td>
                                <td className="p-2.5">₹1,280</td>
                                <td className="p-2.5 text-cyan-400">On Track</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">East Zone</td>
                                <td className="p-2.5 text-cyan-400">Coastline Outlet</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹8,60,000</td>
                                <td className="p-2.5 text-amber-400 font-bold">91.4%</td>
                                <td className="p-2.5">₹1,090</td>
                                <td className="p-2.5 text-amber-400">Action Plan</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* 3. Product Managers View */}
                    {selectedFreshMartRole === 'product' && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">Category & Brand Profitability (Product Managers View)</div>
                            <div className="text-[11px] text-neutral-400">Margin contribution, stock turn, and vendor brand performance</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/30 text-[10px] font-mono font-bold">
                            Product Portfolios
                          </span>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-white/10">
                          <table className="w-full text-xs font-mono text-left">
                            <thead className="bg-neutral-800 text-neutral-200">
                              <tr>
                                <th className="p-2.5">Grocery Category</th>
                                <th className="p-2.5">Gross Revenue</th>
                                <th className="p-2.5">Profit Margin %</th>
                                <th className="p-2.5">Top Performing Brand</th>
                                <th className="p-2.5">Inventory Velocity</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                              <tr>
                                <td className="p-2.5 text-white font-bold">Fresh Produce & Organic</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹8,40,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">38.4%</td>
                                <td className="p-2.5 text-cyan-400">GreenFarm Organics</td>
                                <td className="p-2.5 text-emerald-400">Very High (Daily)</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Bakery & Confectionery</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹3,80,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">42.1%</td>
                                <td className="p-2.5 text-cyan-400">Artisan Oven</td>
                                <td className="p-2.5 text-emerald-400">High (Daily)</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Beverages & Cold Drinks</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹4,50,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">35.0%</td>
                                <td className="p-2.5 text-cyan-400">PureFlow & TropicJuice</td>
                                <td className="p-2.5 text-cyan-400">Medium (Weekly)</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Dairy, Eggs & Cheese</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹6,20,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">26.5%</td>
                                <td className="p-2.5 text-cyan-400">DairyFresh Co.</td>
                                <td className="p-2.5 text-emerald-400">High (Bi-weekly)</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Packaged Staples & FMCG</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹6,80,000</td>
                                <td className="p-2.5 text-neutral-400 font-bold">22.0%</td>
                                <td className="p-2.5 text-cyan-400">GoldenHarvest</td>
                                <td className="p-2.5 text-cyan-400">Medium (Monthly)</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* 4. Operations View */}
                    {selectedFreshMartRole === 'operations' && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">Sales-Channel × Payment-Mode Matrix (Operations View)</div>
                            <div className="text-[11px] text-neutral-400">Cross-tabulated order distribution, settlement velocity, and fulfillment efficiency</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/30 text-[10px] font-mono font-bold">
                            Fulfillment Matrix
                          </span>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-white/10">
                          <table className="w-full text-xs font-mono text-left">
                            <thead className="bg-neutral-800 text-neutral-200">
                              <tr>
                                <th className="p-2.5">Sales Channel</th>
                                <th className="p-2.5">UPI / QR (₹)</th>
                                <th className="p-2.5">Credit/Debit (₹)</th>
                                <th className="p-2.5">Cash (₹)</th>
                                <th className="p-2.5">Total Channel Vol</th>
                                <th className="p-2.5">Fulfillment Speed</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                              <tr>
                                <td className="p-2.5 text-white font-bold">In-Store Supermarket POS</td>
                                <td className="p-2.5 text-cyan-400">₹4,82,000</td>
                                <td className="p-2.5 text-cyan-400">₹6,15,000</td>
                                <td className="p-2.5 text-amber-400">₹3,40,000</td>
                                <td className="p-2.5 text-emerald-400 font-bold">1,120 txns</td>
                                <td className="p-2.5 text-[#b6f23e]">Immediate POS</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Online Mobile App Delivery</td>
                                <td className="p-2.5 text-cyan-400 font-bold">₹7,45,000</td>
                                <td className="p-2.5 text-cyan-400">₹4,20,000</td>
                                <td className="p-2.5 text-amber-400">₹15,000</td>
                                <td className="p-2.5 text-emerald-400 font-bold">980 txns</td>
                                <td className="p-2.5 text-cyan-400">&lt; 35 min delivery</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Click & Collect Hub</td>
                                <td className="p-2.5 text-cyan-400">₹1,90,000</td>
                                <td className="p-2.5 text-cyan-400">₹1,35,000</td>
                                <td className="p-2.5 text-amber-400">₹22,000</td>
                                <td className="p-2.5 text-emerald-400 font-bold">400 txns</td>
                                <td className="p-2.5 text-cyan-400">Drive-through bay</td>
                              </tr>
                              <tr className="bg-neutral-800/60 text-white font-bold">
                                <td className="p-2.5 text-[#b6f23e]">Consolidated Total</td>
                                <td className="p-2.5 text-[#b6f23e]">₹14,17,000</td>
                                <td className="p-2.5 text-[#b6f23e]">₹11,70,000</td>
                                <td className="p-2.5 text-amber-400">₹3,77,000</td>
                                <td className="p-2.5 text-[#b6f23e]">2,500+ txns</td>
                                <td className="p-2.5 text-emerald-400">99.2% Accuracy</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* 5. Finance View */}
                    {selectedFreshMartRole === 'finance' && (
                      <div className="space-y-4 animate-fade-in">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xs font-bold text-white">Monthly Sales & Profit Trends (Executive / Finance View)</div>
                            <div className="text-[11px] text-neutral-400">Consolidated gross sales, COGS, net margin, and profitability trajectory</div>
                          </div>
                          <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                            Finance Summary
                          </span>
                        </div>

                        <div className="overflow-x-auto rounded-xl border border-white/10">
                          <table className="w-full text-xs font-mono text-left">
                            <thead className="bg-neutral-800 text-neutral-200">
                              <tr>
                                <th className="p-2.5">Period</th>
                                <th className="p-2.5">Gross Revenue</th>
                                <th className="p-2.5">COGS & Fulfillment</th>
                                <th className="p-2.5">Net Profit</th>
                                <th className="p-2.5">Net Margin %</th>
                                <th className="p-2.5">Trend MoM</th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                              <tr>
                                <td className="p-2.5 text-white font-bold">Month 1</td>
                                <td className="p-2.5 text-cyan-400">₹8,50,000</td>
                                <td className="p-2.5 text-neutral-400">₹5,78,000</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹2,72,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">32.0%</td>
                                <td className="p-2.5 text-cyan-400">Baseline</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Month 2</td>
                                <td className="p-2.5 text-cyan-400">₹9,80,000</td>
                                <td className="p-2.5 text-neutral-400">₹6,56,000</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹3,24,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">33.1%</td>
                                <td className="p-2.5 text-emerald-400">+15.3%</td>
                              </tr>
                              <tr>
                                <td className="p-2.5 text-white font-bold">Month 3</td>
                                <td className="p-2.5 text-cyan-400">₹11,34,000</td>
                                <td className="p-2.5 text-neutral-400">₹7,48,000</td>
                                <td className="p-2.5 text-emerald-400 font-bold">₹3,86,000</td>
                                <td className="p-2.5 text-[#b6f23e] font-bold">34.0%</td>
                                <td className="p-2.5 text-emerald-400">+19.1%</td>
                              </tr>
                              <tr className="bg-neutral-800/60 text-white font-bold">
                                <td className="p-2.5 text-[#b6f23e]">Cumulative QTR</td>
                                <td className="p-2.5 text-[#b6f23e]">₹29,64,000</td>
                                <td className="p-2.5 text-neutral-300">₹19,82,000</td>
                                <td className="p-2.5 text-emerald-400">₹9,82,000</td>
                                <td className="p-2.5 text-[#b6f23e]">33.1%</td>
                                <td className="p-2.5 text-emerald-400">+34.8% Total</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Data Pipeline & Validation Footer note */}
                    <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-neutral-400">
                      <span>Source: Disconnected raw tables (Customers, Products, Stores, Employees, Suppliers)</span>
                      <span className="text-[#b6f23e] font-bold">5-in-1 Consolidated Excel Sheet</span>
                    </div>

                  </div>
                )}

              </div>
            )}

              {/* 2. TrendKart Simulator & Dashboard View */}
              {selectedDashboard.id === 'trendkart' && (
                <div className="space-y-6">

                  {/* Top KPI Cards (Extracted directly from the real Excel dashboard image) */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                        <ShoppingBag className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Total Sales</span>
                      </div>
                      <div className="text-xl font-extrabold text-white mt-1">₹ 9,227,180</div>
                      <div className="text-[10px] text-cyan-400 mt-1">Sum of Sales Amount</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1.5">
                        <TrendingUp className="w-3.5 h-3.5 text-[#b6f23e]" />
                        <span>Total Profit</span>
                      </div>
                      <div className="text-xl font-extrabold text-[#b6f23e] mt-1">₹ 1,801,437</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Sum of Profit</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Profit Margin</div>
                      <div className="text-xl font-extrabold text-cyan-400 mt-1">19.52%</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Overall Net Yield</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400 flex items-center gap-1">
                        <ArrowDownRight className="w-3.5 h-3.5 text-rose-400" />
                        <span>Oct → Nov Decline</span>
                      </div>
                      <div className="text-xl font-extrabold text-rose-400 mt-1">-20.93%</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Online (South Zone 1)</div>
                    </div>
                  </div>

                  {/* VIEW 1: OFFICIAL EXCEL DASHBOARD IMAGE (Default) */}
                  {trendKartModalView === 'image' && (
                    <div className="space-y-4 animate-fade-in">
                      {/* Image Viewer Container */}
                      <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl group">
                        <img
                          src={`${import.meta.env.BASE_URL}projects/trendkart-dashboard.png`}
                          alt="TrendKart Fashion Dashboard - Microsoft Excel"
                          className="w-full h-auto object-contain cursor-zoom-in group-hover:brightness-105 transition-all duration-300"
                          onClick={() => window.open(`${import.meta.env.BASE_URL}projects/trendkart-dashboard.png`, '_blank')}
                        />
                        <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                          <a
                            href={`${import.meta.env.BASE_URL}projects/trendkart-dashboard.png`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-mono border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Click to Enlarge in Full View</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* VIEW 2: INTERACTIVE DIAGNOSTIC SIMULATOR */}
                  {trendKartModalView === 'simulator' && (
                    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-5 animate-fade-in">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                        <div className="flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#b6f23e]" />
                          <span className="text-xs font-mono text-neutral-200 font-bold uppercase tracking-wider">
                            Select Analytical Diagnostic View:
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-neutral-400">TrendKart Retail Analytics</span>
                      </div>

                      {/* 4 Diagnostic Tabs */}
                      <div className="flex flex-wrap gap-2">
                        {[
                          { id: 'products', label: '1. Product-Level Decline Diagnostics' },
                          { id: 'categories', label: '2. Category Profitability Matrix' },
                          { id: 'channels', label: '3. Channel & Regional Impact' },
                          { id: 'trajectory', label: '4. Oct-Nov Trajectory & Recovery Plan' }
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => {
                              playClickSound();
                              setSelectedTrendKartTab(tab.id);
                            }}
                            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                              selectedTrendKartTab === tab.id
                                ? 'bg-[#b6f23e] text-black font-bold shadow-md shadow-lime-500/20'
                                : 'bg-neutral-800/90 text-neutral-300 hover:text-white hover:bg-neutral-700'
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>

                      {/* TAB 1: Product-Level Decline Diagnostics */}
                      {selectedTrendKartTab === 'products' && (
                        <div className="space-y-4 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-white">Top 10 Products with Highest October-to-November Sales Decline</div>
                              <div className="text-[11px] text-neutral-400">Horizontal bar analysis comparing Oct Sales vs Nov Sales and absolute Decline Amount (₹)</div>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg bg-rose-500/10 text-rose-400 border border-rose-500/30 text-[10px] font-mono font-bold">
                              Critical SKU Watchlist
                            </span>
                          </div>

                          <div className="overflow-x-auto rounded-xl border border-white/10">
                            <table className="w-full text-xs font-mono text-left">
                              <thead className="bg-neutral-800 text-neutral-200">
                                <tr>
                                  <th className="p-2.5">Product SKU</th>
                                  <th className="p-2.5">Category</th>
                                  <th className="p-2.5">Oct Sales (₹)</th>
                                  <th className="p-2.5">Nov Sales (₹)</th>
                                  <th className="p-2.5">Sales Decline (₹)</th>
                                  <th className="p-2.5">Decline %</th>
                                  <th className="p-2.5">Severity Bar</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                                {[
                                  { name: 'Westside Sling Bag Grey', cat: 'Handbags', oct: '₹38,200', nov: '₹26,100', dec: '-₹12,100', pct: '-31.7%', bar: 95 },
                                  { name: 'Westside Straight Fit Charcoal', cat: 'Men Trousers', oct: '₹43,400', nov: '₹31,200', dec: '-₹12,200', pct: '-28.1%', bar: 96 },
                                  { name: 'Nalli Silks Dhoti Orange', cat: 'Men Ethnic', oct: '₹33,800', nov: '₹24,300', dec: '-₹9,500', pct: '-28.1%', bar: 78 },
                                  { name: 'Aurelia Analog Watch Purple', cat: 'Watches', oct: '₹31,200', nov: '₹23,100', dec: '-₹8,100', pct: '-26.0%', bar: 70 },
                                  { name: 'Sparx Georgette Saree Purple', cat: 'Women Sarees', oct: '₹30,100', nov: '₹22,600', dec: '-₹7,500', pct: '-24.9%', bar: 65 },
                                  { name: 'Arrow Georgette Saree Charcoal', cat: 'Women Sarees', oct: '₹29,400', nov: '₹22,200', dec: '-₹7,200', pct: '-24.5%', bar: 62 },
                                  { name: 'Fossil Digital Watch Maroon', cat: 'Watches', oct: '₹28,500', nov: '₹22,100', dec: '-₹6,400', pct: '-22.5%', bar: 56 },
                                  { name: 'Pepe Jeans Silk Saree Navy Blue', cat: 'Women Sarees', oct: '₹27,200', nov: '₹21,900', dec: '-₹5,300', pct: '-19.5%', bar: 47 },
                                  { name: 'W for Woman Cotton Saree Wine', cat: 'Women Sarees', oct: '₹26,200', nov: '₹21,400', dec: '-₹4,800', pct: '-18.3%', bar: 42 },
                                  { name: 'Nike Earrings Teal', cat: 'Jewellery', oct: '₹23,100', nov: '₹18,900', dec: '-₹4,200', pct: '-18.2%', bar: 38 },
                                ].map((item, idx) => (
                                  <tr key={idx}>
                                    <td className="p-2.5 text-white font-bold">{item.name}</td>
                                    <td className="p-2.5 text-cyan-400">{item.cat}</td>
                                    <td className="p-2.5 text-cyan-300 font-semibold">{item.oct}</td>
                                    <td className="p-2.5 text-neutral-400">{item.nov}</td>
                                    <td className="p-2.5 text-rose-400 font-bold">{item.dec}</td>
                                    <td className="p-2.5 text-rose-400 font-bold">{item.pct}</td>
                                    <td className="p-2.5">
                                      <div className="w-20 h-2 bg-neutral-800 rounded-full overflow-hidden">
                                        <div className="h-full bg-rose-500 rounded-full" style={{ width: `${item.bar}%` }} />
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3.5 rounded-xl bg-rose-950/30 border border-rose-500/20 text-xs text-neutral-300">
                            <strong className="text-rose-400">Product Diagnostic Takeaway:</strong> Westside accessories, men's trousers, and traditional sarees experienced the steepest cliff drop post-October festival peaks. Reorder lag and stockouts in key sizes caused customers to abandon cart items.
                          </div>
                        </div>
                      )}

                      {/* TAB 2: Category Profitability Matrix */}
                      {selectedTrendKartTab === 'categories' && (
                        <div className="space-y-4 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-white">Fashion Category Sales vs Profit Contribution (20 Product Categories)</div>
                              <div className="text-[11px] text-neutral-400">Sum of Sales Amount vs Sum of Profit across apparel, accessories, and footwear</div>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-[10px] font-mono font-bold">
                              ₹9.23M Total Volume
                            </span>
                          </div>

                          <div className="overflow-x-auto rounded-xl border border-white/10">
                            <table className="w-full text-xs font-mono text-left">
                              <thead className="bg-neutral-800 text-neutral-200">
                                <tr>
                                  <th className="p-2.5">Product Category</th>
                                  <th className="p-2.5">Sum of Sales Amount</th>
                                  <th className="p-2.5">Sum of Profit</th>
                                  <th className="p-2.5">Profit Margin %</th>
                                  <th className="p-2.5">Diagnostic Profile</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                                {[
                                  { cat: 'Watches', sales: '₹1,710,000', profit: '₹376,000', margin: '22.0%', profile: 'Highest Profit Producer', color: 'text-emerald-400' },
                                  { cat: 'Handbags & Purses', sales: '₹1,650,000', profit: '₹313,500', margin: '19.0%', profile: 'High Revenue Volume', color: 'text-cyan-400' },
                                  { cat: 'Women Sarees', sales: '₹1,620,000', profit: '₹356,400', margin: '22.0%', profile: 'High Margin Core', color: 'text-emerald-400' },
                                  { cat: 'Footwear', sales: '₹1,580,000', profit: '₹347,600', margin: '22.0%', profile: 'Fast Inventory Turn', color: 'text-emerald-400' },
                                  { cat: 'Women Dresses & Kurtis', sales: '₹1,480,000', profit: '₹281,200', margin: '19.0%', profile: 'Trend Volatile', color: 'text-amber-400' },
                                  { cat: 'Men Jeans & Trousers', sales: '₹1,187,180', profit: '₹225,500', margin: '19.0%', profile: 'Consistent Demand', color: 'text-cyan-400' },
                                  { cat: 'Accessories & Belts', sales: '₹620,000', profit: '₹117,800', margin: '19.0%', profile: 'Basket Booster', color: 'text-neutral-400' },
                                  { cat: 'Winter Wear & Sportswear', sales: '₹580,000', profit: '₹110,200', margin: '19.0%', profile: 'Seasonal Growth Potential', color: 'text-neutral-400' },
                                ].map((c, idx) => (
                                  <tr key={idx}>
                                    <td className="p-2.5 text-white font-bold">{c.cat}</td>
                                    <td className="p-2.5 text-cyan-300 font-bold">{c.sales}</td>
                                    <td className="p-2.5 text-[#b6f23e] font-bold">{c.profit}</td>
                                    <td className="p-2.5 text-emerald-400 font-bold">{c.margin}</td>
                                    <td className={`p-2.5 font-bold ${c.color}`}>{c.profile}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-neutral-300">
                            <strong className="text-cyan-400">Category Profitability Takeaway:</strong> Watches and Women Sarees generate premium 22% profit margins, while Handbags drive gross top-line turnover. Maintaining adequate stock buffers in these high-margin categories prevents revenue erosion during off-peak quarters.
                          </div>
                        </div>
                      )}

                      {/* TAB 3: Channel & Regional Impact */}
                      {selectedTrendKartTab === 'channels' && (
                        <div className="space-y-4 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-white">Sales Channel × Regional Decline Matrix</div>
                              <div className="text-[11px] text-neutral-400">Comparing Online vs Offline performance across South Zone store clusters</div>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 text-[10px] font-mono font-bold">
                              Channel Comparison
                            </span>
                          </div>

                          {/* Slicers Row */}
                          <div className="flex flex-wrap items-center gap-4 p-3 rounded-xl bg-slate-950/80 border border-white/5">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-mono text-neutral-400">Sales Channel:</span>
                              {['Online', 'Offline', 'All Channels'].map((ch) => (
                                <button
                                  key={ch}
                                  onClick={() => {
                                    playClickSound();
                                    setTrendKartSelectedChannel(ch);
                                  }}
                                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                                    trendKartSelectedChannel === ch
                                      ? 'bg-purple-600 text-white font-bold shadow-sm'
                                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                                  }`}
                                >
                                  {ch}
                                </button>
                              ))}
                            </div>

                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-mono text-neutral-400">Store Region:</span>
                              {['South Zone 1', 'South Zone 2', 'South Zone 3'].map((reg) => (
                                <button
                                  key={reg}
                                  onClick={() => {
                                    playClickSound();
                                    setTrendKartSelectedRegion(reg);
                                  }}
                                  className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                                    trendKartSelectedRegion === reg
                                      ? 'bg-purple-600 text-white font-bold shadow-sm'
                                      : 'bg-neutral-800 text-neutral-400 hover:text-white'
                                  }`}
                                >
                                  {reg}
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Channel Breakdown Table */}
                          <div className="overflow-x-auto rounded-xl border border-white/10">
                            <table className="w-full text-xs font-mono text-left">
                              <thead className="bg-neutral-800 text-neutral-200">
                                <tr>
                                  <th className="p-2.5">Channel / Region</th>
                                  <th className="p-2.5">October Sales (₹)</th>
                                  <th className="p-2.5">November Sales (₹)</th>
                                  <th className="p-2.5">Net Variance (₹)</th>
                                  <th className="p-2.5">MoM Change %</th>
                                  <th className="p-2.5">Impact Severity</th>
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                                <tr>
                                  <td className="p-2.5 text-white font-bold">Online Channel (South Zone 1)</td>
                                  <td className="p-2.5 text-cyan-300 font-bold">₹261,300.68</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">₹206,592.74</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-₹54,707.94</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-20.93%</td>
                                  <td className="p-2.5 text-rose-400 font-bold">Critical Contraction</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-bold">Offline Retail (South Zone 1)</td>
                                  <td className="p-2.5 text-cyan-300 font-bold">₹248,150.00</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">₹212,400.00</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-₹35,750.00</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-14.41%</td>
                                  <td className="p-2.5 text-amber-400 font-bold">Moderate Contraction</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-bold">South Zone 2 Cluster</td>
                                  <td className="p-2.5 text-cyan-300 font-bold">₹215,400.00</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">₹189,200.00</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-₹26,200.00</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-12.16%</td>
                                  <td className="p-2.5 text-amber-400 font-bold">Controlled Baseline</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-bold">South Zone 3 Cluster</td>
                                  <td className="p-2.5 text-cyan-300 font-bold">₹195,800.00</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">₹178,500.00</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-₹17,300.00</td>
                                  <td className="p-2.5 text-rose-400 font-bold">-8.84%</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">Resilient</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>

                          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/20 text-xs text-neutral-300">
                            <strong className="text-amber-400">Channel Takeaway:</strong> Online sales experienced a much sharper decline (-20.93%) than offline retail (-14.41%), pointing to post-festival ad fatigue, delivery bottlenecks, and higher digital cart abandonment in South Zone 1.
                          </div>
                        </div>
                      )}

                      {/* TAB 4: Oct-Nov Trajectory & Recovery Plan */}
                      {selectedTrendKartTab === 'trajectory' && (
                        <div className="space-y-4 animate-fade-in">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="text-xs font-bold text-white">Full-Year Trajectory & Executive Recovery Roadmap</div>
                              <div className="text-[11px] text-neutral-400">Seasonal trend patterns and strategic 4-pillar recovery plan</div>
                            </div>
                            <span className="px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold">
                              Recovery Roadmap
                            </span>
                          </div>

                          {/* Root Cause Diagnostics */}
                          <div className="p-4 rounded-xl bg-slate-950/80 border border-white/10 space-y-2">
                            <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5" />
                              <span>Diagnosed Root Causes of MoM Sales Decline:</span>
                            </div>
                            <ul className="text-xs text-neutral-300 space-y-1.5 list-disc list-inside">
                              <li><strong>Post-Diwali Promotional Hangover:</strong> October generated peak sales (~₹280,000 monthly) due to Diwali campaigns; November faced a predictable demand correction that was exacerbated by delayed seasonal merchandising.</li>
                              <li><strong>High-Velocity SKU Stockouts:</strong> Top revenue drivers (Westside Sling Bags, Charcoal Fit, Nalli Silks Dhoti) stocked out in online fulfillment centers, causing ₹54.7k in lost orders.</li>
                              <li><strong>Relational Table Data Integrity:</strong> Cleaned duplicate invoices and unlinked customer IDs across 6 source tables to guarantee 100% accurate variance reporting.</li>
                            </ul>
                          </div>

                          {/* 4-Pillar Action Plan */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-1">
                              <div className="text-xs font-bold text-[#b6f23e]">1. Automated SKU Replenishment</div>
                              <p className="text-[11px] text-neutral-300 leading-relaxed">
                                Establish dynamic reorder triggers at 25% safety stock for top 10 revenue-generating SKUs to prevent out-of-stock cart abandonment.
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-1">
                              <div className="text-xs font-bold text-cyan-400">2. Post-Festive Retention Campaigns</div>
                              <p className="text-[11px] text-neutral-300 leading-relaxed">
                                Retarget October festive buyers with personalized winter wardrobe bundles and loyalty reward multipliers to revive November purchase frequency.
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-1">
                              <div className="text-xs font-bold text-amber-400">3. South Zone Hub Redistribution</div>
                              <p className="text-[11px] text-neutral-300 leading-relaxed">
                                Reallocate 30% of slow-moving inventory from South Zone 3 to South Zone 1 to resolve metropolitan fulfillment turnaround delays.
                              </p>
                            </div>
                            <div className="p-3.5 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-1">
                              <div className="text-xs font-bold text-purple-400">4. Excel Slicer Weekly Cadence</div>
                              <p className="text-[11px] text-neutral-300 leading-relaxed">
                                Institute a Monday morning executive review using the Excel PivotTable dashboard to monitor channel variance prior to monthly close.
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Footer note */}
                      <div className="pt-3 border-t border-neutral-800 flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] font-mono text-neutral-400">
                        <span>Source: 3,000 Transaction Records Across 6 Relational Tables</span>
                        <span className="text-[#b6f23e] font-bold">Interactive Dark-Themed Excel Dashboard</span>
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* 3. HealthPlus Simulator & Dashboard View */}
              {selectedDashboard.id === 'healthplus' && (
                <div className="space-y-6">

                  {/* Top KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Database Schema</div>
                      <div className="text-xl font-extrabold text-white mt-1">5 Core Tables</div>
                      <div className="text-[10px] text-cyan-400 mt-1">Clinics, Doctors, Patients...</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Total Consultations</div>
                      <div className="text-xl font-extrabold text-cyan-400 mt-1">12,450 Visits</div>
                      <div className="text-[10px] text-emerald-400 mt-1">Top Clinic: 34.8% Share</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Avg Consultation Fee</div>
                      <div className="text-xl font-extrabold text-amber-400 mt-1">$195.00</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Range: $140 - $240</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Window Logic</div>
                      <div className="text-xl font-extrabold text-[#b6f23e] mt-1">RANK() & LAG()</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Partitioned by Specialization</div>
                    </div>
                  </div>

                  {/* VIEW 1: OFFICIAL SQL DASHBOARD VIEW */}
                  {healthPlusModalView === 'image' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl group">
                        <img
                          src={`${import.meta.env.BASE_URL}projects/healthplus-dashboard.png`}
                          alt="HealthPlus Healthcare Database Analysis - SQL Dashboard"
                          className="w-full h-auto object-contain cursor-zoom-in group-hover:brightness-105 transition-all duration-300"
                          onClick={() => window.open(`${import.meta.env.BASE_URL}projects/healthplus-dashboard.png`, '_blank')}
                        />
                        <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                          <a
                            href={`${import.meta.env.BASE_URL}projects/healthplus-dashboard.png`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-mono border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Click to Enlarge in Full View</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* VIEW 2: INTERACTIVE SQL QUERY SIMULATOR */}
                  {healthPlusModalView === 'simulator' && (
                    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4 animate-fade-in">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                        <span className="text-xs font-mono text-neutral-200 font-bold uppercase tracking-wider flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#b6f23e]" />
                          Execute SQL Analytical Query:
                        </span>
                        <div className="flex gap-2">
                          {[
                            { id: 'rank', label: '1. Window RANK() Specialists' },
                            { id: 'top5', label: '2. Top 5 Clinics by Volume' },
                            { id: 'revenue', label: '3. Revenue Breakdown' }
                          ].map((q) => (
                            <button
                              key={q.id}
                              onClick={() => {
                                playClickSound();
                                setActiveSqlQuery(q.id);
                              }}
                              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                                activeSqlQuery === q.id
                                  ? 'bg-[#b6f23e] text-black font-bold shadow-md shadow-lime-500/20'
                                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
                              }`}
                            >
                              {q.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Query Syntax Display */}
                      <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs text-cyan-300 border border-white/10 overflow-x-auto">
                        {activeSqlQuery === 'rank' && (
                          <code>
                            SELECT doctor_id, name, specialization, fee, <br/>
                            &nbsp;&nbsp;RANK() OVER (PARTITION BY specialization ORDER BY fee DESC) as fee_rank,<br/>
                            &nbsp;&nbsp;ROUND(AVG(fee) OVER (PARTITION BY specialization), 2) as spec_avg_fee<br/>
                            FROM specialists;
                          </code>
                        )}
                        {activeSqlQuery === 'top5' && (
                          <code>
                            SELECT c.clinic_id, c.clinic_name, COUNT(v.visit_id) as total_visits, <br/>
                            &nbsp;&nbsp;SUM(b.total_amount) as gross_revenue<br/>
                            FROM clinics c <br/>
                            JOIN visits v ON c.clinic_id = v.clinic_id<br/>
                            JOIN billing b ON v.visit_id = b.visit_id<br/>
                            GROUP BY c.clinic_id, c.clinic_name ORDER BY total_visits DESC LIMIT 5;
                          </code>
                        )}
                        {activeSqlQuery === 'revenue' && (
                          <code>
                            SELECT service_category, SUM(amount) as total_revenue, <br/>
                            &nbsp;&nbsp;ROUND(SUM(amount) * 100.0 / (SELECT SUM(amount) FROM billing), 1) as rev_pct<br/>
                            FROM billing GROUP BY service_category ORDER BY total_revenue DESC;
                          </code>
                        )}
                      </div>

                      {/* Simulated SQL Results Table */}
                      <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full text-xs font-mono text-left">
                          <thead className="bg-neutral-800 text-neutral-200">
                            {activeSqlQuery === 'rank' ? (
                              <tr>
                                <th className="p-2.5">ID</th>
                                <th className="p-2.5">Specialist</th>
                                <th className="p-2.5">Department</th>
                                <th className="p-2.5">Fee</th>
                                <th className="p-2.5">Fee Rank</th>
                                <th className="p-2.5">Dept Avg</th>
                              </tr>
                            ) : activeSqlQuery === 'top5' ? (
                              <tr>
                                <th className="p-2.5">Rank</th>
                                <th className="p-2.5">Clinic Name</th>
                                <th className="p-2.5">Consultation Volume</th>
                                <th className="p-2.5">Gross Revenue</th>
                                <th className="p-2.5">Status</th>
                              </tr>
                            ) : (
                              <tr>
                                <th className="p-2.5">Category</th>
                                <th className="p-2.5">Revenue Total</th>
                                <th className="p-2.5">Revenue Share</th>
                                <th className="p-2.5">Growth MoM</th>
                              </tr>
                            )}
                          </thead>
                          <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                            {activeSqlQuery === 'rank' ? (
                              <>
                                <tr>
                                  <td className="p-2.5 text-cyan-400">#DOC-101</td>
                                  <td className="p-2.5 text-white font-semibold">Dr. A. Sharma</td>
                                  <td className="p-2.5">Cardiology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$220</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">1</td>
                                  <td className="p-2.5">$185</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-cyan-400">#DOC-108</td>
                                  <td className="p-2.5 text-white font-semibold">Dr. S. Chen</td>
                                  <td className="p-2.5">Cardiology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$190</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">2</td>
                                  <td className="p-2.5">$185</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-cyan-400">#DOC-204</td>
                                  <td className="p-2.5 text-white font-semibold">Dr. R. Patel</td>
                                  <td className="p-2.5">Neurology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$240</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">1</td>
                                  <td className="p-2.5">$210</td>
                                </tr>
                              </>
                            ) : activeSqlQuery === 'top5' ? (
                              <>
                                <tr>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">#1</td>
                                  <td className="p-2.5 text-white font-semibold">Metro Central Care</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">4,320 visits</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$485,000</td>
                                  <td className="p-2.5 text-emerald-400">Optimal</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">#2</td>
                                  <td className="p-2.5 text-white font-semibold">Eastside Specialty Clinic</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">2,890 visits</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$340,000</td>
                                  <td className="p-2.5 text-emerald-400">Optimal</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">#3</td>
                                  <td className="p-2.5 text-white font-semibold">Valley Healthcare Hub</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">2,150 visits</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$255,000</td>
                                  <td className="p-2.5 text-cyan-400">Growing</td>
                                </tr>
                              </>
                            ) : (
                              <>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Direct Consultations</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$612,400</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">52.8%</td>
                                  <td className="p-2.5 text-emerald-400">+5.4%</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Laboratory Services</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$336,200</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">29.0%</td>
                                  <td className="p-2.5 text-emerald-400">+8.1%</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Pharmacy / Medicine</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">$211,400</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">18.2%</td>
                                  <td className="p-2.5 text-cyan-400">+3.2%</td>
                                </tr>
                              </>
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Footer Note */}
                      <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-neutral-300">
                        <strong className="text-cyan-400">Clinical Revenue Insight:</strong> Direct Consultations account for 52.8% of total revenue. Window RANK() identifies key billing differences across specialists to support clinic-wide revenue forecasting.
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* 4. MediCare Simulator & Dashboard View */}
              {selectedDashboard.id === 'medicare' && (
                <div className="space-y-6">

                  {/* Top KPI Cards */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Database Schema</div>
                      <div className="text-xl font-extrabold text-white mt-1">3 Core Tables</div>
                      <div className="text-[10px] text-cyan-400 mt-1">Hospitals, Doctors, Appts</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Top Specialization</div>
                      <div className="text-xl font-extrabold text-[#b6f23e] mt-1">Cardiology</div>
                      <div className="text-[10px] text-emerald-400 mt-1">4,280 Appts (High Demand)</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Avg Consult Fee</div>
                      <div className="text-xl font-extrabold text-amber-400 mt-1">₹185.00</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Range: ₹140 - ₹240</div>
                    </div>
                    <div className="p-4 rounded-2xl bg-neutral-900/90 border border-neutral-800">
                      <div className="text-[11px] font-mono text-neutral-400">Window Logic</div>
                      <div className="text-xl font-extrabold text-cyan-400 mt-1">LAG(Fee)</div>
                      <div className="text-[10px] text-neutral-500 mt-1">Capacity Planning Ranks</div>
                    </div>
                  </div>

                  {/* VIEW 1: OFFICIAL SQL DASHBOARD VIEW */}
                  {mediCareModalView === 'image' && (
                    <div className="space-y-4 animate-fade-in">
                      <div className="relative rounded-2xl overflow-hidden border border-neutral-700 bg-neutral-950 shadow-2xl group">
                        <img
                          src={`${import.meta.env.BASE_URL}projects/medicare-dashboard.png`}
                          alt="MediCare Healthcare Database Analysis - SQL Dashboard"
                          className="w-full h-auto object-contain cursor-zoom-in group-hover:brightness-105 transition-all duration-300"
                          onClick={() => window.open(`${import.meta.env.BASE_URL}projects/medicare-dashboard.png`, '_blank')}
                        />
                        <div className="absolute bottom-3 right-3 opacity-90 group-hover:opacity-100 transition-opacity">
                          <a
                            href={`${import.meta.env.BASE_URL}projects/medicare-dashboard.png`}
                            target="_blank"
                            rel="noreferrer"
                            className="px-3 py-1.5 rounded-lg bg-black/80 hover:bg-black text-white text-xs font-mono border border-white/20 flex items-center gap-1.5 shadow-lg backdrop-blur-md"
                          >
                            <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                            <span>Click to Enlarge in Full View</span>
                          </a>
                        </div>
                      </div>

                    </div>
                  )}

                  {/* VIEW 2: INTERACTIVE SQL QUERY SIMULATOR */}
                  {mediCareModalView === 'simulator' && (
                    <div className="p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4 animate-fade-in">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-neutral-800 pb-3">
                        <span className="text-xs font-mono text-neutral-200 font-bold uppercase tracking-wider flex items-center gap-2">
                          <Layers className="w-4 h-4 text-[#b6f23e]" />
                          Execute MediCare SQL Analytical Query:
                        </span>
                        <div className="flex gap-2">
                          {[
                            { id: 'demand', label: '1. High-Demand Specializations (HAVING)' },
                            { id: 'lag', label: '2. Doctor Fee Ranking with LAG()' },
                            { id: 'capacity', label: '3. Capacity Planning Matrix' }
                          ].map((q) => (
                            <button
                              key={q.id}
                              onClick={() => {
                                playClickSound();
                                setActiveMediCareQuery(q.id);
                              }}
                              className={`px-3 py-1 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                                activeMediCareQuery === q.id
                                  ? 'bg-[#b6f23e] text-black font-bold shadow-md shadow-lime-500/20'
                                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
                              }`}
                            >
                              {q.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Query Syntax Display */}
                      <div className="p-3.5 rounded-xl bg-slate-950 font-mono text-xs text-cyan-300 border border-white/10 overflow-x-auto">
                        {activeMediCareQuery === 'demand' && (
                          <code>
                            SELECT d.specialization, COUNT(a.appointment_id) AS total_appts, <br/>
                            &nbsp;&nbsp;ROUND(AVG(d.consultation_fee), 2) AS avg_consult_fee, <br/>
                            &nbsp;&nbsp;COUNT(DISTINCT d.doctor_id) AS total_doctors <br/>
                            FROM hospitals h <br/>
                            JOIN doctors d ON h.hospital_id = d.hospital_id <br/>
                            JOIN appointments a ON d.doctor_id = a.doctor_id <br/>
                            GROUP BY d.specialization <br/>
                            HAVING COUNT(a.appointment_id) &gt;= 2000 <br/>
                            ORDER BY total_appts DESC;
                          </code>
                        )}
                        {activeMediCareQuery === 'lag' && (
                          <code>
                            SELECT doctor_name, specialization, consultation_fee, <br/>
                            &nbsp;&nbsp;LAG(consultation_fee, 1) OVER (PARTITION BY specialization ORDER BY consultation_fee DESC) AS prev_doctor_fee, <br/>
                            &nbsp;&nbsp;consultation_fee - LAG(consultation_fee, 1) OVER (PARTITION BY specialization ORDER BY consultation_fee DESC) AS fee_variance <br/>
                            FROM doctors <br/>
                            ORDER BY specialization, consultation_fee DESC;
                          </code>
                        )}
                        {activeMediCareQuery === 'capacity' && (
                          <code>
                            SELECT h.hospital_name, d.specialization, COUNT(a.appointment_id) AS patient_volume, <br/>
                            &nbsp;&nbsp;ROUND(COUNT(a.appointment_id) * 1.0 / COUNT(DISTINCT d.doctor_id), 1) AS load_per_physician <br/>
                            FROM hospitals h <br/>
                            JOIN doctors d ON h.hospital_id = d.hospital_id <br/>
                            JOIN appointments a ON d.doctor_id = a.doctor_id <br/>
                            GROUP BY h.hospital_name, d.specialization <br/>
                            ORDER BY load_per_physician DESC;
                          </code>
                        )}
                      </div>

                      {/* Simulated SQL Results Table */}
                      <div className="overflow-x-auto rounded-xl border border-white/10">
                        <table className="w-full text-xs font-mono text-left">
                          <thead className="bg-neutral-800 text-neutral-200">
                            {activeMediCareQuery === 'demand' ? (
                              <tr>
                                <th className="p-2.5">Specialization</th>
                                <th className="p-2.5">Total Appointments</th>
                                <th className="p-2.5">Avg Consultation Fee</th>
                                <th className="p-2.5">Active Specialists</th>
                                <th className="p-2.5">Clinical Demand Status</th>
                              </tr>
                            ) : activeMediCareQuery === 'lag' ? (
                              <tr>
                                <th className="p-2.5">Physician Name</th>
                                <th className="p-2.5">Specialization</th>
                                <th className="p-2.5">Consultation Fee</th>
                                <th className="p-2.5">LAG() Prior Fee</th>
                                <th className="p-2.5">Fee Variance</th>
                                <th className="p-2.5">Staffing Tier</th>
                              </tr>
                            ) : (
                              <tr>
                                <th className="p-2.5">Hospital Center</th>
                                <th className="p-2.5">Department</th>
                                <th className="p-2.5">Monthly Appointments</th>
                                <th className="p-2.5">Load / Physician</th>
                                <th className="p-2.5">Capacity Planning Recommendation</th>
                              </tr>
                            )}
                          </thead>
                          <tbody className="divide-y divide-white/5 bg-slate-950/80 text-neutral-300">
                            {activeMediCareQuery === 'demand' ? (
                              <>
                                <tr>
                                  <td className="p-2.5 text-white font-bold">Cardiology</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">4,280 appointments</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹210.00</td>
                                  <td className="p-2.5">14 Doctors</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">Critical High Demand</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-bold">Neurology</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">3,420 appointments</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹225.00</td>
                                  <td className="p-2.5">11 Doctors</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">High Demand</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-bold">Orthopedics</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">2,890 appointments</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹180.00</td>
                                  <td className="p-2.5">12 Doctors</td>
                                  <td className="p-2.5 text-cyan-400">Sustained Volume</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-bold">Pediatrics</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">2,150 appointments</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹150.00</td>
                                  <td className="p-2.5">10 Doctors</td>
                                  <td className="p-2.5 text-emerald-400">Stable Capacity</td>
                                </tr>
                              </>
                            ) : activeMediCareQuery === 'lag' ? (
                              <>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Dr. R. Patel</td>
                                  <td className="p-2.5 text-cyan-400">Neurology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹240</td>
                                  <td className="p-2.5 text-neutral-500">NULL (Top)</td>
                                  <td className="p-2.5 text-[#b6f23e] font-bold">Baseline Top</td>
                                  <td className="p-2.5 text-[#b6f23e]">Chief Consultant</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Dr. A. Sharma</td>
                                  <td className="p-2.5 text-cyan-400">Cardiology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹220</td>
                                  <td className="p-2.5 text-neutral-400">₹240</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">-₹20</td>
                                  <td className="p-2.5 text-cyan-400">Senior Specialist</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Dr. S. Chen</td>
                                  <td className="p-2.5 text-cyan-400">Cardiology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹190</td>
                                  <td className="p-2.5 text-neutral-400">₹220</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">-₹30</td>
                                  <td className="p-2.5 text-cyan-400">Associate Specialist</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Dr. V. Menon</td>
                                  <td className="p-2.5 text-cyan-400">Orthopedics</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹180</td>
                                  <td className="p-2.5 text-neutral-400">₹190</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">-₹10</td>
                                  <td className="p-2.5 text-emerald-400">Staff Physician</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Dr. K. Iyer</td>
                                  <td className="p-2.5 text-cyan-400">Pediatrics</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">₹150</td>
                                  <td className="p-2.5 text-neutral-400">₹180</td>
                                  <td className="p-2.5 text-cyan-400 font-bold">-₹30</td>
                                  <td className="p-2.5 text-emerald-400">Resident Physician</td>
                                </tr>
                              </>
                            ) : (
                              <>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Metro Central Hospital</td>
                                  <td className="p-2.5 text-cyan-400">Cardiology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">1,820 appts</td>
                                  <td className="p-2.5 text-amber-400 font-bold">364.0 / doc</td>
                                  <td className="p-2.5 text-amber-400 font-bold">⚠️ Over Capacity: Recruit +2 Cardiologists</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Eastside Specialty Clinic</td>
                                  <td className="p-2.5 text-cyan-400">Neurology</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">1,450 appts</td>
                                  <td className="p-2.5 text-amber-400 font-bold">312.5 / doc</td>
                                  <td className="p-2.5 text-amber-400 font-bold">⚠️ High Load: Add Weekend Consultation Shifts</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">Valley Healthcare Hub</td>
                                  <td className="p-2.5 text-cyan-400">Orthopedics</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">1,120 appts</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">224.0 / doc</td>
                                  <td className="p-2.5 text-emerald-400">✅ Optimal Staffing & Appointment Flow</td>
                                </tr>
                                <tr>
                                  <td className="p-2.5 text-white font-semibold">North Coast Medical Center</td>
                                  <td className="p-2.5 text-cyan-400">Pediatrics</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">890 appts</td>
                                  <td className="p-2.5 text-emerald-400 font-bold">178.0 / doc</td>
                                  <td className="p-2.5 text-emerald-400">✅ Balanced Roster & Patient Volume</td>
                                </tr>
                              </>
                            )}
                          </tbody>
                        </table>
                      </div>

                      {/* Capacity Planning Takeaway */}
                      <div className="p-3.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 text-xs text-neutral-300">
                        <strong className="text-cyan-400">Capacity Planning Takeaway:</strong> Cross-table JOIN and LAG() fee ranking reveals doctor utilization bottlenecks in Cardiology and Neurology, directly informing targeted recruitment schedules and load re-balancing across hospital wings.
                      </div>
                    </div>
                  )}

                </div>
              )}

              {/* Modal Footer */}
              {/* <div className="flex justify-end pt-4 border-t border-neutral-800">
                <button
                  onClick={closeModal}
                  className="px-6 py-2 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Close Dashboard
                </button>
              </div> */}

            </div>
          </div>,
          document.body
        )}

      </div>
    </section>
  );
}
