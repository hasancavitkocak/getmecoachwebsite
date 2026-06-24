'use client';

import { motion } from 'framer-motion';
import { Apple, PlayCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6"
            >
              <span className="text-primary-400 text-sm font-medium">
                Türkiye&apos;nin #1 Koçluk Platformu
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Hayatını Dönüştürecek Koçu{' '}
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                Cebinde Taşı
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl text-dark-300 mb-8 leading-relaxed"
            >
              Fitness, mental, beslenme, kariyer, spor ve eğitim alanlarında 10.000+ doğrulanmış uzman koçla tanış. 
              Hedeflerine ulaşmak için ihtiyacın olan rehberlik artık bir tık uzağında.
            </motion.p>

            {/* App Store Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/indir"
                className="flex items-center gap-3 px-6 py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 bg-dark-900 rounded-xl flex items-center justify-center">
                  <Apple className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-dark-600">İndir</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </Link>

              <Link
                href="/indir"
                className="flex items-center gap-3 px-6 py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
              >
                <div className="w-10 h-10 bg-dark-900 rounded-xl flex items-center justify-center">
                  <PlayCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-dark-600">İndir</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-4 sm:gap-8"
            >
              {[
                { value: '10.320', label: 'Uzman Koç' },
                { value: '81', label: 'Şehir' },
                { value: '156.000+', label: 'Mutlu Kullanıcı' },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-dark-400">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10">
              {/* Phone Frame */}
              <div className="relative mx-auto w-[340px] h-[700px] bg-dark-800 rounded-[3rem] p-4 shadow-2xl border-8 border-dark-900">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-dark-900 rounded-b-3xl z-20" />
                
                {/* Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-[2.5rem] overflow-hidden">
                  {/* App Screenshot */}
                  <Image
                    src="/images/app-screenshot.png"
                    alt="GetMeCoach App"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                    onError={(e) => {
                      // Try PNG if JPG fails
                      const target = e.target as HTMLImageElement;
                      if (target.src.includes('.jpg')) {
                        target.src = '/images/app-screenshot.png';
                      } else {
                        // Fallback to placeholder if both fail
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-white/50 text-sm">App Screenshot</div>';
                        }
                      }
                    }}
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-10 -left-10 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
          >
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
