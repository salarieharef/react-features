import React, { useState, useEffect } from 'react'
import i18n from '../../utils/i18'

const Courses = () => {
  // برای نگهداری متن ترجمه شده
  const [translatedText, setTranslatedText] = useState('')

  // تابع برای به‌روزرسانی متن ترجمه شده
  const updateTranslation = () => {
    setTranslatedText(i18n.t('courses', { ns: 'courses' }))
  }

  // تابع تغییر زبان
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  useEffect(() => {
    // مقداردهی اولیه
    updateTranslation()

    // اضافه کردن event listener برای تغییر زبان
    i18n.on('languageChanged', updateTranslation)

    // پاکسازی event listener
    return () => {
      i18n.off('languageChanged', updateTranslation)
    }
  }, [])

  return (
    <div>
      <div>{translatedText}</div>
      
      {/* دکمه‌های تغییر زبان */}
      <div className="flex gap-2 mt-4">
        <button 
          onClick={() => changeLanguage('en')}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          English
        </button>
        <button 
          onClick={() => changeLanguage('fa')}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          فارسی
        </button>
      </div>
    </div>
  )
}

export default Courses