import React from 'react';
import { motion } from 'framer-motion';
const brands = [{
  id: 1,
  name: 'Garnier',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Garnier_logo.svg/1280px-Garnier_logo.svg.png',
  color: 'from-green-400 to-green-600'
}, {
  id: 2,
  name: 'HMD Kenya',
  logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdHJC6mZTrKHXQ0QVLFvw5pP_uE-R7WJnpg&usqp=CAU',
  color: 'from-blue-400 to-blue-600'
}, {
  id: 3,
  name: 'Meta',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1280px-Meta_Platforms_Inc._logo.svg.png',
  color: 'from-blue-500 to-indigo-600'
}, {
  id: 4,
  name: 'Dentsu',
  logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Dentsu_logo.svg/1280px-Dentsu_logo.svg.png',
  color: 'from-red-400 to-red-600'
}];
// Helper function to safely extract color values
const extractGradientColors = (colorString: string) => {
  const parts = colorString.split(' ');
  const fromColor = parts.find(p => p.startsWith('from-'))?.replace('from-', '') || 'purple-500';
  const toColor = parts.find(p => p.startsWith('to-'))?.replace('to-', '') || 'pink-500';
  return {
    fromColor,
    toColor
  };
};
export function Brands() {
  return <section id="brands" className="py-20 relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-purple-900 to-transparent z-10"></div>
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
            Brand <span className="font-normal">Collaborations</span>
          </h2>
          <p className="text-purple-200/70 max-w-2xl mx-auto">
            Trusted by leading brands in the beauty and lifestyle industry
          </p>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {brands.map((brand, index) => {
          const {
            fromColor,
            toColor
          } = extractGradientColors(brand.color);
          return <motion.div key={brand.id} initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true,
            margin: '-100px'
          }} whileHover={{
            y: -10,
            transition: {
              duration: 0.3
            }
          }} className="relative group">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10" style={{
              background: `linear-gradient(to bottom right, ${fromColor}, ${toColor})`
            }}></div>
                <div className="h-32 md:h-40 flex items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-xl transition-all duration-300 hover:border-white/30">
                  <img src={brand.logo} alt={brand.name} className="max-h-full max-w-full object-contain filter brightness-0 invert opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>;
        })}
        </div>
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 0.5
      }} viewport={{
        once: true,
        margin: '-100px'
      }} className="mt-16 text-center">
          <p className="text-lg text-purple-100/80 italic">
            "Working with Maria has significantly increased our brand awareness
            among Gen Z consumers."
          </p>
          <p className="mt-2 text-sm text-purple-200/60">
            — Marketing Director, Garnier East Africa
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-purple-900 to-transparent z-10"></div>
    </section>;
}