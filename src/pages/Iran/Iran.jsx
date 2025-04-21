import React from 'react'
import { list } from '../../data/list'
import { useTranslation } from 'react-i18next'

const Iran = () => {
    const {t} = useTranslation("list")

    const newList = list.map(item => {
        
        return {
            id: item.id,
            desc: t(`${item.id}.desc`)
        }
    })



  return (
    <div>
        {newList.map(item =>{
            return(
                <div key={item.id} >{item.desc}</div>
            )
        })}
    </div>
  )
}

export default Iran