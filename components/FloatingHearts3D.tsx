'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Heart {
  id: number;
  left: string;
  delay: number;
  duration: number;
  scale: number;
  rotation: number;
  color: string;
}

export default function FloatingHearts3D() {
  const hearts = useMemo(() => {
    const heartCount = 15;
    const colors = ['#B44A4A', '#8E3434', '#A43D3D', '#9A3838'];
    
    return Array.from({ length: heartCount }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
      scale: 0.3 + Math.random() * 0.4,
      rotation: Math.random() * 360,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute"
          style={{
            left: heart.left,
            bottom: '-100px',
            transform: `scale(${heart.scale}) rotate(${heart.rotation}deg)`,
          }}
          animate={{
            y: typeof window !== 'undefined' ? [0, -window.innerHeight - 200] : [0, -1000],
            rotate: [heart.rotation, heart.rotation + 180],
            opacity: [0, 0.6, 0.6, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {/* SVG Heart with matte finish */}
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
            }}
          >
            <path
              d="M 12 21 C 12 21, 3 13.5, 3 9 C 3 6, 4.5 4.5, 6.75 4.5 C 9 4.5, 10.5 6, 12 7.5 C 13.5 6, 15 4.5, 17.25 4.5 C 19.5 4.5, 21 6, 21 9 C 21 13.5, 12 21, 12 21 Z"
              fill={heart.color}
              opacity="0.8"
            />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
