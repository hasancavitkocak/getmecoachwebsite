# GetMeCoach - Kurumsal Website

GetMeCoach mobil uygulamasının kurumsal tanıtım websitesi. Modern, Apple tarzı tasarım ile ürünü tanıtan, koçları platforma çeken ve kullanıcıları uygulamayı indirmeye yönlendiren bir marketing/landing sitesidir.

## 🚀 Özellikler

- **Modern Tasarım**: Apple tarzı, kaydırmalı (scrollable) tasarım
- **Performans**: Next.js 14 App Router, optimize edilmiş görüntüler
- **Animasyonlar**: Framer Motion ile akıcı geçişler
- **SEO**: Tam SEO optimize, metadata, sitemap, robots.txt
- **Responsive**: Mobil-first, tüm cihazlarda mükemmel görünüm
- **Erişilebilirlik**: WCAG 2.1 AA standartlarına uygun
- **Türkçe/İngilizce**: Çoklu dil desteği için hazır altyapı

## 📁 Proje Yapısı

```
getmecoach-website/
├── app/
│   ├── (marketing)/           # Marketing sayfaları
│   │   ├── page.tsx          # Ana sayfa
│   │   ├── nasil-calisir/    # Nasıl çalışır sayfası
│   │   ├── koclar-icin/      # Koçlar için sayfa
│   │   ├── kategoriler/      # Kategori sayfaları
│   │   ├── hakkimizda/       # Hakkımızda
│   │   ├── blog/             # Blog
│   │   ├── sss/              # SSS
│   │   ├── iletisim/         # İletişim
│   │   ├── koc-basvuru/      # Koç başvuru formu
│   │   └── indir/            # Uygulama indirme
│   ├── (legal)/              # Yasal sayfalar
│   │   ├── gizlilik/
│   │   ├── kullanim-kosullari/
│   │   ├── kvkk/
│   │   └── cerez-politikasi/
│   ├── layout.tsx            # Ana layout
│   └── globals.css           # Global stiller
├── components/
│   ├── marketing/            # Marketing bileşenleri
│   │   ├── Hero.tsx
│   │   ├── Categories.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Testimonials.tsx
│   │   └── CTABanner.tsx
│   ├── layout/               # Layout bileşenleri
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── shared/               # Paylaşılan bileşenler
│       └── CookieConsent.tsx
├── lib/
│   ├── constants.ts          # Site sabitleri ve içerik
│   └── utils.ts              # Yardımcı fonksiyonlar
└── public/                   # Statik dosyalar
    └── images/
```

## 🛠️ Kurulum

### Gereksinimler

- Node.js 18+ 
- npm veya yarn

### Adımlar

1. **Bağımlılıkları yükleyin**:
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın**:
```bash
npm run dev
```

3. **Tarayıcıda açın**:
```
http://localhost:3000
```

## 📝 Geliştirme Komutları

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Production sunucusu
npm run start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🎨 Tasarım Sistemi

### Renkler

- **Primary**: `#10B981` (Yeşil) - Ana vurgu rengi
- **Dark**: `#0F172A` - Ana koyu renk
- **Background**: Beyaz / Koyu gri (dark mode)

### Tipografi

- **Font**: Inter (Google Fonts)
- **Başlıklar**: 700-800 font weight
- **Gövde**: 400-500 font weight

### Spacing

- Container: `max-width: 1280px`
- Padding: `px-4 sm:px-6 lg:px-8`
- Section Spacing: `py-24` (96px)

## 📄 Sayfa Detayları

### Ana Sayfa (/)
- Hero: Güçlü başlık, app store butonları, mobil mockup
- Kategoriler: 6 ana kategori kartı
- Nasıl Çalışır: 3 adımlı süreç
- Özellikler: 6 ana özellik
- Kullanıcı Yorumları: 4 testimonial
- CTA Banner: Uygulama indirme çağrısı

### Nasıl Çalışır (/nasil-calisir)
- Kullanıcı yolculuğu (3 adım)
- Koç yolculuğu (3 adım)
- Detaylı açıklamalar ve görseller

### Koçlar İçin (/koclar-icin)
- Değer önermeleri
- Ücretsiz vs Premium karşılaştırma
- Başarı hikayeleri
- CTA: Koç başvurusu

### Kategoriler (/kategoriler/[slug])
- 6 kategori: Fitness, Mental, Beslenme, Kariyer, Spor, Eğitim
- Her kategori için özel sayfa
- Koç sayıları ve alt kategoriler

## 🔧 Konfigürasyon

### Environment Variables

`.env.local` dosyası oluşturun:

```env
NEXT_PUBLIC_SITE_URL=https://getmecoach.com
NEXT_PUBLIC_APP_STORE_URL=https://apps.apple.com/app/getmecoach
NEXT_PUBLIC_GOOGLE_PLAY_URL=https://play.google.com/store/apps/details?id=com.getmecoach
```

### Site Ayarları

`lib/constants.ts` dosyasından site ayarlarını düzenleyin:

- Site başlığı ve açıklaması
- Sosyal medya linkleri
- İletişim bilgileri
- Kategori bilgileri
- Özellikler ve testimonial'lar

## 📱 Responsive Breakpoints

```css
sm: 640px   /* Mobil landscape */
md: 768px   /* Tablet */
lg: 1024px  /* Desktop */
xl: 1280px  /* Large desktop */
2xl: 1536px /* Extra large */
```

## 🎯 SEO Optimizasyonu

- **Metadata**: Her sayfa için özel title ve description
- **Open Graph**: Sosyal medya paylaşımları için
- **Twitter Cards**: Twitter paylaşımları için
- **Structured Data**: JSON-LD formatında
- **Sitemap**: Otomatik sitemap.xml oluşturma
- **Robots.txt**: SEO botları için yönergeler

## 🚀 Deployment

### Vercel (Önerilen)

1. GitHub repository'e push edin
2. [Vercel](https://vercel.com) hesabınıza bağlayın
3. Otomatik deploy başlatılır

```bash
# Vercel CLI ile
npm install -g vercel
vercel
```

### Manuel Build

```bash
npm run build
npm run start
```

## 📊 Performance

- **Lighthouse Score Hedefi**: 95+ (tüm kategoriler)
- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1

## 🛡️ Güvenlik

- HTTPS zorunlu
- Content Security Policy
- XSS koruması
- CSRF koruması

## 📝 Content Yönetimi

### Blog Yazısı Ekleme

`content/blog` klasörüne MDX dosyası ekleyin:

```mdx
---
title: "Yazı Başlığı"
description: "Kısa açıklama"
date: "2024-01-15"
author: "Yazar Adı"
category: "fitness"
image: "/blog/image.jpg"
---

Blog içeriği buraya...
```

### SSS Ekleme

`content/faq.ts` dosyasını düzenleyin.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit edin (`git commit -m 'feat: Add amazing feature'`)
4. Push edin (`git push origin feature/amazing-feature`)
5. Pull Request açın

## 📄 Lisans

Bu proje GetMeCoach şirketi için geliştirilmiştir. Tüm hakları saklıdır.

## 📞 Destek

- **Email**: info@getmecoach.com
- **Web**: https://getmecoach.com
- **Dokümantasyon**: https://docs.getmecoach.com

## 🎉 Özellikler Roadmap

- [ ] İngilizce dil desteği (i18n)
- [ ] Blog CMS entegrasyonu
- [ ] Koç başvuru form backend
- [ ] Newsletter entegrasyonu
- [ ] Analytics dashboard
- [ ] A/B testing
- [ ] Live chat widget
- [ ] Video testimonials

---

Made with ❤️ by GetMeCoach Team
