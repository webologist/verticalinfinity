'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const questions = [
  {
    id: 'business-type',
    question: 'What type of business are you?',
    icon: '🏢',
    options: ['Startup', 'SME', 'Enterprise', 'Non-profit'],
  },
  {
    id: 'challenge',
    question: 'What is your primary challenge?',
    icon: '🎯',
    options: [
      'Digital Transformation',
      'Product Development',
      'User Experience',
      'Technical Debt',
      'Scaling',
    ],
  },
  {
    id: 'timeline',
    question: 'What is your timeline?',
    icon: '⏱️',
    options: ['ASAP (0-3 months)', 'Soon (3-6 months)', 'Planned (6-12 months)', 'Exploratory'],
  },
  {
    id: 'budget',
    question: 'What is your budget range?',
    icon: '💰',
    options: ['$50K-$150K', '$150K-$500K', '$500K+', 'Flexible'],
  },
  {
    id: 'goal',
    question: 'What is your main goal?',
    icon: '🚀',
    options: [
      'Revenue Growth',
      'Market Entry',
      'Cost Reduction',
      'Customer Experience',
      'Innovation',
    ],
  },
  {
    id: 'engagement',
    question: 'Preferred engagement model?',
    icon: '🤝',
    options: [
      'Full-Service Partnership',
      'Staff Augmentation',
      'Advisory & Consulting',
      'Project-Based',
    ],
  },
];

export function AIConsole() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = {
      ...answers,
      [questions[currentStep].id]: answer,
    };
    setAnswers(newAnswers);

    if (currentStep < questions.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 500);
    } else {
      setTimeout(() => setIsCompleted(true), 500);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setAnswers({});
    setIsCompleted(false);
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <section className="w-full min-h-screen bg-dark-bg py-24 px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent-purple rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-electric-blue rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10 max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">
            <span className="text-electric-blue">AI Strategy</span> Console
          </h2>
          <p className="text-xl text-text-secondary">
            Let's understand your needs and craft the perfect solution
          </p>
        </div>

        {/* Console Container */}
        <motion.div
          className="glass-panel p-8 lg:p-12 rounded-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {!isCompleted ? (
            <>
              {/* Progress bar */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-text-secondary font-bold">
                    Step {currentStep + 1} of {questions.length}
                  </span>
                  <span className="text-sm text-electric-blue font-bold">{Math.round(progress)}%</span>
                </div>
                <div className="w-full h-2 bg-deep-navy rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-electric-blue to-highlight-cyan"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-4xl">{questions[currentStep].icon}</div>
                    <h3 className="text-2xl font-bold text-white">
                      {questions[currentStep].question}
                    </h3>
                  </div>

                  {/* Answer options */}
                  <div className="space-y-3">
                    {questions[currentStep].options.map((option, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                        onClick={() => handleAnswer(option)}
                        className={`w-full p-4 rounded-lg border-2 transition-all duration-300 text-left font-semibold hover:scale-102 ${
                          answers[questions[currentStep].id] === option
                            ? 'border-electric-blue bg-electric-blue bg-opacity-10 text-electric-blue shadow-glow-blue'
                            : 'border-text-secondary bg-transparent text-white hover:border-electric-blue'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          <span className="text-lg">→</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex gap-4 mt-12 justify-between">
                <button
                  onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                  disabled={currentStep === 0}
                  className="px-6 py-2 border-2 border-text-secondary text-text-secondary rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                {!answers[questions[currentStep].id] && (
                  <button
                    onClick={() => setCurrentStep(Math.min(questions.length - 1, currentStep + 1))}
                    disabled={currentStep === questions.length - 1}
                    className="px-6 py-2 border-2 border-text-secondary text-text-secondary rounded-lg hover:border-electric-blue hover:text-electric-blue transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ml-auto"
                  >
                    Skip →
                  </button>
                )}
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-8"
            >
              {/* Success message */}
              <div className="space-y-4 mb-8">
                <div className="text-6xl mb-4">✨</div>
                <h3 className="text-3xl font-bold text-electric-blue">
                  Strategy Profile Complete!
                </h3>
                <p className="text-text-secondary">
                  We've analyzed your needs and prepared a customized approach for your organization.
                </p>
              </div>

              {/* Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-deep-navy rounded-lg p-6 max-h-48 overflow-y-auto">
                {Object.entries(answers).map(([key, value]) => {
                  const question = questions.find((q) => q.id === key);
                  return (
                    <div key={key} className="text-left">
                      <p className="text-xs text-text-secondary uppercase mb-1">
                        {question?.question}
                      </p>
                      <p className="font-bold text-electric-blue">{value}</p>
                    </div>
                  );
                })}
              </div>

              {/* CTA */}
              <div className="space-y-4">
                <button className="w-full px-8 py-4 rounded-lg bg-gradient-to-r from-electric-blue to-highlight-cyan text-dark-bg font-bold text-lg hover:shadow-glow-cyan transition-all duration-300 hover:scale-105">
                  Book Strategy Consultation
                </button>
                <button
                  onClick={handleReset}
                  className="w-full px-8 py-4 rounded-lg border-2 border-electric-blue text-electric-blue font-bold hover:bg-electric-blue hover:text-dark-bg transition-all duration-300"
                >
                  Start Over
                </button>
              </div>

              {/* Additional info */}
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="glass-panel p-4">
                  <p className="text-sm text-text-secondary mb-1">Response Time</p>
                  <p className="font-bold text-electric-blue">Within 24 hours</p>
                </div>
                <div className="glass-panel p-4">
                  <p className="text-sm text-text-secondary mb-1">Next Step</p>
                  <p className="font-bold text-highlight-cyan">Discovery Call</p>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Footer note */}
        <div className="text-center mt-12 text-text-secondary">
          <p className="text-sm">Your information is secure and will be used only to prepare your custom proposal.</p>
        </div>
      </div>
    </section>
  );
}
