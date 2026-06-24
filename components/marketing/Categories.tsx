'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Dumbbell, 
  Brain, 
  Apple, 
  Briefcase, 
  Trophy, 
  GraduationCap,
  ArrowRight 
} from 'lucide-react';
import { CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const iconMap: Record<string, any> = {
  dumbbell: Dumbbell,
  brain: Brain,
  apple: Apple,
  briefcase: Briefcase,
  trophy: Trophy,
  'graduation-cap': GraduationCap,
};

const gradientMap: Record<string, string> = {
  'fitness': 'bg-gradient-to-br from-orange-500 to-red-600',
  'sports': 'bg-gradient-to-br from-green-500 to-emerald-600',
  'nutrition': 'bg-gradient-to-br from-amber-500 to-orange-600',
  'career': 'bg-gradient-to-br from-blue-500 to-cyan-600',
  'education': 'bg-gradient-to-br from-indigo-500 to-purple-600',
  'mental': 'bg-gradient-to-br from-purple-500 to-pink-600',
};

const Categories = () => {
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
              6 Ana Kategori
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4 px-4">
            Aradığın Uzmanlık Burada
          </h2>
          <p className="text-lg sm:text-xl text-dark-600 dark:text-dark-400 max-w-2xl mx-auto px-4">
            Hayatının her alanında uzman koçlarla tanış, hedeflerine ulaş
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon];
            const gradientClass = gradientMap[category.id];
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`/kategoriler/${category.slug}`}
                  className="group block relative h-full"
                >
                  <div className="relative h-full p-8 bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-300 overflow-hidden">
                    {/* Icon */}
                    <div className="relative inline-block mb-6">
                      <div className={cn(
                        "inline-flex items-center justify-center w-16 h-16 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-xl",
                        gradientClass
                      )}>
                        {Icon && <Icon className="w-8 h-8 text-white" strokeWidth={2.5} />}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {category.title}
                    </h3>
                    
                    <p className="text-dark-600 dark:text-dark-400 mb-6 leading-relaxed">
                      {category.description}
                    </p>

                    {/* Stats & Arrow */}
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-2xl font-bold text-dark-900 dark:text-white">
                          {category.coachCount.toLocaleString('tr-TR')}
                        </span>
                        <span className="text-dark-500 dark:text-dark-500 ml-2">koç</span>
                      </div>
                      
                      <div className="w-10 h-10 rounded-full bg-primary-500/10 dark:bg-primary-500/20 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                        <ArrowRight className="w-5 h-5 text-primary-600 dark:text-primary-400 group-hover:text-white transition-colors" />
                      </div>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-primary-500 transition-colors duration-300 pointer-events-none" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA - Kaldırıldı */}
      </div>
    </section>
  );
};

export default Categories;
