import { Metadata } from 'next';
import { Target, Heart, Users, Zap, Award, Globe } from 'lucide-react';
import CTABanner from '@/components/marketing/CTABanner';

export const metadata: Metadata = {
  title: 'Hakkımızda | GetMeCoach',
  description: 'GetMeCoach hikayesi, misyonumuz ve vizyonumuz. Türkiye\'nin en kapsamlı koçluk platformu.',
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'İnsana Değer',
      description: 'Her bireyin potansiyelini keşfetmesi ve hayallerine ulaşması için elimizden geleni yapıyoruz.',
    },
    {
      icon: Users,
      title: 'Topluluk',
      description: 'Koçlar ve kullanıcılar arasında güvenli, destekleyici bir topluluk oluşturuyoruz.',
    },
    {
      icon: Zap,
      title: 'İnovasyon',
      description: 'En son teknolojileri kullanarak koçluk deneyimini sürekli geliştiriyoruz.',
    },
    {
      icon: Award,
      title: 'Kalite',
      description: 'Sertifika doğrulama ve kullanıcı geri bildirimleriyle en yüksek kaliteyi garanti ediyoruz.',
    },
  ];

  const teamMembers = [
    {
      name: 'Ahmet Yılmaz',
      role: 'Kurucu & CEO',
      bio: '15 yıllık teknoloji ve girişimcilik deneyimi',
    },
    {
      name: 'Elif Demir',
      role: 'CTO',
      bio: 'Mobil uygulama geliştirme ve yapay zeka uzmanı',
    },
    {
      name: 'Can Öztürk',
      role: 'CPO',
      bio: 'Ürün tasarımı ve kullanıcı deneyimi lideri',
    },
    {
      name: 'Zeynep Kaya',
      role: 'CMO',
      bio: 'Dijital pazarlama ve marka stratejisi uzmanı',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Hayatları{' '}
              <span className="bg-gradient-to-r from-primary-400 to-purple-400 bg-clip-text text-transparent">
                Dönüştürüyoruz
              </span>
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              GetMeCoach, insanların potansiyellerini keşfetmelerine ve hedeflerine ulaşmalarına 
              yardımcı olmak için kuruldu. Türkiye&apos;nin en kapsamlı koçluk platformu olma yolunda 
              her gün büyüyoruz.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
                <span className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                  Hikayemiz
                </span>
              </div>
              <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-6">
                Bir Fikir, Bir Platform, Binlerce Değişim
              </h2>
              <div className="space-y-4 text-dark-600 dark:text-dark-400 leading-relaxed">
                <p>
                  GetMeCoach, 2022 yılında bir grup tutkulu girişimci tarafından kuruldu. 
                  Amacımız basitti: Kaliteli koçluk hizmetlerini herkes için erişilebilir kılmak.
                </p>
                <p>
                  Türkiye&apos;de koçluk sektörünün büyük bir potansiyele sahip olduğunu ama 
                  parçalı ve organize olmayan bir yapıda bulunduğunu fark ettik. İnsanlar 
                  doğru koçu bulmakta zorlanıyor, koçlar ise müşterilere ulaşmada sıkıntı yaşıyordu.
                </p>
                <p>
                  GetMeCoach, bu sorunu çözmek için doğdu. Bugün 10.000+ uzman koç ve 
                  156.000+ mutlu kullanıcıyla Türkiye&apos;nin en büyük koçluk platformuyuz.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-3xl flex items-center justify-center">
                <div className="text-dark-400 dark:text-dark-600 text-lg">Team Photo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="p-12 bg-gradient-to-br from-primary-500/10 to-transparent rounded-3xl border border-primary-500/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Misyonumuz</h3>
              <p className="text-dark-300 leading-relaxed">
                Bireyleri alanında uzman, doğrulanmış koçlarla buluşturarak, hayatlarının her 
                alanında hedeflerine ulaşmalarını sağlamak. Koçlara da dijital görünürlük ve 
                sürdürülebilir bir müşteri akışı sağlamak.
              </p>
            </div>

            <div className="p-12 bg-gradient-to-br from-purple-500/10 to-transparent rounded-3xl border border-purple-500/20">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-500 rounded-2xl mb-6">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Vizyonumuz</h3>
              <p className="text-dark-300 leading-relaxed">
                Türkiye&apos;de koçluk kültürünü yaygınlaştırarak, milyonlarca insanın yaşam 
                kalitesini artırmak. Bölgenin en güvenilir ve kapsamlı koçluk platformu olmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Değerlerimiz
            </h2>
            <p className="text-xl text-dark-600 dark:text-dark-400">
              Bizi biz yapan prensipler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="p-8 text-center bg-gradient-to-br from-dark-50 to-white dark:from-dark-800 dark:to-dark-900 rounded-3xl border border-dark-200 dark:border-dark-700"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Ekibimiz
            </h2>
            <p className="text-xl text-dark-300">
              GetMeCoach&apos;u hayata geçiren tutkulu insanlar
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="p-8 text-center bg-dark-800/50 backdrop-blur-sm rounded-3xl border border-dark-700"
              >
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-400 text-sm mb-3">{member.role}</p>
                <p className="text-dark-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-white dark:bg-dark-950">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '10.320', label: 'Uzman Koç' },
              { value: '156.000+', label: 'Aktif Kullanıcı' },
              { value: '428.000+', label: 'Tamamlanan Seans' },
              { value: '81', label: 'Şehirde Hizmet' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-8">
                <div className="text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-dark-600 dark:text-dark-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner />
    </div>
  );
}
