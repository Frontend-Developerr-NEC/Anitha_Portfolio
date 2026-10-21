import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import EducationTimeline from './components/EducationTimeline';
import ResumeSection from './components/ResumeSection';
import Contact from './components/Contact';
import { GithubIcon, LinkedinIcon } from './components/Icons';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [colorTheme, setColorTheme] = useState('cyan'); // 'cyan' | 'purple' | 'emerald' | 'gold'
  const [is3DInteractive, setIs3DInteractive] = useState(true);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'resume', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const elem = document.getElementById(sections[i]);
        if (elem && elem.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden">
      
      {/* Subtle Digital Grid Pattern Overlay */}
      <div 
        className="fixed inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Main Content Overlay */}
      <div className="relative z-10">
        <Navbar
          activeSection={activeSection}
          colorTheme={colorTheme}
          setColorTheme={setColorTheme}
        />

        <main>
          <Hero
            scrollToSection={scrollToSection}
            colorTheme={colorTheme}
            is3DInteractive={is3DInteractive}
            setIs3DInteractive={setIs3DInteractive}
          />
          <About />
          <Skills />
          <Projects />
          <EducationTimeline />
          <ResumeSection />
          <Contact />
        </main>

      </div>

    </div>
  );
}
