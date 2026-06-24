import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog | GetMeCoach',
  description: 'Koçluk, kişisel gelişim, fitness ve yaşam tarzı hakkında en güncel içerikler.',
};

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      slug: 'kocluk-nedir',
      title: 'Koçluk Nedir ve Neden İhtiyaç Duyarız?',
      excerpt: 'Koçluk, bireylerin potansiyellerini keşfetmelerine ve hedeflerine ulaşmalarına yardımcı olan güçlü bir gelişim aracıdır.',
      category: 'Koçluk',
      author: 'GetMeCoach Ekibi',
      date: '15 Haziran 2026',
      readTime: '5 dk',
      image: '/blog/coaching-basics.jpg',
    },
    {
      id: 2,
      slug: 'dogru-koc-nasil-secilir',
      title: 'Doğru Koç Nasıl Seçilir? 7 Altın Kural',
      excerpt: 'Size uygun koçu seçerken dikkat etmeniz gereken kritik noktalar ve ipuçları.',
      category: 'Rehber',
      author: 'Ayşe Yılmaz',
      date: '12 Haziran 2026',
      readTime: '7 dk',
      image: '/blog/choose-coach.jpg',
    },
    {
      id: 3,
      slug: 'fitness-yolculuguna-baslarken',
      title: 'Fitness Yolculuğuna Başlarken Bilinmesi Gerekenler',
      excerpt: 'Fitness hedeflerinize ulaşmak için ilk adımları doğru atmak çok önemli. İşte kapsamlı rehberiniz.',
      category: 'Fitness',
      author: 'Mehmet Kaya',
      date: '10 Haziran 2026',
      readTime: '6 dk',
      image: '/blog/fitness-journey.jpg',
    },
    {
      id: 4,
      slug: 'saglikli-beslenme-ipuclari',
      title: 'Sağlıklı Beslenme İçin 10 Pratik İpucu',
      excerpt: 'Günlük yaşamınıza kolayca entegre edebileceğiniz beslenme alışkanlıkları.',
      category: 'Beslenme',
      author: 'Zeynep Demir',
      date: '8 Haziran 2026',
      readTime: '4 dk',
      image: '/blog/nutrition-tips.jpg',
    },
    {
      id: 5,
      slug: 'kariyer-hedefleri-belirleme',
      title: 'Kariyer Hedefleri Nasıl Belirlenir?',
      excerpt: 'Profesyonel yaşamınızda başarılı olmak için net hedefler belirleyin ve planlayın.',
      category: 'Kariyer',
      author: 'Can Öztürk',
      date: '5 Haziran 2026',
      readTime: '8 dk',
      image: '/blog/career-goals.jpg',
    },
    {
      id: 6,
      slug: 'mental-sagligi-guclendir',
      title: 'Mental Sağlığınızı Güçlendirmenin Yolları',
      excerpt: 'Zihinsel sağlığınızı korumak ve geliştirmek için uygulanabilir stratejiler.',
      category: 'Mental',
      author: 'Elif Arslan',
      date: '3 Haziran 2026',
      readTime: '6 dk',
      image: '/blog/mental-health.jpg',
    },
  ];

  const categories = ['Tümü', 'Koçluk', 'Fitness', 'Beslenme', 'Kariyer', 'Mental', 'Rehber'];

  return (
    <div className="min-h-screen bg-white dark:bg-dark-950">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-full mb-6">
              <span className="text-primary-400 text-sm font-medium">
                Blog
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              İlham Veren İçerikler
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              Koçluk, kişisel gelişim ve yaşam tarzı hakkında en güncel yazılar
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white dark:bg-dark-900 sticky top-20 z-40 border-b border-dark-200 dark:border-dark-800">
        <div className="container-custom">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full whitespace-nowrap font-medium transition-all ${
                  category === 'Tümü'
                    ? 'bg-primary-600 text-white'
                    : 'bg-dark-100 dark:bg-dark-800 text-dark-700 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white dark:bg-dark-800 rounded-3xl border border-dark-200 dark:border-dark-700 overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 transition-all hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-video bg-gradient-to-br from-dark-100 to-dark-200 dark:from-dark-700 dark:to-dark-800 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-dark-400 dark:text-dark-600">
                    <span className="text-sm">Blog Görseli</span>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-primary-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-400 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-dark-500 dark:text-dark-500 mb-4">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-dark-500" />
                      <span className="text-sm text-dark-600 dark:text-dark-400">{post.author}</span>
                    </div>
                    
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex items-center gap-1 text-primary-600 dark:text-primary-400 font-medium hover:gap-2 transition-all"
                    >
                      <span className="text-sm">Devamı</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-dark-900 dark:bg-white text-white dark:text-dark-900 font-semibold rounded-xl hover:scale-105 transition-transform">
              Daha Fazla Yükle
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Yeni İçeriklerden Haberdar Ol
            </h2>
            <p className="text-dark-300 text-lg mb-8">
              Blog yazılarımızı e-posta ile takip et, hiçbir içeriği kaçırma
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="E-posta adresin"
                className="flex-1 px-6 py-4 bg-dark-800 border border-dark-700 rounded-xl text-white placeholder:text-dark-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all hover:shadow-xl"
              >
                Abone Ol
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
