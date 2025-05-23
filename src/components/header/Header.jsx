import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {

  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 w-full border-b-[1px] border-b-gray-400 z-50 duration-200 ${scrolled ? 'bg-[#ffffff73] backdrop-blur-[8px] text-black' : 'bg-transparent text-white'}`}>
      <div className='container'>
        <nav className='flex items-center justify-between h-[75px]'>
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