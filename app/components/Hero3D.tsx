'use client';

import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, PointMaterial } from '@react-three/drei';
import { useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

function ParticleField({ count = 5000 }: { count?: number }) {
  const meshRef = useRef<THREE.Points>(null);
  const particlesRef = useRef<Float32Array | null>(null);

  const positions = useMemo(() => {
    let positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return positions;
  }, [count]);

  useEffect(() => {
    particlesRef.current = positions.slice();
    let animationId: number;

    const animate = () => {
      if (!meshRef.current?.geometry.attributes.position) return;

      const pos = meshRef.current.geometry.attributes.position.array as Float32Array;
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        pos[i3] += (Math.random() - 0.5) * 0.3;
        pos[i3 + 1] += (Math.random() - 0.5) * 0.3;
        pos[i3 + 2] += (Math.random() - 0.5) * 0.3;

        // Keep particles in bounds
        if (Math.abs(pos[i3]) > 50) pos[i3] = -pos[i3];
        if (Math.abs(pos[i3 + 1]) > 50) pos[i3 + 1] = -pos[i3 + 1];
        if (Math.abs(pos[i3 + 2]) > 50) pos[i3 + 2] = -pos[i3 + 2];
      }
      
      meshRef.current.geometry.attributes.position.needsUpdate = true;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [count]);

  return (
    <points ref={meshRef} geometry={new THREE.BufferGeometry()} position={[0, 0, 0]}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <PointMaterial
        size={0.15}
        color="#00D9FF"
        sizeAttenuation
        transparent
        opacity={0.6}
      />
    </points>
  );
}

function GlowingSphere() {
  const groupRef = useRef<THREE.Group>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (!groupRef.current) return;

    gsap.to(groupRef.current.rotation, {
      z: Math.PI * 2,
      duration: 20,
      repeat: -1,
      ease: 'none',
    });

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
      {/* Core sphere */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshPhongMaterial
          emissive="#00D9FF"
          emissiveIntensity={0.8}
          wireframe={false}
          color="#055a5f"
        />
      </mesh>

      {/* Outer glow sphere */}
      <mesh scale={1.3}>
        <sphereGeometry args={[3, 64, 64]} />
        <meshPhongMaterial
          emissive="#00D9FF"
          emissiveIntensity={0.4}
          transparent
          opacity={0.2}
          wireframe={true}
          color="#1a1a1a"
        />
      </mesh>

      {/* Light inside */}
      <pointLight intensity={2} color="#00D9FF" />
    </group>
  );
}

export function Hero3D() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      <Canvas
        camera={{ position: [0, 0, 35], fov: 75 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <PerspectiveCamera makeDefault position={[0, 0, 35]} fov={75} />
        <color attach="background" args={['#060B14']} />
        
        {/* Ambient light */}
        <ambientLight intensity={0.4} color="#ffffff" />
        
        {/* Key light */}
        <pointLight position={[10, 10, 20]} intensity={1.5} color="#00D9FF" />
        
        {/* Fill light */}
        <pointLight position={[-10, -10, 10]} intensity={0.8} color="#7A5CFF" />

        {/* Particle field */}
        <ParticleField count={3000} />

        {/* Glowing sphere */}
        <GlowingSphere />
      </Canvas>

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
        <div className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white drop-shadow-2xl">
              Build Smarter <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue via-highlight-cyan to-accent-purple">
                Digital Products
              </span>
            </h1>
            <p className="text-xl text-text-secondary max-w-2xl mx-auto drop-shadow-lg">
              Strategy, Technology & Product Leadership
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center pt-8 pointer-events-auto">
            <button className="px-8 py-3 rounded-lg bg-electric-blue text-dark-bg font-bold hover:shadow-glow-blue transition-all duration-300 hover:scale-105">
              Book Strategy Consultation
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-electric-blue text-electric-blue font-bold hover:bg-electric-blue hover:text-dark-bg transition-all duration-300 hover:shadow-glow-blue">
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
