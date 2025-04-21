// translation-service.js
import i18n from '../utils/i18'

let currentName = i18n.t('name', { ns: 'data' });

// یک آرایه از callback ها برای به‌روزرسانی ترجمه‌ها
const listeners = [];

// تابعی برای اشتراک مقدار ترجمه شده
export const getName = () => currentName;

// تابعی برای افزودن listener
export const onLanguageChange = (callback) => {
  listeners.push(callback);
  return () => {
    const index = listeners.indexOf(callback);
    if (index !== -1) {
      listeners.splice(index, 1);
    }
  };
};

// تنظیم listener برای تغییر زبان
i18n.on('languageChanged', () => {
  currentName = i18n.t('name', { ns: 'data' });
  // همه listener ها را فراخوانی کن
  listeners.forEach(callback => callback());
});