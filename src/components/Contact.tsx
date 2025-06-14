import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './UI/Button';
export function Contact() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
    submitted: false
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you'd send the form data to a backend
    setFormState(prev => ({
      ...prev,
      submitted: true
    }));
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        message: '',
        submitted: false
      });
    }, 3000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };
  return <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true,
        margin: '-100px'
      }} className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
            Let's <span className="font-normal">Connect</span>
          </h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto">
            Reach out for collaborations, questions, or just to say hello!
          </p>
        </motion.div>
        <div className="flex flex-col md:flex-row gap-10">
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="md:w-2/5">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-2xl font-light mb-6">
                Follow <span className="font-normal">Maria's Circle</span>
              </h3>
              <div className="space-y-6">
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-pink-200 transition-colors">
                      Instagram
                    </p>
                    <p className="text-sm text-purple-200/70">
                      @marias_circle_
                    </p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 11v4a5 5 0 0 1-5 5H6.5a3.5 3.5 0 0 1 0-7H9"></path>
                      <path d="M9 9V5a5 5 0 0 1 5-5h3.5a3.5 3.5 0 0 1 0 7H15"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-pink-200 transition-colors">
                      TikTok
                    </p>
                    <p className="text-sm text-purple-200/70">@justmaria028</p>
                  </div>
                </a>
                <a href="#" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-white group-hover:text-pink-200 transition-colors">
                      Email
                    </p>
                    <p className="text-sm text-purple-200/70">
                      hello@mariascircle.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} whileInView={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} viewport={{
          once: true,
          margin: '-100px'
        }} className="md:w-3/5">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
              <h3 className="text-2xl font-light mb-6">
                Send a <span className="font-normal">Message</span>
              </h3>
              {formState.submitted ? <motion.div initial={{
              opacity: 0
            }} animate={{
              opacity: 1
            }} className="text-center py-10">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                      <polyline points="22 4 12 14.01 9 11.01"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl mb-2">Message Sent!</h4>
                  <p className="text-purple-200/70">
                    Thanks for reaching out. I'll get back to you soon!
                  </p>
                </motion.div> : <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-1">
                      Your Name
                    </label>
                    <input type="text" id="name" name="name" value={formState.name} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-1">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-1">
                      Message
                    </label>
                    <textarea id="message" name="message" value={formState.message} onChange={handleChange} required rows={4} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white resize-none" placeholder="What would you like to discuss?"></textarea>
                  </div>
                  <div>
                    <Button variant="primary" className="w-full">
                      Send Message
                    </Button>
                  </div>
                </form>}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}