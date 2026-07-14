'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'Senior Expertise',
    description: 'Led by industry veterans with 15+ years in digital transformation.',
    icon: '👨‍💼',
    color: '#00D9FF',
  },
  {
    title: 'Business First',
    description: 'Every solution aligns with your strategic business objectives.',
    icon: '📈',
    color: '#55FFFF',
  },
  {
    title: 'Transparent Delivery',
    description: 'Complete visibility with regular updates and clear communication.',
    icon: '📊',
    color: '#7A5CFF',
  },
  {
    title: 'Agile Execution',
    description: 'Rapid iteration and deployment with continuous optimization.',
    icon: '⚡',
    color: '#00D9FF',
  },
  {
    title: 'Scalable Engineering',
    description: 'Built for growth with architectures that scale to millions.',
    icon: '🚀',
    color: '#55FFFF',
  },
  {
    title: 'Innovation First',
    description: 'Always pushing boundaries with cutting-edge technologies.',
    icon: '💡',
    color: '#7A5CFF',
  },
];

function RotatingCube() {
  const groupRef = useRef<THREE.Group>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current || !cubeRef.current) return;

    // Continuous rotation
    gsap.to(groupRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 4,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

    // Pulsing scale
    gsap.to(groupRef.current.scale, {
      x: 1.1,
      y: 1.1,
      z: 1.1,
      duration: 3,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      <mesh ref={cubeRef} castShadow>
        <boxGeometry args={[4, 4, 4]} />
        <meshStandardMaterial
          color="#055a5f"
          emissive="#00D9FF"
          emissiveIntensity={0.3}
          transparent
          opacity={0.9}
          metalness={0.8}
          roughness={0.2}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe overlay */}
      <mesh scale={1.001}>
        <boxGeometry args={[4, 4, 4]} />
        <meshPhongMaterial
          emissive="#55FFFF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          wireframe={true}
        />
      </mesh>

      {/* Edge glow */}
      <lineSegments>
        <edgesGeometry attach="geometry" args={[new THREE.BoxGeometry(4, 4, 4)]} />
        <lineBasicMaterial attach="material" color="#00D9FF" linewidth={2} />
      </lineSegments>

      {/* Lights */}
      <pointLight intensity={1.5} color="#00D9FF" distance={15} />
      <pointLight intensity={1} color="#7A5CFF" distance={15} position={[-5, -5, 5]} />
    </group>
  );
}

function CubeScene() {
  return (
    <>
      <color attach="background" args={['#060B14']} />
      <ambientLight intensity={0.4} color="#ffffff" />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00D9FF" />
      <pointLight position={[-10, -10, 5]} intensity={0.8} color="#7A5CFF" />
      <RotatingCube />
    </>
  );
}

export function WhyChooseUs() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-b from-dark-bg via-deep-navy to-dark-bg py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-electric-blue rounded-full mix-blend-screen filter blur-3xl opacity-5"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold mb-4">
            Why <span className="text-electric-blue">Choose</span> Us
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Six reasons why leading companies trust us for their digital transformation
          </p>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-20">
          {/* Left column - reasons */}
          <div className="space-y-6">
            {reasons.slice(0, 3).map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-panel p-6 group hover:shadow-glow-blue transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: reason.color }}>
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center - Cube */}
          <div className="h-96 flex items-center justify-center">
            <Canvas
              camera={{ position: [0, 0, 10], fov: 75 }}
              gl={{ antialias: true, alpha: true }}
              className="w-full h-full"
            >
              <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={75} />
              <CubeScene />
            </Canvas>
          </div>

          {/* Right column - reasons */}
          <div className="space-y-6">
            {reasons.slice(3, 6).map((reason, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: (index + 3) * 0.1, duration: 0.5 }}
                className="glass-panel p-6 group hover:shadow-glow-cyan transition-all duration-300"
              >
                <div className="flex gap-4">
                  <div className="text-3xl flex-shrink-0">{reason.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg mb-1" style={{ color: reason.color }}>
                      {reason.title}
                    </h3>
                    <p className="text-sm text-text-secondary">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: '150+', label: 'Projects Delivered' },
            { number: '50+', label: 'Enterprise Clients' },
            { number: '500+', label: 'Team Members' },
            { number: '15+', label: 'Years Experience' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-panel p-6 text-center group hover:shadow-glow-cyan transition-all duration-300"
            >
              <div className="text-4xl font-bold text-electric-blue mb-2 group-hover:scale-110 transition-transform">
                {stat.number}
              </div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center"
        >
          <button className="px-10 py-4 rounded-lg bg-gradient-to-r from-electric-blue to-highlight-cyan text-dark-bg font-bold text-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105">
            Start Your Transformation
          </button>
        </motion.div>
      </div>
    </section>
  );
}
