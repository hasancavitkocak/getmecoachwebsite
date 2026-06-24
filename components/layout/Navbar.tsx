'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { CATEGORIES } from '@/lib/constants';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/nasil-calisir', label: 'Nasıl Çalışır?' },
    { href: '/blog', label: 'Blog' },
    { href: '/sss', label: 'SSS' },
    { href: '/iletisim', label: 'İletişim' },
  ];

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg'
            : 'bg-dark-900'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="GetMeCoach" 
                  width={40} 
                  height={40}
                  className="group-hover:scale-110 transition-transform"
                  unoptimized
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.svg';
                  }}
                />
              </div>
              <span className="text-xl font-bold text-white whitespace-nowrap">
                GetMeCoach
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white/80 hover:text-white font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link
                href="/indir"
                className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl hover:shadow-lg hover:scale-105 transition-all"
              >
                Uygulamayı İndir
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-primary-400 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-20 left-0 right-0 z-40 lg:hidden bg-dark-800 border-b border-dark-700 shadow-xl"
          >
            <div className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-white hover:bg-dark-700 rounded-xl font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Link
                  href="/indir"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full px-6 py-3 text-center bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl transition-colors"
                >
                  Uygulamayı İndir
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
