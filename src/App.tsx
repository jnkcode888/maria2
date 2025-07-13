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
  const text = "Maria's Circle";
  const letters = text.split("");
  const [displayed, setDisplayed] = useState(Array(letters.length).fill(""));
  useEffect(() => {
    if (!loading) return;
    let frame = 0;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=~";
    function randomChar() {
      return chars[Math.floor(Math.random() * chars.length)];
    }
    const interval: NodeJS.Timeout = setInterval(() => {
      setDisplayed(prev =>
        prev.map((char, i) => {
          // Each letter settles after a delay
          if (frame < 10 + i * 3) {
            return randomChar();
          } else {
            return letters[i];
          }
        })
      );
      frame++;
      if (frame > 10 + letters.length * 3) {
        clearInterval(interval);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [loading]);
  if (loading) {
    return <div className="flex w-full h-screen justify-center items-center bg-gradient-to-br from-slate-900 to-purple-900">
      <div className="text-3xl md:text-5xl text-white font-light tracking-widest flex gap-1">
        {displayed.map((char, i) => (
          <span key={i} className="inline-block" style={{ minWidth: '1ch' }}>{char === ' ' ? '\u00A0' : char}</span>
        ))}
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