import i18n from '../utils/i18';

// آرایه اصلی که نیازی به ترجمه نداره
export const list = [
    {id:1 , desc:'hello world' , age:20},
    {id:2 , desc:'how are you' , age:21},
    {id:3 , desc:'good bye' , age:22},
];

// متغیر برای نگهداری مقدار ترجمه شده
let currentFullName = '';

// تابع برای دریافت مقدار ترجمه شده
export const getFullName = () => {
    return i18n.t('list.fullName');
};

// به روز رسانی مقدار هنگام تغییر زبان
i18n.on('languageChanged', () => {
    currentFullName = getFullName();
});

// مقداردهی اولیه بعد از initialize شدن i18n
i18n.on('initialized', () => {
    currentFullName = getFullName();
});