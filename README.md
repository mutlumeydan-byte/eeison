# Elite Engineering Inspections (EEI) - Landing Page

Premium property inspection and snagging company in the UAE.

## 🚀 Vercel'e Deploy Etme

### Yöntem 1: Vercel CLI ile Deploy

```bash
# Vercel CLI'yi global olarak yükleyin
npm i -g vercel

# Proje dizinine gidin
cd /tmp/cc-agent/57822967/project

# Deploy edin
vercel
```

### Yöntem 2: GitHub üzerinden Deploy

1. Projeyi GitHub'a push edin
2. [Vercel Dashboard](https://vercel.com/new)'a gidin
3. "Import Project" → GitHub repository seçin
4. Deploy edin (Vercel otomatik olarak Next.js'i algılar)

### Yöntem 3: Vercel Dashboard'dan Direct Deploy

1. Proje klasörünü zip olarak sıkıştırın
2. [Vercel Dashboard](https://vercel.com/new)'a gidin
3. "Deploy" butonuna tıklayın
4. Zip dosyasını yükleyin

## 📁 Proje Yapısı

```
project/
├── app/                    # Next.js App Router
│   ├── api/
│   │   └── send-mail/     # Form submission endpoint
│   │       └── route.ts
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Ana sayfa
├── components/
│   ├── landing/           # Landing page bileşenleri
│   │   ├── ContactForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Packages.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhyChooseUs.tsx
│   └── ui/                # shadcn/ui components
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── .env                   # Environment variables (boş)
├── next.config.js         # Next.js config
├── package.json           # Dependencies
├── tailwind.config.ts     # Tailwind config
├── tsconfig.json          # TypeScript config
└── vercel.json           # Vercel config

```

## 🛠️ Teknolojiler

- **Framework:** Next.js 14 (App Router)
- **Dil:** TypeScript
- **Stil:** Tailwind CSS
- **UI:** shadcn/ui
- **Animasyon:** Framer Motion
- **Form:** Multi-step form → `/api/send-mail`

## ✨ Özellikler

- ✅ Lüks, kurumsal tasarım
- ✅ SEO optimize edilmiş
- ✅ Tamamen responsive (mobil-uyumlu)
- ✅ Smooth animasyonlar
- ✅ 3 adımlı iletişim formu
- ✅ WhatsApp entegrasyonu
- ✅ Production-ready

## 📝 Form API

Form verileri `/api/send-mail` endpoint'ine POST edilir:

```typescript
{
  name: string,
  email: string,
  phone: string,
  property: string,
  handoverDate: string,
  message: string
}
```

## 🎨 Tasarım Özellikleri

- **Renk Şeması:** Koyu lacivert/siyah (#0a0a0f) + Altın/amber aksanlar
- **Font:** Playfair Display (başlıklar) + Inter (gövde metni)
- **Bölümler:**
  - Hero (Dubai manzarası ile)
  - Inspection Packages (3 paket)
  - Why Choose Us (4 avantaj)
  - Testimonials (3 müşteri yorumu)
  - Contact Form (3 adımlı)
  - Footer

## 🔧 Lokal Geliştirme

```bash
# Bağımlılıkları yükleyin
npm install

# Development server'ı başlatın
npm run dev

# Production build
npm run build

# Production preview
npm run start
```

## 📞 İletişim Bilgileri

- **Email:** info@eeiae.com
- **Phone:** +971 50 123 4567
- **Location:** Dubai, UAE
- **Website:** https://eeiae.com

## 📄 Lisans

© 2025 Elite Engineering Inspections. All rights reserved.
