import { Metadata } from 'next';
import { Apple, PlayCircle, Smartphone, Zap, Shield, Star, Download } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Uygulamayı İndir | GetmeCoach',
  description: 'GetmeCoach uygulamasını iOS ve Android cihazlarına ücretsiz indir. Hayatını dönüştürecek koçu cebinde taşı!',
};

export default function DownloadPage() {
  const features = [
    {
      icon: Zap,
      title: 'Hızlı ve Akıcı',
      description: 'Optimize edilmiş performans ile sorunsuz deneyim',
    },
    {
      icon: Shield,
      title: 'Güvenli',
      description: 'Verileriniz şifrelenmiş ve güvende',
    },
    {
      icon: Star,
      title: 'Kullanıcı Dostu',
      description: 'Sezgisel arayüz ile kolay kullanım',
    },
  ];

  const requirements = {
    ios: {
      title: 'iOS Gereksinimleri',
      items: [
        'iOS 14.0 veya üzeri',
        'iPhone, iPad ve iPod touch uyumlu',
        'Minimum 150 MB boş alan',
        'İnternet bağlantısı',
      ],
    },
    android: {
      title: 'Android Gereksinimleri',
      items: [
        'Android 6.0 (Marshmallow) veya üzeri',
        'Minimum 150 MB boş alan',
        'Google Play Hizmetleri',
        'İnternet bağlantısı',
      ],
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 text-sm font-medium">
                📱 Ücretsiz İndir
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              GetmeCoach&apos;u{' '}
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Hemen İndir
              </span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              iOS ve Android cihazlarda kullanılabilen GetmeCoach uygulaması ile 
              hayatını dönüştürecek koçu cebinde taşı!
            </p>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href={SITE_CONFIG.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center">
                  <Apple className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-dark-600">Download on the</div>
                  <div className="text-xl font-bold">App Store</div>
                </div>
              </a>

              <a
                href={SITE_CONFIG.links.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-4 bg-white text-dark-900 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                <div className="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center">
                  <PlayCircle className="w-7 h-7 text-white" />
                </div>
                <div className="text-left">
                  <div className="text-xs text-dark-600">GET IT ON</div>
                  <div className="text-xl font-bold">Google Play</div>
                </div>
              </a>
            </div>

            {/* QR Codes */}
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="p-8 bg-white rounded-3xl">
                <div className="w-48 h-48 mx-auto bg-dark-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-dark-400 text-sm">iOS QR Code</div>
                </div>
                <p className="text-dark-600 font-medium">iPhone için tara</p>
              </div>

              <div className="p-8 bg-white rounded-3xl">
                <div className="w-48 h-48 mx-auto bg-dark-100 rounded-2xl flex items-center justify-center mb-4">
                  <div className="text-dark-400 text-sm">Android QR Code</div>
                </div>
                <p className="text-dark-600 font-medium">Android için tara</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Neden GetmeCoach?
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Modern ve güçlü mobil deneyim
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-8 text-center bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-dark-200 dark:border-dark-700"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Sistem Gereksinimleri
            </h2>
            <p className="text-xl text-dark-300">
              Cihazınızın uyumlu olduğundan emin olun
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="p-8 bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-700">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6">
                <Apple className="w-8 h-8 text-dark-900" />
              </div>
              <h3 className="text-2xl font-bold mb-6">{requirements.ios.title}</h3>
              <ul className="space-y-3">
                {requirements.ios.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Download className="w-4 h-4 text-primary-400" />
                    </div>
                    <span className="text-dark-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-700">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-2xl mb-6">
                <PlayCircle className="w-8 h-8 text-dark-900" />
              </div>
              <h3 className="text-2xl font-bold mb-6">{requirements.android.title}</h3>
              <ul className="space-y-3">
                {requirements.android.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Download className="w-4 h-4 text-primary-400" />
                    </div>
                    <span className="text-dark-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Version Info */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Smartphone className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Güncel Sürüm Bilgileri
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-dark-50 dark:bg-dark-800 rounded-2xl">
                <div className="text-sm text-dark-600 dark:text-dark-400 mb-1">iOS Sürümü</div>
                <div className="text-2xl font-bold text-dark-900 dark:text-white">v2.4.1</div>
              </div>
              <div className="p-6 bg-dark-50 dark:bg-dark-800 rounded-2xl">
                <div className="text-sm text-dark-600 dark:text-dark-400 mb-1">Android Sürümü</div>
                <div className="text-2xl font-bold text-dark-900 dark:text-white">v2.4.0</div>
              </div>
            </div>
            <p className="text-dark-600 dark:text-dark-400">
              Son güncelleme: 15 Haziran 2024
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
