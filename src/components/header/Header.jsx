import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full bg-transparent border-b-[1px] border-b-gray-200 z-50 text-white'>
      <div className='container'>
        <nav className='flex items-center justify-between h-[80px]'>
          <Link>
            <h2 className='uppercase font-bold'>Cars Shop</h2>
          </Link>

          <ul className='flex items-center gap-[30px] text-[15px] font-medium'>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/about'}>About</NavLink></li>
            <li><NavLink to={'/contact'}>Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default React.memo(Header)