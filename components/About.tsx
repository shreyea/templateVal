'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-warmGray">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-serif text-4xl md:text-5xl mb-8 text-charcoal leading-tight">
            What love looks like
          </h2>
          <p className="text-lg text-charcoal/70 mb-6 leading-relaxed">
            It's not always grand gestures or dramatic moments. Sometimes it's as simple as a shared silence, a knowing glance, or the comfort of presence.
          </p>
          <p className="text-lg text-charcoal/70 leading-relaxed">
            Love is found in the small spaces between words, in routines that become rituals, in choosing each other quietly, day after day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div className="border-l-2 border-softRed pl-6">
            <h3 className="text-xl font-medium mb-3 text-charcoal">Connection</h3>
            <p className="text-charcoal/70">The invisible thread that ties two people together, even in silence.</p>
          </div>
          
          <div className="border-l-2 border-terracotta pl-6">
            <h3 className="text-xl font-medium mb-3 text-charcoal">Presence</h3>
            <p className="text-charcoal/70">Being fully there, not just physically but emotionally, mentally.</p>
          </div>
          
          <div className="border-l-2 border-softRed pl-6">
            <h3 className="text-xl font-medium mb-3 text-charcoal">Time</h3>
            <p className="text-charcoal/70">The most valuable thing we can give—our moments, our attention, our now.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
