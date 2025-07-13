import React, { useState } from 'react';
import { motion } from 'framer-motion';
const contentCategories = [{
  id: 'skincare',
  title: 'Skincare Routines',
  items: [{
    id: 1,
    title: 'Morning Glow Routine',
    image: 'https://images.unsplash.com/photo-1596704017254-9b121068fb31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '127K',
    platform: 'TikTok'
  }, {
    id: 2,
    title: 'Hydration Secrets',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '89K',
    platform: 'Instagram'
  }, {
    id: 3,
    title: 'Budget Friendly Favorites',
    image: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '203K',
    platform: 'TikTok'
  }]
}, {
  id: 'beauty',
  title: 'Beauty & Self-Care',
  items: [{
    id: 4,
    title: '5-Minute Makeup Look',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '156K',
    platform: 'Instagram'
  }, {
    id: 5,
    title: 'Self-Care Sunday Ritual',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '78K',
    platform: 'TikTok'
  }, {
    id: 6,
    title: 'Natural Hair Journey',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '112K',
    platform: 'Instagram'
  }]
}, {
  id: 'faith',
  title: 'Faith & Inspiration',
  items: [{
    id: 7,
    title: 'Daily Devotional',
    image: 'https://images.unsplash.com/photo-1507692812060-98338d07aca3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '67K',
    platform: 'Instagram'
  }, {
    id: 8,
    title: 'Finding Peace Within',
    image: 'https://images.unsplash.com/photo-1601153211050-3d2bd0e0e0d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '94K',
    platform: 'TikTok'
  }, {
    id: 9,
    title: 'Sunday Reflections',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
    views: '103K',
    platform: 'Instagram'
  }]
}];
export function ContentHighlights() {
  const [activeCategory, setActiveCategory] = useState('skincare');
  const activeContent = contentCategories.find(cat => cat.id === activeCategory);
  
  const handleVideoClick = (url: string, title: string) => {
    console.log(`Opening TikTok video: ${title} at ${url}`);
    window.open(url, '_blank');
  };
  
  return <section id="content" className="py-20 relative">
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
            Content <span className="font-normal">Highlights</span>
          </h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto">
            Explore my most popular content across different platforms and
            categories
          </p>
        </motion.div>
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 backdrop-blur-md rounded-full p-1 flex">
            {contentCategories.map(category => <button key={category.id} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2 rounded-full transition-all duration-300 ${activeCategory === category.id ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' : 'text-purple-200/70 hover:text-white'}`}>
                {category.title}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeContent?.items.map((item, index) => (
            <motion.div key={item.id} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} transition={{
              duration: 0.5,
              delay: index * 0.1
            }} viewport={{
              once: true,
              margin: '-50px'
            }} whileHover={{
              y: -10,
              transition: {
                duration: 0.3
              }
            }} className="group">
              <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 h-full">
                {activeCategory === 'skincare' && index === 0 ? (
                  <div className="h-64 overflow-hidden rounded-xl relative group cursor-pointer" onClick={() => handleVideoClick('https://www.tiktok.com/@justmaria028/video/7370949326459243781', 'Soft Hands Tips')}>
                    <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white text-sm font-medium">Soft Hands Tips</p>
                        <p className="text-white/70 text-xs">Click to open on TikTok ↗</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : activeCategory === 'skincare' && index === 1 ? (
                  <div className="h-64 overflow-hidden rounded-xl relative group cursor-pointer" onClick={() => handleVideoClick('https://www.tiktok.com/@justmaria028/video/7525740579364359480', 'Skincare Unboxing')}>
                    <div className="w-full h-full bg-gradient-to-br from-green-500/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white text-sm font-medium">Skincare Unboxing</p>
                        <p className="text-white/70 text-xs">Click to open on TikTok ↗</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : activeCategory === 'skincare' && index === 2 ? (
                  <div className="h-64 overflow-hidden rounded-xl relative group cursor-pointer" onClick={() => handleVideoClick('https://www.tiktok.com/@justmaria028/video/7524622559892049158', 'Skincare Playlist')}>
                    <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white text-sm font-medium">Skincare Playlist</p>
                        <p className="text-white/70 text-xs">Click to open on TikTok ↗</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : activeCategory === 'beauty' && index === 0 ? (
                  <div className="h-64 overflow-hidden rounded-xl relative group cursor-pointer" onClick={() => handleVideoClick('https://www.tiktok.com/@justmaria028/video/7522783349123943685', 'Black Girl Hair Magic')}>
                    <div className="w-full h-full bg-gradient-to-br from-yellow-500/20 to-orange-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white text-sm font-medium">Black Girl Hair Magic</p>
                        <p className="text-white/70 text-xs">Click to open on TikTok ↗</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : activeCategory === 'beauty' && index === 1 ? (
                  <div className="h-64 overflow-hidden rounded-xl relative group cursor-pointer" onClick={() => handleVideoClick('https://www.tiktok.com/@justmaria028/video/7523181428033490182', 'Statement Earrings Haul')}>
                    <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-red-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white text-sm font-medium">Statement Earrings Haul</p>
                        <p className="text-white/70 text-xs">Click to open on TikTok ↗</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : activeCategory === 'beauty' && index === 2 ? (
                  <div className="h-64 overflow-hidden rounded-xl relative group cursor-pointer" onClick={() => handleVideoClick('https://www.tiktok.com/@justmaria028/video/7523490762479160581', 'Dark Spots Skincare Journey')}>
                    <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-cyan-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                        <p className="text-white text-sm font-medium">Dark Spots Skincare Journey</p>
                        <p className="text-white/70 text-xs">Click to open on TikTok ↗</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ) : (
                  <div className="h-64 overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      {item.platform}
                    </span>
                    <span className="text-xs font-medium text-purple-200">
                      {item.views} views
                    </span>
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">
                    {item.title}
                  </h3>
                  <div className="flex items-center">
                    <button className="flex items-center gap-1 text-sm text-pink-300 hover:text-pink-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polygon points="10 8 16 12 10 16 10 8"></polygon>
                      </svg>
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>;
}