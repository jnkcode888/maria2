import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
  const [showOverlay, setShowOverlay] = useState(false);
  const [overlayMessage, setOverlayMessage] = useState('');
  const activeContent = contentCategories.find(cat => cat.id === activeCategory);
  
  const handleVideoClick = (url: string, title: string) => {
    console.log(`Opening TikTok video: ${title} at ${url}`);
    
    // Show beautiful overlay
    setOverlayMessage(`Opening ${title} on TikTok...`);
    setShowOverlay(true);
    
    // Hide overlay after 2 seconds and open link
    setTimeout(() => {
      setShowOverlay(false);
      try {
        // Try to open in new tab
        const newWindow = window.open(url, '_blank');
        if (!newWindow) {
          // If popup is blocked, try to open in same tab
          console.log('Popup blocked, opening in same tab');
          window.location.href = url;
        }
      } catch (error) {
        console.error('Error opening TikTok video:', error);
        // Fallback: try to open in same tab
        window.location.href = url;
      }
    }, 2000);
  };
  
  const testClick = () => {
    console.log('Test click works!');
    alert('Test click works!');
  };

  // Beautiful Overlay Component
  const OverlayMessage = () => (
    <AnimatePresence>
      {showOverlay && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-gradient-to-br from-pink-500/90 to-purple-600/90 backdrop-blur-xl rounded-2xl p-8 max-w-sm mx-4 text-center border border-white/20 shadow-2xl"
          >
            {/* TikTok Icon Animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-16 h-16 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center"
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </motion.div>
            
            {/* Loading Dots */}
            <div className="flex justify-center space-x-1 mb-4">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5]
                  }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                  className="w-2 h-2 bg-white rounded-full"
                />
              ))}
            </div>
            
            {/* Message */}
            <motion.h3
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white text-lg font-medium mb-2"
            >
              {overlayMessage}
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-white/70 text-sm"
            >
              Redirecting to TikTok...
            </motion.p>
            
            {/* Decorative Elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                scale: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
              }}
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
  
  return (
    <section id="content" className="py-20 relative">
      {/* Overlay Message */}
      <OverlayMessage />
      
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light mb-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-200 to-purple-200">
            Content <span className="font-normal">Highlights</span>
          </h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto">
            Explore my most popular content across different platforms and categories
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-10">
          <div className="bg-white/5 backdrop-blur-md rounded-full p-1 flex">
            {contentCategories.map(category => (
              <button 
                key={category.id} 
                onClick={() => setActiveCategory(category.id)} 
                className={`px-5 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category.id 
                    ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white' 
                    : 'text-purple-200/70 hover:text-white'
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {activeContent?.items.map((item, index) => {
            // Check if this is a TikTok video card
            const isTikTokVideo = (
              (activeCategory === 'skincare' && index === 0) ||
              (activeCategory === 'skincare' && index === 1) ||
              (activeCategory === 'skincare' && index === 2) ||
              (activeCategory === 'beauty' && index === 0) ||
              (activeCategory === 'beauty' && index === 1) ||
              (activeCategory === 'beauty' && index === 2)
            );
            
            const getTikTokData = () => {
              if (activeCategory === 'skincare' && index === 0) {
                return { url: 'https://www.tiktok.com/@justmaria028/video/7370949326459243781', title: 'Soft Hands Tips', gradient: 'from-pink-500/20 to-purple-600/20' };
              } else if (activeCategory === 'skincare' && index === 1) {
                return { url: 'https://www.tiktok.com/@justmaria028/video/7525740579364359480', title: 'Skincare Unboxing', gradient: 'from-green-500/20 to-blue-600/20' };
              } else if (activeCategory === 'skincare' && index === 2) {
                return { url: 'https://www.tiktok.com/@justmaria028/video/7524622559892049158', title: 'Skincare Playlist', gradient: 'from-purple-500/20 to-pink-600/20' };
              } else if (activeCategory === 'beauty' && index === 0) {
                return { url: 'https://www.tiktok.com/@justmaria028/video/7522783349123943685', title: 'Black Girl Hair Magic', gradient: 'from-yellow-500/20 to-orange-600/20' };
              } else if (activeCategory === 'beauty' && index === 1) {
                return { url: 'https://www.tiktok.com/@justmaria028/video/7523181428033490182', title: 'Statement Earrings Haul', gradient: 'from-pink-500/20 to-red-600/20' };
              } else if (activeCategory === 'beauty' && index === 2) {
                return { url: 'https://www.tiktok.com/@justmaria028/video/7523490762479160581', title: 'Dark Spots Skincare Journey', gradient: 'from-blue-500/20 to-cyan-600/20' };
              }
              return null;
            };
            
            const tiktokData = getTikTokData();
            
            if (isTikTokVideo && tiktokData) {
              return (
                <div key={item.id} className="relative">
                  <button 
                    className="w-full overflow-hidden rounded-xl relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg z-10 bg-black"
                    onClick={() => handleVideoClick(tiktokData.url, tiktokData.title)}
                    style={{ 
                      pointerEvents: 'auto',
                      aspectRatio: '9/16',
                      maxHeight: '400px'
                    }}
                  >
                    {/* TikTok Video Preview Card */}
                    <div className="w-full h-full relative bg-gradient-to-br from-gray-900 to-black">
                      {/* Video Thumbnail Background */}
                      <div className={`w-full h-full bg-gradient-to-br ${tiktokData.gradient} relative overflow-hidden`}>
                        {/* TikTok-style video frame */}
                        <div className="absolute inset-2 bg-black rounded-lg flex items-center justify-center">
                          {/* Play Button */}
                          <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                        </div>
                        
                        {/* TikTok Logo */}
                        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                          </svg>
                        </div>
                        
                        {/* Video Duration */}
                        <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm rounded px-2 py-1">
                          <span className="text-white text-xs font-medium">0:15</span>
                        </div>
                        
                        {/* Sound Icon */}
                        <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M8 5v14l11-7z"/>
                            </svg>
                          </div>
                          <p className="text-white text-sm font-medium">{tiktokData.title}</p>
                          <p className="text-white/70 text-xs">Click to open on TikTok ↗</p>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {/* Card info overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-30">
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
                  </div>
                </div>
              );
            }
            
            // Regular content card
            return (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: '-50px' }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl backdrop-blur-md bg-white/5 border border-white/10 h-full">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}