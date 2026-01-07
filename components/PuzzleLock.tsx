'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Simple word puzzle - user needs to type "LOVE"
export default function PuzzleLock() {
  const [input, setInput] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [shakeError, setShakeError] = useState(false);
  const correctAnswer = 'LOVE';

  // Check if already unlocked
  useEffect(() => {
    const saved = localStorage.getItem('puzzleUnlocked');
    if (saved === 'true') {
      setUnlocked(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (input.toUpperCase() === correctAnswer) {
      setUnlocked(true);
      localStorage.setItem('puzzleUnlocked', 'true');
    } else {
      setShakeError(true);
      setTimeout(() => setShakeError(false), 500);
      setInput('');
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-warm-cream to-vintage-paper">
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          {!unlocked ? (
            <motion.div
              key="locked"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-chocolate">
                A Secret Message Awaits
              </h2>
              <p className="text-lg text-ink-brown/70 mb-12 max-w-2xl mx-auto">
                Solve this simple puzzle to unlock something special
              </p>

              <div className="max-w-md mx-auto">
                {/* Lock visual */}
                <motion.div
                  animate={shakeError ? { x: [-10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                  className="mb-8"
                >
                  <div className="inline-block bg-white rounded-3xl shadow-polaroid p-12">
                    <div className="text-8xl mb-4">🔒</div>
                    <p className="text-chocolate font-serif text-lg">
                      What is the answer to everything?
                    </p>
                  </div>
                </motion.div>

                {/* Puzzle hint */}
                <div className="mb-6 p-4 bg-dusty-rose/10 rounded-lg">
                  <p className="text-sm text-ink-brown/70 font-serif">
                    💡 Hint: It's a 4-letter word that describes us perfectly
                  </p>
                </div>

                {/* Input form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex gap-2 justify-center">
                    {[0, 1, 2, 3].map((index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={input[index] || ''}
                        onChange={(e) => {
                          const newInput = input.split('');
                          newInput[index] = e.target.value.toUpperCase();
                          setInput(newInput.join(''));
                          
                          // Auto-focus next input
                          if (e.target.value && index < 3) {
                            const nextInput = e.target.parentElement?.children[index + 1] as HTMLInputElement;
                            nextInput?.focus();
                          }
                        }}
                        onKeyDown={(e) => {
                          // Handle backspace
                          if (e.key === 'Backspace' && !input[index] && index > 0) {
                            const prevInput = e.currentTarget.parentElement?.children[index - 1] as HTMLInputElement;
                            prevInput?.focus();
                          }
                        }}
                        className="w-16 h-16 text-center text-2xl font-serif font-bold border-2 border-dusty-rose rounded-lg focus:outline-none focus:border-muted-red focus:ring-2 focus:ring-muted-red/20 transition-all uppercase bg-white"
                        autoFocus={index === 0}
                      />
                    ))}
                  </div>

                  <button
                    type="submit"
                    disabled={input.length !== 4}
                    className="w-full px-8 py-4 bg-muted-red text-white rounded-full font-serif text-lg font-semibold shadow-lg hover:bg-muted-red/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Unlock
                  </button>
                </form>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="unlocked"
              initial={{ opacity: 0, scale: 0.9, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ type: 'spring', damping: 15 }}
              className="text-center"
            >
              {/* Unlocked content */}
              <div className="mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3, type: 'spring' }}
                  className="text-8xl mb-4"
                >
                  🔓
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-chocolate">
                  You Unlocked It!
                </h2>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="max-w-2xl mx-auto bg-white rounded-2xl shadow-polaroid p-12 paper-texture"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      0deg,
                      transparent,
                      transparent 31px,
                      rgba(92, 64, 51, 0.03) 31px,
                      rgba(92, 64, 51, 0.03) 32px
                    )
                  `
                }}
              >
                <div className="space-y-6">
                  <div className="text-6xl mb-4">💝</div>
                  
                  <h3 className="text-3xl font-serif font-bold text-chocolate mb-4">
                    A Message Just for You
                  </h3>

                  <div className="space-y-4 handwritten text-xl text-ink-brown leading-relaxed">
                    <p>
                      You solved it, just like you solve everything in life—with that beautiful mind and heart of yours.
                    </p>
                    <p>
                      Here's my secret: every moment with you feels like unlocking a new treasure. Your laugh, your thoughts, the way you see the world—it all makes my life infinitely richer.
                    </p>
                    <p>
                      Thank you for being you. Thank you for choosing us. Thank you for making every day feel like an adventure worth taking.
                    </p>
                    <p className="text-muted-red font-semibold italic pt-4">
                      I love you more than words can say.
                    </p>
                  </div>

                  <div className="pt-6">
                    <div className="inline-block px-6 py-2 bg-dusty-rose/20 rounded-full">
                      <p className="text-sm font-serif text-chocolate">
                        ✨ This message is yours to keep forever ✨
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Reset button (small, bottom corner) */}
              <button
                onClick={() => {
                  setUnlocked(false);
                  setInput('');
                  localStorage.removeItem('puzzleUnlocked');
                }}
                className="mt-8 text-sm text-ink-brown/50 hover:text-ink-brown transition-colors underline"
              >
                Lock again
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
