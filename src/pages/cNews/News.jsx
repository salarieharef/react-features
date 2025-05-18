import React from 'react'
import NewsContent from '../../component/news-component/NewsContent'
import NewsChangeLanguage from '../../component/news-component/NewsChangeLanguage'
const News = () => {
  return (
    <div>
        <NewsChangeLanguage/>
        <NewsContent/>
    </div>
  )
}

export default News