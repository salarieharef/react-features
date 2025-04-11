import React from 'react'
import {  NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-20 flex p-4'>
        <NavLink to='/' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>auth with localstorage</NavLink>
        <NavLink to='/pannel1' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>localstorage & axios</NavLink>
        <NavLink to='/pannel2' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>localstorage & interceptor</NavLink>
        <NavLink to='/LoginCookie' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>auth with cookie</NavLink>
        <NavLink to='/pannel3' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>cookie & axios</NavLink>
        <NavLink to='/pannel4' className={({isActive})=>{return isActive ? 'bg-[aqua] p-4 rounded-xl' : 'p-4 rounded-xl'}}>cookie & interceptor</NavLink>

    </div>
  )
}

export default Header