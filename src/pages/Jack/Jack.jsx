import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { getFullName } from '../../data/list'
import i18n from '../../utils/i18';

const Jack = () => {
    const { t } = useTranslation("list")

    
    return (
        <div>
            {fullName}
        </div>
    )
}

export default Jack