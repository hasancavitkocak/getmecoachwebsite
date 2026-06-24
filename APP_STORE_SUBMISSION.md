# App Store & Google Play Submission Checklist

Bu dosya, GetMeCoach uygulamasının App Store ve Google Play'e gönderimi için gerekli URL'leri ve notları içerir.

## 📱 Gerekli URL'ler

### Zorunlu (Apple + Google)

| URL | Amaç | Apple Connect Alanı | Play Console Alanı |
|-----|------|---------------------|-------------------|
| `https://getmecoach.com/privacy` | Gizlilik Politikası | Privacy Policy URL | Privacy Policy |
| `https://getmecoach.com/support` | Destek/İletişim | Support URL | — |
| `https://getmecoach.com/account-deletion` | Hesap silme talimatı | App Privacy → Account Deletion | Data safety → Account deletion URL |

### Önerilen (Red Yememek İçin)

| URL | Amaç | Nereye Gider |
|-----|------|--------------|
| `https://getmecoach.com/terms` | Kullanım Koşulları | EULA alanı (opsiyonel ama tavsiye) |
| `https://getmecoach.com/kvkk` | KVKK Aydınlatma | TR kullanıcılar için ayrıca |
| `https://getmecoach.com` | Anasayfa | Marketing URL (opsiyonel) |

### Alternatif Türkçe URL'ler (Dil Desteği)

| URL | İçerik |
|-----|--------|
| `https://getmecoach.com/gizlilik` | Türkçe Gizlilik Politikası |
| `https://getmecoach.com/kullanim-kosullari` | Türkçe Kullanım Koşulları |

## 🍎 App Store Connect - Nereye Ne Girilecek

### App Information Bölümü

**Support URL:**
```
https://getmecoach.com/support
```

**Marketing URL (Opsiyonel):**
```
https://getmecoach.com
```

**Privacy Policy URL:**
```
https://getmecoach.com/privacy
```

### App Privacy Bölümü

**Account Deletion:**
- ✅ "Yes, our app supports account deletion" işaretleyin
- URL alanına:
```
https://getmecoach.com/account-deletion
```

### EULA (Opsiyonel ama Tavsiye)

EULA alanında custom terms kullanmak isterseniz:
```
https://getmecoach.com/terms
```

## 🤖 Google Play Console - Nereye Ne Girilecek

### App Content → Privacy Policy

```
https://getmecoach.com/privacy
```

### Data Safety → Data Deletion

- ✅ "Users can request that their data be deleted" işaretleyin
- URL alanına:
```
https://getmecoach.com/account-deletion
```

## 📝 Submission Review Notları

Submission sırasında "Review Notes" alanına şu metni yapıştırın:

```
Privacy Policy: https://getmecoach.com/privacy
Terms of Service: https://getmecoach.com/terms
Support: https://getmecoach.com/support
Account Deletion: https://getmecoach.com/account-deletion

In-app legal documents are accessible offline via:
- Profile > Privacy
- Profile > Help & Support
- Login screen (Terms & Privacy links)

All policies comply with KVKK (Turkish GDPR equivalent) and include:
- Data collection transparency
- User rights (KVKK Article 11)
- Account deletion process (in-app + web)
- Data retention policies
```

## ✅ Checklist

### Deployment Öncesi

- [ ] Tüm sayfalar deploy edildi ve erişilebilir
- [ ] HTTPS çalışıyor (HTTP 200 dönüyor)
- [ ] Mobil responsive
- [ ] PDF değil, HTML sayfa
- [ ] Login arkasında değil (public erişilebilir)

### App Store Connect

- [ ] Support URL girildi
- [ ] Privacy Policy URL girildi
- [ ] Account Deletion URL girildi ve "Yes" işaretlendi
- [ ] Marketing URL girildi (opsiyonel)

### Google Play Console

- [ ] Privacy Policy URL girildi
- [ ] Data Safety bölümünde Account Deletion URL girildi
- [ ] "Users can request deletion" işaretlendi

### İçerik Kontrolü

- [ ] Her sayfa "Son Güncelleme: Haziran 2026" tarihi içeriyor
- [ ] İletişim email: info@getmecoach.com doğru
- [ ] Tüm internal linkler çalışıyor
- [ ] Footer'da tüm yasal sayfalara link var

## 🔗 Hızlı Test

Deployment sonrası bu URL'leri test edin:

```bash
curl -I https://getmecoach.com/privacy
curl -I https://getmecoach.com/terms
curl -I https://getmecoach.com/support
curl -I https://getmecoach.com/account-deletion
curl -I https://getmecoach.com/kvkk
curl -I https://getmecoach.com/gizlilik
curl -I https://getmecoach.com/kullanim-kosullari
```

Hepsi `200 OK` dönmeli.

## 📧 Support Response SLA

Dokümanlara göre:
- **Standart:** 24 saat içinde yanıt
- **Hafta sonu:** Pazartesi günü dönüş
- **Email:** info@getmecoach.com

## 🔐 KVKK Compliance

Tüm sayfalar aşağıdaki KVKK gereksinimlerini karşılar:

✅ Veri sorumlusu kimliği (GetMeCoach)  
✅ İşlenen veri kategorileri açıkça belirtildi  
✅ İşleme amaçları ve hukuki sebepler (KVKK md. 5/6)  
✅ İlgili kişi hakları (KVKK md. 11)  
✅ Başvuru yöntemi (info@getmecoach.com, 30 gün içinde yanıt)  
✅ Veri saklama süreleri  
✅ Üçüncü taraflara aktarım şartları  
✅ Yurt dışı aktarım güvenceleri (KVKK md. 9)  

## 🌍 Dil Desteği

| Dil | Privacy | Terms | Support | Account Deletion |
|-----|---------|-------|---------|------------------|
| 🇬🇧 EN | `/privacy` | `/terms` | `/support` | `/account-deletion` |
| 🇹🇷 TR | `/gizlilik` | `/kullanim-kosullari` | `/support` (EN) | `/account-deletion` (EN) |

**Not:** Support ve Account Deletion sayfaları şu anda sadece İngilizce. Gerekirse Türkçe versiyonları eklenebilir.

## 📱 Uygulama İçi Erişim

Kullanıcılar bu sayfalara şu yollarla erişebilir:

1. **Profil → Ayarlar → Gizlilik**
2. **Profil → Ayarlar → Yardım & Destek**
3. **Login ekranı** (alt kısımda Terms & Privacy linkleri)
4. **Footer** (web sitesi üzerinden)

## ⚠️ Önemli Notlar

1. **PDF kullanmayın** - Apple ve Google HTML sayfa istiyor
2. **Login arkasına koymayın** - Public erişilebilir olmalı
3. **HTTPS zorunlu** - HTTP redirect yapılmalı
4. **Responsive olmalı** - Mobil görünüm test edilmeli
5. **Son güncelleme tarihi** - Tüm sayfalarda görünür olmalı
6. **İletişim bilgisi** - Her sayfada info@getmecoach.com erişilebilir

## 🎯 Next Steps

1. ✅ Sayfalar oluşturuldu
2. ⏳ Deploy to production
3. ⏳ URL'leri test et
4. ⏳ App Store Connect'e gir
5. ⏳ Google Play Console'a gir
6. ⏳ Submit for review

---

**Son Güncelleme:** Haziran 2026  
**Hazırlayan:** AI Assistant  
**İletişim:** info@getmecoach.com
