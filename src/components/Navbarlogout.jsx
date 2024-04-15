import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbarlogout = () => {
  return (
    <header className='header'>
        <NavLink to="/dashboard" className="w-10 h-10 rounded-lg bg-black items-center justify-center flex font-bold shadow-md">
        <p className="white-gradient_text">GW</p>
      </NavLink>
        
        <nav className='flex tesxt-lg gap-7 font-medium'>
          <NavLink to="/Home" className={({isActive})=>isActive ? 'text-blue-500': 'text-black'}>Logout</NavLink>
        </nav>
    </header>
  )
}

export default Navbarlogout