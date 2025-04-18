import React from 'react'
import Button from '../../component/button'
import { useTranslation } from 'react-i18next'

const Courses = () => {
    const {t} = useTranslation('courses')
  
  return (
    <div className='text-3xl font-bold text-center'>
        <h1>{t("courses")}</h1>
        <Button/>
    </div>
  )
}

export default Courses