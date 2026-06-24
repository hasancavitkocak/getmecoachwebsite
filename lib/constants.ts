export const SITE_CONFIG = {
  name: 'GetMeCoach',
  title: 'GetMeCoach - Hayatını Dönüştürecek Koçu Cebinde Taşı',
  description: 'Türkiye\'nin en kapsamlı koçluk platformu. Fitness, mental, beslenme ve kariyer alanlarında uzman koçlarla tanış, hedeflerine ulaş.',
  url: 'https://getmecoach.com',
  ogImage: '/og-image.jpg',
  links: {
    appStore: 'https://apps.apple.com/app/getmecoach',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.getmecoach',
    instagram: 'https://instagram.com/getmecoachapp',
  },
  contact: {
    email: 'info@getmecoach.com',
    address: 'Kağıthane, İstanbul',
  },
};

export const CATEGORIES = [
  {
    id: 'fitness',
    slug: 'fitness',
    name: 'Fitness',
    title: 'Fitness Koçluğu',
    description: 'Kişisel antrenör, yoga, pilates ve fonksiyonel antrenman uzmanlarıyla hedeflerine ulaş',
    icon: 'dumbbell',
    color: 'from-orange-500 to-red-600',
    coachCount: 2847,
    subcategories: [
      'Kişisel Antrenör',
      'Yoga',
      'Pilates',
      'Fonksiyonel Antrenman',
      'CrossFit',
      'Ağırlık Antrenmanı',
      'Kardiyo',
      'Rehabilitasyon',
    ],
  },
  {
    id: 'sports',
    slug: 'spor',
    name: 'Spor',
    title: 'Spor Koçluğu',
    description: 'Basketbol, futbol, tenis ve daha fazla branşta uzman spor koçlarıyla tekniğini geliştir',
    icon: 'trophy',
    color: 'from-green-500 to-emerald-600',
    coachCount: 1245,
    subcategories: [
      'Basketbol',
      'Futbol',
      'Tenis',
      'Yüzme',
      'Voleybol',
      'Atletizm',
      'Dövüş Sanatları',
      'Golf',
    ],
  },
  {
    id: 'nutrition',
    slug: 'beslenme',
    name: 'Beslenme',
    title: 'Beslenme Koçluğu',
    description: 'Diyetisyen ve beslenme uzmanlarıyla sağlıklı yaşam tarzına kavuş',
    icon: 'apple',
    color: 'from-amber-500 to-orange-600',
    coachCount: 1432,
    subcategories: [
      'Diyetisyen',
      'Sporcu Beslenmesi',
      'Kilo Yönetimi',
      'Vejetaryen/Vegan',
      'Metabolizma',
      'Glutensiz Beslenme',
      'Detoks',
      'Sağlıklı Yaşam',
    ],
  },
  {
    id: 'career',
    slug: 'kariyer',
    name: 'Kariyer',
    title: 'Kariyer Koçluğu',
    description: 'Kariyer danışmanları ve liderlik koçlarıyla profesyonel hedeflerine ulaş',
    icon: 'briefcase',
    color: 'from-blue-500 to-cyan-600',
    coachCount: 987,
    subcategories: [
      'Kariyer Planlama',
      'Liderlik',
      'İş Hayatı',
      'Mülakat Hazırlığı',
      'Networking',
      'Girişimcilik',
      'Performans Yönetimi',
      'İş-Yaşam Dengesi',
    ],
  },
  {
    id: 'education',
    slug: 'egitim',
    name: 'Eğitim',
    title: 'Eğitim Koçluğu',
    description: 'Akademik başarı, dil öğrenimi ve beceri geliştirme konularında uzman eğitmenlerle ilerle',
    icon: 'graduation-cap',
    color: 'from-indigo-500 to-purple-600',
    coachCount: 2156,
    subcategories: [
      'Akademik Koçluk',
      'Dil Eğitimi',
      'Sınav Hazırlık',
      'Özel Ders',
      'Müzik Eğitimi',
      'Sanat Eğitimi',
      'Yazılım Eğitimi',
      'Kişisel Gelişim',
    ],
  },
  {
    id: 'mental',
    slug: 'mental',
    name: 'Mental',
    title: 'Mental Koçluk',
    description: 'Yaşam koçları, motivasyon uzmanları ve mindfulness eğitmenleriyle zihinsel sağlığını güçlendir',
    icon: 'brain',
    color: 'from-purple-500 to-pink-600',
    coachCount: 1653,
    subcategories: [
      'Yaşam Koçluğu',
      'Motivasyon',
      'Mindfulness',
      'Stres Yönetimi',
      'Meditasyon',
      'Öfke Yönetimi',
      'İlişki Koçluğu',
      'Kişisel Gelişim',
    ],
  },
];

export const STATS = {
  coaches: 10320,
  cities: 81,
  users: 156000,
  sessions: 428000,
};

export const FEATURES = [
  {
    title: 'Konum Tabanlı Keşif',
    description: 'GPS ile yakınındaki koçları keşfet, mesafeleri gör ve kolayca ulaş',
    icon: 'map-pin',
  },
  {
    title: 'Onaylı Profil Rozeti',
    description: 'Sertifika yükleyen koçlar onaylı profil rozeti alır, güvenle seçim yap',
    icon: 'shield-check',
  },
  {
    title: 'Gerçek Zamanlı Mesajlaşma',
    description: 'Koçunla anında iletişime geç, sorularını sor, planını oluştur',
    icon: 'message-circle',
  },
  {
    title: 'Sosyal Akış',
    description: 'Koçların paylaşımlarını takip et, motivasyonunu yüksek tut',
    icon: 'users',
  },
  {
    title: 'Online & Yüz Yüze',
    description: 'Dilediğin şekilde çalış: evinden online veya koçunun mekanında',
    icon: 'video',
  },
  {
    title: 'Detaylı Filtreler',
    description: 'Kategori, şehir, uzmanlık alanı ve daha fazlasıyla tam istediğini bul',
    icon: 'filter',
  },
];

export const HOW_IT_WORKS_STEPS = [
  {
    title: 'Keşfet',
    description: 'İhtiyacına uygun koçu kategoriler, konum ve filtrelerle bul',
    icon: 'search',
  },
  {
    title: 'Mesajlaş',
    description: 'Koçunla iletişime geç, sürecini konuş, planını oluştur',
    icon: 'message-square',
  },
  {
    title: 'Hedeflerine Ulaş',
    description: 'Uzman desteğiyle çalış, gelişimini takip et, başarıya ulaş',
    icon: 'target',
  },
];

export const TESTIMONIALS = [
  {
    name: 'Ayşe Yılmaz',
    role: 'Fitness Kullanıcısı',
    image: '/testimonials/ayse.jpg',
    content: '6 ayda 15 kilo verdim ve hayatım değişti. GetMeCoach sayesinde tam ihtiyacım olan fitness koçunu buldum. Hem yakınımda hem de çok profesyonel.',
    rating: 5,
  },
  {
    name: 'Mehmet Kaya',
    role: 'Kariyer Koçluğu Kullanıcısı',
    image: '/testimonials/mehmet.jpg',
    content: 'Kariyer değişikliği yapmak istiyordum ama nasıl başlayacağımı bilemiyordum. Kariyer koçum sayesinde yeni bir sektöre geçiş yaptım ve çok mutluyum.',
    rating: 5,
  },
  {
    name: 'Zeynep Demir',
    role: 'Mental Koçluk Kullanıcısı',
    image: '/testimonials/zeynep.jpg',
    content: 'Stres yönetimi konusunda çok zorlanıyordum. Yaşam koçumla çalışarak hayatıma denge getirdim. Online seanslar çok pratik oldu.',
    rating: 5,
  },
  {
    name: 'Can Öztürk',
    role: 'Beslenme Koçluğu Kullanıcısı',
    image: '/testimonials/can.jpg',
    content: 'Spor yapıyordum ama beslenme konusunda bilgim yoktu. Diyetisyenimle oluşturduğumuz plan sayesinde performansım %40 arttı.',
    rating: 5,
  },
];

export const COACH_BENEFITS = [
  {
    title: 'Hızlı Kayıt',
    description: 'Herkes koç olarak kayıt olabilir, onay süreci yok',
    icon: 'users',
  },
  {
    title: 'Onaylı Profil Rozeti',
    description: 'Sertifika yükleyerek güvenilirliğinizi artırın',
    icon: 'sparkles',
  },
  {
    title: 'Kolay İletişim',
    description: 'Gerçek zamanlı mesajlaşma ile müşterilerinle hızla iletişime geç',
    icon: 'message-circle',
  },
  {
    title: 'Sosyal Paylaşım',
    description: 'İçerik paylaş, takipçi kazan, kişisel markanı güçlendir',
    icon: 'share-2',
  },
  {
    title: 'Premium Görünürlük',
    description: 'Premium üyelikle aramada çık ve kullanıcılar seni bulsun',
    icon: 'zap',
  },
  {
    title: 'Güvenli Platform',
    description: 'Güvenli ödeme sistemi ve 7/24 destek',
    icon: 'shield',
  },
];

export const PREMIUM_FEATURES = {
  free: [
    'Profil oluşturma',
    'Mesajlaşma',
    'Temel galeri (5 fotoğraf)',
    'Sosyal paylaşım',
    'Kategori seçimi',
  ],
  premium: [
    'Tüm ücretsiz özellikler',
    '🔍 Aramalarda görünürlük (zorunlu)',
    'Öncelikli listeleme ve öne çıkma',
    'Genişletilmiş galeri (20 fotoğraf)',
    'Öncelikli destek',
  ],
  verified: [
    '✓ Sertifika yükle',
    '✓ "Onaylı Profil" rozeti kazan',
    '✓ Güvenilirliğini artır',
  ],
};
