'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import Link from 'next/link';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:max-w-md z-50"
        >
          <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-2xl border border-dark-200 dark:border-dark-700 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cookie className="w-6 h-6 text-primary-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                  Çerez Kullanımı
                </h3>
                <p className="text-sm text-dark-600 dark:text-dark-400 mb-4">
                  Web sitemizde deneyiminizi geliştirmek için çerezler kullanıyoruz. 
                  Detaylı bilgi için{' '}
                  <Link href="/cerez-politikasi" className="text-primary-600 hover:underline">
                    çerez politikamızı
                  </Link>{' '}
                  inceleyebilirsiniz.
                </p>
                
                <div className="flex gap-3">
                  <button
                    onClick={handleAccept}
                    className="px-6 py-2.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl hover:shadow-lg transition-all text-sm"
                  >
                    Kabul Et
                  </button>
                  <button
                    onClick={handleReject}
                    className="px-6 py-2.5 border border-dark-300 dark:border-dark-600 text-dark-700 dark:text-dark-300 font-medium rounded-xl hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors text-sm"
                  >
                    Reddet
                  </button>
                </div>
              </div>

              <button
                onClick={handleReject}
                className="text-dark-400 hover:text-dark-600 dark:hover:text-dark-200 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
