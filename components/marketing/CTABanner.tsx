'use client';

import { motion } from 'framer-motion';
import { Apple, PlayCircle, Sparkles } from 'lucide-react';
import Link from 'next/link';

const CTABanner = () => {
  return (
    <section className="py-16 sm:py-24 bg-dark-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-500/20 via-transparent to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
      </div>

      {/* Floating Orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-10 left-10 w-64 h-64 bg-primary-500 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 right-10 w-64 h-64 bg-purple-500 rounded-full blur-3xl"
      />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8"
          >
            <Sparkles className="w-5 h-5 text-primary-400" />
            <span className="text-white text-sm font-medium">
              Hemen Başla
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight px-4"
          >
            Dönüşüm Yolculuğun{' '}
            <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
              Bir Tık Uzağında
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-dark-300 mb-12 leading-relaxed px-4"
          >
            10.000+ uzman koç, 6 farklı kategori, sınırsız motivasyon.
            <br className="hidden sm:block" />
            GetMeCoach&apos;u indir, hayatını değiştirmeye bugün başla.
          </motion.p>

          {/* App Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          >
            <Link
              href="/indir"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center">
                <Apple className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-dark-600">İndir</div>
                <div className="text-xl font-bold">App Store</div>
              </div>
            </Link>

            <Link
              href="/indir"
              className="group flex items-center gap-3 px-8 py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center">
                <PlayCircle className="w-7 h-7 text-white" />
              </div>
              <div className="text-left">
                <div className="text-xs text-dark-600">İndir</div>
                <div className="text-xl font-bold">Google Play</div>
              </div>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full" />
              <span>Ücretsiz İndirme</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full" />
              <span>iOS & Android</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-500 rounded-full" />
              <span>4.8★ Ortalama Puan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
