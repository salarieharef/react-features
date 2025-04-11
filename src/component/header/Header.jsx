import React from 'react'
import {  NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-20 flex p-4'>
        <NavLink to='/' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>Home</NavLink>

    </div>
  )
}

export default Header