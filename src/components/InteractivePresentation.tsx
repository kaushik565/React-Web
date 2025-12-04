'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function InteractivePresentation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [counters, setCounters] = useState({ tests: 0, cartridges: 0, accuracy: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [parallaxOffset, setParallaxOffset] = useState(0);
  const [showWelcomeDialog, setShowWelcomeDialog] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);
      
      // Parallax effect
      setParallaxOffset(scrolled * 0.5);

      // Update active section
      const sections = ['hero', 'context', 'challenge', 'solution', 'validation', 'results', 'technical', 'benefits', 'timeline', 'team', 'conclusion'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Animate counters when results section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    const resultsSection = document.getElementById('results');
    if (resultsSection) observer.observe(resultsSection);

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    let tests = 0, cartridges = 0, accuracy = 0;
    const interval = setInterval(() => {
      if (tests < 15) tests++;
      if (cartridges < 300) cartridges += 10;
      if (accuracy < 100) accuracy += 5;
      setCounters({ tests, cartridges, accuracy });
      if (tests === 15 && cartridges >= 300 && accuracy >= 100) clearInterval(interval);
    }, 50);
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleGotIt = () => {
    setShowWelcomeDialog(false);
    // Request fullscreen
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {
        // Silently fail if fullscreen is not available
      });
    }
  };

  const sections = [
    { id: 'hero', label: '🏠 Home', icon: '🏠' },
    { id: 'context', label: '📖 Context', icon: '📖' },
    { id: 'challenge', label: '⚠️ Challenge', icon: '⚠️' },
    { id: 'solution', label: '💡 Solution', icon: '💡' },
    { id: 'validation', label: '✅ Validation', icon: '✅' },
    { id: 'results', label: '📊 Results', icon: '📊' },
    { id: 'technical', label: '⚙️ Technical', icon: '⚙️' },
    { id: 'benefits', label: '✨ Benefits', icon: '✨' },
    { id: 'timeline', label: '⏱️ Timeline', icon: '⏱️' },
    { id: 'team', label: '👥 Team', icon: '👥' },
    { id: 'conclusion', label: '🎯 Conclusion', icon: '🎯' }
  ];

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Welcome Dialog */}
      {showWelcomeDialog && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="glass-strong rounded-3xl max-w-2xl w-full p-8 relative border-2 border-cyan-500/30 shadow-2xl">
            {/* Close button */}
            <button
              onClick={() => setShowWelcomeDialog(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition-all"
            >
              ✕
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">📌</span>
              <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">Note</h2>
            </div>

            {/* Content */}
            <div className="space-y-4 mb-8">
              <p className="text-xl text-gray-200 leading-relaxed">
                Welcome to the <span className="font-bold text-cyan-400">Batch Mix-Up Detection Jig</span> presentation.
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                I have tried a different approach to present this Batch Mix-Up Detection project. Hope you will experience it in a better way!
              </p>

              <div className="glass rounded-2xl p-4 border border-purple-500/30">
                <p className="text-lg text-gray-200 flex items-start gap-2">
                  <span className="text-2xl">💡</span>
                  <span>For the best viewing experience, click the <span className="font-bold text-purple-400">Fullscreen button</span> at the top left corner.</span>
                </p>
              </div>

              <div className="glass rounded-2xl p-4 border border-red-500/30 mt-4">
                <p className="text-lg text-red-400 flex items-start gap-2">
                  <span className="text-2xl">👇</span>
                  <span>Scroll down to view the content</span>
                </p>
              </div>

              <div className="text-right pt-4">
                <p className="text-gray-400">Regards,</p>
                <p className="text-xl font-bold text-cyan-400">Kaushik</p>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleGotIt}
              className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
            >
              Got it!
            </button>
          </div>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Navigation */}
      <nav className="fixed top-4 right-4 z-40">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="glass-strong rounded-full p-4 hover:scale-110 transition-transform duration-300 shadow-2xl"
        >
          <span className="text-2xl">{isMenuOpen ? '✕' : '☰'}</span>
        </button>
        
        {isMenuOpen && (
          <div className="absolute top-16 right-0 glass-strong rounded-2xl p-4 shadow-2xl w-64 animate-fadeIn">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`w-full text-left px-4 py-3 rounded-xl mb-2 transition-all duration-300 flex items-center gap-3 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                    : 'hover:bg-white/10'
                }`}
              >
                <span className="text-xl">{section.icon}</span>
                <span className="font-semibold">{section.label}</span>
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Section Indicators */}
      <div className="fixed left-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? 'bg-cyan-500 scale-150'
                : 'bg-gray-600 hover:bg-gray-400 hover:scale-125'
            }`}
            title={section.label}
          />
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated Background with Parallax */}
        <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}>
          <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl float animation-delay-1"></div>
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl float animation-delay-2"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <div className="glass-strong rounded-3xl p-12 card-shadow reveal">
            {/* Main Title */}
            <h1 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-transparent bg-clip-text animate-gradientFlow">
              Batch Mix-Up Detection JIG
            </h1>
            
            {/* Objective */}
            <div className="glass rounded-2xl p-6 mb-6 max-w-5xl mx-auto">
              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                <span className="font-bold text-cyan-400">Objective:</span> Prevent batch and line mix-ups via Automatic QR Scanning JIG.
              </p>
            </div>

            {/* Developer Info */}
            <div className="mb-6">
              <p className="text-lg text-gray-400 mb-1">Developed by:</p>
              <p className="text-3xl font-black text-white">P. Lakshmana Sai Kaushik</p>
              <p className="text-xl text-purple-400">QA Supervisor — Molbio Diagnostics Limited</p>
              <p className="text-md text-gray-500 mt-2">October 2025 – December 2025</p>
            </div>

            {/* One-Line Impact */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-6 mb-8 max-w-5xl mx-auto">
              <p className="text-lg text-gray-200 mb-1">💡 One-Line Impact</p>
              <p className="text-2xl font-bold text-white">
                Automated in-house jig that eliminates batch and line mix-ups — delivering 100% verified accuracy with zero additional cost.
              </p>
            </div>

            {/* Project Status Banner */}
            <div className="glass rounded-2xl p-6 mb-8 border-2 border-green-500/50">
              <h3 className="text-2xl font-black text-green-400 mb-4">🎯 Project Status: ✅ Testing Complete — Ready for Handover</h3>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="glass-strong rounded-xl p-4">
                  <div className="text-3xl font-black text-cyan-400">100%</div>
                  <div className="text-sm text-gray-400">Accuracy</div>
                  <div className="text-xs text-gray-500">Zero False Rejections</div>
                </div>
                <div className="glass-strong rounded-xl p-4">
                  <div className="text-3xl font-black text-green-400">300</div>
                  <div className="text-sm text-gray-400">Cartridges</div>
                  <div className="text-xs text-gray-500">Successfully Tested</div>
                </div>
                <div className="glass-strong rounded-xl p-4">
                  <div className="text-3xl font-black text-purple-400">✓</div>
                  <div className="text-sm text-gray-400">QR Validation</div>
                  <div className="text-xs text-gray-500">Eliminates Manual Error</div>
                </div>
                <div className="glass-strong rounded-xl p-4">
                  <div className="text-3xl font-black text-orange-400">📊</div>
                  <div className="text-sm text-gray-400">Full Traceability</div>
                  <div className="text-xs text-gray-500">CSV Logs</div>
                </div>
              </div>
            </div>

            <button
              onClick={() => scrollToSection('context')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 px-10 py-4 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50"
            >
              Explore the Journey ↓
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="text-4xl">⬇️</div>
        </div>
      </section>

      {/* Context Section - Root Cause */}
      <section id="context" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-orange-400 to-red-400 text-transparent bg-clip-text reveal">
            📋 The Challenge
          </h2>

          {/* Impact Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 reveal">
            {/* Mix-up Incidents */}
            <div className="glass-strong rounded-3xl p-8 border-2 border-red-500/50 hover:scale-105 transition-all group">
              <div className="text-6xl mb-4 group-hover:rotate-12 transition-transform">📊</div>
              <div className="text-5xl font-black bg-gradient-to-r from-red-400 to-red-600 text-transparent bg-clip-text mb-2">6+</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">Mix-up Incidents</h3>
              <p className="text-gray-400">Repeated across multiple batches</p>
              <div className="mt-4 px-3 py-1 rounded-full bg-red-900/40 inline-block">
                <span className="text-sm font-bold text-red-300">CRITICAL</span>
              </div>
            </div>

            {/* Root Cause */}
            <div className="glass-strong rounded-3xl p-8 border-2 border-orange-500/50 hover:scale-105 transition-all group">
              <div className="text-6xl mb-4 group-hover:rotate-12 transition-transform">🔍</div>
              <div className="text-2xl font-bold text-orange-400 mb-4">Root Cause</div>
              <p className="text-gray-300 mb-4">QR scan without validation</p>
              <div className="px-3 py-1 rounded-full bg-orange-900/40 inline-block">
                <span className="text-sm font-bold text-orange-300">HIGH</span>
              </div>
            </div>

            {/* Risk Level - Left */}
            <div className="glass-strong rounded-3xl p-8 border-2 border-red-500/50 hover:scale-105 transition-all group">
              <div className="text-6xl mb-4 group-hover:rotate-12 transition-transform">⚡</div>
              <h3 className="text-2xl font-bold text-red-400 mb-4">Risk Level</h3>
              <div className="px-3 py-1 rounded-full bg-red-900/40 inline-block">
                <span className="text-sm font-bold text-red-300">HIGH</span>
              </div>
            </div>

            {/* QMS Traceability Issues */}
            <div className="glass-strong rounded-3xl p-8 border-2 border-red-500/50 hover:scale-105 transition-all group">
              <div className="text-6xl mb-4 group-hover:rotate-12 transition-transform">📋</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">QMS Traceability Issues</h3>
              <p className="text-gray-300 text-sm mb-4">Due to mix-ups: delays in closures, reworks, batch compilation errors</p>
              <div className="px-3 py-1 rounded-full bg-red-900/40 inline-block">
                <span className="text-sm font-bold text-red-300">CRITICAL</span>
              </div>
            </div>
          </div>
          
          {/* CPSR Today */}
          <div className="glass-strong rounded-3xl p-8 mb-8 reveal">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🔍</span>
              <div>
                <h3 className="text-3xl font-bold mb-3 text-orange-400">CPSR Today</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Scans and counts QR codes; does not validate Line ID, Batch, or QR range.
                </p>
              </div>
            </div>
          </div>

          {/* Manual Checks */}
          <div className="glass-strong rounded-3xl p-8 mb-8 reveal">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">👤</span>
              <div>
                <h3 className="text-3xl font-bold mb-3 text-red-400">Manual Checks</h3>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Inconsistent for wrong batch, cross-line mix-ups, or tampered labels.
                </p>
              </div>
            </div>
          </div>

          {/* Result */}
          <div className="glass-strong rounded-3xl p-8 mb-8 reveal border-2 border-red-500/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">⚠️</span>
              <div>
                <h3 className="text-3xl font-bold mb-3 text-red-400">Result</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  Rework, delays, and traceability gaps.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {['Wrong batch', 'Wrong mould', 'Cross-line mix-up', 'QR tampering'].map((pattern, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-red-900/20 hover:bg-red-900/40 transition-all">
                      <span className="text-red-400 text-2xl">▸</span>
                      <span className="text-lg font-semibold">{pattern}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 rounded-xl bg-red-900/30 border-l-4 border-red-500">
                  <p className="text-lg font-bold text-red-300">⚠️ Manual verification alone is not reliable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution & Validation Section */}
      <section id="solution" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text reveal">
            💡 The Solution
          </h2>

          {/* Current Situation */}
          <div className="glass-strong rounded-3xl p-8 mb-8 reveal border-2 border-blue-500/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">📌</span>
              <div>
                <h3 className="text-3xl font-bold mb-6 text-blue-400">Current Situation & Why This Solution Works</h3>
                
                <div className="space-y-5">
                  {/* Existing CPSR Limitation */}
                  <div className="flex gap-4 p-4 rounded-xl bg-red-900/20 border border-red-500/30">
                    <span className="text-3xl flex-shrink-0">❌</span>
                    <div>
                      <p className="font-bold text-red-300 text-lg">Existing CPSR Limitation</p>
                      <p className="text-gray-300">Only scans QR and counts — no Line ID, Batch, or QR validation</p>
                    </div>
                  </div>

                  {/* Manual Verification */}
                  <div className="flex gap-4 p-4 rounded-xl bg-red-900/20 border border-red-500/30">
                    <span className="text-3xl flex-shrink-0">❌</span>
                    <div>
                      <p className="font-bold text-red-300 text-lg">Manual Verification</p>
                      <p className="text-gray-300">Cannot reliably catch cross-batch or cross-line mix-ups; slow and error-prone</p>
                    </div>
                  </div>

                  {/* Range-Based Validation */}
                  <div className="flex gap-4 p-4 rounded-xl bg-green-900/20 border border-green-500/30">
                    <span className="text-3xl flex-shrink-0">✅</span>
                    <div>
                      <p className="font-bold text-green-300 text-lg">Range-Based Validation</p>
                      <p className="text-gray-300">Set QR Start/End → Within range = PASS | Outside = REJECT + Line ID check</p>
                    </div>
                  </div>

                  {/* Physical Auto-Routing */}
                  <div className="flex gap-4 p-4 rounded-xl bg-green-900/20 border border-green-500/30">
                    <span className="text-3xl flex-shrink-0">✅</span>
                    <div>
                      <p className="font-bold text-green-300 text-lg">Physical Auto-Routing</p>
                      <p className="text-gray-300">ACTJ actuators route PASS/REJECT automatically — no human decision errors</p>
                    </div>
                  </div>

                  {/* Full Traceability */}
                  <div className="flex gap-4 p-4 rounded-xl bg-green-900/20 border border-green-500/30">
                    <span className="text-3xl flex-shrink-0">✅</span>
                    <div>
                      <p className="font-bold text-green-300 text-lg">Full Traceability</p>
                      <p className="text-gray-300">CSV + SQLite + Flask dashboard — remote audit without touching the jig</p>
                    </div>
                  </div>

                  {/* Goal Achieved */}
                  <div className="flex gap-4 p-4 rounded-xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/50">
                    <span className="text-3xl flex-shrink-0">🎯</span>
                    <div>
                      <p className="font-bold text-green-300 text-lg">Goal Achieved</p>
                      <p className="text-gray-300">Intelligent validation (Line, Batch, Range) prevents mix-ups — zero added cost</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Logic Section */}
          <div className="glass-strong rounded-3xl p-8 mb-8 reveal border-2 border-purple-500/30">
            <div className="flex items-start gap-4">
              <span className="text-5xl">🧠</span>
              <div className="w-full">
                <h3 className="text-3xl font-bold mb-6 text-purple-400">The Core Logic & How The System Works</h3>
                
                {/* Validation Logic Added */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                    <span>🔐</span> Validation Logic Added
                  </h4>
                  <div className="space-y-3 pl-12">
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl font-bold text-purple-400 flex-shrink-0">1️⃣</span>
                      <p className="text-gray-300">Set QR Start & End Numbers for each batch (defines valid range)</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl font-bold text-purple-400 flex-shrink-0">2️⃣</span>
                      <p className="text-gray-300">Scanned QR within range? → <span className="text-green-300 font-bold">✅ PASS</span> | Outside? → <span className="text-red-300 font-bold">❌ REJECT</span></p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl font-bold text-purple-400 flex-shrink-0">3️⃣</span>
                      <p className="text-gray-300">Extract Line ID from QR (Position 2) → Match with batch line</p>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="text-2xl font-bold text-purple-400 flex-shrink-0">4️⃣</span>
                      <p className="text-gray-300">Line mismatch? → Immediate REJECT (prevents cross-line mix-up)</p>
                    </div>
                  </div>
                </div>

                {/* What Stayed the Same */}
                <div className="mb-8">
                  <h4 className="text-2xl font-bold text-gray-300 mb-4 flex items-center gap-2">
                    <span>🛠️</span> What Stayed the Same
                  </h4>
                  <div className="p-4 rounded-xl bg-gray-900/40 border border-gray-500/30">
                    <p className="text-gray-300 leading-relaxed">
                      No hardware or firmware changes. The same ACTJ/CPSR jig and components are reused. A Python validation layer on Raspberry Pi validates Line ID, Batch Range, and QR format/duplicates. Jig control remains unchanged.
                    </p>
                  </div>
                </div>

                {/* 4-Step Process */}
                <div>
                  <h4 className="text-2xl font-bold text-gray-300 mb-4">Complete Process Flow</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      { num: '1️⃣', title: 'Batch Configuration', desc: 'Operator inputs: Batch Number, Line ID, Mould count, QR Start/End ranges' },
                      { num: '2️⃣', title: 'QR Scanning', desc: 'GM65 scanner reads 14-char QRs; system validates & auto-routes to bins' },
                      { num: '3️⃣', title: '4-Level Validation', desc: 'Format → Line ID → Batch Range → Duplicate checks ensure only correct units pass' },
                      { num: '4️⃣', title: 'Visual Feedback & Routing', desc: 'GREEN (pass), YELLOW (duplicate), RED (reject) + ACTJ auto-diversion to bins' }
                    ].map((step, idx) => (
                      <div key={idx} className="glass rounded-2xl p-4 hover:scale-105 transition-all border border-purple-500/30">
                        <div className="text-3xl mb-2">{step.num}</div>
                        <h5 className="font-bold text-purple-300 mb-2">{step.title}</h5>
                        <p className="text-sm text-gray-300">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8 mb-8 reveal border-2 border-green-500/30">
            <div className="flex items-start gap-4 mb-6">
              <span className="text-5xl">🎯</span>
              <div>
                <h3 className="text-3xl font-bold mb-4 text-green-400">Implementation Strategy</h3>
                <p className="text-xl text-gray-300 leading-relaxed mb-6">
                  By implementing this QR Scanning JIG in our production line, we can eliminate batch mix-ups and automatically detect cartridges mixed in wrong batches.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-green-900/40 to-emerald-900/40 border border-green-500/30">
                  <p className="text-lg text-gray-200 leading-relaxed">
                    We used the existing <span className="font-bold text-green-300">ACTJ Jig</span> for automated detection — it scans QR codes, validates Line ID, Batch range, and format in real-time, then automatically routes cartridges to <span className="font-bold text-green-400">PASS</span> or <span className="font-bold text-red-400">REJECT</span> bins. No manual intervention; zero human error.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-strong rounded-3xl p-8 mb-8 reveal">
            <h3 className="text-2xl font-bold mb-6">System Architecture</h3>
            <div className="flex items-center justify-between flex-wrap gap-6 overflow-x-auto pb-4">
              {[
                { icon: '🔧', label: 'ACTJ JIG' },
                { icon: '📱', label: 'GM65 Scanner' },
                { icon: '🔍', label: 'Python Validation' },
                { icon: '🎛️', label: 'ACTJ Routing' },
                { icon: '📊', label: 'Flask Dashboard' }
              ].map((step, idx, arr) => (
                <div key={idx} className="flex items-center gap-6 flex-shrink-0">
                  <div className="glass rounded-2xl px-6 py-4 text-center hover:scale-110 transition-all">
                    <div className="text-4xl mb-2">{step.icon}</div>
                    <div className="text-sm font-semibold whitespace-nowrap">{step.label}</div>
                  </div>
                  {idx < arr.length - 1 && <div className="text-4xl text-cyan-400 flex-shrink-0">→</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Batch Configuration Example Section */}
      <section id="batch-config" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-orange-400 to-amber-400 text-transparent bg-clip-text reveal">
            ⚙️ Batch Configuration Example
          </h2>

          {/* Real Batch Setup */}
          <div className="glass-strong rounded-3xl p-8 mb-12 reveal border-2 border-orange-500/30">
            <h3 className="text-3xl font-bold mb-6 text-orange-400">Real Batch Setup</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { emoji: '📦', label: 'Batch Number:', value: 'MVANC00045' },
                { emoji: '📍', label: 'Batch Line:', value: 'A (Line A)' },
                { emoji: '🔧', label: 'Number of Moulds:', value: '3 Moulds' },
                { emoji: '🧭', label: 'Allowed Range:', value: 'VAN142536A0001 → VAN142536B9999' }
              ].map((item, idx) => (
                <div key={idx} className="glass rounded-2xl p-4 border border-orange-500/30">
                  <p className="text-2xl mb-2">{item.emoji}</p>
                  <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-orange-300">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* PASS and REJECT Examples */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* PASS Examples */}
            <div className="glass-strong rounded-3xl p-8 border-2 border-green-500/30 reveal">
              <h3 className="text-3xl font-bold mb-6 text-green-400">✅ PASS Examples</h3>
              <div className="space-y-3">
                {[
                  'VAN142536A0001 — within range',
                  'VAN142536A5000 — within range',
                  'VAN142536B0002 — within range'
                ].map((example, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-xl bg-green-900/20 border border-green-500/30">
                    <span className="text-2xl flex-shrink-0">✅</span>
                    <span className="text-gray-300 font-mono text-sm">{example}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* REJECT Examples */}
            <div className="glass-strong rounded-3xl p-8 border-2 border-red-500/30 reveal">
              <h3 className="text-3xl font-bold mb-6 text-red-400">❌ REJECT Examples</h3>
              <div className="space-y-3">
                {[
                  'VAN142536C0003 — outside allowed range',
                  'VBN142536B0100 — wrong line',
                  'VAN142536A0001 — already scanned in session ⚠️ DUPLICATE'
                ].map((example, idx) => (
                  <div key={idx} className="flex gap-3 p-3 rounded-xl bg-red-900/20 border border-red-500/30">
                    <span className="text-2xl flex-shrink-0">❌</span>
                    <span className="text-gray-300 font-mono text-sm">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* How Validation Logic Works */}
          <div className="glass-strong rounded-3xl p-8 reveal border-2 border-cyan-500/30">
            <h3 className="text-3xl font-bold mb-6 text-cyan-400">🎯 How the Validation Logic Works</h3>
            <div className="space-y-4">
              {[
                { step: 'Step 1', desc: 'Configure QR Start (VAN142536A0001) and QR End (VAN142536B9999) for the batch' },
                { step: 'Step 2', desc: 'When QR is scanned, system checks: Is it within this range?' },
                { step: 'Step 3', desc: 'Extract Line ID from Position 2 of QR → Compare with batch line (A)' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl bg-cyan-900/20 border border-cyan-500/30">
                  <div className="text-2xl font-bold text-cyan-400 flex-shrink-0 min-w-24">{item.step}</div>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              ))}
              <div className="mt-6 p-4 rounded-xl bg-gradient-to-r from-green-900/40 to-cyan-900/40 border border-green-500/50">
                <p className="text-gray-300">
                  <span className="font-bold text-gray-200">Result:</span> Both checks pass → <span className="text-green-400 font-bold">GREEN (PASS)</span> | Any check fails → <span className="text-red-400 font-bold">RED (REJECT)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation Section */}
      <section id="validation" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-transparent to-green-900/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-green-400 to-teal-400 text-transparent bg-clip-text reveal">
            ✅ 4-Level Validation Process
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                level: 1,
                icon: '📝',
                title: 'Format Validation',
                color: 'from-blue-500 to-cyan-600',
                details: {
                  check: 'QR must be exactly 14 alphanumeric characters',
                  rejects: 'Wrong length, special characters, spaces',
                  result: 'RED light if failed'
                }
              },
              {
                level: 2,
                icon: '🔤',
                title: 'Line ID Validation',
                color: 'from-purple-500 to-pink-600',
                details: {
                  logic: 'Extract character at Position 2 from scanned QR code (A-Z)',
                  check: 'Does extracted Line ID match configured Batch Line?',
                  example: 'QR = VAN142536A0001 → Line = A | If batch is Line B → REJECT',
                  result: 'RED light + reject bin if Line mismatch (cross-line mix-up detected)'
                }
              },
              {
                level: 3,
                icon: '📊',
                title: 'Batch Range Validation',
                color: 'from-green-500 to-emerald-600',
                details: {
                  logic: 'Operator sets QR Start Number & QR End Number per batch',
                  check: 'Is scanned QR within this range? (e.g., VAN142536A0001 to VAN142536B9999)',
                  decision: 'Within range → PASS | Outside range → REJECT',
                  result: 'RED light + reject bin if out of range'
                }
              },
              {
                level: 4,
                icon: '🔄',
                title: 'Duplicate Detection',
                color: 'from-orange-500 to-red-600',
                details: {
                  check: 'QR not previously scanned in current session',
                  prevents: 'Re-scanning same cartridge multiple times',
                  result: 'YELLOW light if duplicate, GREEN if all checks pass'
                }
              }
            ].map((step, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${step.color} rounded-3xl p-8 hover:scale-105 transition-all duration-300 group reveal`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="glass-strong rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black">
                    {step.level}
                  </div>
                  <div>
                    <div className="text-5xl group-hover:scale-125 transition-transform">{step.icon}</div>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-6 text-white">{step.title}</h3>
                
                <div className="space-y-3 text-white/90">
                  {step.details.check && (
                    <div>
                      <p className="text-xs font-bold text-white/70 uppercase mb-1">Check</p>
                      <p className="text-lg">{step.details.check}</p>
                    </div>
                  )}
                  
                  {step.details.rejects && (
                    <div>
                      <p className="text-xs font-bold text-white/70 uppercase mb-1">Rejects</p>
                      <p className="text-lg">{step.details.rejects}</p>
                    </div>
                  )}
                  
                  {step.details.logic && (
                    <div>
                      <p className="text-xs font-bold text-white/70 uppercase mb-1">Logic</p>
                      <p className="text-lg">{step.details.logic}</p>
                    </div>
                  )}
                  
                  {step.details.example && (
                    <div>
                      <p className="text-xs font-bold text-white/70 uppercase mb-1">Example</p>
                      <p className="text-sm font-mono bg-black/30 p-2 rounded">{step.details.example}</p>
                    </div>
                  )}
                  
                  {step.details.decision && (
                    <div>
                      <p className="text-xs font-bold text-white/70 uppercase mb-1">Decision</p>
                      <p className="text-lg">{step.details.decision}</p>
                    </div>
                  )}
                  
                  {step.details.prevents && (
                    <div>
                      <p className="text-xs font-bold text-white/70 uppercase mb-1">Prevents</p>
                      <p className="text-lg">{step.details.prevents}</p>
                    </div>
                  )}
                  
                  {step.details.result && (
                    <div className="pt-3 border-t border-white/20">
                      <p className="text-xs font-bold text-white/70 uppercase mb-1">Result</p>
                      <p className="text-lg font-bold">{step.details.result}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section with Circular Progress Rings */}
      <section id="results" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text reveal">
            📊 Test Results & Performance
          </h2>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {[
              { label: 'Test Cycles', value: counters.tests, max: 20, suffix: '', color: '#06b6d4', strokeColor: 'cyan' },
              { label: 'Cartridges Tested', value: counters.cartridges, max: 400, suffix: '', color: '#a855f7', strokeColor: 'purple' },
              { label: 'Accuracy', value: counters.accuracy, max: 100, suffix: '%', color: '#22c55e', strokeColor: 'green' },
              { label: 'Cycle Time', value: 63, max: 100, suffix: 's', color: '#f97316', strokeColor: 'orange' }
            ].map((stat, idx) => {
              const percentage = (stat.value / stat.max) * 100;
              const circumference = 2 * Math.PI * 54; // radius = 54
              const strokeDashoffset = circumference - (percentage / 100) * circumference;
              
              return (
                <div key={idx} className={`glass-strong rounded-3xl p-8 text-center hover:scale-110 transition-all duration-300 border-2 border-${stat.strokeColor}-500/30 reveal`}>
                  <div className="relative inline-block mb-4">
                    <svg width="140" height="140" className="transform -rotate-90">
                      {/* Background circle */}
                      <circle
                        cx="70"
                        cy="70"
                        r="54"
                        stroke="#1f2937"
                        strokeWidth="10"
                        fill="none"
                      />
                      {/* Progress circle */}
                      <circle
                        cx="70"
                        cy="70"
                        r="54"
                        stroke={stat.color}
                        strokeWidth="10"
                        fill="none"
                        strokeLinecap="round"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        style={{ transition: 'stroke-dashoffset 2s ease-out' }}
                      />
                    </svg>
                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`text-4xl font-black text-${stat.strokeColor}-400`}>
                        {stat.value}{stat.suffix}
                      </div>
                    </div>
                  </div>
                  <div className="text-lg text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-3xl p-10 text-center">
            <h3 className="text-4xl font-black mb-6">🎯 Perfect Performance</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-5xl font-black mb-2">✓</div>
                <div className="text-xl">Zero False Rejects</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">✓</div>
                <div className="text-xl">100% Detection Rate</div>
              </div>
              <div>
                <div className="text-5xl font-black mb-2">✓</div>
                <div className="text-xl">Real-time Validation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Section */}
      <section id="technical" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-transparent to-cyan-900/10">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text reveal">
            ⚙️ Technical Specifications
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { component: 'Processor', spec: 'Raspberry Pi 3B+', icon: '🖥️', color: 'from-blue-500 to-cyan-600' },
              { component: 'Scanner', spec: 'GM65 QR Scanner', icon: '📱', color: 'from-purple-500 to-pink-600' },
              { component: 'JIG CPSR', spec: 'Automated Routing System', icon: '🔧', color: 'from-green-500 to-emerald-600' },
              { component: 'Software', spec: 'Python 3 + Tkinter', icon: '⚙️', color: 'from-teal-500 to-cyan-600' },
              { component: 'Database', spec: 'SQLite (scan_state.db)', icon: '🗄️', color: 'from-pink-500 to-rose-600' },
              { component: 'Dashboard', spec: 'Flask Web (:8080)', icon: '🌐', color: 'from-amber-500 to-orange-600' }
            ].map((spec, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${spec.color} rounded-2xl p-6 hover:scale-105 transition-all duration-300 group reveal`}>
                <div className="flex items-center gap-4 mb-3">
                  <div className="text-5xl group-hover:rotate-12 transition-transform">{spec.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{spec.component}</h3>
                    <p className="text-white/90">{spec.spec}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-green-400 to-emerald-400 text-transparent bg-clip-text reveal">
            ✨ Key Benefits
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              { title: '💯 Zero Mix-Ups', desc: '100% accurate validation ensures cartridges never go to wrong batch', color: 'from-green-500 to-emerald-600' },
              { title: '💰 No Investment', desc: 'Uses existing jig + Raspberry Pi, zero capital expenditure', color: 'from-blue-500 to-cyan-600' },
              { title: '📊 Full Traceability', desc: 'CSV + SQLite + Flask dashboard provides complete audit trail', color: 'from-purple-500 to-indigo-600' },
              { title: '⚡ Fast & Efficient', desc: 'Average 3.15 seconds per cartridge processing time', color: 'from-orange-500 to-amber-600' },
              { title: '🔄 Zero Disruption', desc: 'No changes to existing ACTJ/CPSR firmware or hardware', color: 'from-pink-500 to-rose-600' },
              { title: '🤖 Operator Empowerment', desc: 'Instant LED + buzzer feedback. Operators focus on action, not manual QR checks.', color: 'from-indigo-500 to-blue-600' }
            ].map((benefit, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${benefit.color} rounded-3xl p-8 hover:scale-105 transition-all duration-300 reveal`}>
                <h3 className="text-3xl font-black mb-4 text-white">{benefit.title}</h3>
                <p className="text-white/90 text-lg">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-yellow-500 via-amber-600 to-orange-600 rounded-3xl p-10 reveal">
            <h3 className="text-4xl font-black mb-8 text-center">📈 Project Impact & Value</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Problems Prevented */}
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>🛡️</span> Problems Prevented
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">•</span>
                    <p className="text-lg">Avg 2–3 hours delay per incident</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">•</span>
                    <p className="text-lg">Rework + QA investigation time</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">•</span>
                    <p className="text-lg">Material waste + rejected cartridges</p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-green-900/30 border border-green-500/50">
                  <p className="text-lg font-bold text-center">Prevents downtime and rework</p>
                </div>
              </div>

              {/* Resource Utilization */}
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span>♻️</span> Smart Resource Utilization
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-xl">•</span>
                    <p className="text-lg">Used existing ACTJ/CPSR infra</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">•</span>
                    <p className="text-lg">Raspberry Pi & scanner from maintenance</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-xl">•</span>
                    <p className="text-lg">100% in-house development</p>
                  </div>
                </div>
                <div className="mt-4 p-3 rounded-xl bg-blue-900/30 border border-blue-500/50">
                  <p className="text-lg font-bold text-center">Zero additional resources needed</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { value: '100%', label: 'Accuracy', icon: '💯' },
                { value: '0', label: 'Mix-ups', icon: '✅' },
                { value: '300+', label: 'Cartridges Validated', icon: '📦' },
                { value: '3.15s', label: 'Avg Cycle Time', icon: '⚡' }
              ].map((stat, idx) => (
                <div key={idx} className="glass-strong rounded-2xl p-6 text-center hover:scale-105 transition-all">
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-5xl font-black mb-2">{stat.value}</div>
                  <div className="text-lg">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="min-h-screen flex items-center py-20 bg-gradient-to-b from-transparent to-purple-900/10">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text reveal">
            ⏱️ Project Timeline
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-500 via-purple-500 to-green-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {[
                { 
                  phase: 'Concept Approval & Material Procurement', 
                  date: 'Oct 6-7, 2025', 
                  icon: '📋', 
                  description: 'Project proposal submitted and approved by QA Manager. Hardware procured: Raspberry Pi 3B+, GM65 Scanner, SD Card from Maintenance Team',
                  color: 'cyan',
                  number: '1'
                },
                { 
                  phase: 'Prototype Completion', 
                  date: 'Oct 9, 2025', 
                  icon: '🔧', 
                  description: 'Prototype model completed and functioning. Demo video shared with stakeholders. Approval received for ACTJ integration and USB access',
                  color: 'blue',
                  number: '2'
                },
                { 
                  phase: 'BigTec Collaboration', 
                  date: 'Oct 10-14, 2025', 
                  icon: '🤝', 
                  description: 'Source code received from BigTec Labs (Salman Khaja). Software integration with existing ACTJ firmware (v2.6) — no firmware modifications',
                  color: 'purple',
                  number: '3'
                },
                { 
                  phase: 'System Integration Complete', 
                  date: 'Nov 19, 2025', 
                  icon: '🔌', 
                  description: 'Jig successfully integrated with CPSR. Demo with real-time run completed. 300 cartridges approved for validation testing',
                  color: 'orange',
                  number: '4'
                },
                { 
                  phase: 'Testing & Performance Evaluation ✓', 
                  date: 'Nov 20 - Dec 2025', 
                  icon: '✅', 
                  description: 'Completed: Performance evaluation with 300 cartridges. Cycle time tested: 1 min 03 sec per 20 cartridges',
                  color: 'green',
                  number: '5'
                }
              ].map((milestone, idx) => (
                <div key={idx} className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start gap-8`}>
                  <div className="flex-1 md:pr-12">
                    {idx % 2 === 0 && (
                      <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all reveal">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-10 h-10 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-600 rounded-full flex items-center justify-center font-black text-xl`}>
                            {milestone.number}
                          </div>
                          <h3 className={`text-2xl font-bold text-${milestone.color}-400`}>{milestone.phase}</h3>
                        </div>
                        <p className="text-cyan-400 font-semibold mb-3">{milestone.date}</p>
                        <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                  
                  <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-${milestone.color}-500 to-${milestone.color}-600 rounded-full flex items-center justify-center text-3xl md:text-4xl shadow-2xl z-10 hover:scale-125 transition-all flex-shrink-0`}>
                    {milestone.icon}
                  </div>
                  
                  <div className="flex-1 md:pl-12">
                    {idx % 2 === 1 && (
                      <div className="glass-strong rounded-2xl p-6 hover:scale-105 transition-all reveal">
                        <div className="absolute top-6 left-6 w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center font-black text-2xl shadow-lg">
                          {milestone.number}
                        </div>
                        <h3 className={`text-2xl font-bold mb-2 text-${milestone.color}-400 pl-16`}>{milestone.phase}</h3>
                        <p className="text-cyan-400 mb-3 pl-16 font-semibold">{milestone.date}</p>
                        <p className="text-gray-300 leading-relaxed pl-16">{milestone.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Acknowledgments Section */}
      <section id="team" className="min-h-screen flex items-center py-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-5xl font-black text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text reveal">
            🙏 Acknowledgments
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'Plant Head', name: 'G.Uday Bhaskar', role: 'GM-Operations', icon: '👔', color: 'indigo' },
              { title: 'QA Management', name: 'Hameed C.R.', role: 'Assistant Manager - QA', icon: '🎯', color: 'pink' },
              { title: 'Design Team', name: 'Gompa Naidu', role: 'HOD - DI', icon: '🛠️', color: 'orange' },
              { title: 'Technical Support', name: 'S. Chakravarthi', role: 'Maintenance Site-III', icon: '⚙️', color: 'cyan' }
            ].map((member, idx) => (
              <div key={idx} className={`glass-strong rounded-3xl p-6 hover:scale-105 transition-all duration-300 hover:border-2 hover:border-${member.color}-500/50 group reveal`}>
                <div className="text-6xl mb-4 group-hover:rotate-12 transition-transform">{member.icon}</div>
                <h3 className={`text-lg font-bold mb-2 text-${member.color}-400`}>{member.title}</h3>
                <p className="text-xl font-bold text-white mb-1">{member.name}</p>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-cyan-600 via-blue-600 to-indigo-600 rounded-3xl p-8 mb-6 reveal">
            <h3 className="text-3xl font-black mb-6 text-center">🌟 Key Contributors</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-xl font-bold text-cyan-400 mb-3">🔧 BigTec Labs:</h4>
                <p className="text-lg mb-1"><span className="font-bold text-white">Salman Khaja</span></p>
                <p className="text-gray-300">Source Code & Integration</p>
              </div>
              
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-xl font-bold text-green-400 mb-3">🏭 Production Lead:</h4>
                <p className="text-lg mb-1"><span className="font-bold text-white">Santosh Yavvari</span></p>
                <p className="text-gray-300">Inputs and Guidance</p>
              </div>
              
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-xl font-bold text-purple-400 mb-3">💻 IT Support:</h4>
                <p className="text-lg mb-1"><span className="font-bold text-white">Raj Kumar Kanithi</span></p>
                <p className="text-gray-300">USB Access & IT Infrastructure</p>
              </div>
              
              <div className="glass-strong rounded-2xl p-6">
                <h4 className="text-xl font-bold text-orange-400 mb-3">📦 Materials:</h4>
                <p className="text-lg mb-1"><span className="font-bold text-white">G.Bala Sri Ram & Vadlapudi Ramya</span></p>
                <p className="text-gray-300">Cartridge Provision for Testing</p>
              </div>
            </div>
            <div className="glass-strong rounded-2xl p-6 mt-6">
              <h4 className="text-xl font-bold text-pink-400 mb-3">🔧 Maintenance Support:</h4>
              <p className="text-lg mb-2"><span className="font-bold text-white">Sanjeev Varma, Bhargav, Sri Ram, Yeswanth & Whole Maintenance Team</span></p>
              <p className="text-gray-300">Technical Support in Field & System Troubleshooting</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-600 via-rose-600 to-red-600 rounded-3xl p-8 mb-6 reveal">
            <h3 className="text-2xl font-black mb-4">💖 Special Thanks</h3>
            <div className="glass-strong rounded-2xl p-6">
              <p className="text-xl leading-relaxed">
                <span className="font-black text-2xl">CH. Praneet Raj</span> — For bringing this idea into focus and supporting every step of this journey.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 reveal">
            <h3 className="text-2xl font-black mb-4">🏆 Champions 2.0 Initiative</h3>
            <div className="glass-strong rounded-2xl p-6">
              <p className="text-lg leading-relaxed">
                This project is my <span className="font-bold text-cyan-300">Champions 2.0</span> initiative task, an end-to-end improvement project under the program led by <span className="font-bold text-green-300">GM-Operations, G.Uday Bhaskar</span>. It demonstrates how every new joiner can implement a meaningful, impactful solution from conception to deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Section */}
      <section id="conclusion" className="min-h-screen flex items-center justify-center py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ transform: `translateY(${parallaxOffset * 0.2}px)` }}>
          <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl float"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl float animation-delay-1"></div>
        </div>

        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-7xl font-black mb-12 bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 text-transparent bg-clip-text reveal">
            🙏 Thank You!
          </h2>

          {/* Testing Summary Section */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Testing Complete */}
            <div className="glass-strong rounded-3xl p-8 bg-gradient-to-br from-green-600 to-emerald-600 reveal">
              <h3 className="text-3xl font-black mb-6">✨ Testing Complete — Concept Proven</h3>
              <div className="space-y-4">
                <div className="glass rounded-xl p-4">
                  <p className="text-sm text-gray-200 uppercase font-bold mb-2">🎯 Test Results Summary</p>
                  <ul className="space-y-2 text-left">
                    <li className="flex items-start gap-2">
                      <span className="text-xl">✅</span>
                      <span>300 cartridges tested</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xl">✅</span>
                      <span>100% detection accuracy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-xl">✅</span>
                      <span>Zero false rejections</span>
                    </li>
                  </ul>
                </div>
                <div className="glass rounded-xl p-4 bg-orange-900/30 border border-orange-500/50">
                  <p className="text-sm text-gray-200 uppercase font-bold mb-2">⏱️ Performance Tested</p>
                  <p className="text-2xl font-bold text-orange-300">1 min 03 sec per 20 units</p>
                </div>
                <div className="glass rounded-xl p-4 bg-purple-900/30 border border-purple-500/50">
                  <p className="text-sm text-gray-200 uppercase font-bold mb-2">🎯 Quality Impact</p>
                  <ul className="space-y-1 text-left text-sm">
                    <li>✓ Eliminates batch mix-up risk</li>
                    <li>✓ Full traceability maintained</li>
                    <li>✓ Complete audit documentation</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Next Phase */}
            <div className="glass-strong rounded-3xl p-8 bg-gradient-to-br from-blue-600 to-cyan-600 reveal">
              <h3 className="text-3xl font-black mb-6">🤝 Next Phase — Concept Validation Complete</h3>
              <div className="space-y-4">
                <div className="glass rounded-xl p-4 bg-white/10 border border-white/20">
                  <p className="text-lg text-gray-100 leading-relaxed mb-4">
                    Prototype successfully tested with proven performance metrics validated across diverse batch scenarios.
                  </p>
                </div>
                <div className="glass rounded-xl p-4 bg-cyan-900/30 border border-cyan-500/50">
                  <p className="text-sm text-gray-200 uppercase font-bold mb-3">🔄 Production Implementation</p>
                  <p className="text-gray-100 leading-relaxed">
                    If deemed valuable for production lines, this concept can be implemented and scaled with <span className="font-bold text-cyan-300">BigTec&apos;s support</span> for system integration and deployment.
                  </p>
                </div>
                <div className="bg-gradient-to-r from-yellow-400/20 to-amber-400/20 rounded-xl p-4 border border-yellow-500/50">
                  <p className="text-sm font-bold text-yellow-300 mb-2">💡 Key Advantage</p>
                  <p className="text-gray-100">Zero production line disruption during implementation</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass rounded-3xl p-6 bg-gradient-to-r from-green-500/20 to-teal-500/20 reveal">
            <p className="text-2xl font-bold">
              <span className="text-green-400">✓</span> Prototype Validated 
              <span className="mx-3 text-cyan-400">•</span> 
              <span className="text-green-400">✓</span> Performance Proven 
              <span className="mx-3 text-cyan-400">•</span> 
              <span className="text-green-400">✓</span> Ready for Next Implementing
            </p>
          </div>

          {/* Final Message */}
          <div className="glass-strong rounded-3xl p-12 mt-8 mb-8 border-4 border-purple-500/30 reveal">
            <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-10">
              <h3 className="text-4xl font-black mb-6">💡 Final Message</h3>
              <p className="text-3xl font-bold leading-relaxed">
                Built-in prevention, compliance, and traceability — embedded in the process.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="glass-strong rounded-3xl p-8 bg-gradient-to-br from-cyan-600 to-blue-600 reveal">
              <h3 className="text-3xl font-black mb-6">🎯 What We Achieved</h3>
              <div className="space-y-4 text-left text-lg">
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  <span>Automated prevention with zero cost</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  <span>100% verified accuracy</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">✅</span>
                  <span>Complete traceability</span>
                </div>
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl p-4 mt-4">
                  <p className="text-2xl font-black">🏆 Champions 2.0 in action</p>
                </div>
              </div>
            </div>

            <div className="glass-strong rounded-3xl p-8 bg-gradient-to-br from-orange-600 to-red-600 reveal">
              <h3 className="text-3xl font-black mb-6">👤 Regards</h3>
              <div className="glass-strong rounded-2xl p-8 space-y-3">
                <p className="text-4xl font-black">P. Lakshmana Sai Kaushik</p>
                <p className="text-2xl font-bold">QA Supervisor</p>
                <p className="text-xl">Molbio Diagnostics Limited - SITE III</p>
              </div>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('hero')}
            className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 rounded-full font-bold text-xl hover:scale-110 transition-all duration-300 shadow-2xl"
          >
            ↑ Back to Top
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-8 text-center text-gray-400">
        <p className="text-sm">© 2025 Molbio Diagnostics Limited | Designed by QA Team</p>
        <p className="text-xs mt-2">Automatic QR Scanning & Batch Mix-up Prevention System</p>
      </footer>
    </div>
  );
}
