'use client';

import { motion } from 'framer-motion';

export function Footer() {
  return (
    <footer className="w-full bg-deep-navy border-t border-electric-blue border-opacity-20">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-electric-blue">Digital</span> Consulting
            </h3>
            <p className="text-text-secondary">
              Building smarter digital products through strategy, technology & product leadership.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                Digital Strategy
              </li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                Product Engineering
              </li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                Experience Design
              </li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                AI Consulting
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="hover:text-electric-blue transition-colors cursor-pointer">About Us</li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                Case Studies
              </li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">Blog</li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">Careers</li>
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-2 text-text-secondary">
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                hello@consulting.io
              </li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                +1 (555) 123-4567
              </li>
              <li className="hover:text-electric-blue transition-colors cursor-pointer">
                San Francisco, CA
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-electric-blue border-opacity-10 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Social links */}
            <div className="flex gap-6">
              {['Twitter', 'LinkedIn', 'GitHub', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-text-secondary hover:text-electric-blue transition-colors text-sm"
                >
                  {social}
                </a>
              ))}
            </div>

            {/* Bottom text */}
            <div className="text-right text-text-secondary text-sm">
              <p>© 2024 Digital Consulting. All rights reserved.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-electric-blue transition-colors">
                  Privacy
                </a>
                {' • '}
                <a href="#" className="hover:text-electric-blue transition-colors">
                  Terms
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animated bottom border */}
      <div className="h-1 bg-gradient-to-r from-electric-blue via-accent-purple to-highlight-cyan opacity-30"></div>
    </footer>
  );
}
