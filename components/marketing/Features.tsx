'use client';

import { motion } from 'framer-motion';
import { 
  MapPin, 
  ShieldCheck, 
  MessageCircle, 
  Users, 
  Video, 
  Filter,
  Sparkles
} from 'lucide-react';
import { FEATURES } from '@/lib/constants';

const iconMap: Record<string, any> = {
  'map-pin': MapPin,
  'shield-check': ShieldCheck,
  'message-circle': MessageCircle,
  users: Users,
  video: Video,
  filter: Filter,
};

const Features = () => {
  return (
    <section className="py-16 sm:py-24 bg-dark-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-primary-400 text-sm font-medium">
              Güçlü Özellikler
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 px-4">
            Koçunu Bulmanı Kolaylaştıran Özellikler
          </h2>
          <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto px-4">
            En gelişmiş teknoloji ile tam ihtiyacın olan koça kolayca ulaş
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {FEATURES.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative h-full p-8 bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-700 hover:border-primary-500/50 transition-all duration-300">
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-dark-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary-500/0 to-purple-500/0 group-hover:from-primary-500/5 group-hover:to-purple-500/5 transition-all duration-300 pointer-events-none" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-dark-300 mb-6">
            Ve daha fazlası... Tüm özellikleri keşfetmek için uygulamayı indir!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
