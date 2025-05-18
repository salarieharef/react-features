import i18n from '../utils/i18';

// متغیر برای نگهداری وضعیت زبان
let currentLanguage = i18n.language;

// آرایه‌ای از callback ها برای به‌روزرسانی کامپوننت‌ها
const listeners = [];

// تابع برای تغییر زبان
export const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    currentLanguage = lng;
    // اطلاع‌رسانی به همه listener ها
    listeners.forEach(callback => callback());
};

// تابع برای دریافت زبان فعلی
export const getCurrentLanguage = () => currentLanguage;

// تابع برای دریافت متن ترجمه شده
export const getTranslation = (key, options = {}) => {
    return i18n.t(key, options);
};

// تابع برای ثبت listener جدید
export const subscribe = (callback) => {
    listeners.push(callback);
    return () => {
        const index = listeners.indexOf(callback);
        if (index > -1) {
            listeners.splice(index, 1);
        }
    };
}; 