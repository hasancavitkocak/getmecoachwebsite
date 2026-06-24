'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, Globe } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Nasıl Çalışır', href: '/nasil-calisir' },
      { label: 'Kategoriler', href: '/kategoriler' },
      { label: 'Uygulamayı İndir', href: '/indir' },
      { label: 'Blog', href: '/blog' },
    ],
    coaches: [
      { label: 'Koçlar İçin', href: '/koclar-icin' },
      { label: 'Premium Üyelik', href: '/koclar-icin#premium' },
      { label: 'SSS', href: '/sss' },
    ],
    company: [
      { label: 'Hakkımızda', href: '/hakkimizda' },
      { label: 'İletişim', href: '/iletisim' },
    ],
    legal: [
      { label: 'Gizlilik Politikası', href: '/privacy' },
      { label: 'Kullanım Koşulları', href: '/terms' },
      { label: 'KVKK', href: '/kvkk' },
      { label: 'Çerez Politikası', href: '/cerez-politikasi' },
      { label: 'Destek', href: '/support' },
      { label: 'Hesap Silme', href: '/account-deletion' },
    ],
  };

  return (
    <footer className="bg-dark-900 text-dark-300">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="relative w-10 h-10 flex-shrink-0">
                <Image 
                  src="/logo.png" 
                  alt="GetMeCoach" 
                  width={40} 
                  height={40}
                  unoptimized
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/logo.svg';
                  }}
                />
              </div>
              <span className="text-xl font-bold text-white">GetMeCoach</span>
            </Link>
            <p className="text-dark-400 mb-6 leading-relaxed">
              Türkiye&apos;nin en kapsamlı koçluk platformu. Hayatını dönüştürecek koçu cebinde taşı.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <a 
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="flex items-center gap-2 text-dark-400 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{SITE_CONFIG.contact.email}</span>
              </a>
              <div className="flex items-start gap-2 text-dark-400">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="text-sm">{SITE_CONFIG.contact.address}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={SITE_CONFIG.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Instagram"
                title="@getmecoachapp"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${SITE_CONFIG.contact.email}`}
                className="w-10 h-10 bg-dark-800 hover:bg-primary-600 rounded-xl flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Ürün</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coaches Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Koçlar</h3>
            <ul className="space-y-3">
              {footerLinks.coaches.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Şirket</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Yasal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-dark-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 pt-12 border-t border-dark-800">
          <div className="max-w-xl">
            <h3 className="text-white font-semibold mb-2">Haberdar Ol</h3>
            <p className="text-dark-400 text-sm mb-4">
              Yeni özellikler, koç hikayeleri ve özel fırsatlardan ilk sen haberdar ol.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="E-posta adresin"
                className="flex-1 px-4 py-3 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-medium rounded-xl hover:shadow-lg transition-all whitespace-nowrap"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-dark-500 text-sm">
              © {currentYear} GetMeCoach. Tüm hakları saklıdır.
            </p>
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <Link
                href="/privacy"
                className="text-dark-500 hover:text-primary-400 text-sm transition-colors"
              >
                Gizlilik
              </Link>
              <Link
                href="/terms"
                className="text-dark-500 hover:text-primary-400 text-sm transition-colors"
              >
                Şartlar
              </Link>
              <Link
                href="/kvkk"
                className="text-dark-500 hover:text-primary-400 text-sm transition-colors"
              >
                KVKK
              </Link>
              <Link
                href="/support"
                className="text-dark-500 hover:text-primary-400 text-sm transition-colors"
              >
                Destek
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
