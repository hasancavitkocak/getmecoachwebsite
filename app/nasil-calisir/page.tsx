import { Metadata } from 'next';
import { Search, MessageCircle, Target, UserCheck, FileCheck, Sparkles, ArrowRight } from 'lucide-react';
import CTABanner from '@/components/marketing/CTABanner';
import PhoneMockup from '@/components/marketing/PhoneMockup';

export const metadata: Metadata = {
  title: 'Nasıl Çalışır? | GetMeCoach',
  description: 'GetMeCoach ile koçunu bulmak ve hedeflerine ulaşmak çok kolay. 3 basit adımda başla!',
};

export default function HowItWorksPage() {
  const userSteps = [
    {
      icon: Search,
      title: 'Keşfet ve Ara',
      description: 'İhtiyacına uygun kategoriyi seç, konumuna göre yakınındaki koçları keşfet veya detaylı filtrelerle tam aradığını bul.',
      details: [
        'Kategori, uzmanlık ve konum bazlı arama',
        'Sertifikalı koç filtreleme',
        'Online veya yüz yüze seçenekleri',
        'Kullanıcı değerlendirmeleri',
      ],
      image: '/screenshots/search.png',
    },
    {
      icon: MessageCircle,
      title: 'İletişime Geç',
      description: 'Beğendiğin koçla gerçek zamanlı mesajlaş, sorularını sor, çalışma planını konuş ve sürecini netleştir.',
      details: [
        'Anlık mesajlaşma sistemi',
        'Koçun iş deneyimini ve sertifikalarını gör',
        'Çalışma saatleri ve ücretlendirmeyi öğren',
        'İlk görüşme randevunu al',
      ],
      image: '/screenshots/messaging.png',
    },
    {
      icon: Target,
      title: 'Hedeflerine Ulaş',
      description: 'Koçunla düzenli çalış, gelişimini takip et, motivasyonunu yüksek tut ve başarıya ulaş.',
      details: [
        'Kişiselleştirilmiş çalışma programı',
        'İlerleme takibi',
        'Koçunun paylaşımlarını takip et',
        'Topluluktan motivasyon al',
      ],
      image: '/screenshots/progress.png',
    },
  ];

  const coachSteps = [
    {
      icon: FileCheck,
      title: 'Başvuru Yap',
      description: 'Basit başvuru formunu doldur, sertifikalarını yükle, uzmanlık alanlarını belirt.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: UserCheck,
      title: 'Onay Al',
      description: 'Ekibimiz sertifikalarını doğrular, profilini inceler ve 48 saat içinde onaylar.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Sparkles,
      title: 'Profil Oluştur',
      description: 'Detaylı profilini oluştur, galeri ekle, uzmanlıklarını sergile ve müşteri kazanmaya başla.',
      color: 'from-primary-500 to-green-500',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 text-sm font-medium">
                🎯 Basit ve Etkili
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              GetMeCoach Nasıl Çalışır?
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              İster kullanıcı ister koç ol, GetMeCoach&apos;ta başlamak çok kolay.
              İşte adım adım rehberin.
            </p>
          </div>
        </div>
      </section>

      {/* User Journey */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Kullanıcı Olarak Başla
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              3 basit adımda hayatını dönüştürecek koçu bul
            </p>
          </div>

          <div className="space-y-24">
            {userSteps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-6xl font-bold text-dark-200 dark:text-dark-800">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-lg text-dark-600 dark:text-dark-400 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <ArrowRight className="w-4 h-4 text-primary-600" />
                        </div>
                        <span className="text-dark-700 dark:text-dark-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image / Phone Mockup */}
                <div className="flex-1 flex justify-center w-full">
                  <PhoneMockup image={step.image} title={step.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coach Journey */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Koç Olarak Katıl
            </h2>
            <p className="text-xl text-dark-300">
              Uzmanlığını sergile, geniş kitleye ulaş, kazanmaya başla
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {coachSteps.map((step, index) => (
              <div key={step.title} className="text-center">
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br ${step.color} rounded-3xl shadow-2xl`}>
                    <step.icon className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-dark-900 font-bold text-lg">{index + 1}</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-dark-300 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/koc-basvuru"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
            >
              Koç Başvurusu Yap
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
