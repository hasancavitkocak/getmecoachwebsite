# 📱 Görsel Ekleme Rehberi

## App Screenshot Ekleme

### 1. Görseli Hazırla
- App screenshot'unu hazırla (iPhone veya Android ekran görüntüsü)
- Önerilen boyut: **1170x2532px** (iPhone 14 Pro boyutu) veya benzer
- Format: **JPG** veya PNG
- ⚠️ Dosya adı: `app-screenshot.jpg` (küçük harflerle)

### 2. Görseli Yerleştir

#### Yöntem 1: Manuel Kopyalama
```bash
# Görseli şu klasöre kopyala:
public/images/app-screenshot.jpg

# Veya PNG formatında:
public/images/app-screenshot.png
```

#### Yöntem 2: VS Code ile
1. `public/images/` klasörünü aç
2. Screenshot dosyanı sürükle-bırak
3. Dosyayı `app-screenshot.jpg` olarak yeniden adlandır
   - JPEG formatı zaten destekleniyor ✅
   - Kod otomatik olarak JPG/PNG denemesi yapıyor

### 3. Kullanılan Yerler

Hero bölümünde (Ana sayfa) telefonun içinde app screenshot gösterilecek:
```
components/marketing/Hero.tsx (✅ Kod güncellendi)
```

### 4. Diğer Görseller

İhtiyaç duyabileceğin diğer görseller:

#### Blog Görselleri
```
public/blog/
  ├── coaching-basics.jpg
  ├── choose-coach.jpg
  ├── fitness-journey.jpg
  ├── nutrition-tips.jpg
  ├── career-goals.jpg
  └── mental-health.jpg
```

#### Kategori İkonları (Opsiyonel)
```
public/categories/
  ├── fitness.png
  ├── sports.png
  ├── nutrition.png
  ├── career.png
  ├── education.png
  └── mental.png
```

### 5. Görsel Optimizasyonu

Next.js Image component kullanıldığı için otomatik olarak:
- ✅ Lazy loading
- ✅ Responsive boyutlar
- ✅ WebP format dönüşümü
- ✅ Blur placeholder

### 6. Test Et

```bash
# Development server'ı çalıştır
npm run dev

# Ana sayfayı kontrol et
http://localhost:3000

# Telefonun içinde app screenshot görünmeli!
```

## 💡 İpuçları

### Screenshot Kalitesi
- Retina display için 2x boyutunda kaydet
- Arka plan temiz olsun
- Uygulama UI'ı net görünsün
- Gerçek kullanıcı içeriği göster (demo değil)

### Alternatif: Mockup Kullan
Eğer screenshot'ı mockup içinde göstermek istersen:
1. [Mockuuups.studio](https://mockuuups.studio)
2. [Smartmockups.com](https://smartmockups.com)
3. [Shotsnapp.com](https://shotsnapp.com)

Bu sitelerden iPhone mockup oluşturabilirsin.

### Placeholder Görünümü
Görsel yüklenene kadar veya hata durumunda:
- Gradient background görünüyor
- "App Screenshot" yazısı var
- Tasarım bozulmuyor

## 🎨 Örnek Screenshot Hazırlama

### Photoshop/Figma
1. Canvas: 1170x2532px
2. App screenshot'unu yerleştir
3. Export → PNG → 100% kalite

### Direkt Telefon
1. Telefondan screenshot al
2. Gerekirse kırp
3. PNG olarak kaydet
4. Dosya adını değiştir: `app-screenshot.png`

## 📋 Checklist

- [ ] Screenshot hazırlandı
- [ ] `public/images/app-screenshot.png` olarak kaydedildi
- [ ] Dosya boyutu kontrol edildi (ideal: 500KB altı)
- [ ] Development server'da test edildi
- [ ] Mobil ve desktop görünüm kontrol edildi

## 🚀 Sonraki Adımlar

Screenshot eklendikten sonra:
1. ✅ Ana sayfa hero bölümü tamamlanmış olacak
2. Blog görselleri eklenebilir (opsiyonel)
3. Kategori ikonları eklenebilir (opsiyonel)
4. OG image (sosyal medya paylaşım görseli) eklenebilir
