import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const {i18n :{changeLanguage , language , dir} } = useTranslation()


  const handleChange = e =>{
    console.log(e.target.value )
    changeLanguage(e.target.value )
  }
  return (
    <div className='h-20 flex p-4 gap-5' dir={dir()}>
        <select onChange={handleChange} value={language} className='w-20 px-4'>
          <option value="en">en</option>
          <option value="fa">fa</option>
        </select>
        <NavLink to='/' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>Home</NavLink>
        <NavLink to='/courses' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>courses</NavLink>
        <NavLink to='/news' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>news</NavLink>
    </div>
  )
}

export default Header