import { Metadata } from 'next';
import LegalPageLayout from '@/components/legal/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Çerez Politikası | GetMeCoach',
  description: 'GetMeCoach çerez politikası ve çerez kullanımı hakkında bilgiler.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      turkishTitle="Çerez Politikası"
      turkishContent={
        <>
          <p>
            GetMeCoach olarak web sitemizde ve platformumuzda kullanıcı deneyimini geliştirmek amacıyla çerezler kullanmaktayız. 
            Bu Çerez Politikası; hangi çerezlerin ne amaçla kullanıldığını ve bunları nasıl kontrol edebileceğinizi açıklamaktadır.
          </p>

          <h2>1. Çerez Nedir?</h2>
          <p>
            Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza (bilgisayar, tablet, telefon) 
            kaydedilen küçük metin dosyalarıdır. Çerezler, web sitesinin daha verimli çalışmasını, tercihlerinize göre 
            kişiselleştirilmesini ve analiz yapılmasını sağlar.
          </p>

          <h2>2. Çerez Türleri</h2>
          
          <h3>2.1 Zorunlu Çerezler</h3>
          <p>
            Bu çerezler, web sitesinin düzgün çalışması, güvenlik ve temel işlevlerin yerine getirilmesi için zorunludur. 
            Devre dışı bırakılamazlar (örneğin; oturum yönetimi, gizlilik tercihleri kaydı).
          </p>

          <h3>2.2 İşlevsellik Çerezleri</h3>
          <p>
            Bu çerezler, dil seçimi, tema tercihi veya kullanıcı adı gibi seçimlerinizi hatırlayarak sonraki ziyaretlerinizde 
            daha kişiselleştirilmiş bir deneyim sunmamızı sağlar.
          </p>

          <h3>2.3 Performans ve Analiz Çerezleri</h3>
          <p>
            Web sitemizi kaç kişinin ziyaret ettiğini, hangi sayfaların daha çok tıklandığını ve kullanıcıların sitede nasıl 
            gezindiğini anlamak için anonim veriler toplar. Bu verileri sitemizi geliştirmek için kullanırız.
          </p>

          <h3>2.4 Reklam ve Hedefleme Çerezleri</h3>
          <p>
            İlgi alanlarınıza uygun içerik ve reklamlar sunmak, reklam kampanyalarının etkililiğini ölçmek amacıyla üçüncü taraf 
            reklam ağları tarafından yerleştirilen çerezlerdir.
          </p>

          <h2>3. Kullanılan Çerezler</h2>
          <table>
            <thead>
              <tr>
                <th>Çerez Adı</th>
                <th>Türü</th>
                <th>Amacı</th>
                <th>Süresi</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>session_id</td>
                <td>Zorunlu</td>
                <td>Güvenli kullanıcı oturumu yönetimi</td>
                <td>Oturum Süresi</td>
              </tr>
              <tr>
                <td>user_pref</td>
                <td>İşlevsellik</td>
                <td>Kullanıcı dili ve tema tercihleri</td>
                <td>1 Yıl</td>
              </tr>
              <tr>
                <td>analytics_id</td>
                <td>Performans</td>
                <td>Google Analytics site trafik analizi</td>
                <td>2 Yıl</td>
              </tr>
              <tr>
                <td>lang</td>
                <td>İşlevsellik</td>
                <td>Dil tercihi kaydı</td>
                <td>1 Yıl</td>
              </tr>
            </tbody>
          </table>

          <h2>4. Üçüncü Taraf Çerezleri</h2>
          <p>
            Web sitemizde ve uygulamamızda aşağıdaki üçüncü taraf hizmet sağlayıcılar kendi politikaları çerçevesinde çerez kullanabilir:
          </p>

          <h3>4.1 Google Analytics</h3>
          <p>
            Web sitemizdeki trafiği, sayfaların tıklanma oranlarını ve genel kullanıcı davranışlarını anonim olarak analiz etmek için 
            Google Analytics altyapısını kullanmaktayız.
          </p>

          <h3>4.2 Sosyal Medya Entegrasyonları</h3>
          <p>
            Instagram, LinkedIn veya YouTube gibi sosyal medya platformlarının widget'ları veya eklentileri aracılığıyla ilgili 
            platformlar kendi çerezlerini cihazınıza yerleştirebilir.
          </p>

          <h2>5. Çerezleri Nasıl Yönetebilirsiniz?</h2>
          
          <h3>5.1 Tarayıcı Ayarları ile Çerez Yönetimi</h3>
          <p>
            Birçok tarayıcı çerezleri varsayılan olarak kabul eder. Dilediğiniz zaman tarayıcı ayarlarınızdan çerezleri engelleyebilir, 
            sınırlandırabilir ya da kayıtlı çerezleri tamamen silebilirsiniz:
          </p>
          <ul>
            <li><strong>Google Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Diğer Site Verileri</li>
            <li><strong>Mozilla Firefox:</strong> Seçenekler → Gizlilik ve Güvenlik → Çerezler ve Site Verileri</li>
            <li><strong>Apple Safari:</strong> Tercihler → Gizlilik → Çerezler ve Web Sitesi Verileri</li>
            <li><strong>Microsoft Edge:</strong> Ayarlar → Site İzinleri → Çerezler ve Site Verileri</li>
          </ul>

          <h3>5.2 Çerezleri Devre Dışı Bırakmanın Sonuçları</h3>
          <p>
            Zorunlu olmayan çerezleri dilediğiniz zaman reddedebilirsiniz. Ancak çerezleri tamamen engellediğinizde web sitesinin 
            bazı gelişmiş veya kişiselleştirilmiş özelliklerinden faydalanamayabilirsiniz.
          </p>

          <h2>6. Mobil Uygulama ve Benzer Teknolojiler</h2>
          <p>
            GetMeCoach mobil uygulamamız çerez kullanmamakla birlikte, uygulama içi performans analizi ve bildirim yönetimi için 
            cihaz kimliği, oturum belirteci (token) gibi benzer teknolojileri kullanabilir. Mobil cihazınızın "Gizlilik" ayarlarından 
            bu izinleri istediğiniz zaman güncelleyebilirsiniz.
          </p>

          <h2>7. Çocukların Gizliliği</h2>
          <p>
            Platformumuz 18 yaş altı kişilere yönelik tasarlanmamıştır. 18 yaşın altındaki kişilerden bilerek çerez bilgisi veya 
            kişisel veri toplamamaktayız.
          </p>

          <h2>8. Değişiklikler ve İletişim</h2>
          <p>
            Çerez Politikamızı değişen yasal düzenlemeler veya platform güncellemeleri doğrultusunda zaman zaman güncelleyebiliriz. 
            Güncellemeleri bu sayfa üzerinden takip edebilirsiniz. Sorularınız için bizimle iletişime geçebilirsiniz:
          </p>
          <p>
            <strong>E-posta:</strong> info@getmecoach.com<br />
            <strong>Adres:</strong> Kağıthane, İstanbul
          </p>

          <div className="mt-8 p-6 bg-primary-500/10 dark:bg-primary-500/5 rounded-2xl border border-primary-500/20 text-slate-800 dark:text-dark-200">
            <h3 className="text-lg font-bold mb-2 text-primary-600 dark:text-primary-400">💡 Bilgilendirme</h3>
            <p className="mb-0 text-sm leading-relaxed">
              Bu web sitesini kullanmaya devam ederek, çerezlerin bu politikada belirtilen amaçlarla kullanılmasını kabul etmiş olursunuz. 
              Çerez tercihlerinizi dilediğiniz zaman yukarıda belirtilen adımlarla güncelleyebilirsiniz.
            </p>
          </div>
        </>
      }
    />
  );
}

