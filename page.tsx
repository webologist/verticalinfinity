'use client';

import { Hero3D } from './components/Hero3D';
import { DigitalUniverse } from './components/DigitalUniverse';
import { ProductManagement } from './components/ProductManagement';
import { Process } from './components/Process';
import { Industries } from './components/Industries';
import { WhyChooseUs } from './components/WhyChooseUs';
import { AIConsole } from './components/AIConsole';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [showCursorGlow, setShowCursorGlow] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setShowCursorGlow(true);
    };

    const handleMouseLeave = () => {
      setShowCursorGlow(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <main className="w-full overflow-x-hidden bg-dark-bg">
      {/* Cursor glow effect */}
      <div
        className={`cursor-glow ${showCursorGlow ? 'active' : ''}`}
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Hero Section */}
      <Hero3D />

      {/* Digital Universe Section */}
      <DigitalUniverse />

      {/* Product Management Section */}
      <ProductManagement />

      {/* Process Section */}
      <Process />

      {/* Industries Section */}
      <Industries />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* AI Strategy Console */}
      <AIConsole />

      {/* Footer */}
      <Footer />
    </main>
  );
}
