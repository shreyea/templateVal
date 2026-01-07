'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=2574&auto=format&fit=crop"
          alt="Couple walking together"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-charcoal leading-tight"
        >
          Love in its quietest form
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.6 }}
          className="text-lg md:text-xl text-charcoal/80 max-w-2xl mx-auto leading-relaxed"
        >
          February 14th — a simple reminder to appreciate the people who make ordinary days extraordinary
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-charcoal/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-charcoal/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
