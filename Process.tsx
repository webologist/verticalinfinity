'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const processChambers = [
  {
    title: 'Discover',
    icon: '🔭',
    description: 'Understanding your market, users, and business goals.',
    color: '#00D9FF',
    position: { x: 0, y: 0 },
  },
  {
    title: 'Define',
    icon: '📐',
    description: 'Defining strategy, roadmap, and success metrics.',
    color: '#55FFFF',
    position: { x: 100, y: 40 },
  },
  {
    title: 'Design',
    icon: '🎨',
    description: 'Creating intuitive user experiences and interfaces.',
    color: '#7A5CFF',
    position: { x: 200, y: -40 },
  },
  {
    title: 'Build',
    icon: '🏗️',
    description: 'Engineering scalable and robust solutions.',
    color: '#00D9FF',
    position: { x: 300, y: 40 },
  },
  {
    title: 'Launch',
    icon: '🚀',
    description: 'Deploying and optimizing for market success.',
    color: '#55FFFF',
    position: { x: 400, y: -40 },
  },
  {
    title: 'Optimize',
    icon: '📊',
    description: 'Continuous improvement and scaling.',
    color: '#7A5CFF',
    position: { x: 500, y: 0 },
  },
];

function FloatingChamber({
  chamber,
  index,
  isActive,
  onClick,
}: {
  chamber: typeof processChambers[0];
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const boxRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={boxRef}
      initial={{ opacity: 0, scale: 0.8, y: 100 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className={`absolute w-40 h-40 rounded-2xl glass-panel cursor-pointer flex flex-col items-center justify-center transition-all duration-300 ${
        isActive ? 'shadow-glow-blue scale-110' : 'hover:shadow-glow-cyan'
      }`}
      style={{
        left: `${chamber.position.x}px`,
        top: `${chamber.position.y}px`,
        borderColor: isActive ? chamber.color : 'rgba(255, 255, 255, 0.1)',
        boxShadow: isActive ? `0 0 30px ${chamber.color}` : undefined,
      }}
      onClick={onClick}
    >
      <div className="text-5xl mb-3">{chamber.icon}</div>
      <div className="text-center">
        <h3 className="font-bold text-lg" style={{ color: chamber.color }}>
          {chamber.title}
        </h3>
      </div>
    </motion.div>
  );
}

export function Process() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollableRef = useRef<HTMLDivElement>(null);

  return (
    <section className="w-full min-h-screen bg-dark-bg py-24 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-20 w-72 h-72 bg-electric-blue rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-40 right-20 w-72 h-72 bg-accent-purple rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-bold mb-4">
            Our <span className="text-electric-blue">Process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            A proven six-stage methodology ensuring delivery of exceptional digital products
          </p>
        </div>

        {/* Chambers layout */}
        <div className="relative h-screen max-h-96 overflow-x-auto overflow-y-hidden">
          <div className="relative w-full h-full min-w-max">
            {/* Connection line */}
            <svg
              className="absolute top-1/2 left-0 w-full h-1 pointer-events-none"
              style={{
                transform: 'translateY(-50%)',
                minWidth: '650px',
              }}
            >
              <line
                x1="0"
                y1="0"
                x2="600"
                y2="0"
                stroke="url(#lineGradient)"
                strokeWidth="2"
              />
              <defs>
                <linearGradient id="lineGradient">
                  <stop offset="0%" stopColor="#00D9FF" />
                  <stop offset="50%" stopColor="#7A5CFF" />
                  <stop offset="100%" stopColor="#55FFFF" />
                </linearGradient>
              </defs>
            </svg>

            {/* Chambers */}
            {processChambers.map((chamber, index) => (
              <FloatingChamber
                key={index}
                chamber={chamber}
                index={index}
                isActive={activeIndex === index}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Active chamber details */}
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-20 glass-panel p-12 max-w-2xl mx-auto"
          >
            <div className="flex items-start gap-6">
              <div className="text-6xl">{processChambers[activeIndex].icon}</div>
              <div>
                <h3 className="text-3xl font-bold mb-2">
                  {processChambers[activeIndex].title}
                </h3>
                <p className="text-lg text-text-secondary mb-6">
                  {processChambers[activeIndex].description}
                </p>

                {/* Detailed breakdown */}
                <div className="space-y-3">
                  {['Planning', 'Execution', 'Review & Iterate'].map((step, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{
                          backgroundColor: processChambers[activeIndex].color,
                        }}
                      ></div>
                      <span className="text-text-secondary">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Timeline at bottom */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Timeline Overview</h3>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {processChambers.map((chamber, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 glass-panel hover:scale-110 transition-transform"
                  style={{
                    borderColor: chamber.color,
                    boxShadow: `0 0 15px ${chamber.color}40`,
                  }}
                >
                  {index + 1}
                </div>
                <p className="text-sm font-bold">{chamber.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
