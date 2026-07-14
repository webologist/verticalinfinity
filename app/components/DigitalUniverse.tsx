'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, PointMaterial } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { useState } from 'react';

const services = [
  { name: 'Digital Strategy', color: '#00D9FF', position: [15, 0, 0] },
  { name: 'Product Engineering', color: '#55FFFF', position: [-15, 0, 0] },
  { name: 'Experience Design', color: '#7A5CFF', position: [0, 15, 0] },
  { name: 'Intelligent Automation', color: '#00D9FF', position: [0, -15, 0] },
  { name: 'Product Management', color: '#55FFFF', position: [10, 10, 0] },
];

function OrbitingPlanet({
  position,
  color,
  name,
  index,
  onHover,
  isHovered,
}: {
  position: [number, number, number];
  color: string;
  name: string;
  index: number;
  onHover: (index: number | null) => void;
  isHovered: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    gsap.to(meshRef.current.scale, {
      x: isHovered ? 1.3 : 1,
      y: isHovered ? 1.3 : 1,
      z: isHovered ? 1.3 : 1,
      duration: 0.3,
    });
  }, [isHovered]);

  useEffect(() => {
    if (!groupRef.current) return;

    const angle = (index / services.length) * Math.PI * 2;
    const distance = 18;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    gsap.to(groupRef.current.position, {
      x,
      y,
      duration: 2,
      ease: 'power2.inOut',
    });

    const rotateAnimation = gsap.to(groupRef.current.rotation, {
      z: Math.PI * 2,
      duration: 30,
      repeat: -1,
      ease: 'none',
    });

    return () => rotateAnimation.kill();
  }, [index]);

  return (
    <group ref={groupRef} position={position}>
      <mesh
        ref={meshRef}
        onPointerEnter={() => onHover(index)}
        onPointerLeave={() => onHover(null)}
        scale={1}
      >
        <icosahedronGeometry args={[1.5, 4]} />
        <meshPhongMaterial
          emissive={color}
          emissiveIntensity={0.8}
          color={color}
          wireframe={false}
        />
      </mesh>

      {/* Glow aura */}
      <mesh scale={isHovered ? 1.8 : 1.5}>
        <icosahedronGeometry args={[1.5, 4]} />
        <meshPhongMaterial
          emissive={color}
          emissiveIntensity={isHovered ? 0.6 : 0.3}
          transparent
          opacity={isHovered ? 0.4 : 0.2}
          wireframe={true}
        />
      </mesh>

      {/* Label */}
      <pointLight intensity={1.5} color={color} />
    </group>
  );
}

function AICore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!meshRef.current) return;

    gsap.to(meshRef.current.rotation, {
      x: Math.PI * 2,
      y: Math.PI * 2,
      duration: 8,
      repeat: -1,
      ease: 'none',
    });

    gsap.to(meshRef.current.scale, {
      x: 1.1,
      y: 1.1,
      z: 1.1,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
    });
  }, []);

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef}>
        <octahedronGeometry args={[2, 2]} />
        <meshPhongMaterial
          emissive="#55FFFF"
          emissiveIntensity={1}
          color="#055a5f"
          wireframe={false}
        />
      </mesh>

      {/* Core glow */}
      <mesh scale={1.3}>
        <octahedronGeometry args={[2, 2]} />
        <meshPhongMaterial
          emissive="#55FFFF"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
          wireframe={true}
        />
      </mesh>

      <pointLight intensity={2} color="#55FFFF" />
    </group>
  );
}

function UniverseScene({ hoveredIndex }: { hoveredIndex: number | null }) {
  return (
    <>
      <color attach="background" args={['#060B14']} />
      
      <ambientLight intensity={0.3} color="#ffffff" />
      <pointLight position={[20, 20, 20]} intensity={1} color="#00D9FF" />
      <pointLight position={[-20, -20, 10]} intensity={0.8} color="#7A5CFF" />

      <AICore />

      {services.map((service, index) => (
        <OrbitingPlanet
          key={index}
          position={service.position as [number, number, number]}
          color={service.color}
          name={service.name}
          index={index}
          onHover={() => {}}
          isHovered={hoveredIndex === index}
        />
      ))}
    </>
  );
}

export function DigitalUniverse() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full min-h-screen bg-dark-bg py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 40], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
          className="w-full h-full"
        >
          <PerspectiveCamera makeDefault position={[0, 0, 40]} fov={75} />
          <UniverseScene hoveredIndex={hoveredIndex} />
        </Canvas>
      </div>

      {/* Service info overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-center space-y-8">
          <h2 className="text-5xl font-bold">
            Our <span className="text-electric-blue">Services</span>
          </h2>

          {/* Service cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto pointer-events-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className={`glass-panel p-6 cursor-pointer transition-all duration-300 transform ${
                  hoveredIndex === index ? 'scale-110 shadow-glow-cyan' : 'hover:scale-105'
                }`}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className="w-3 h-3 rounded-full mb-4 mx-auto"
                  style={{ backgroundColor: service.color }}
                ></div>
                <h3 className="text-lg font-bold text-white">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
