'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface Promise {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const promises: Promise[] = [
  {
    id: 1,
    title: 'Device-Free Evening',
    description: 'One phone-free night a week. Just us, face to face, present and connected.',
    icon: '📵',
  },
  {
    id: 2,
    title: 'Spontaneous Adventures',
    description: 'Saying yes to last-minute road trips, random dance sessions, and midnight snack runs.',
    icon: '🗺️',
  },
  {
    id: 3,
    title: 'Cook Your Favorite Meal',
    description: 'At least once a month, you pick, I cook. Even if it takes three tries to get it right.',
    icon: '👨‍🍳',
  },
  {
    id: 4,
    title: 'Morning Coffee Ritual',
    description: 'Ten minutes every morning, just sitting together with our coffee before the day begins.',
    icon: '☕',
  },
  {
    id: 5,
    title: 'Dream Support',
    description: 'I\'ll cheer you on in every goal, every dream, every wild idea. You\'ve got this, and you\'ve got me.',
    icon: '🌟',
  },
  {
    id: 6,
    title: 'Random Love Notes',
    description: 'Surprise sticky notes in unexpected places. Because everyone needs a smile mid-day.',
    icon: '✉',
  },
];

export default function PromiseCards() {
  const [flipped, setFlipped] = useState<number[]>([]);

  const toggleFlip = (id: number) => {
    setFlipped(prev => 
      prev.includes(id) 
        ? prev.filter(cardId => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 px-4 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-chocolate">
          My Promises to You
        </h2>
        <p className="text-center text-lg text-ink-brown/70 mb-16 max-w-2xl mx-auto">
          Click each card to reveal what I commit to doing for us
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promises.map((promise, index) => (
            <motion.div
              key={promise.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative h-64"
              style={{ perspective: '1000px' }}
            >
              <motion.div
                animate={{ rotateY: flipped.includes(promise.id) ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative w-full h-full cursor-pointer"
                onClick={() => toggleFlip(promise.id)}
              >
                {/* Front */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                  }}
                  className="absolute inset-0 bg-white rounded-xl shadow-paper p-6 flex flex-col items-center justify-center text-center border-2 border-dusty-rose/20 hover:shadow-polaroid transition-shadow"
                >
                  <div className="text-6xl mb-4">{promise.icon}</div>
                  <h3 className="text-xl font-serif font-semibold text-chocolate mb-2">
                    {promise.title}
                  </h3>
                  <p className="text-xs text-ink-brown/50 italic">
                    Tap to reveal promise
                  </p>

                  {/* Doodle decorations */}
                  <div className="absolute top-4 right-4 text-dusty-rose/30">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L15 9L22 10L17 15L18 22L12 18L6 22L7 15L2 10L9 9L12 2Z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    </svg>
                  </div>
                  <div className="absolute bottom-4 left-4 text-muted-red/20">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                  </div>
                </div>

                {/* Back */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                  className="absolute inset-0 bg-gradient-to-br from-vintage-paper to-warm-beige rounded-xl shadow-paper p-6 flex flex-col justify-center border-2 border-muted-red/20 paper-texture"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl">{promise.icon}</span>
                      <div className="w-8 h-8 bg-muted-red/20 rounded-full flex items-center justify-center">
                        <span className="text-muted-red">✓</span>
                      </div>
                    </div>
                    <p className="handwritten text-lg text-chocolate leading-relaxed">
                      {promise.description}
                    </p>
                  </div>

                  {/* Signature-style decoration */}
                  <div className="absolute bottom-4 right-4">
                    <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-muted-red/30">
                      <path d="M2 10C8 5 15 2 22 5C29 8 35 15 38 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-white/60 rounded-2xl px-8 py-6 shadow-soft">
            <p className="text-lg handwritten text-chocolate">
              These aren't just promises—they're my commitment to making every day with you special.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
