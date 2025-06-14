import React from 'react';
import { motion } from 'framer-motion';
export function About() {
  return <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="md:w-1/2">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto border-4 border-white/20 relative z-10">
                <img src="https://images.unsplash.com/photo-1617069470302-9b5592c80f66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" alt="Maria" className="w-full h-full object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/30 to-purple-600/30 rounded-full blur-3xl w-64 h-64 md:w-80 md:h-80 mx-auto animate-pulse-slow"></div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="md:w-1/2">
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-light mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
                About <span className="font-normal">Maria</span>
              </h2>
              <p className="text-lg text-purple-50/90 leading-relaxed mb-6">
                Hi, I'm Maria! I create uplifting beauty content to help people
                feel confident and connected—inside and out.
              </p>
              <p className="text-base text-purple-50/80 leading-relaxed">
                As a skincare enthusiast and faith-driven content creator, I
                share my journey of self-care and spiritual growth. I believe
                that true beauty radiates from within when we nurture both our
                physical appearance and inner spirit.
              </p>
              <div className="mt-8 flex gap-4 flex-wrap">
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  ✨ Beauty Creator
                </div>
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  🧴 Skincare Expert
                </div>
                <div className="bg-white/10 rounded-full px-4 py-2 text-sm">
                  🙏 Faith & Wellness
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}