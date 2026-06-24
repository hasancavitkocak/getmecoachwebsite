import { Metadata } from 'next';
import { Mail, MapPin, Globe, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'İletişim | GetMeCoach',
  description: 'GetMeCoach ile iletişime geçin. Sorularınız için bize ulaşın.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-dark-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 text-sm font-medium">
                Bize Ulaşın
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              İletişim
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Sorularınız, önerileriniz veya geri bildirimleriniz için bizimle iletişime geçin.
              Size en kısa sürede dönüş yapacağız.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-8">
                İletişim Bilgileri
              </h2>

              <div className="space-y-6">
                {/* Email */}
                <a
                  href={`mailto:${SITE_CONFIG.contact.email}`}
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-2xl border border-primary-200 dark:border-dark-700 hover:border-primary-400 dark:hover:border-primary-600 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
                      E-posta
                    </h3>
                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                      {SITE_CONFIG.contact.email}
                    </p>
                    <p className="text-sm text-dark-600 dark:text-dark-400 mt-2">
                      Genel sorularınız ve destek için
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-2xl border border-dark-200 dark:border-dark-700">
                  <div className="w-12 h-12 bg-dark-700 dark:bg-dark-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
                      Adres
                    </h3>
                    <p className="text-dark-700 dark:text-dark-300">
                      {SITE_CONFIG.contact.address}
                    </p>
                  </div>
                </div>

                {/* Social */}
                <a
                  href={SITE_CONFIG.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-2xl border border-purple-200 dark:border-dark-700 hover:border-purple-400 dark:hover:border-purple-600 transition-all group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-1">
                      Instagram
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">
                      @getmecoachapp
                    </p>
                    <p className="text-sm text-dark-600 dark:text-dark-400 mt-2">
                      Bizi sosyal medyada takip edin
                    </p>
                  </div>
                </a>
              </div>

              {/* Info Box */}
              <div className="mt-8 p-6 bg-primary-500/10 border border-primary-500/20 rounded-2xl">
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">
                  💡 Hızlı Yanıt
                </h3>
                <p className="text-dark-600 dark:text-dark-400 text-sm leading-relaxed">
                  Çalışma saatlerimiz içinde (Pazartesi-Cuma, 09:00-18:00) gönderilen 
                  e-postalara genellikle 2-4 saat içinde yanıt veriyoruz.
                </p>
              </div>
            </div>

            {/* Quick Message Box */}
            <div className="lg:sticky lg:top-24">
              <div className="p-8 bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-dark-200 dark:border-dark-700 shadow-xl">
                <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                  Hızlı Mesaj
                </h2>
                <p className="text-dark-600 dark:text-dark-400 mb-6">
                  Aşağıdaki butona tıklayarak e-posta programınızdan bize mesaj gönderebilirsiniz.
                </p>

                <a
                  href={`mailto:${SITE_CONFIG.contact.email}?subject=GetMeCoach Hakkında Soru&body=Merhaba GetMeCoach Ekibi,%0D%0A%0D%0A`}
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl hover:shadow-2xl hover:scale-105 transition-all"
                >
                  <Send className="w-5 h-5" />
                  E-posta Gönder
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-dark-300 text-lg">
              Aradığınız cevap burada olabilir
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                question: 'Uygulama ücretsiz mi?',
                answer: 'Evet, uygulamayı indirmek ve temel özellikleri kullanmak ücretsizdir.',
              },
              {
                question: 'Koçlar nasıl doğrulanıyor?',
                answer: 'Tüm koçların sertifikaları ekibimiz tarafından manuel olarak incelenir.',
              },
              {
                question: 'Hangi şehirlerde hizmet veriyorsunuz?',
                answer: 'Türkiye\'nin 81 ilinde koçlarımız bulunmaktadır.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-dark-800 rounded-2xl border border-dark-700 hover:border-primary-600 transition-colors"
              >
                <h3 className="font-semibold mb-2">{faq.question}</h3>
                <p className="text-sm text-dark-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="/sss"
              className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-medium transition-colors"
            >
              Tüm Soruları Gör
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
