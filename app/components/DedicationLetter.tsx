'use client';

import { motion } from 'framer-motion';

export default function DedicationLetter() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-warm-beige to-warm-cream relative overflow-hidden">
      {/* Vintage paper watermark effect */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="watermark" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <text x="50" y="100" fontSize="40" fill="currentColor" className="text-chocolate" opacity="0.3" transform="rotate(-45 100 100)">
                ❤
              </text>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#watermark)" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Letter paper */}
          <div 
            className="bg-vintage-paper rounded-lg shadow-2xl p-12 md:p-16 relative paper-texture"
            style={{
              backgroundImage: `
                repeating-linear-gradient(
                  0deg,
                  transparent,
                  transparent 31px,
                  rgba(92, 64, 51, 0.05) 31px,
                  rgba(92, 64, 51, 0.05) 32px
                )
              `,
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15), inset 0 0 20px rgba(255, 255, 255, 0.5)',
            }}
          >
            {/* Torn edge effect at top */}
            <div className="absolute -top-2 left-0 right-0 h-4 bg-vintage-paper opacity-60" 
              style={{
                clipPath: 'polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0, 100% 0, 0 0)'
              }}
            />

            {/* Date header */}
            <div className="text-right mb-8">
              <p className="font-serif text-sm text-ink-brown/60 italic" style={{ textAlign: 'right' }}>
                Valentine's Day, 2025
              </p>
            </div>

            {/* Greeting */}
            <div className="mb-8">
              <p className="font-serif text-2xl text-chocolate">
                To my dearest love,
              </p>
            </div>

            {/* Letter content */}
            <div className="space-y-6 handwritten text-lg text-ink-brown leading-relaxed">
              <p>
                How do you capture infinity in words? That's what I'm trying to do here—to somehow express what you mean to me when every language feels insufficient.
              </p>

              <p>
                You walked into my life like the first warm day of spring after a long winter. Suddenly everything was brighter, softer, more alive. You didn't just change my days; you changed how I see the world. Colors are more vivid. Music sounds sweeter. Ordinary moments feel extraordinary.
              </p>

              <p>
                I love the big things about you—your kindness, your strength, the way you dream. But I also love the small things: how you scrunch your nose when you're thinking, the way you hum while cooking, how you always steal the blanket but somehow I don't mind. These tiny details are my favorite treasures.
              </p>

              <p>
                Thank you for being patient with me, for loving me on my worst days, for celebrating my victories like they're your own. Thank you for building this beautiful life with me, one moment, one laugh, one adventure at a time.
              </p>

              <p>
                This website is just a small token—a way to say what I struggle to put into words every day. You deserve grand gestures and epic love stories, but more than that, you deserve someone who shows up, who cares, who chooses you every single day.
              </p>

              <p className="text-chocolate font-semibold">
                I choose you. Today, tomorrow, and all the tomorrows after that.
              </p>

              <p>
                Happy Valentine's Day, my love. Here's to us, to our story, and to all the chapters we've yet to write together.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12">
              <p className="font-serif text-xl text-muted-red italic" style={{ textAlign: 'right' }}>
                Forever yours,
              </p>
              <div className="mt-4 flex justify-end">
                <svg width="120" height="60" viewBox="0 0 120 60" fill="none" className="text-chocolate">
                  <path 
                    d="M10 40 Q 20 20, 40 35 T 70 30 Q 85 25, 95 35 L 100 40" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                    fill="none"
                  />
                  <path 
                    d="M20 45 Q 30 50, 45 45 T 75 45" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                    fill="none"
                    opacity="0.5"
                  />
                </svg>
              </div>
            </div>

            {/* Heart stamp */}
            <div className="absolute bottom-8 left-8 w-16 h-16 border-4 border-muted-red/30 rounded-full flex items-center justify-center transform -rotate-12">
              <svg className="w-6 h-6 text-muted-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
            </div>

            {/* Decorative corners */}
            <div className="absolute top-8 left-8 text-dusty-rose/20">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
                <path d="M0 0 L0 30 L10 20 L20 30 L30 0 Z" />
              </svg>
            </div>
            <div className="absolute bottom-8 right-8 text-dusty-rose/20 transform rotate-180">
              <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
                <path d="M0 0 L0 30 L10 20 L20 30 L30 0 Z" />
              </svg>
            </div>
          </div>

          {/* Paper shadow effect */}
          <div className="absolute -bottom-2 left-4 right-4 h-4 bg-charcoal/10 blur-sm rounded-full -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
