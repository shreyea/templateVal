'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Photo {
  id: number;
  image: string;
  caption: string;
  rotation: number;
}

const initialPhotos: Photo[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400&h=400&fit=crop',
    caption: 'That sunset. Your hand in mine. Perfect.',
    rotation: -3,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop',
    caption: 'Coffee dates are my favorite excuse to stare at you.',
    rotation: 2,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=400&h=400&fit=crop',
    caption: 'Dancing in the living room > fancy clubs',
    rotation: -2,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=400&h=400&fit=crop',
    caption: 'Every adventure is better with you',
    rotation: 3,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=400&h=400&fit=crop',
    caption: 'Home is wherever I\'m with you',
    rotation: -1,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=400&h=400&fit=crop',
    caption: 'You make ordinary moments extraordinary',
    rotation: 2,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=400&h=400&fit=crop',
    caption: 'Lazy Sunday mornings = pure bliss',
    rotation: -2,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1476900543704-4312b78632f8?w=400&h=400&fit=crop',
    caption: 'Always and forever my favorite view',
    rotation: 1,
  },
];

export default function PhotoMemoryWall() {
  const [photos, setPhotos] = useState<Photo[]>(initialPhotos);
  const [flippedPhoto, setFlippedPhoto] = useState<number | null>(null);
  const [draggedPhoto, setDraggedPhoto] = useState<number | null>(null);

  // Load photo order from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('photoOrder');
    if (saved) {
      const order = JSON.parse(saved);
      const reordered = order.map((id: number) => 
        photos.find(p => p.id === id)
      ).filter(Boolean);
      if (reordered.length === photos.length) {
        setPhotos(reordered);
      }
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDragStart = (id: number) => {
    setDraggedPhoto(id);
  };

  const handleDragOver = (e: React.DragEvent, id: number) => {
    e.preventDefault();
    if (draggedPhoto === null || draggedPhoto === id) return;

    const draggedIndex = photos.findIndex(p => p.id === draggedPhoto);
    const targetIndex = photos.findIndex(p => p.id === id);

    const newPhotos = [...photos];
    const [removed] = newPhotos.splice(draggedIndex, 1);
    newPhotos.splice(targetIndex, 0, removed);

    setPhotos(newPhotos);
  };

  const handleDragEnd = () => {
    setDraggedPhoto(null);
    // Save order to localStorage
    const order = photos.map(p => p.id);
    localStorage.setItem('photoOrder', JSON.stringify(order));
  };

  const toggleFlip = (id: number) => {
    setFlippedPhoto(flippedPhoto === id ? null : id);
  };

  // Generate falling flowers
  const flowers = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 10 + Math.random() * 5,
    rotation: Math.random() * 360,
    size: 0.7 + Math.random() * 0.6,
  }));

  return (
    <section className="py-24 px-4 linen-texture relative overflow-hidden">
      {/* Falling Flowers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            className="absolute"
            style={{
              left: `${flower.left}%`,
              top: '-5%',
            }}
            initial={{ y: -50, opacity: 0, rotate: 0 }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, -40, 40, -30, 0],
              opacity: [0, 0.7, 0.6, 0.4, 0],
              rotate: [flower.rotation, flower.rotation + 180, flower.rotation + 360],
            }}
            transition={{
              duration: flower.duration,
              delay: flower.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg
              width={32 * flower.size}
              height={32 * flower.size}
              viewBox="0 0 32 32"
              fill="none"
            >
              {/* Flower petals */}
              <circle cx="16" cy="8" r="4" fill="#D4A5A5" opacity="0.6" />
              <circle cx="16" cy="24" r="4" fill="#D4A5A5" opacity="0.6" />
              <circle cx="8" cy="16" r="4" fill="#C97676" opacity="0.6" />
              <circle cx="24" cy="16" r="4" fill="#C97676" opacity="0.6" />
              <circle cx="11" cy="11" r="3.5" fill="#E8C5C5" opacity="0.5" />
              <circle cx="21" cy="11" r="3.5" fill="#E8C5C5" opacity="0.5" />
              <circle cx="11" cy="21" r="3.5" fill="#E8C5C5" opacity="0.5" />
              <circle cx="21" cy="21" r="3.5" fill="#E8C5C5" opacity="0.5" />
              {/* Center */}
              <circle cx="16" cy="16" r="3" fill="#8E6E6E" opacity="0.7" />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-muted-red/60 font-medium mb-4 block">
            Captured Moments
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-ink-brown mb-4">
            Our Memory Wall
          </h2>
          <p className="text-lg text-ink-brown/60 font-light max-w-2xl mx-auto leading-relaxed mb-2">
            Each photo holds a piece of our story
          </p>
          <p className="text-sm text-ink-brown/40 font-light italic">
            Tap to reveal • Drag to rearrange
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              draggable
              onDragStart={() => handleDragStart(photo.id)}
              onDragOver={(e) => handleDragOver(e, photo.id)}
              onDragEnd={handleDragEnd}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: index * 0.08,
                duration: 0.6,
                ease: [0.4, 0, 0.2, 1]
              }}
              viewport={{ once: true }}
              whileHover={{ y: -12, transition: { duration: 0.3 } }}
              className="cursor-move"
            >
              <div
                className="relative"
                style={{
                  perspective: '1200px',
                }}
              >
                <motion.div
                  animate={{ rotateY: flippedPhoto === photo.id ? 180 : 0 }}
                  transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                  className="relative"
                >
                  {/* Front (Photo) */}
                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: `rotate(${photo.rotation}deg)`,
                    }}
                    className="polaroid cursor-pointer group"
                    onClick={() => toggleFlip(photo.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={photo.image}
                        alt={`Memory ${photo.id}`}
                        className="w-full h-64 object-cover select-none transition-transform duration-500 group-hover:scale-105"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-chocolate/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs text-ink-brown/50 font-light tracking-wide">
                        Tap to reveal
                      </p>
                    </div>
                  </div>

                  {/* Back (Caption) */}
                  <div
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: `rotateY(180deg) rotate(${photo.rotation}deg)`,
                    }}
                    className="polaroid cursor-pointer absolute inset-0 group"
                    onClick={() => toggleFlip(photo.id)}
                  >
                    <div className="w-full h-64 bg-vintage-paper flex items-center justify-center p-8 paper-texture">
                      <p className="handwritten text-lg text-chocolate text-center leading-relaxed">
                        "{photo.caption}"
                      </p>
                    </div>
                    <div className="mt-4 text-center">
                      <p className="text-xs text-ink-brown/50 font-light tracking-wide">
                        Tap to see photo
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customization hint */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-block bg-white/80 shadow-premium px-10 py-6">
            <p className="text-sm text-ink-brown/70 font-light leading-relaxed">
              <span className="font-medium text-muted-red">Note:</span> Replace these photos with your own memories—
              <br className="hidden sm:inline" />
              update the image URLs in the component code
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
