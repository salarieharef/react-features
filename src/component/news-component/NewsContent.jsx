import React, { useState, useEffect } from 'react';
import { getTranslation, subscribe } from '../../services/languageService';

const NewsContent = () => {
    const [translatedText, setTranslatedText] = useState('');

    const updateTranslation = () => {
        setTranslatedText(getTranslation('news', { ns: 'common' }));
    };

    useEffect(() => {
        // مقداردهی اولیه
        updateTranslation();

        // ثبت listener برای تغییر زبان
        const unsubscribe = subscribe(updateTranslation);

        return unsubscribe;
    }, []);

    return (
        <div className="text-2xl font-bold">
            {translatedText}
        </div>
    );
};

export default NewsContent;