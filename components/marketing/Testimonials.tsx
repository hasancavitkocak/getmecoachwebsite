'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';
import Image from 'next/image';

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-dark-950">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
            <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
              Kullanıcı Yorumları
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4 px-4">
            Başarı Hikayeleri
          </h2>
          <p className="text-lg sm:text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto px-4">
            Binlerce kullanıcı GetMeCoach ile hedeflerine ulaştı
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative h-full p-8 bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300">
                {/* Quote Icon */}
                <div className="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-20 h-20 text-primary-500" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-dark-700 dark:text-dark-300 text-lg leading-relaxed mb-6 relative z-10">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-xl font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-dark-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-dark-600 dark:text-dark-400">
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-dark-600 dark:text-dark-400 text-lg">
            Ve daha fazlası... Tüm başarı hikayelerini uygulamada keşfedin!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
