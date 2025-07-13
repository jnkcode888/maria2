import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    // Dynamically load TikTok embed script if not present
    if (!document.querySelector('script[src="https://www.tiktok.com/embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://www.tiktok.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);
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
                  <div className="h-64 overflow-hidden flex items-center justify-center bg-black">
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@justmaria028/video/7370949326459243781" data-video-id="7370949326459243781" style={{maxWidth: 605, minWidth: 325}}>
                      <section>
                        <a target="_blank" title="@justmaria028" href="https://www.tiktok.com/@justmaria028?refer=embed">@justmaria028</a> Soft Hands Hand.This is my tip for having soft hands. I apply @niceandlovely_ea Glowtion or the whipped Body Butter from @Wisha Beauty & Cosmetics . What hand cream do you use? <a title="skincaregirlies" target="_blank" href="https://www.tiktok.com/tag/skincaregirlies?refer=embed">#skincaregirlies</a>  <a title="skincare" target="_blank" href="https://www.tiktok.com/tag/skincare?refer=embed">#skincare</a>  <a title="skinacaretips" target="_blank" href="https://www.tiktok.com/tag/skinacaretips?refer=embed">#skinacaretips</a>  <a title="glowingskin" target="_blank" href="https://www.tiktok.com/tag/glowingskin?refer=embed">#glowingskin</a>  <a title="glowingskincare" target="_blank" href="https://www.tiktok.com/tag/glowingskincare?refer=embed">#glowingskincare</a> <a target="_blank" title="♬ original sound - Maria's Circle" href="https://www.tiktok.com/music/original-sound-7370949351253609222?refer=embed">♬ original sound - Maria's Circle</a>
                      </section>
                    </blockquote>
                  </div>
                ) : activeCategory === 'skincare' && index === 1 ? (
                  <div className="h-64 overflow-hidden flex items-center justify-center bg-black">
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@justmaria028/video/7525740579364359480" data-video-id="7525740579364359480" style={{maxWidth: 605, minWidth: 325}}>
                      <section>
                        <a target="_blank" title="@justmaria028" href="https://www.tiktok.com/@justmaria028?refer=embed">@justmaria028</a> skincare and hair products unboxing @SOAPEX  skincare and hair haircare products <a title="skincareproduct" target="_blank" href="https://www.tiktok.com/tag/skincareproduct?refer=embed">#skincareproduct</a>  <a title="skincareproductsthatwork" target="_blank" href="https://www.tiktok.com/tag/skincareproductsthatwork?refer=embed">#skincareproductsthatwork</a>  <a title="skincareproductsmusthave" target="_blank" href="https://www.tiktok.com/tag/skincareproductsmusthave?refer=embed">#skincareproductsmusthave</a>  <a title="hairshampoo" target="_blank" href="https://www.tiktok.com/tag/hairshampoo?refer=embed">#hairshampoo</a>  <a title="mariascircle" target="_blank" href="https://www.tiktok.com/tag/mariascircle?refer=embed">#mariascircle</a> <a target="_blank" title="♬ original sound - Maria's Circle" href="https://www.tiktok.com/music/original-sound-7525740590001621816?refer=embed">♬ original sound - Maria's Circle</a>
                      </section>
                    </blockquote>
                  </div>
                ) : activeCategory === 'skincare' && index === 2 ? (
                  <div className="h-64 overflow-hidden flex items-center justify-center bg-black">
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@justmaria028/video/7524622559892049158" data-video-id="7524622559892049158" style={{maxWidth: 605, minWidth: 325}}>
                      <section>
                        <a target="_blank" title="@justmaria028" href="https://www.tiktok.com/@justmaria028?refer=embed">@justmaria028</a> Skincare playlist&gt;&gt;&gt; With @Nathaniel Bassey @Nathaniel Bassey -Official  <a title="skincareroutines" target="_blank" href="https://www.tiktok.com/tag/skincareroutines?refer=embed">#skincareroutines</a>  <a title="skincareviral" target="_blank" href="https://www.tiktok.com/tag/skincareviral?refer=embed">#skincareviral</a>  <a title="nathanielbassey" target="_blank" href="https://www.tiktok.com/tag/nathanielbassey?refer=embed">#nathanielbassey</a>  <a title="hallelujahchallenge" target="_blank" href="https://www.tiktok.com/tag/hallelujahchallenge?refer=embed">#hallelujahchallenge</a>  <a title="mariascircle" target="_blank" href="https://www.tiktok.com/tag/mariascircle?refer=embed">#mariascircle</a> <a target="_blank" title="♬ original sound - Maria's Circle" href="https://www.tiktok.com/music/original-sound-7524622577025796870?refer=embed">♬ original sound - Maria's Circle</a>
                      </section>
                    </blockquote>
                  </div>
                ) : activeCategory === 'beauty' && index === 0 ? (
                  <div className="h-64 overflow-hidden flex items-center justify-center bg-black">
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@justmaria028/video/7522783349123943685" data-video-id="7522783349123943685" style={{maxWidth: 605, minWidth: 325}}>
                      <section>
                        <a target="_blank" title="@justmaria028" href="https://www.tiktok.com/@justmaria028?refer=embed">@justmaria028</a> Black girl hair is magic  <a title="blackgirlhairstyles" target="_blank" href="https://www.tiktok.com/tag/blackgirlhairstyles?refer=embed">#blackgirlhairstyles</a>  <a title="blackgirlhair" target="_blank" href="https://www.tiktok.com/tag/blackgirlhair?refer=embed">#blackgirlhair</a>  <a title="hairtok" target="_blank" href="https://www.tiktok.com/tag/hairtok?refer=embed">#hairtok</a>  <a title="mariascircle" target="_blank" href="https://www.tiktok.com/tag/mariascircle?refer=embed">#mariascircle</a> <a target="_blank" title="♬ A Black Girl and Her Switch Up - Jaylene Clark Owens" href="https://www.tiktok.com/music/A-Black-Girl-and-Her-Switch-Up-7164272565064730625?refer=embed">♬ A Black Girl and Her Switch Up - Jaylene Clark Owens</a>
                      </section>
                    </blockquote>
                  </div>
                ) : activeCategory === 'beauty' && index === 1 ? (
                  <div className="h-64 overflow-hidden flex items-center justify-center bg-black">
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@justmaria028/video/7523181428033490182" data-video-id="7523181428033490182" style={{maxWidth: 605, minWidth: 325}}>
                      <section>
                        <a target="_blank" title="@justmaria028" href="https://www.tiktok.com/@justmaria028?refer=embed">@justmaria028</a> Statement earrings haul  <a title="statementearrings" target="_blank" href="https://www.tiktok.com/tag/statementearrings?refer=embed">#statementearrings</a>  <a title="earrings" target="_blank" href="https://www.tiktok.com/tag/earrings?refer=embed">#earrings</a>  <a title="earringstack" target="_blank" href="https://www.tiktok.com/tag/earringstack?refer=embed">#earringstack</a>  <a title="mariascircle" target="_blank" href="https://www.tiktok.com/tag/mariascircle?refer=embed">#mariascircle</a> <a target="_blank" title="♬ original sound - Maria's Circle" href="https://www.tiktok.com/music/original-sound-7523181455082867462?refer=embed">♬ original sound - Maria's Circle</a>
                      </section>
                    </blockquote>
                  </div>
                ) : activeCategory === 'beauty' && index === 2 ? (
                  <div className="h-64 overflow-hidden flex items-center justify-center bg-black">
                    <blockquote className="tiktok-embed" cite="https://www.tiktok.com/@justmaria028/video/7523490762479160581" data-video-id="7523490762479160581" style={{maxWidth: 605, minWidth: 325}}>
                      <section>
                        <a target="_blank" title="@justmaria028" href="https://www.tiktok.com/@justmaria028?refer=embed">@justmaria028</a> Dark spots skincare. I am on a skincare journey to clear my dark spots  @Human Mobile Devices is going to be my buddy throughout this journey.  let&#39;s track it together. <a title="darkspots" target="_blank" href="https://www.tiktok.com/tag/darkspots?refer=embed">#darkspots</a>  <a title="hyperpigmentation" target="_blank" href="https://www.tiktok.com/tag/hyperpigmentation?refer=embed">#hyperpigmentation</a>  <a title="hyperpigmentationtreatment" target="_blank" href="https://www.tiktok.com/tag/hyperpigmentationtreatment?refer=embed">#hyperpigmentationtreatment</a> <a title="hmdkenya" target="_blank" href="https://www.tiktok.com/tag/hmdkenya?refer=embed">#hmdkenya</a>  <a title="hmdxdsoi" target="_blank" href="https://www.tiktok.com/tag/hmdxdsoi?refer=embed">#hmdxdsoi</a>  <a title="hmdskyline" target="_blank" href="https://www.tiktok.com/tag/hmdskyline?refer=embed">#hmdskyline</a>  <a title="humanmobiledevices" target="_blank" href="https://www.tiktok.com/tag/humanmobiledevices?refer=embed">#humanmobiledevices</a>  <a title="mariascircle" target="_blank" href="https://www.tiktok.com/tag/mariascircle?refer=embed">#mariascircle</a> <a target="_blank" title="♬ original sound - Maria's Circle" href="https://www.tiktok.com/music/original-sound-7523490728371440440?refer=embed">♬ original sound - Maria's Circle</a>
                      </section>
                    </blockquote>
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