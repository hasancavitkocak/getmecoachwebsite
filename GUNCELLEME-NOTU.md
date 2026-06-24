# GetMeCoach Website - Güncelleme Notu

## ✅ Yapılan Değişiklikler (16 Haziran 2026)

### 1. İletişim Bilgileri Güncellendi
- ✅ Instagram: `@getmecoachapp` olarak güncellendi
- ✅ Email: `info@getmecoach.com` olarak güncellendi
- ✅ Adres: Kağıthane, İstanbul olarak güncellendi
- ✅ Telefon numarası kaldırıldı
- ✅ Facebook ve diğer sosyal medya hesapları kaldırıldı (sadece Instagram ve Email)

### 2. Icon Düzeltmeleri
- ✅ Tüm iconlar Lucide React kütüphanesinden kullanılıyor
- ✅ Instagram icon'u yerine Globe icon'u kullanıldı (Lucide'da Instagram yok)
- ✅ Apple ve PlayCircle iconları App Store butonları için düzenlendi
- ✅ Mail, MapPin, Globe iconları footer'da kullanılıyor

### 3. CSS Sorunları Düzeltildi
- ✅ Tailwind CSS konfigürasyonu güncellendi
- ✅ globals.css'te @apply direktifleri kaldırıldı (Tailwind v4 uyumlu)
- ✅ Dark mode desteği eklendi
- ✅ Container class'ları düzgün çalışıyor
- ✅ Responsive breakpoint'ler optimize edildi

### 4. Kategori Sıralaması Güncellendi
Mobil uygulamadaki sıraya göre düzenlendi:
1. **Fitness** - Turuncu/Kırmızı gradient
2. **Spor** - Yeşil gradient
3. **Beslenme** - Sarı/Turuncu gradient
4. **Kariyer** - Mavi gradient
5. **Eğitim** - İndigo/Mor gradient
6. **Mental** - Mor/Pembe gradient

### 5. Tasarım İyileştirmeleri
- ✅ Dark theme renkleri mobil uygulamayla uyumlu
- ✅ Yeşil primary color (#22c55e) vurguları
- ✅ Rounded corner'lar (rounded-xl, rounded-2xl)
- ✅ Modern gradient'ler
- ✅ Smooth animations

## 📱 Mobil Uygulamadan Esinlenen Özellikler

### Renk Paleti
- **Background**: Dark navy (#0f172a)
- **Primary**: Yeşil (#22c55e) - mobil uygulamadaki gibi
- **Cards**: Dark gray (#1e293b)
- **Text**: Beyaz ve açık gri tonları

### Kategori Kartları
- Mobil uygulamadaki görselli tasarım referans alındı
- Her kategori kendine özgü renk gradient'i
- Hover efektleri
- Icon ve koç sayısı gösterimi

### Social Feed
- Mobil uygulamadaki "Sosyal" sekmesi yapısı referans alındı
- Dark theme
- Card-based layout
- User interactions (Beğen, Yorum, Paylaş)

## 🎨 Tasarım Sistemi

### Renkler
```css
Primary: #22c55e (Yeşil)
Dark BG: #0f172a (Navy)
Card BG: #1e293b (Dark Gray)
Border: #334155 (Gray)
Text: #f8fafc (White)
Text Muted: #94a3b8 (Light Gray)
```

### Typography
```css
Font: Inter
Başlıklar: 700-800 weight
Gövde: 400-500 weight
```

### Spacing
```css
Container: max-width: 80rem (1280px)
Padding: px-4 (mobile) → px-6 (tablet) → px-8 (desktop)
Section: py-24 (96px)
```

### Border Radius
```css
Buttons: rounded-xl (0.75rem)
Cards: rounded-2xl (1rem)  
Cards Large: rounded-3xl (1.5rem)
```

## 🔧 Teknik Detaylar

### Icon Kullanımı
Lucide React'tan mevcut iconlar:
- `Dumbbell` - Fitness
- `Trophy` - Spor
- `Apple` - Beslenme
- `Briefcase` - Kariyer
- `GraduationCap` - Eğitim
- `Brain` - Mental
- `Mail` - Email
- `MapPin` - Konum
- `Globe` - Instagram (sosyal medya)

### Responsive Breakpoints
```css
sm: 640px   (Mobil landscape)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Large desktop)
```

## 📋 Aktif Sayfalar

✅ Ana Sayfa (/)
✅ Nasıl Çalışır (/nasil-calisir)
✅ Koçlar İçin (/koclar-icin)
✅ Hakkımızda (/hakkimizda)
✅ Uygulama İndir (/indir)

## 🚧 Yapılacaklar

### Yüksek Öncelik
- [ ] Kategori sayfaları (/kategoriler ve /kategoriler/[slug])
- [ ] SSS sayfası (/sss)
- [ ] İletişim formu (/iletisim)
- [ ] Koç başvuru formu (/koc-basvuru)

### Orta Öncelik
- [ ] Blog sistemi (/blog, /blog/[slug])
- [ ] Yasal sayfalar (gizlilik, KVKK, vb.)
- [ ] Gerçek görseller ekleme
- [ ] SEO optimizasyonu (JSON-LD, sitemap)

### Düşük Öncelik
- [ ] İngilizce dil desteği (i18n)
- [ ] Analytics entegrasyonu
- [ ] Newsletter backend
- [ ] Form backend'leri

## 🌐 Canlı URL

```
Local: http://localhost:3000
Production: https://getmecoach.com (deployment sonrası)
```

## 📧 İletişim

- **Email**: info@getmecoach.com
- **Instagram**: @getmecoachapp
- **Adres**: Kağıthane, İstanbul

## 🎯 Performans Hedefleri

- Lighthouse Score: 95+
- LCP: < 2.5s
- FID: < 100ms
- CLS: < 0.1
- Accessibility: WCAG 2.1 AA

---

**Güncelleme Tarihi**: 16 Haziran 2026
**Durum**: ✅ Çalışır Durumda - Tüm Düzeltmeler Uygulandı
**Next.js Version**: 16.2.9
**React Version**: 19.2.4
