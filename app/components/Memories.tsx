'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const memories = [
  {
    year: "2020",
    text: "The year we learned that distance doesn't diminish connection. We found new ways to be close."
  },
  {
    year: "2021",
    text: "Small rituals became anchors. Morning coffee, evening walks, quiet conversations."
  },
  {
    year: "2022",
    text: "We stopped chasing extraordinary and found beauty in the everyday."
  },
  {
    year: "2023",
    text: "Growing together, not just older. Learning that love is also patience, also listening."
  },
  {
    year: "2024",
    text: "Another year of choosing each other, of building something that feels like home."
  },
];

export default function Memories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 bg-warmGray">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl mb-20 text-center text-charcoal"
        >
          Years together
        </motion.h2>

        <div className="space-y-16">
          {memories.map((memory, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex gap-8 items-start"
            >
              <div className="text-6xl font-serif text-softRed/30 min-w-[120px]">
                {memory.year}
              </div>
              <p className="text-xl text-charcoal/80 leading-relaxed pt-3">
                {memory.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
