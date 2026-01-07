'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Letter {
  id: number;
  label: string;
  message: string;
  opened: boolean;
}

const initialLetters: Letter[] = [
  {
    id: 1,
    label: 'Open when you\'re sad',
    message: 'Hey you. I know things feel heavy right now, but remember that rainy afternoon when we danced in the kitchen? Your smile came back then, and it will again. You\'re stronger than you know, and I\'m always here, cheering you on. This too shall pass, my love.',
    opened: false,
  },
  {
    id: 2,
    label: 'Open when you miss me',
    message: 'I miss you too, more than words can say. Close your eyes and think about our last hug—I\'m holding you just like that right now, across the distance. Until we\'re together again, know that you\'re in my thoughts every single moment.',
    opened: false,
  },
  {
    id: 3,
    label: 'Open when you can\'t sleep',
    message: 'It\'s okay. Take a deep breath. Remember our sleepy Sunday mornings? The way the light filtered through the curtains? Imagine I\'m right there, running my fingers through your hair, telling you everything will be alright. Sweet dreams, love.',
    opened: false,
  },
  {
    id: 4,
    label: 'Open when you need a laugh',
    message: 'Remember when I tried to cook that fancy recipe and set off the smoke alarm? Or when we both got lost even with GPS? You laughed so hard you snorted. I love that sound. Here\'s to all our silly moments and many more to come.',
    opened: false,
  },
  {
    id: 5,
    label: 'Open when you need courage',
    message: 'You\'ve already done so many brave things. Remember that presentation you nailed? That fear you faced? You did that. You\'re capable of amazing things. I believe in you completely. Now go show the world what you\'re made of.',
    opened: false,
  },
  {
    id: 6,
    label: 'Open just because',
    message: 'I love you. Not for any reason. Not because you did something special today. Just because you exist and you\'re you. You make my world brighter just by being in it. Thank you for being mine.',
    opened: false,
  },
];

export default function OpenWhenLetters() {
  const [letters, setLetters] = useState<Letter[]>(initialLetters);
  const [selectedLetter, setSelectedLetter] = useState<Letter | null>(null);

  // Load opened state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('openedLetters');
    if (saved) {
      const openedIds = JSON.parse(saved);
      setLetters(prev => prev.map(letter => ({
        ...letter,
        opened: openedIds.includes(letter.id)
      })));
    }
  }, []);

  const openLetter = (letter: Letter) => {
    setSelectedLetter(letter);
    if (!letter.opened) {
      const updatedLetters = letters.map(l =>
        l.id === letter.id ? { ...l, opened: true } : l
      );
      setLetters(updatedLetters);
      const openedIds = updatedLetters.filter(l => l.opened).map(l => l.id);
      localStorage.setItem('openedLetters', JSON.stringify(openedIds));
    }
  };

  return (
    <section className="py-24 px-4 bg-warm-cream">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-muted-red/60 font-medium mb-4 block">
            Words from the Heart
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-ink-brown mb-4">
            Open When...
          </h2>
          <p className="text-lg text-ink-brown/60 font-light max-w-2xl mx-auto leading-relaxed">
            Letters written for the moments when you need them most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {letters.map((letter, index) => (
            <motion.button
              key={letter.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLetter(letter)}
              className="relative group text-left"
            >
              {/* Envelope */}
              <div className={`
                relative bg-gradient-to-br from-warm-beige to-vintage-paper 
                shadow-premium group-hover:shadow-premium-lg
                transition-all duration-400 p-8 h-52 overflow-hidden
                ${letter.opened ? 'opacity-75' : 'opacity-100'}
              `}>
                {/* Envelope flap with fold effect */}
                <motion.div 
                  className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-dusty-rose/20 to-transparent"
                  initial={{ rotateX: 0 }}
                  whileHover={{ rotateX: -15 }}
                  style={{ transformOrigin: 'top' }}
                />
                
                {/* Decorative edge lines */}
                <div className="absolute inset-x-8 top-0 border-t border-muted-red/10" />
                
                {/* Content */}
                <div className="flex flex-col justify-between h-full relative z-10">
                  <div className="flex-1 flex items-center justify-center">
                    <p className="font-display text-xl text-center text-chocolate leading-snug px-2">
                      {letter.label}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {letter.opened ? (
                      <span className="text-xs text-muted-red font-medium tracking-wide uppercase opacity-60">
                        Opened
                      </span>
                    ) : (
                      <span className="text-xs text-ink-brown/40 font-medium tracking-wide uppercase">
                        Tap to open
                      </span>
                    )}
                    
                    {/* Wax seal */}
                    <div className="relative">
                      <div className="w-10 h-10 bg-muted-red/90 rounded-full shadow-premium" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg className="w-5 h-5 text-warm-cream" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10,3 C5,3 3,5 3,10 C3,15 5,17 10,17 C15,17 17,15 17,10 C17,5 15,3 10,3 Z M10,14 C7,14 6,13 6,10 C6,7 7,6 10,6 C13,6 14,7 14,10 C14,13 13,14 10,14 Z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Subtle texture overlay */}
                <div className="absolute inset-0 opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')]" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Letter Modal */}
      <AnimatePresence>
        {selectedLetter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedLetter(null)}
            className="fixed inset-0 bg-chocolate/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, rotateX: -10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.95, opacity: 0, rotateX: 5 }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 300 
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-vintage-paper shadow-premium-lg max-w-2xl w-full p-12 relative overflow-hidden"
              style={{
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 31px,
                    rgba(92, 64, 51, 0.04) 31px,
                    rgba(92, 64, 51, 0.04) 32px
                  )
                `
              }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20">
                <div className="absolute top-0 right-0 border-t-[20px] border-r-[20px] border-transparent border-t-muted-red/10 border-r-muted-red/10" />
              </div>
              
              <div className="space-y-8 relative z-10">
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-center"
                >
                  <h3 className="text-3xl font-display text-chocolate mb-3 leading-tight">
                    {selectedLetter.label}
                  </h3>
                  <div className="w-16 h-[2px] bg-muted-red/30 mx-auto" />
                </motion.div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="handwritten text-xl text-ink-brown leading-[1.8] max-w-xl mx-auto"
                >
                  {selectedLetter.message}
                </motion.p>

                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="text-center pt-6"
                >
                  <p className="font-display text-muted-red italic text-lg">
                    — With all my love
                  </p>
                </motion.div>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setSelectedLetter(null)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center 
                         bg-white/90 hover:bg-white shadow-premium text-chocolate 
                         transition-colors duration-300 text-xl font-light"
              >
                ×
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
