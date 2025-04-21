import React, { useState, useEffect } from 'react';
import { onLanguageChange , getName } from '../../data/arr'; 
import i18n from '../../utils/i18'

export default function MyComponent() {
  const [name, setName] = useState(getName());
  
  useEffect(() => {
    // افزودن listener برای تغییر زبان
    const unsubscribe = onLanguageChange(() => {
      setName(getName());
    });
    
    // پاکسازی listener
    return unsubscribe;
  }, []);
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  
  return (
    <div>
      <div>Name: {name}</div>
      <button onClick={() => changeLanguage('fa')}>فارسی</button>
      <button onClick={() => changeLanguage('en')}>English</button>
    </div>
  );
}