import React, { useState, useEffect } from 'react';
import { changeLanguage, getCurrentLanguage, subscribe } from '../../services/languageService';

const NewsChangeLanguage = () => {
    const [currentLang, setCurrentLang] = useState(getCurrentLanguage());

    useEffect(() => {
        // ثبت listener برای تغییر زبان
        const unsubscribe = subscribe(() => {
            setCurrentLang(getCurrentLanguage());
        });

        return unsubscribe;
    }, []);

    return (
        <div className="flex gap-2">
            <button 
                onClick={() => changeLanguage('en')}
                className={`px-4 py-2 rounded ${currentLang === 'en' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                English
            </button>
            <button 
                onClick={() => changeLanguage('fa')}
                className={`px-4 py-2 rounded ${currentLang === 'fa' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                فارسی
            </button>
        </div>
    );
};

export default NewsChangeLanguage;