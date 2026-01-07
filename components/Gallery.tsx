'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const images = [
  {
    src: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2574&auto=format&fit=crop",
    alt: "Hands holding",
    caption: "Touch"
  },
  {
    src: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?q=80&w=2571&auto=format&fit=crop",
    alt: "Couple laughing",
    caption: "Joy"
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2574&auto=format&fit=crop",
    alt: "Peaceful moment",
    caption: "Calm"
  },
  {
    src: "https://images.unsplash.com/photo-1513002749550-c59d786b8e6c?q=80&w=2574&auto=format&fit=crop",
    alt: "Intimate portrait",
    caption: "Trust"
  },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-cream">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl mb-20 text-center text-charcoal"
        >
          Moments that matter
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-4 bg-warmGray">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="text-center text-sm tracking-wide text-charcoal/60 uppercase">
                {image.caption}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
