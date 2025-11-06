// Google Analytics 4 Tracking Functions

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// تتبع مشاهدات الصفحات
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    });
  }
};

// تتبع الأحداث
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// أحداث مخصصة للمشروع
export const trackPromptGenerated = (data) => {
  event({
    action: 'prompt_generated',
    category: 'Content',
    label: `${data.contentType} - ${data.specialty}`,
    value: data.totalGenerated,
  });
};

export const trackPromptCopied = (contentType) => {
  event({
    action: 'prompt_copied',
    category: 'Engagement',
    label: contentType,
  });
};

export const trackPromptDownloaded = (contentType) => {
  event({
    action: 'prompt_downloaded',
    category: 'Engagement',
    label: contentType,
  });
};

export const trackShare = (platform) => {
  event({
    action: 'shared',
    category: 'Social',
    label: platform,
  });
};

export const trackFeedback = () => {
  event({
    action: 'feedback_clicked',
    category: 'Engagement',
    label: 'WhatsApp Feedback',
  });
};