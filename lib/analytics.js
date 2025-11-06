// lib/analytics.js
// مكتبة تتبع الأحداث للأداة

/**
 * تتبع توليد البرومبت
 * @param {Object} data - بيانات البرومبت المولد
 */
export const trackPromptGenerated = (data) => {
  // Google Analytics (إذا كان متوفر)
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'prompt_generated', {
      specialty: data.specialty,
      content_type: data.contentType,
      country: data.country,
      platform: data.platform,
      total_generated: data.totalGenerated,
    });
  }

  // Console للتطوير
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Prompt Generated:', data);
  }

  // يمكنك إضافة أي tracking آخر هنا (Mixpanel, Amplitude, etc.)
};

/**
 * تتبع نسخ البرومبت
 * @param {string} contentType - نوع المحتوى
 */
export const trackPromptCopied = (contentType) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'prompt_copied', {
      content_type: contentType,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('📋 Prompt Copied:', contentType);
  }
};

/**
 * تتبع تحميل البرومبت
 * @param {string} contentType - نوع المحتوى
 */
export const trackPromptDownloaded = (contentType) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'prompt_downloaded', {
      content_type: contentType,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('💾 Prompt Downloaded:', contentType);
  }
};

/**
 * تتبع المشاركة
 * @param {string} platform - المنصة (whatsapp, etc.)
 */
export const trackShare = (platform) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'share', {
      method: platform,
    });
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('🔗 Shared on:', platform);
  }
};

/**
 * تتبع فتح نموذج الفيدباك
 */
export const trackFeedback = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'feedback_clicked');
  }

  if (process.env.NODE_ENV === 'development') {
    console.log('💬 Feedback clicked');
  }
};

/**
 * تهيئة Google Analytics (اختياري)
 * @param {string} measurementId - معرف GA4
 */
export const initAnalytics = (measurementId) => {
  if (typeof window === 'undefined') return;

  // تحميل Google Analytics
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId);

  console.log('✅ Analytics initialized');
};