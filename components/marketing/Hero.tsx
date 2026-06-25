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
              className="flex gap-3 sm:gap-4 mb-12"
            >
              <Link
                href="/indir"
                className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2.5 sm:px-6 sm:py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-900 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <Apple className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] sm:text-xs text-dark-600 leading-none mb-0.5">İndir</div>
                  <div className="text-xs sm:text-lg font-semibold leading-tight whitespace-nowrap">App Store</div>
                </div>
              </Link>

              <Link
                href="/indir"
                className="flex-1 sm:flex-none flex items-center justify-center sm:justify-start gap-2 sm:gap-3 px-3 py-2.5 sm:px-6 sm:py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-dark-900 rounded-lg sm:rounded-xl flex items-center justify-center flex-shrink-0">
                  <PlayCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] sm:text-xs text-dark-600 leading-none mb-0.5">İndir</div>
                  <div className="text-xs sm:text-lg font-semibold leading-tight whitespace-nowrap">Google Play</div>
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

          {/* Right Content - Phone Mockup (Responsive & Modern) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center mt-12 lg:mt-0 lg:block"
          >
            <div className="relative z-10">
              {/* Phone Frame - iPhone Pro style with very thin bezels & dynamic island */}
              <div className="relative mx-auto w-[280px] h-[570px] sm:w-[320px] sm:h-[660px] lg:w-[340px] lg:h-[700px] bg-dark-950 dark:bg-dark-900 rounded-[2.5rem] sm:rounded-[3rem] p-1.5 sm:p-2 shadow-2xl ring-4 ring-primary-500/5 dark:ring-dark-800/20 border border-white/10 dark:border-dark-700/30">
                {/* Dynamic Island */}
                <div className="absolute top-3 sm:top-4 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-4 bg-black rounded-full z-20 shadow-inner flex items-center justify-center">
                  <div className="absolute right-3 w-1.5 h-1.5 bg-neutral-900 rounded-full border-[0.5px] border-white/5" />
                </div>
                
                {/* Screen */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-[2.2rem] sm:rounded-[2.6rem] overflow-hidden">
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

              {/* Floating Elements (hidden on small mobile to avoid layout issues) */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -left-6 sm:-top-10 sm:-left-10 w-16 h-16 sm:w-24 sm:h-24 bg-primary-500/20 rounded-full blur-2xl pointer-events-none"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 w-20 h-20 sm:w-32 sm:h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"
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
