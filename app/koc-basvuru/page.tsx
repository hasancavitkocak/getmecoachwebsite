import { Metadata } from 'next';
import { Smartphone, Apple, PlayCircle, CheckCircle, ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/lib/constants';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Koç Başvurusu | GetMeCoach',
  description: 'GetMeCoach\'ta koç olarak yer almak için mobil uygulamadan başvurun.',
};

export default function CoachApplicationPage() {
  const steps = [
    {
      number: '1',
      title: 'Uygulamayı İndir',
      description: 'iOS veya Android cihazınıza GetMeCoach uygulamasını indirin',
    },
    {
      number: '2',
      title: 'Koç Olarak Kayıt Ol',
      description: 'Uygulamada "Koç Ol" seçeneğini seçerek hemen kayıt olun',
    },
    {
      number: '3',
      title: 'Profilini Oluştur',
      description: 'Uzmanlık alanını seç, açıklama yaz ve fotoğraflarını ekle',
    },
    {
      number: '4',
      title: 'Sertifika Yükle (İsteğe Bağlı)',
      description: 'Sertifika yüklerseniz "Onaylı Profil" rozeti kazanırsınız',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 text-sm font-medium">
                Koç Olarak Kayıt
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Koç Olarak Kayıt{' '}
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Herkese Açık
              </span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              GetMeCoach ailesine katılmak için mobil uygulamayı indirin ve
              hemen kayıt olun! Onay süreci yok, herkes koç olabilir.
            </p>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Info */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                  <Smartphone className="w-4 h-4 text-primary-600" />
                  <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    Sadece Mobil Uygulamada
                  </span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                  Neden Uygulamadan Başvuru?
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    'Herkes koç olarak kayıt olabilir',
                    'Sertifika yükleme isteğe bağlıdır',
                    'Sertifika yüklerseniz "Onaylı Profil" rozeti alırsınız',
                    'Profil oluşturduktan hemen sonra aktif olur',
                    'Premium üyelikle aramada görünür olursunuz',
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                      <span className="text-dark-700 dark:text-dark-300">{benefit}</span>
                    </div>
                  ))}
                </div>

                {/* Download Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={SITE_CONFIG.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <Apple className="w-7 h-7" />
                    <div className="text-left">
                      <div className="text-xs opacity-70">Download on the</div>
                      <div className="text-lg font-bold">App Store</div>
                    </div>
                  </a>

                  <a
                    href={SITE_CONFIG.links.googlePlay}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 bg-dark-900 dark:bg-white text-white dark:text-dark-900 rounded-2xl hover:shadow-xl hover:scale-105 transition-all"
                  >
                    <PlayCircle className="w-7 h-7" />
                    <div className="text-left">
                      <div className="text-xs opacity-70">GET IT ON</div>
                      <div className="text-lg font-bold">Google Play</div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Right - Phone Mockup */}
              <div className="relative">
                <div className="relative mx-auto w-[340px] h-[700px] bg-dark-800 rounded-[3rem] p-4 shadow-2xl border-8 border-dark-900">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-dark-900 rounded-b-3xl z-20" />
                  
                  {/* Screen */}
                  <div className="relative w-full h-full bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-[2.5rem] overflow-hidden flex items-center justify-center">
                    <div className="text-dark-400 dark:text-dark-600 text-center p-8">
                      <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <p className="text-sm">Koç başvuru ekranı</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-4 text-center">
              Başvuru Adımları
            </h2>
            <p className="text-center text-dark-600 dark:text-dark-400 mb-12">
              4 basit adımda GetMeCoach koçu olun
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="relative p-8 bg-white dark:bg-dark-800 rounded-2xl border border-dark-200 dark:border-dark-700 hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold text-xl">{step.number}</span>
                  </div>
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 mt-2">
                    {step.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 bg-gradient-to-br from-primary-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-primary-200 dark:border-dark-700">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                Daha Fazla Bilgi İçin
              </h3>
              <p className="text-dark-600 dark:text-dark-400 mb-6">
                Koç olmak hakkında detaylı bilgi almak, premium üyelik avantajlarını
                öğrenmek ve başarı hikayelerini okumak için aşağıdaki sayfayı ziyaret edin.
              </p>
              <Link
                href="/koclar-icin"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all"
              >
                Koçlar İçin Sayfasına Git
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
