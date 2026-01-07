'use client';

import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Prize {
  id: number;
  text: string;
  emoji: string;
  color: string;
}

const prizes: Prize[] = [
  { id: 1, text: 'Dinner Date', emoji: '🍳', color: '#D4A5A5' },
  { id: 2, text: 'Movie Night', emoji: '🎬', color: '#F5CBA7' },
  { id: 3, text: 'Long Walk', emoji: '🚶‍♀️', color: '#E8D5C4' },
  { id: 4, text: 'Sweet Treat', emoji: '🍰', color: '#C97676' },
  { id: 5, text: 'Cozy Hugs', emoji: '🤗', color: '#D4A5A5' },
  { id: 6, text: 'Breakfast', emoji: '☕', color: '#F5CBA7' },
  { id: 7, text: 'Dance Time', emoji: '💃', color: '#E8D5C4' },
  { id: 8, text: 'Stargazing', emoji: '⭐', color: '#C97676' },
];

export default function SurpriseWheel() {
  const [spinning, setSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState<Prize | null>(null);
  const [rotation, setRotation] = useState(0);
  const [showConfetti, setShowConfetti] = useState(false);

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setSelectedPrize(null);
    setShowConfetti(false);

    // Random spins between 5-8 full rotations plus random segment
    const randomSpin = 1800 + Math.random() * 1080;
    const finalRotation = rotation + randomSpin;
    setRotation(finalRotation);

    // Calculate which prize wins
    setTimeout(() => {
      const normalizedRotation = finalRotation % 360;
      const segmentAngle = 360 / prizes.length;
      const winningIndex = Math.floor((360 - normalizedRotation) / segmentAngle) % prizes.length;
      setSelectedPrize(prizes[winningIndex]);
      setShowConfetti(true);
      setSpinning(false);

      // Hide confetti after 3 seconds
      setTimeout(() => setShowConfetti(false), 3000);
    }, 4000);
  };

  const segmentAngle = 360 / prizes.length;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-vintage-paper to-warm-cream relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-4 text-chocolate">
          Spin for a Surprise
        </h2>
        <p className="text-center text-lg text-ink-brown/70 mb-16 max-w-2xl mx-auto">
          Feeling lucky? Let the wheel decide our next adventure
        </p>

        <div className="relative flex flex-col items-center">
          {/* Wheel container */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            {/* Pointer */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 z-20">
              <div className="w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[30px] border-t-muted-red drop-shadow-lg" />
            </div>

            {/* Wheel */}
            <motion.div
              className="relative w-full h-full rounded-full shadow-2xl"
              style={{
                rotate: rotation,
              }}
              transition={{
                duration: 4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Center circle decoration */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg border-4 border-chocolate flex items-center justify-center">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>

              {/* Wheel segments */}
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {prizes.map((prize, index) => {
                  const startAngle = index * segmentAngle;
                  const endAngle = (index + 1) * segmentAngle;
                  
                  // Calculate path for segment
                  const start = polarToCartesian(50, 50, 48, endAngle);
                  const end = polarToCartesian(50, 50, 48, startAngle);
                  const largeArc = segmentAngle > 180 ? 1 : 0;
                  
                  const d = [
                    `M 50 50`,
                    `L ${start.x} ${start.y}`,
                    `A 48 48 0 ${largeArc} 0 ${end.x} ${end.y}`,
                    `Z`
                  ].join(' ');

                  return (
                    <g key={prize.id}>
                      <path
                        d={d}
                        fill={prize.color}
                        stroke="white"
                        strokeWidth="0.5"
                      />
                      <text
                        x="50"
                        y="50"
                        fill="#3E2723"
                        fontSize="5"
                        textAnchor="middle"
                        transform={`rotate(${startAngle + segmentAngle / 2} 50 50)`}
                      >
                        <tspan x="50" dy="-12">{prize.emoji}</tspan>
                        <tspan x="50" dy="6" fontSize="3.2" fontWeight="500">{prize.text}</tspan>
                      </text>
                    </g>
                  );
                })}
              </svg>
            </motion.div>
          </div>

          {/* Spin button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={spinWheel}
            disabled={spinning}
            className={`
              mt-12 px-8 py-4 rounded-full font-serif text-lg font-semibold
              shadow-lg transition-all
              ${spinning 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-muted-red hover:bg-muted-red/90 text-white'
              }
            `}
          >
            {spinning ? 'Spinning...' : 'Spin the Wheel!'}
          </motion.button>
        </div>

        {/* Result display */}
        <AnimatePresence>
          {selectedPrize && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="mt-12 text-center"
            >
              <div className="inline-block bg-white rounded-2xl shadow-polaroid p-8 paper-texture">
                <p className="text-6xl mb-4">{selectedPrize.emoji}</p>
                <h3 className="text-2xl font-serif font-bold text-chocolate mb-2">
                  You won!
                </h3>
                <p className="text-xl text-muted-red font-medium">
                  {selectedPrize.text}
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Confetti effect */}
      <AnimatePresence>
        {showConfetti && (
          <div className="fixed inset-0 pointer-events-none z-50">
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  x: '50vw',
                  y: '50vh',
                  opacity: 1,
                  scale: 0,
                }}
                animate={{
                  x: `${50 + (Math.random() - 0.5) * 100}vw`,
                  y: `${100 + Math.random() * 20}vh`,
                  opacity: 0,
                  scale: 1,
                  rotate: Math.random() * 360,
                }}
                transition={{
                  duration: 2 + Math.random(),
                  ease: 'easeOut',
                }}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  backgroundColor: ['#D4A5A5', '#F5CBA7', '#C97676', '#E8D5C4'][Math.floor(Math.random() * 4)],
                }}
              />
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

// Helper function to convert polar coordinates to cartesian
function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}
