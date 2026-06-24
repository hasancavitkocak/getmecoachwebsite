'use client';

import { motion } from 'framer-motion';
import { Search, MessageSquare, Target, ArrowRight } from 'lucide-react';
import { HOW_IT_WORKS_STEPS } from '@/lib/constants';
import Link from 'next/link';

const iconMap: Record<string, any> = {
  search: Search,
  'message-square': MessageSquare,
  target: Target,
};

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-white via-primary-50/30 to-white dark:from-dark-950 dark:via-dark-900 dark:to-dark-950">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
              3 Basit Adım
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4 px-4">
            Nasıl Çalışır?
          </h2>
          <p className="text-lg sm:text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto px-4">
            Hayalindeki koça ulaşmak hiç bu kadar kolay olmamıştı
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-600 dark:from-primary-900 dark:via-primary-700 dark:to-primary-500 -translate-y-1/2" />

            <div className="grid lg:grid-cols-3 gap-12 relative">
              {HOW_IT_WORKS_STEPS.map((step, index) => {
                const Icon = iconMap[step.icon];
                
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="text-center">
                      {/* Step Number & Icon */}
                      <div className="relative inline-block mb-6">
                        {/* Background Circle */}
                        <div className="w-32 h-32 bg-white dark:bg-dark-800 rounded-full border-4 border-primary-500 dark:border-primary-600 flex items-center justify-center shadow-xl relative z-10">
                          <div className="text-center">
                            {Icon && <Icon className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-2" />}
                          </div>
                        </div>
                        
                        {/* Step Number Badge */}
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center shadow-lg z-20">
                          <span className="text-white font-bold text-lg">{index + 1}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Arrow (Desktop only) */}
                    {index < HOW_IT_WORKS_STEPS.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                        <ArrowRight className="w-8 h-8 text-primary-500" />
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/nasil-calisir"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Detaylı Bilgi Al
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
