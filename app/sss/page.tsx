import { Metadata } from 'next';
import { ChevronDown } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sık Sorulan Sorular | GetMeCoach',
  description: 'GetMeCoach hakkında merak ettiğiniz her şey. Kullanıcılar ve koçlar için sık sorulan sorular.',
};

export default function FAQPage() {
  const userFAQs = [
    {
      question: 'GetMeCoach nedir?',
      answer: 'GetMeCoach, Türkiye\'nin en kapsamlı koçluk platformudur. Fitness, mental, beslenme, kariyer, spor ve eğitim alanlarında uzman, doğrulanmış koçlarla buluşmanızı sağlar.',
    },
    {
      question: 'Uygulama ücretsiz mi?',
      answer: 'Evet, uygulamayı indirmek ve temel özellikleri kullanmak tamamen ücretsizdir. Koçlarla mesajlaşmak ve anlaşmak için uygulamayı kullanabilirsiniz.',
    },
    {
      question: 'Koçlar nasıl doğrulanıyor?',
      answer: 'Herkes koç olabilir ancak platformda görünür olmak için sertifika gereklidir. Tüm koçların sertifikaları ekibimiz tarafından manuel olarak incelenir ve doğrulanır.',
    },
    {
      question: 'Hangi şehirlerde hizmet veriyorsunuz?',
      answer: 'Türkiye\'nin 81 ilinde koçlarımız bulunmaktadır. Ayrıca online koçluk hizmeti veren koçlarla her yerden çalışabilirsiniz.',
    },
    {
      question: 'Online koçluk nasıl çalışır?',
      answer: 'Online koçluk seçeneğini işaretleyen koçlar, video görüşme veya mesajlaşma yoluyla size hizmet verebilir. Böylece coğrafi kısıtlama olmadan istediğiniz koçla çalışabilirsiniz.',
    },
    {
      question: 'Koçumla nasıl iletişime geçerim?',
      answer: 'Uygulamadaki gerçek zamanlı mesajlaşma sistemi ile koçunuzla anında iletişime geçebilir, seans planı yapabilir ve sorularınızı sorabilirsiniz.',
    },
    {
      question: 'Ödeme nasıl yapılır?',
      answer: 'Ödemeler koç ile aranızda kalan bir anlaşmadır. Platform üzerinden mesajlaşıp anlaştıktan sonra, ödeme detaylarını koçunuzla görüşürsünüz.',
    },
    {
      question: 'Koçumu değiştirebilir miyim?',
      answer: 'Evet, istediğiniz zaman farklı koçlarla çalışabilirsiniz. Platform üzerinde binlerce koç arasından size en uygun olanı seçme özgürlüğünüz vardır.',
    },
    {
      question: 'Gizliliğim korunuyor mu?',
      answer: 'Evet, tüm verileriniz şifrelenmiş olarak saklanır ve KVKK uyumlu şekilde işlenir. Kişisel bilgileriniz asla üçüncü şahıslarla paylaşılmaz.',
    },
    {
      question: 'Birden fazla koçla çalışabilir miyim?',
      answer: 'Evet, farklı kategorilerde veya aynı kategoride birden fazla koçla aynı anda çalışabilirsiniz. Örneğin hem fitness hem de beslenme koçuyla çalışabilirsiniz.',
    },
    {
      question: 'Push bildirimleri nasıl yönetilir?',
      answer: 'Uygulama ayarlarından hangi bildirimlerden almak istediğinizi seçebilirsiniz. Mesaj, takip ve yorum bildirimleri için ayrı ayrı ayar yapabilirsiniz.',
    },
  ];

  const coachFAQs = [
    {
      question: 'GetMeCoach\'ta koç olarak nasıl başlarım?',
      answer: 'Mobil uygulamayı indirin ve "Koç Ol" seçeneğini seçerek giriş yapın. Profilinizi oluşturun ve görünür olmak için sertifikalarınızı yükleyin.',
    },
    {
      question: 'Sertifika zorunlu mu?',
      answer: 'Herkes koç olarak kayıt olabilir, ancak platformda görünür olmak ve müşteri kazanmak için sertifika doğrulaması gereklidir.',
    },
    {
      question: 'Hangi sertifikalar kabul ediliyor?',
      answer: 'Alanınızla ilgili resmi kurumlar veya tanınmış eğitim kuruluşları tarafından verilmiş sertifikalar kabul edilir. Fitness, beslenme, psikoloji, coaching gibi alanlarda uluslararası veya ulusal sertifikalar geçerlidir.',
    },
    {
      question: 'Premium üyelik ne sağlar?',
      answer: 'Premium üyelikle aramalarda öne çıkarsınız ve daha fazla görünürlük elde edersiniz. Şu anda premium üyelik ücretsizdir, ilerleyen zamanlarda ücretli olacaktır.',
    },
    {
      question: 'Premium üyelik ücreti nedir?',
      answer: 'Şu anda premium üyelik tamamen ücretsizdir. İlerleyen dönemlerde ücretli hale gelecek ve önceden duyuru yapılacaktır.',
    },
    {
      question: 'Platformdan komisyon kesiliyor mu?',
      answer: 'Hayır, ödemeler sizinle müşteriniz arasındadır. Platform sadece buluşma noktasıdır, ödeme sürecine müdahale etmez.',
    },
    {
      question: 'Kaç müşteri kazanabilirim?',
      answer: 'Müşteri sayısı tamamen sizin profilinizin kalitesine, uzmanlığınıza ve aktif olmanıza bağlıdır. Premium üyeler ortalama 3x daha fazla görünürlük elde eder.',
    },
    {
      question: 'Online ve yüz yüze seçeneğini nasıl ayarlarım?',
      answer: 'Profil ayarlarınızdan online ders verip vermediğinizi, hangi bölgelerde yüz yüze hizmet verdiğinizi belirtebilirsiniz.',
    },
    {
      question: 'Mesajlaşma sistemi nasıl çalışır?',
      answer: 'Kullanıcılar size direkt olarak mesaj atabilir. Gerçek zamanlı bildirim alır ve anında yanıt verebilirsiniz. Tüm görüşmeler platformda kayıt altındadır.',
    },
    {
      question: 'Sosyal paylaşım özellikleri nedir?',
      answer: 'Motivasyon içerikleri, egzersiz videoları, beslenme önerileri gibi paylaşımlar yapabilirsiniz. Takipçi kazanabilir, beğeni ve yorum alabilirsiniz.',
    },
    {
      question: 'Galeri ne için kullanılır?',
      answer: 'Çalışma ortamınızı, sertifikalarınızı, başarı hikayelerinizi ve referans fotoğraflarınızı galeriye ekleyerek güvenilirliğinizi artırabilirsiniz.',
    },
    {
      question: 'Profilimi nasıl öne çıkarabilirim?',
      answer: 'Düzenli içerik paylaşın, profil bilgilerinizi eksiksiz doldurun, hızlı yanıt verin. Premium üyelik de büyük avantaj sağlar.',
    },
    {
      question: 'Hesabımı iptal edebilir miyim?',
      answer: 'Evet, istediğiniz zaman hesabınızı silebilirsiniz. Premium üyeliğiniz varsa iptal ettikten sonra otomatik yenilenmez.',
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
                Sık Sorulan Sorular
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Size Nasıl Yardımcı Olabiliriz?
            </h1>
            <p className="text-xl text-dark-300 leading-relaxed">
              GetMeCoach hakkında merak ettiğiniz her şeyin cevabı burada
            </p>
          </div>
        </div>
      </section>

      {/* User FAQs */}
      <section className="py-24">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-4 text-center">
              Kullanıcılar İçin
            </h2>
            <p className="text-center text-dark-600 dark:text-dark-400 mb-12">
              Koç arayanlar için sık sorulan sorular
            </p>

            <div className="space-y-4">
              {userFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white dark:bg-dark-800 rounded-2xl border border-dark-200 dark:border-dark-700 overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-dark-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coach FAQs */}
      <section className="py-24 bg-dark-50 dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 dark:text-white mb-4 text-center">
              Koçlar İçin
            </h2>
            <p className="text-center text-dark-600 dark:text-dark-400 mb-12">
              Platformda koç olarak yer almak isteyenler için
            </p>

            <div className="space-y-4">
              {coachFAQs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white dark:bg-dark-800 rounded-2xl border border-dark-200 dark:border-dark-700 overflow-hidden hover:border-primary-500 dark:hover:border-primary-500 transition-colors"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <h3 className="text-lg font-semibold text-dark-900 dark:text-white pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-dark-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p className="text-dark-600 dark:text-dark-400 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Cevabını Bulamadın mı?
            </h2>
            <p className="text-xl text-dark-300 mb-8">
              Daha fazla soru için bizimle iletişime geçebilirsin
            </p>
            <a
              href="/iletisim"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all hover:shadow-xl hover:scale-105"
            >
              İletişime Geç
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
