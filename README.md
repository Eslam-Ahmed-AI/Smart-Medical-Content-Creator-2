# 🦷 Smart Medical Content Creator

<div align="center">

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8)
![License](https://img.shields.io/badge/license-MIT-green)

**أداة ذكية لتوليد محتوى احترافي لأطباء الأسنان على السوشيال ميديا في دقيقة واحدة**

[Demo](https://your-demo-link.vercel.app) • [Report Bug](https://github.com/yourusername/dental-content-generator/issues) • [Request Feature](https://github.com/yourusername/dental-content-generator/issues)

</div>

---

## 📋 المحتويات

- [المميزات](#-المميزات)
- [التقنيات المستخدمة](#-التقنيات-المستخدمة)
- [البدء السريع](#-البدء-السريع)
- [التثبيت المحلي](#-التثبيت-المحلي)
- [النشر على Vercel](#-النشر-على-vercel)
- [إعداد Google Analytics](#-إعداد-google-analytics)
- [البنية الأساسية](#-البنية-الأساسية)
- [المساهمة](#-المساهمة)
- [الترخيص](#-الترخيص)

---

## ✨ المميزات

- 🎯 **توليد برومبتات احترافية** - إنشاء محتوى مخصص لكل منصة وجمهور
- 📱 **دعم جميع المنصات** - Instagram, Facebook, TikTok, LinkedIn, وغيرها
- 🎨 **أنواع محتوى متعددة** - نصوص، صور، فيديوهات، Stories، Reels، Carousels
- 🌍 **محتوى محلي** - مخصص لكل دولة عربية وثقافتها
- 📊 **تتبع شامل** - Google Analytics 4 + Vercel Analytics
- 🚀 **أداء عالي** - بنية Next.js محسّنة للسرعة
- 📱 **تصميم متجاوب** - يعمل بكفاءة على جميع الأجهزة
- 🎭 **واجهة جذابة** - تصميم عصري مع Tailwind CSS
- ♿ **إمكانية الوصول** - يدعم RTL والعربية بشكل كامل

---

## 🛠 التقنيات المستخدمة

- **Framework**: [Next.js 14](https://nextjs.org/) - React Framework للإنتاج
- **UI Library**: [React 18](https://react.dev/) - مكتبة واجهة المستخدم
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Icons**: [Lucide React](https://lucide.dev/) - أيقونات جميلة وخفيفة
- **Analytics**: 
  - [Google Analytics 4](https://analytics.google.com/) - تتبع شامل
  - [Vercel Analytics](https://vercel.com/analytics) - تحليلات الأداء
- **Deployment**: [Vercel](https://vercel.com/) - منصة النشر
- **Fonts**: [Cairo](https://fonts.google.com/specimen/Cairo) - خط عربي احترافي

---

## 🚀 البدء السريع

### المتطلبات الأساسية

- Node.js 18.0 أو أحدث
- npm أو yarn أو pnpm
- حساب GitHub
- حساب Vercel (مجاني)

---

## 💻 التثبيت المحلي

### 1️⃣ استنساخ المشروع

```bash
# استنسخ المشروع من GitHub
git clone https://github.com/yourusername/dental-content-generator.git

# انتقل لمجلد المشروع
cd dental-content-generator
```

### 2️⃣ تثبيت المكتبات

```bash
# باستخدام npm
npm install

# أو باستخدام yarn
yarn install

# أو باستخدام pnpm
pnpm install
```

### 3️⃣ إعداد المتغيرات البيئية

```bash
# انسخ ملف المتغيرات البيئية
cp .env.example .env.local

# افتح الملف وأضف Google Analytics ID
# NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 4️⃣ تشغيل المشروع محلياً

```bash
# تشغيل وضع التطوير
npm run dev

# افتح المتصفح على
# http://localhost:3000
```

### 5️⃣ بناء المشروع للإنتاج

```bash
# بناء المشروع
npm run build

# تشغيل النسخة الإنتاجية
npm start
```

---

## ☁️ النشر على Vercel

### الطريقة الأولى: عبر واجهة Vercel (الأسهل)

1. **إنشاء حساب Vercel**
   - اذهب إلى [vercel.com](https://vercel.com)
   - سجل دخول باستخدام GitHub

2. **رفع المشروع على GitHub**
   ```bash
   # إنشاء repository جديد على GitHub
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/dental-content-generator.git
   git push -u origin main
   ```

3. **استيراد المشروع في Vercel**
   - اضغط "New Project"
   - اختر repository من GitHub
   - اضغط "Import"

4. **إعداد المتغيرات البيئية**
   - في صفحة المشروع، اذهب لـ Settings → Environment Variables
   - أضف: `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX`

5. **النشر**
   - اضغط "Deploy"
   - انتظر 1-2 دقيقة
   - ✅ موقعك جاهز!

### الطريقة الثانية: عبر Vercel CLI

```bash
# تثبيت Vercel CLI
npm i -g vercel

# تسجيل الدخول
vercel login

# النشر
vercel

# للنشر على الإنتاج
vercel --prod
```

---

## 📊 إعداد Google Analytics 4

### 1️⃣ إنشاء حساب GA4

1. اذهب إلى [Google Analytics](https://analytics.google.com)
2. اضغط "Admin" (الترس أسفل اليسار)
3. اضغط "Create Property"
4. املأ البيانات:
   - Property name: `Dental Content Generator`
   - Time zone: `Egypt (GMT+2)` أو دولتك
   - Currency: `Egyptian Pound (EGP)` أو عملتك

### 2️⃣ إنشاء Data Stream

1. في Property Settings، اضغط "Data Streams"
2. اضغط "Add stream" → "Web"
3. أدخل:
   - Website URL: `https://your-site.vercel.app`
   - Stream name: `Main Website`
4. اضغط "Create stream"

### 3️⃣ الحصول على Measurement ID

1. بعد إنشاء الـ Stream، ستجد **Measurement ID** (مثل: `G-XXXXXXXXXX`)
2. انسخه وضعه في `.env.local`:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

### 4️⃣ التأكد من التتبع

1. افتح موقعك
2. اذهب لـ GA4 → Reports → Realtime
3. يجب أن ترى زيارتك الحالية ✅

---

## 📁 البنية الأساسية

```
dental-content-generator/
├── public/                      # الملفات الثابتة
│   └── favicon.ico             # الأيقونة
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.js          # Layout رئيسي + GA4
│   │   ├── page.js            # الصفحة الرئيسية
│   │   └── globals.css        # Styles عامة
│   ├── components/             # مكونات React
│   │   └── DentalContentGenerator.jsx
│   └── lib/                   # مكتبات ومساعدات
│       └── analytics.js       # دوال التتبع
├── .env.example               # مثال للمتغيرات البيئية
├── .gitignore                 # ملفات Git المستبعدة
├── next.config.js             # إعدادات Next.js
├── package.json               # المكتبات والسكريبتات
├── tailwind.config.js         # إعدادات Tailwind
├── postcss.config.js          # إعدادات PostCSS
└── README.md                  # هذا الملف
```

---

## 📈 الأحداث المتتبعة في Analytics

يتتبع المشروع الأحداث التالية:

| الحدث | الوصف | البيانات المُرسلة |
|------|------|------------------|
| `prompt_generated` | عند إنشاء برومبت جديد | التخصص، نوع المحتوى، الدولة، المنصة |
| `prompt_copied` | عند نسخ البرومبت | نوع المحتوى |
| `prompt_downloaded` | عند تحميل البرومبت | نوع المحتوى |
| `shared_whatsapp` | عند مشاركة الأداة | - |
| `feedback_clicked` | عند فتح واتساب للتغذية الراجعة | - |

---

## 🎨 التخصيص

### تغيير الألوان

عدّل الألوان في `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#3B82F6',    // الأزرق
      secondary: '#10B981',  // الأخضر
      // أضف ألوانك هنا
    }
  }
}
```

### تغيير رقم الواتساب

في `DentalContentGenerator.jsx`:

```javascript
const openFeedback = () => {
  window.open('https://wa.me/201234567890?text=...', '_blank');
};
```

### إضافة تخصصات جديدة

في `DentalContentGenerator.jsx`:

```javascript
const specialties = [
  'طبيب أسنان عام',
  'تقويم',
  'التخصص الجديد هنا', // أضف هنا
];
```

---

## 🔧 استكشاف الأخطاء

### المشروع لا يعمل محلياً

```bash
# امسح المكتبات وأعد تثبيتها
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Google Analytics لا يعمل

1. تأكد من إضافة `NEXT_PUBLIC_GA_ID` في `.env.local`
2. تأكد من بدء المتغير بـ `NEXT_PUBLIC_`
3. أعد تشغيل السيرفر بعد تغيير `.env`

### الخطوط العربية لا تظهر

تأكد من أن `globals.css` يستورد خط Cairo:

```css
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&display=swap');
```

---

## 🤝 المساهمة

نرحب بمساهماتك! اتبع الخطوات:

1. Fork المشروع
2. أنشئ branch جديد (`git checkout -b feature/AmazingFeature`)
3. Commit التغييرات (`git commit -m 'Add some AmazingFeature'`)
4. Push للـ branch (`git push origin feature/AmazingFeature`)
5. افتح Pull Request

---

## 📝 الترخيص

هذا المشروع مرخص تحت [MIT License](LICENSE)

---

## 📞 التواصل

- **المطور**: [اسمك]
- **الإيميل**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **الموقع**: [https://your-site.vercel.app](https://your-site.vercel.app)

---

## 🙏 شكر خاص

- [Next.js](https://nextjs.org/) - Framework رائع
- [Vercel](https://vercel.com/) - استضافة مجانية وسريعة
- [Tailwind CSS](https://tailwindcss.com/) - تصميم سريع
- [Lucide Icons](https://lucide.dev/) - أيقونات جميلة

---

<div align="center">

**صُنع بـ ❤️ لخدمة الأطباء العرب**

⭐ إذا أعجبك المشروع، لا تنسى النجمة على GitHub!

</div>