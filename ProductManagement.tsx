'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roadmapStages = [
  { stage: 'Idea', icon: '💡', color: '#00D9FF' },
  { stage: 'Research', icon: '🔍', color: '#55FFFF' },
  { stage: 'Roadmap', icon: '🗺️', color: '#7A5CFF' },
  { stage: 'Prioritization', icon: '⚡', color: '#00D9FF' },
  { stage: 'Sprint Planning', icon: '📋', color: '#55FFFF' },
  { stage: 'Development', icon: '⚙️', color: '#7A5CFF' },
  { stage: 'Testing', icon: '✓', color: '#00D9FF' },
  { stage: 'Launch', icon: '🚀', color: '#55FFFF' },
  { stage: 'Optimization', icon: '📈', color: '#7A5CFF' },
];

const metrics = [
  { label: 'Sprint Velocity', value: '340 pts' },
  { label: 'Backlog Health', value: '87%' },
  { label: 'Deployment Freq', value: '2.5x/week' },
  { label: 'Lead Time', value: '4.2 days' },
];

export function ProductManagement() {
  const containerRef = useRef<HTMLDivElement>(null);
  const roadmapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!roadmapRef.current) return;

    gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
      },
    }).to(
      roadmapRef.current,
      {
        y: -100,
        opacity: 1,
      },
      0
    );
  }, []);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen bg-gradient-to-b from-dark-bg via-deep-navy to-dark-bg py-24 px-6 relative overflow-hidden"
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-accent-purple rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-electric-blue rounded-full mix-blend-screen filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Product <span className="text-electric-blue">Management</span>
            <br />
            as a Service
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            End-to-end product lifecycle management from concept to market leadership
          </p>
        </div>

        {/* Main Roadmap */}
        <div ref={roadmapRef} className="mb-20">
          {/* Timeline visualization */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-20 h-1 bg-gradient-to-r from-electric-blue via-accent-purple to-highlight-cyan opacity-40"></div>

            {/* Stages */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-9 gap-4 relative z-10">
              {roadmapStages.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="flex flex-col items-center"
                >
                  {/* Stage circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mb-4 glass-panel border-2 transition-all duration-300 hover:scale-110"
                    style={{
                      borderColor: item.color,
                      boxShadow: `0 0 20px ${item.color}40`,
                    }}
                  >
                    {item.icon}
                  </div>

                  {/* Stage label */}
                  <h3 className="text-sm font-bold text-center text-white">{item.stage}</h3>

                  {/* Arrow down (except last) */}
                  {index < roadmapStages.length - 1 && (
                    <div className="text-electric-blue text-2xl mt-2 hidden lg:block">↓</div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-6 text-center group hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="text-3xl font-bold text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                {metric.value}
              </div>
              <div className="text-sm text-text-secondary">{metric.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Sprint Board & Backlog */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {/* Sprint Board */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="glass-panel p-8 lg:col-span-2"
          >
            <h3 className="text-xl font-bold mb-6 text-electric-blue">Sprint Board</h3>
            <div className="grid grid-cols-3 gap-4">
              {['To Do', 'In Progress', 'Done'].map((column) => (
                <div key={column} className="space-y-3">
                  <div className="text-sm font-bold text-text-secondary uppercase">{column}</div>
                  <div className="space-y-2 min-h-40">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="bg-deep-navy p-3 rounded-lg text-sm text-white border-l-2"
                        style={{ borderColor: column === 'Done' ? '#00D9FF' : '#7A5CFF' }}
                      >
                        Task {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Velocity Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="glass-panel p-8"
          >
            <h3 className="text-xl font-bold mb-6 text-accent-purple">Velocity Trend</h3>
            <div className="space-y-4">
              {['Sprint 1', 'Sprint 2', 'Sprint 3', 'Sprint 4'].map((sprint, i) => (
                <div key={sprint} className="space-y-1">
                  <div className="text-xs text-text-secondary">{sprint}</div>
                  <div className="w-full h-2 bg-deep-navy rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-electric-blue to-highlight-cyan rounded-full"
                      style={{ width: `${(i + 1) * 25}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Release Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass-panel p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-highlight-cyan">Release Timeline</h3>
          <div className="space-y-4">
            {[
              { version: 'v1.0', date: 'Q2 2024', status: 'Released' },
              { version: 'v1.5', date: 'Q3 2024', status: 'In Development' },
              { version: 'v2.0', date: 'Q4 2024', status: 'Planning' },
            ].map((release, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-deep-navy rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 rounded-full bg-electric-blue"></div>
                  <div>
                    <div className="font-bold text-white">{release.version}</div>
                    <div className="text-sm text-text-secondary">{release.date}</div>
                  </div>
                </div>
                <div
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    backgroundColor:
                      release.status === 'Released'
                        ? 'rgba(0, 217, 255, 0.2)'
                        : release.status === 'In Development'
                          ? 'rgba(122, 92, 255, 0.2)'
                          : 'rgba(85, 255, 255, 0.2)',
                    color:
                      release.status === 'Released'
                        ? '#00D9FF'
                        : release.status === 'In Development'
                          ? '#7A5CFF'
                          : '#55FFFF',
                  }}
                >
                  {release.status}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
