import React from 'react'
import { useTranslation } from 'react-i18next'

const Button = () => {
    const {t} = useTranslation('button')
  
  return (
    <div>
      {t("button")}
    </div>
  )
}

export default Button