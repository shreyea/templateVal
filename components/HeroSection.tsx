'use client';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';

const FloatingHearts3D = dynamic(() => import('./FloatingHearts3D'), { ssr: false });

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-warm-cream">
      <FloatingHearts3D />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block"
              >
                <span className="text-sm uppercase tracking-[0.3em] text-muted-red/60 font-medium">
                  February 14, 2025
                </span>
              </motion.div>
              
              <h1 className="font-display text-6xl lg:text-7xl leading-[1.1] text-ink-brown text-balance">
                For You,
                <br />
                <span className="italic text-dusty-rose">with all my heart</span>
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-ink-brown/70 font-light leading-relaxed max-w-md"
            >
              A handcrafted collection of moments, memories, and promises — 
              created just for you, Valentine.
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => document.getElementById('timeline')?.scrollIntoView({ behavior: 'smooth' })}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-muted-red/90 text-warm-cream 
                       shadow-premium hover:shadow-premium-lg transition-all duration-400 
                       hover:bg-muted-red"
            >
              <span className="font-medium tracking-wide">Begin the journey</span>
              <svg 
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
          </motion.div>

          {/* Right: Photo Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-6">
              {[
                { delay: 0.4, rotate: -2, img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400' },
                { delay: 0.5, rotate: 1.5, img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400' },
                { delay: 0.6, rotate: -1, img: 'https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=400' },
                { delay: 0.7, rotate: 2.5, img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400' },
            
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20, rotate: 0 }}
                  animate={{ opacity: 1, y: 0, rotate: photo.rotate }}
                  transition={{ delay: photo.delay, duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  whileHover={{ 
                    rotate: 0, 
                    y: -8,
                    transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
                  }}
                  className="polaroid cursor-pointer"
                >
                  <img
                    src={photo.img}
                    alt="Memory"
                    className="w-full h-48 object-cover"
                  />
                </motion.div>
              ))}
            </div>
            
            {/* Decorative heart sketch */}
            <motion.svg
              initial={{ opacity: 0, rotate: -10 }}
              animate={{ opacity: 0.15, rotate: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-8 -right-8 w-32 h-32 text-muted-red pointer-events-none"
              viewBox="0 0 100 100"
              fill="currentColor"
            >
              <path d="M50,85 C20,65 10,45 10,30 C10,15 20,10 30,15 C35,17 40,22 50,30 C60,22 65,17 70,15 C80,10 90,15 90,30 C90,45 80,65 50,85 Z" />
            </motion.svg>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-ink-brown/40"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}

