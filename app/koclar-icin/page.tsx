import { Metadata } from 'next';
import Link from 'next/link';
import { 
  Users, 
  Sparkles, 
  MessageCircle, 
  Share2, 
  Zap, 
  Shield, 
  Check, 
  X, 
  ArrowRight,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react';
import { COACH_BENEFITS, PREMIUM_FEATURES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Koçlar İçin | GetMeCoach',
  description: 'GetMeCoach ile uzmanlığınızı sergileyin, geniş kullanıcı kitlesine ulaşın ve kazancınızı artırın.',
};

const iconMap: Record<string, any> = {
  users: Users,
  sparkles: Sparkles,
  'message-circle': MessageCircle,
  'share-2': Share2,
  zap: Zap,
  shield: Shield,
};

export default function CoachesPage() {
  const successStories = [
    {
      name: 'Ahmet Yıldız',
      category: 'Fitness Koçu',
      stat: '+450',
      label: 'Yeni Müşteri',
      quote: 'GetMeCoach sayesinde müşteri portföyüm 3 ayda 4 kat arttı.',
    },
    {
      name: 'Elif Kara',
      category: 'Yaşam Koçu',
      stat: '₺85K',
      label: 'Aylık Gelir',
      quote: 'Online seanslarla Türkiye geneline ulaşıyorum. Harika bir platform!',
    },
    {
      name: 'Murat Demir',
      category: 'Beslenme Uzmanı',
      stat: '4.9★',
      label: 'Ortalama Puan',
      quote: 'Sertifika doğrulama sistemi sayesinde müşterilerim güvenle seçim yapıyor.',
    },
  ];

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
                Koçlar İçin Özel
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Uzmanlığını Sergile,{' '}
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Kazancını Artır
              </span>
            </h1>
            
            <p className="text-xl text-dark-300 mb-8 leading-relaxed">
              Türkiye&apos;nin en büyük koçluk platformunda 156.000+ aktif kullanıcıya ulaş.
              Dijital görünürlüğünü artır, müşteri portföyünü büyüt.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/koc-basvuru"
                className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
              >
                Hemen Başvur
              </Link>
              <Link
                href="#premium"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 transition-all"
              >
                Premium Özellikler
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-1">10.320</div>
                <div className="text-sm text-dark-400">Aktif Koç</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-1">156K+</div>
                <div className="text-sm text-dark-400">Kullanıcı</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary-400 mb-1">428K+</div>
                <div className="text-sm text-dark-400">Tamamlanan Seans</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Neden GetMeCoach?
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Platform koçlar için özel olarak tasarlandı
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COACH_BENEFITS.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              
              return (
                <div
                  key={benefit.title}
                  className="p-8 bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-dark-200 dark:border-dark-700 hover:border-primary-500 transition-all"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 mb-6">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section id="premium" className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Premium Üyelik
            </h2>
            <p className="text-xl text-dark-300 max-w-3xl mx-auto">
              Şimdilik ücretsiz! Premium olmadan aramada görünmezsiniz. 
              Premium üyeler aramada çıkar ve kullanıcılar tarafından bulunabilir.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Premium Card */}
            <div className="p-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-4 right-4 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                <span className="text-sm font-semibold">Şimdilik Ücretsiz</span>
              </div>

              <div className="text-center mb-10">
                <h3 className="text-3xl font-bold mb-3">Premium</h3>
                <div className="text-6xl font-bold mb-3">₺0</div>
                <p className="text-white/80 text-lg">İlerleyen zamanda ücretli olacak</p>
              </div>

              <div className="mb-10">
                <h4 className="text-xl font-semibold mb-6 text-center">Premium ile neler kazanırsın?</h4>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-white text-lg font-semibold block">Aramalarda görünürlük</span>
                      <span className="text-white/70 text-sm">Premium olmadan profil aramalarda çıkmaz</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-lg">Öncelikli listeleme ve öne çıkma</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-lg">Genişletilmiş galeri (20 fotoğraf)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-lg">Öncelikli destek</span>
                  </li>
                </ul>
              </div>

              <Link
                href="/indir"
                className="block w-full py-5 text-center bg-white text-primary-600 font-bold text-lg rounded-2xl hover:bg-white/90 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Uygulamayı İndir ve Premium Aktif Et
              </Link>

              <p className="text-center text-white/70 text-sm mt-6">
                * Şu anda ücretsiz. İlerleyen zamanda ücretli olacak ve önceden duyuru yapılacak.
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700">
                <h4 className="font-semibold mb-2 text-white">Aramalarda Çık</h4>
                <p className="text-sm text-dark-400">
                  Premium olmadan profil aramalarda görünmez
                </p>
              </div>
              <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700">
                <h4 className="font-semibold mb-2 text-white">Öncelikli Listeleme</h4>
                <p className="text-sm text-dark-400">
                  Arama sonuçlarında üst sıralarda yer alın
                </p>
              </div>
              <div className="text-center p-6 bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-dark-700">
                <h4 className="font-semibold mb-2 text-white">Genişletilmiş Galeri</h4>
                <p className="text-sm text-dark-400">
                  20 fotoğrafa kadar galeri oluşturabilirsiniz
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Başarı Hikayeleri
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Onların gibi sen de başarıya ulaş
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story) => (
              <div
                key={story.name}
                className="p-8 bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-dark-200 dark:border-dark-700"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-bold mb-6">
                  {story.name.charAt(0)}
                </div>

                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-1">
                  {story.name}
                </h3>
                <p className="text-sm text-primary-600 dark:text-primary-400 mb-6">
                  {story.category}
                </p>

                <div className="mb-6">
                  <div className="text-4xl font-bold text-dark-900 dark:text-white mb-1">
                    {story.stat}
                  </div>
                  <div className="text-sm text-dark-600 dark:text-dark-400">
                    {story.label}
                  </div>
                </div>

                <p className="text-dark-600 dark:text-dark-400 italic">
                  &quot;{story.quote}&quot;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Hazır mısın?
          </h2>
          <p className="text-xl text-dark-300 mb-8 max-w-2xl mx-auto">
            GetMeCoach ailesine katıl, uzmanlığını binlerce kişiyle paylaş
          </p>
          <Link
            href="/indir"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-dark-900 font-bold rounded-2xl hover:shadow-2xl hover:scale-105 transition-all"
          >
            Uygulamayı İndir ve Üye Ol
            <ArrowRight className="w-5 h-5" />
          </Link>

          <p className="text-sm text-dark-400 mt-6">
            Uygulamayı indirin ve hemen koç üyesi olun
          </p>
        </div>
      </section>
    </div>
  );
}
