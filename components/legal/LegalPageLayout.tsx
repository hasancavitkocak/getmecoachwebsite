'use client';

import { useState, useEffect, ReactNode } from 'react';
import { ArrowLeft, BookOpen, Calendar, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';

interface LegalPageLayoutProps {
  englishTitle?: string;
  turkishTitle?: string;
  englishContent?: ReactNode;
  turkishContent?: ReactNode;
  defaultLang?: 'en' | 'tr';
}

export default function LegalPageLayout({
  englishTitle = '',
  turkishTitle = '',
  englishContent,
  turkishContent,
  defaultLang,
}: LegalPageLayoutProps) {
  // Determine available languages
  const hasEnglish = !!englishContent;
  const hasTurkish = !!turkishContent;
  
  // Default to Turkish if available, otherwise fallback
  const initialLang = defaultLang || (hasTurkish ? 'tr' : 'en');
  const [language, setLanguage] = useState<'en' | 'tr'>(initialLang);
  const [tocItems, setTocItems] = useState<{ id: string; text: string }[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  // Extract headings for Table of Contents (TOC)
  useEffect(() => {
    const headings = document.querySelectorAll('.legal-content h2');
    const items: { id: string; text: string }[] = [];
    
    headings.forEach((heading, index) => {
      let id = heading.id;
      if (!id) {
        // Create slug from heading text
        const text = heading.textContent || '';
        id = text
          .toLowerCase()
          .trim()
          .replace(/[ğĞ]/g, 'g')
          .replace(/[üÜ]/g, 'u')
          .replace(/[şŞ]/g, 's')
          .replace(/[ıİ]/g, 'i')
          .replace(/[öÖ]/g, 'o')
          .replace(/[çÇ]/g, 'c')
          .replace(/[^a-z0-9\s-]/g, '')
          .replace(/\s+/g, '-');
        
        if (!id) id = `section-${index}`;
        heading.id = id;
      }
      items.push({ id, text: heading.textContent || '' });
    });
    
    setTocItems(items);
    
    if (items.length > 0) {
      setActiveId(items[0].id);
    }
  }, [language, englishContent, turkishContent]);

  // Track active section during scroll
  useEffect(() => {
    if (tocItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { 
        rootMargin: '-80px 0px -70% 0px', // Trigger when section is in upper view area
        threshold: 0 
      }
    );

    const headings = document.querySelectorAll('.legal-content h2');
    headings.forEach((heading) => observer.observe(heading));

    return () => {
      headings.forEach((heading) => observer.unobserve(heading));
    };
  }, [tocItems, language]);

  const activeTitle = language === 'en' ? englishTitle : turkishTitle;
  const activeContent = language === 'en' ? englishContent : turkishContent;

  const handleTocClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Header offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveId(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Premium Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900 text-white border-b border-dark-800 py-16 lg:py-24">
        {/* Background Glowing Blobs */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="container-custom max-w-6xl relative z-10 px-6">
          {/* Back Navigation */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-dark-300 hover:text-primary-400 font-medium text-sm mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {language === 'en' ? 'Back to Homepage' : 'Ana Sayfaya Dön'}
          </Link>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-primary-400 font-semibold mb-3">
                <span>GetMeCoach</span>
                <span>/</span>
                <span>{language === 'en' ? 'Legal Documents' : 'Yasal Belgeler'}</span>
              </div>
              
              {/* Title */}
              <h1 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4 max-w-3xl leading-tight">
                {activeTitle}
              </h1>

              {/* Updated Time */}
              <div className="flex items-center gap-2 text-dark-400 text-sm">
                <Calendar className="w-4 h-4 text-primary-400" />
                <span>
                  {language === 'en' ? 'Last updated: June 2026' : 'Son güncelleme: Haziran 2026'}
                </span>
              </div>
            </div>

            {/* Language Switcher Card (Only if both languages are present) */}
            {hasEnglish && hasTurkish && (
              <div className="flex bg-dark-800/80 backdrop-blur-md p-1.5 rounded-2xl border border-dark-700/60 shadow-lg">
                <button
                  onClick={() => setLanguage('en')}
                  className={`px-5 py-2.5 text-xs font-semibold rounded-xl tracking-wide transition-all ${
                    language === 'en'
                      ? 'bg-primary-500 text-dark-950 shadow-md shadow-primary-500/20 font-bold scale-[1.02]'
                      : 'text-dark-300 hover:text-white hover:bg-dark-700/50'
                  }`}
                >
                  English
                </button>
                <button
                  onClick={() => setLanguage('tr')}
                  className={`px-5 py-2.5 text-xs font-semibold rounded-xl tracking-wide transition-all ${
                    language === 'tr'
                      ? 'bg-primary-500 text-dark-950 shadow-md shadow-primary-500/20 font-bold scale-[1.02]'
                      : 'text-dark-300 hover:text-white hover:bg-dark-700/50'
                  }`}
                >
                  Türkçe
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Page Content Layout */}
      <div className="container-custom max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Table of Contents - Desktop Sticky Sidebar */}
          {tocItems.length > 0 ? (
            <aside className="hidden lg:block lg:col-span-4 sticky top-28 self-start">
              <div className="bg-white dark:bg-dark-900/40 border border-slate-200/60 dark:border-dark-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-2 font-bold text-sm tracking-wider uppercase text-slate-800 dark:text-slate-200 mb-4 pb-2 border-b border-slate-100 dark:border-dark-800">
                  <BookOpen className="w-4 h-4 text-primary-500" />
                  <span>{language === 'en' ? 'Sections' : 'İçindekiler'}</span>
                </div>
                <nav className="space-y-1.5 max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleTocClick(e, item.id)}
                      className={`block py-2 px-3 text-sm rounded-lg transition-all border-l-2 leading-snug ${
                        activeId === item.id
                          ? 'border-primary-500 text-primary-600 dark:text-primary-400 bg-primary-50/50 dark:bg-primary-500/5 font-semibold pl-4'
                          : 'border-transparent text-slate-500 dark:text-dark-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-50 dark:hover:bg-dark-800/40 pl-4'
                      }`}
                    >
                      {item.text}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>
          ) : null}

          {/* Main Content Body */}
          <main className={`${tocItems.length > 0 ? 'lg:col-span-8' : 'lg:col-span-12'} w-full`}>
            <div className="bg-white dark:bg-dark-900/60 border border-slate-200/60 dark:border-dark-800/80 backdrop-blur-md rounded-2xl p-8 lg:p-12 shadow-xl shadow-slate-100/50 dark:shadow-none transition-shadow">
              <div className="legal-content text-slate-700 dark:text-dark-300">
                {activeContent}
              </div>
            </div>

            {/* Quick Contact Widget */}
            <div className="mt-8 bg-gradient-to-r from-dark-900 to-dark-950 text-white rounded-2xl p-8 border border-dark-800 relative overflow-hidden shadow-lg">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 rounded-full blur-3xl pointer-events-none" />
              
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-primary-400" />
                    {language === 'en' ? 'Need Help?' : 'Yardıma mı ihtiyacınız var?'}
                  </h3>
                  <p className="text-dark-300 text-sm max-w-lg leading-relaxed">
                    {language === 'en' 
                      ? 'If you have any questions or feedback about our policies, please contact our support team.'
                      : 'Politikalarımız hakkında herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen destek ekibimizle iletişime geçin.'}
                  </p>
                </div>
                
                <a 
                  href="mailto:info@getmecoach.com"
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-primary-500 text-dark-950 rounded-xl hover:bg-primary-400 hover:shadow-lg hover:shadow-primary-500/15 active:scale-[0.98] transition-all font-bold text-sm tracking-wide self-start md:self-auto"
                >
                  <Mail className="w-4 h-4" />
                  info@getmecoach.com
                </a>
              </div>
            </div>
          </main>
          
        </div>
      </div>
      
    </div>
  );
}

