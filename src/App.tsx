import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ContentHighlights } from './components/ContentHighlights';
import { Brands } from './components/Brands';
import { Contact } from './components/Contact';
import { AnimatePresence } from 'framer-motion';
import { ParticleBackground } from './components/3D/ParticleBackground';
import { Navbar } from './components/Navbar';

export function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return <div className="flex w-full h-screen justify-center items-center bg-gradient-to-br from-slate-900 to-purple-900">
        <div className="text-3xl text-white font-light tracking-widest">
          <span className="inline-block animate-pulse">M</span>
          <span className="inline-block animate-pulse delay-100">a</span>
          <span className="inline-block animate-pulse delay-200">r</span>
          <span className="inline-block animate-pulse delay-300">i</span>
          <span className="inline-block animate-pulse delay-400">a</span>
          <span className="inline-block animate-pulse delay-500">'</span>
          <span className="inline-block animate-pulse delay-600">s</span>
          <span className="inline-block animate-pulse delay-700"> </span>
          <span className="inline-block animate-pulse delay-800">C</span>
          <span className="inline-block animate-pulse delay-900">i</span>
          <span className="inline-block animate-pulse delay-1000">r</span>
          <span className="inline-block animate-pulse delay-1100">c</span>
          <span className="inline-block animate-pulse delay-1200">l</span>
          <span className="inline-block animate-pulse delay-1300">e</span>
        </div>
      </div>;
  }
  return <AnimatePresence>
      <div className="relative w-full min-h-screen bg-gradient-to-br from-slate-900 to-purple-900 text-white overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <ContentHighlights />
          <Brands />
          <Contact />
          <footer className="py-6 text-center text-sm text-purple-200/70">
            © {new Date().getFullYear()} Maria's Circle. All rights reserved.
          </footer>
        </div>
      </div>
    </AnimatePresence>;
}