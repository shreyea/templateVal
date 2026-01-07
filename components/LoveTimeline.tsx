'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TimelineEvent {
  id: number;
  date: string;
  title: string;
  description: string;
  image: string;
}

const milestones: TimelineEvent[] = [
  {
    id: 1,
    date: 'January 14, 2023',
    title: 'First Hello',
    description: 'That coffee shop where our eyes met. You ordered a cappuccino with extra foam, and I knew I wanted to know everything about you.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
  },
  {
    id: 2,
    date: 'February 14, 2023',
    title: 'First Valentine\'s Together',
    description: 'Homemade dinner, burnt pasta, perfect laughter. You said it was the best meal ever, even though we both know it wasn\'t.',
    image: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f?w=400&h=300&fit=crop',
  },
  {
    id: 3,
    date: 'June 20, 2023',
    title: 'That Road Trip',
    description: 'Singing off-key to our favorite songs, getting lost on purpose, finding that hidden beach at sunset.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=400&h=300&fit=crop',
  },
  {
    id: 4,
    date: 'December 31, 2023',
    title: 'New Year\'s Promise',
    description: 'Under the fireworks, we promised to make every moment count. And we have.',
    image: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=300&fit=crop',
  },
];

export default function LoveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  return (
    <section className="py-24 px-4 linen-texture">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-muted-red/60 font-medium mb-4 block">
            Our Journey Together
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-ink-brown mb-4">
            Every Moment with You
          </h2>
          <p className="text-lg text-ink-brown/60 font-light max-w-2xl mx-auto leading-relaxed">
            Each chapter, a memory we hold dear
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div 
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-dusty-rose/20 via-muted-red/30 to-dusty-rose/20 hidden md:block origin-top" 
          />

          <div className="space-y-24">
            {milestones.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.15, 
                  duration: 0.7,
                  ease: [0.4, 0, 0.2, 1]
                }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content side */}
                <div className="flex-1" style={{ textAlign: index % 2 === 0 ? 'right' : 'left' }}>
                  <motion.span 
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.15 + 0.2 }}
                    viewport={{ once: true }}
                    className="inline-block px-4 py-2 bg-white/80 shadow-premium text-sm font-medium text-muted-red mb-4 tracking-wide"
                  >
                    {event.date}
                  </motion.span>
                  <h3 className="text-3xl font-display text-chocolate mb-3 leading-tight">
                    {event.title}
                  </h3>
                  <p className="text-ink-brown/70 font-light leading-relaxed max-w-md mx-auto md:mx-0"
                     style={{ marginLeft: index % 2 === 0 ? 'auto' : '0', marginRight: index % 2 === 0 ? '0' : 'auto' }}>
                    {event.description.split('.')[0]}.
                  </p>
                </div>

                {/* Center dot with ripple effect */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                  viewport={{ once: true }}
                  className="hidden md:block relative"
                >
                  <div className="w-5 h-5 bg-muted-red rounded-full border-[3px] border-warm-cream shadow-premium-lg z-10 relative" />
                  <motion.div
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.8, opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                    className="absolute inset-0 w-5 h-5 bg-muted-red/30 rounded-full"
                  />
                </motion.div>

                {/* Image side */}
                <div className="flex-1">
                  <motion.button
                    whileHover={{ y: -8, rotate: index % 2 === 0 ? -1 : 1 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedEvent(event)}
                    className="polaroid cursor-pointer block w-full max-w-sm mx-auto group"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <p className="mt-4 text-sm font-light text-chocolate/60 text-center tracking-wide">
                      Tap to reveal
                    </p>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
            className="fixed inset-0 bg-chocolate/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-warm-cream shadow-premium-lg max-w-2xl w-full p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 paper-texture opacity-50" />
              <div className="relative z-10">
                <motion.img
                  layoutId={`image-${selectedEvent.id}`}
                  src={selectedEvent.image}
                  alt={selectedEvent.title}
                  className="w-full h-72 object-cover shadow-premium mb-8"
                />
                <div className="space-y-4">
                  <motion.span 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                    className="inline-block px-4 py-2 bg-muted-red/10 text-sm font-medium text-muted-red tracking-wide"
                  >
                    {selectedEvent.date}
                  </motion.span>
                  <motion.h3 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-4xl font-display text-chocolate leading-tight"
                  >
                    {selectedEvent.title}
                  </motion.h3>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-lg handwritten text-ink-brown/80 leading-relaxed"
                  >
                    {selectedEvent.description}
                  </motion.p>
                </div>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={() => setSelectedEvent(null)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8 px-8 py-3 bg-muted-red text-warm-cream shadow-premium hover:shadow-premium-lg transition-all duration-300"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
