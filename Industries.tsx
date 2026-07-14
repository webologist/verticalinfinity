'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const industries = [
  {
    name: 'Healthcare',
    icon: '⚕️',
    color: '#00D9FF',
    challenges: [
      'Patient data privacy & security',
      'Integration with legacy systems',
      'Compliance with regulations',
    ],
    solutions: [
      'HIPAA-compliant architecture',
      'Real-time patient monitoring systems',
      'Automated compliance reporting',
    ],
    caseStudy: 'Digital Health Platform',
    outcome: 'Served 2M+ patients, 40% faster diagnosis',
  },
  {
    name: 'Finance',
    icon: '💰',
    color: '#55FFFF',
    challenges: [
      'Complex regulatory requirements',
      'Real-time transaction processing',
      'Cybersecurity threats',
    ],
    solutions: [
      'Blockchain-based settlement systems',
      'AI-powered fraud detection',
      'Zero-trust security architecture',
    ],
    caseStudy: 'FinTech Platform',
    outcome: '$500M+ transactions, 99.99% uptime',
  },
  {
    name: 'Education',
    icon: '🎓',
    color: '#7A5CFF',
    challenges: [
      'Scalable learning infrastructure',
      'Personalization at scale',
      'Engagement & retention',
    ],
    solutions: [
      'AI-powered learning paths',
      'Gamified learning experiences',
      'Real-time collaboration tools',
    ],
    caseStudy: 'E-Learning Platform',
    outcome: '500K+ active learners, 85% completion rate',
  },
  {
    name: 'Retail',
    icon: '🛍️',
    color: '#00D9FF',
    challenges: [
      'Omnichannel integration',
      'Inventory management',
      'Customer personalization',
    ],
    solutions: [
      'Unified commerce platform',
      'Predictive inventory AI',
      'Real-time personalization engine',
    ],
    caseStudy: 'Retail Platform',
    outcome: '$100M+ revenue, 3x conversion increase',
  },
  {
    name: 'Manufacturing',
    icon: '🏭',
    color: '#55FFFF',
    challenges: [
      'Production line optimization',
      'Supply chain visibility',
      'Predictive maintenance',
    ],
    solutions: [
      'IoT sensor networks',
      'AI-powered predictive maintenance',
      'Supply chain visibility platform',
    ],
    caseStudy: 'Smart Factory',
    outcome: '35% efficiency gain, $20M cost savings',
  },
  {
    name: 'Logistics',
    icon: '📦',
    color: '#7A5CFF',
    challenges: [
      'Route optimization',
      'Real-time tracking',
      'Last-mile delivery',
    ],
    solutions: [
      'ML-based route optimization',
      'Real-time GPS tracking',
      'Autonomous delivery integration',
    ],
    caseStudy: 'Logistics Platform',
    outcome: '2M+ daily deliveries, 30% cost reduction',
  },
];

function IndustryBuilding({
  industry,
  index,
  isSelected,
  onClick,
}: {
  industry: typeof industries[0];
  index: number;
  isSelected: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative cursor-pointer group"
    >
      {/* Building */}
      <div
        className={`relative w-32 h-48 rounded-xl overflow-hidden transition-all duration-300 ${
          isSelected ? 'shadow-glow-cyan' : 'group-hover:shadow-glow-blue'
        }`}
        style={{
          backgroundColor: `${industry.color}15`,
          borderColor: industry.color,
          borderWidth: isSelected ? '2px' : '1px',
        }}
        onClick={onClick}
      >
        {/* Building pattern */}
        <div className="absolute inset-0 p-4 space-y-2">
          <div className="grid grid-cols-2 gap-1">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-3 rounded-sm"
                style={{
                  backgroundColor: `${industry.color}40`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-5xl group-hover:scale-110 transition-transform">
          {industry.icon}
        </div>

        {/* Label */}
        <div
          className="absolute bottom-0 left-0 right-0 py-2 px-3 text-center font-bold text-sm"
          style={{
            background: `linear-gradient(to top, ${industry.color}40, transparent)`,
            color: industry.color,
          }}
        >
          {industry.name}
        </div>
      </div>
    </motion.div>
  );
}

export function Industries() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-dark-bg py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-blue rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple rounded-full mix-blend-screen filter blur-3xl opacity-5"
          style={{ animationDelay: '2s' }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Industry <span className="text-electric-blue">Solutions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Proven expertise across diverse sectors. Click a building to explore our impact.
          </p>
        </div>

        {/* Futuristic city grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {industries.map((industry, index) => (
            <IndustryBuilding
              key={index}
              industry={industry}
              index={index}
              isSelected={selectedIndex === index}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
            />
          ))}
        </div>

        {/* Selected industry details */}
        <AnimatePresence mode="wait">
          {selectedIndex !== null && (
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-panel p-8 lg:p-12 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Left side - info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-5xl">{industries[selectedIndex].icon}</div>
                    <h3 className="text-3xl font-bold">{industries[selectedIndex].name}</h3>
                  </div>

                  {/* Challenges */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold text-accent-purple mb-4">Challenges</h4>
                    <ul className="space-y-2">
                      {industries[selectedIndex].challenges.map((challenge, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span
                            className="text-lg mt-1"
                            style={{
                              color: industries[selectedIndex].color,
                            }}
                          >
                            ▪
                          </span>
                          <span className="text-text-secondary">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-lg font-bold text-highlight-cyan mb-4">
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {industries[selectedIndex].solutions.map((solution, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="text-lg text-electric-blue mt-1">✓</span>
                          <span className="text-text-secondary">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right side - case study */}
                <div
                  className="rounded-xl p-8 border-2"
                  style={{
                    backgroundColor: `${industries[selectedIndex].color}10`,
                    borderColor: industries[selectedIndex].color,
                  }}
                >
                  <h4 className="text-lg font-bold mb-4 text-white">Case Study</h4>
                  <h5 className="text-2xl font-bold mb-6" style={{ color: industries[selectedIndex].color }}>
                    {industries[selectedIndex].caseStudy}
                  </h5>

                  <div className="space-y-4 mb-8">
                    <div>
                      <p className="text-sm text-text-secondary uppercase mb-1">Project Type</p>
                      <p className="font-bold text-white">End-to-End Platform Development</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary uppercase mb-1">Timeline</p>
                      <p className="font-bold text-white">6-12 months</p>
                    </div>
                    <div>
                      <p className="text-sm text-text-secondary uppercase mb-1">Technologies</p>
                      <p className="font-bold text-white">React, Node.js, AWS, AI/ML</p>
                    </div>
                  </div>

                  {/* Business Impact */}
                  <div
                    className="p-4 rounded-lg"
                    style={{
                      backgroundColor: `${industries[selectedIndex].color}20`,
                    }}
                  >
                    <p className="text-sm text-text-secondary uppercase mb-2">Business Impact</p>
                    <p className="text-lg font-bold text-white">
                      {industries[selectedIndex].outcome}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
